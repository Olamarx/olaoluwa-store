import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import Message from '../components/Message';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  
  const location = useLocation()
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  const checkoutHandler = () => {
    navigate(`/login?redirect=${encodeURIComponent('/shipping')}`)
  }
  return (
    <Row>
      <Col md={8}>
      <h1>Products Cart</h1>
      { cartItems.length === 0 ?
        (<Message> Your Cart is empty <Link to='/'>Go Back</Link> </Message>) :
        (<ListGroup variant='flush'>
        {cartItems.map((each) => (
          <ListGroup.Item key={each.product}>
            <Row>
              <Col md={2}>
                <Image src={each.image} alt={each.name} fluid rounded />
             </Col>
             <Col md={3}>
              <Link to={`/product/${each.product}`}>{each.name}</Link>
             </Col>
             <Col md={2}>
              ${each.price}
             </Col>
             <Col md={2}>
             <Form.Control as="select" value={each.qty}
              onChange={(e) => dispatch(addToCart(each.product, Number(e.target.value)))}>
             {[...Array(each.countInStock).keys()].map((x) => (
               <option key={x + 1} value={x + 1}>
               {x + 1}
               </option>
             ))}
            </Form.Control>
             </Col>
             <Col md={2}>
                <Button type='button' variant='light' onClick={() => removeFromCartHandler(each.product)}>
                  <i className='fas fa-trash'></i>
                </Button>
             </Col>
            </Row>
          </ListGroup.Item>
        ))}
        </ListGroup>)
      }
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                SUBTOTAL ({ cartItems.reduce((acc, item) => acc + item.qty, 0) }) ITEMS
              </h2>
              ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
            </ListGroup.Item>
          </ListGroup>
          <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkoutHandler}>
          Checkout
          </Button>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen;
