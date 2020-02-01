import React from 'react'
import App, { Container } from 'next/app'
// import Head from 'next/head'
import Head from '../components/head'

import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import reduxStore from '../store'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PageTransition } from 'next-page-transitions'

class _App extends App {
 
  static async getInitialProps({ Component, ctx }) {
    const res = await fetch('http://localhost:5050/users/metas')
    const json = await res.json();
      let pageProps = {};
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      return { pageProps, metas : json.data};
  }
    
    render () {
      const {
        Component,
        pageProps,
      } = this.props
      return (
        <Container>
          <Head title={this.props.metas.title} description={this.props.description} />
            <CssBaseline />
            <Provider store={reduxStore}>
                <PageTransition loadingDelay={500}  timeout={300} classNames="page-transition">
                    <Component
                      {...pageProps}
                    />
                </PageTransition>
                <style jsx global>{`
                .page-transition-enter {
                  opacity: 0;
                }
                .page-transition-enter-active {
                  opacity: 1;
                  transition: opacity 300ms;
                }
                .page-transition-exit {
                  opacity: 1;
                }
                .page-transition-exit-active {
                  opacity: 0;
                  transition: opacity 300ms;
                }
              `}</style>
                 <ToastContainer  autoClose={3000} position={toast.POSITION.TOP_RIGHT}/>
                
            </Provider>
        </Container>
      )
    }
  }
  export default _App



