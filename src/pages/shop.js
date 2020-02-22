import React from 'react'
import Layout from '../components/Layout'
import drone from '../img/drone.jpg'


const ShopPage = () => (
  <Layout>
    <div>
      <h1>Hello World Shop</h1>
      <p>Welcome to my future shop</p>
    
                <button class="snipcart-add-item"
                data-item-id="drone"
                data-item-price="1.99"
                data-item-url="/shop"
                data-item-description="One of my best drone photos"
                data-item-image={drone}
                data-item-name="Drone"
                data-item-custom1-name="Frame color"
                data-item-custom1-options="Black|Brown|Gold">
                Add to Cart
                </button>


    </div>
    <div id="snipcart" data-api-key="NmEyYTg0OWQtNDdjOC00OTkyLWFhYzYtMDJmZTZiNDJjNWI5NjM3MTIyMjgwMTY0MjEyOTkx" hidden></div>
<script src="https://cdn.snipcart.com/themes/v3.0.8/default/snipcart.js"></script>

  </Layout>
)

export default ShopPage
