import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import './all.sass'
import './snipcart.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Rich Andrews" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
