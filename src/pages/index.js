import React from 'react'
import Layout from '../components/Layout';
import './../style/global.css'
import { withStyles } from '@material-ui/core/styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import RecipeReviewCard from '../components/card';

 class Home extends React.Component{
  constructor(props, context) {
		super(props, context);
		this.state = {
		 metas:{}
		};
  }
  
  newOptions() {
		this.setState({
			nav: true // Show next and prev buttons
		});
	}
   render(){
     return(
        <div>
            <Layout title="Home" description="A next js starter pack with seo and react material-ui" >
             
              <div className="hero">
                <Carousel>
                  <div>
                      <img src="http://react-responsive-carousel.js.org/assets/4.jpeg" />
                      <p className="legend">Legend 1</p>
                  </div>
                  <div>
                      <img src="http://react-responsive-carousel.js.org/assets/4.jpeg" />
                      {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                      <img src="http://react-responsive-carousel.js.org/assets/4.jpeg" />
                      {/* <p className="legend">Legend 3</p> */}
                  </div>
              </Carousel>
              <div style={{margin:10,flexDirection:'row'}}>
                <RecipeReviewCard image="https://material-ui.com/static/images/cards/paella.jpg"/>
                <RecipeReviewCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU-1KVqGBBPiFsPUDYeNa97R0gjpPBm5LzvXj-Ka7l_2Y3IY4d"/>
              </div>

              </div>

              <style jsx global>{`
              
              `}</style>
            </Layout>
          </div>
     )
   }
 }
  

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 14
  }
})

export default withStyles(styles)(Home);