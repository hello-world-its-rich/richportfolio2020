import React from 'react'
import Layout from '../components/Layout'
import '../components/snipcart.css'

const ShopPage = () => (
  <Layout>
    <div>
      <h1>Hello World Shop</h1>
      <p>Welcome to my future shop</p>
    </div>
    <div id="snipcart" data-api-key="NmEyYTg0OWQtNDdjOC00OTkyLWFhYzYtMDJmZTZiNDJjNWI5NjM3MTIyMjgwMTY0MjEyOTkx" hidden></div>
<script src="https://cdn.snipcart.com/themes/v3.0.8/default/snipcart.js"></script>

  </Layout>
)

export default ShopPage
