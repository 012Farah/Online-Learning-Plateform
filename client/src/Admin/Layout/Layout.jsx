import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
         <Container fluid >
      <Row>
        <Col md="3 "  className = "bg-secondary">
        <aside className="sidebar">
            <h2>Sidebar</h2>
            <ul>
                <li><Link to="/admin">Dashboard</Link></li>
                <li><Link to="/admin/setting" >Settings</Link></li>
                <li><Link to ="/admin/profile" >Profile</Link></li>
                <li><Link to ="/admin/logout">Logout</Link></li>
            </ul>
        </aside>

        </Col>
        <Col md ="9" >
        <Outlet/> 
        </Col>
      </Row>
    
       
       
      
    </Container>
       
    </div>
  )
}
