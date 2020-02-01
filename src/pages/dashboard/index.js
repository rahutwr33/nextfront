import dynamic from 'next/dynamic'
import React, { Component } from 'react'
const DynamicComponent = dynamic(() => import('./dashboard'))
 class Dashboard extends Component {
 getInitialProps = async () => {
    await new Promise(resolve => {
      setTimeout(resolve, 3000)
    })
    return {}
  }
    render() {
        return (
           <DynamicComponent/>
        )
    }
}
export default Dashboard
