import app from "next/app"
import Layout from '../components/Layout/Layout.js'
import 'semantic-ui-css/semantic.min.css'


class myApp extends app {

    render(){

        const { Component }=this.props

        return(
            <Layout>
                < Component />
            </Layout>
        )

    }
}

export default myApp