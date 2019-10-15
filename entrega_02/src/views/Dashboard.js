import React from 'react';
import global from "../styles/global.js";
import User_NavBar from '../components/NavBars/User_NavBar';
import NavBar from '../components/NavBars/NavBar';
import Dashboard_NavBar from '../components/NavBars/Dashboard_NavBar.js';
import Carousel from '../components/Carousels/Carousel';
import { Image } from "semantic-ui-react";
import Grid from '@material-ui/core/Grid';
import Clases from '../components/Classes/Classes';
import Footer from '../components/Footer';
import Sticky from 'react-sticky-el';
import '../styles/sticky.css';



const STYLE = {
	clase : {
		padding: '0 1em 2em 1em',
		height:'25vw',
		width:'100%'
	},
  }
  
const imagesCarousel = [
	require("../images/2.jpg"),
	require("../images/3.jpg"),
	require("../images/4.jpg"),
	//"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
	//"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
	//"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  
  ];

  function importAll(r) {
	let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  
  var data = [
	['Luis Fernando Carrasco','Urologí', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Mauricio Peon','Ginecología', images['2.jpg']],
	['Alexandro Marcelo','Neurología', images['5.jpg']],
	['Romeo Varela','Cardiología', images['6.jpg']],
  
  ]


function Dashboard(props) {
  return (   
    <div >
		<User_NavBar />
		
		
  			<Sticky style = {{zIndex: 10001}}><Dashboard_NavBar/></Sticky>
	  	
		<div style= {global.mainContainer}>
			<h1 style={global.bMainTitleFont}>Medu Lectures</h1>
			<h3 style={global.gSecondaryTitleFont}>Continuar Lección </h3>
		</div>
		<Carousel component = {
          imagesCarousel.map((img,index) =>{
            return (
              <Image
              draggable={false}
              style={{ width: "90%", height: "100%" }}
			  src={img} 
              />
              
              )})
            
          } /> 

		<div style= {global.mainContainer}>
			<h1 style={global.bMainTitleFont}>Especialidades</h1>
		</div>

		<div style={global.mainContainer}>
          <div style={{textAlign:"center"}}>
            <Grid container = {true} >
            {data.map((data,index) =>{
                return(
                  <Grid item xs = {12} sm={6} style = {STYLE.clase} key= {index} >
                    <Clases  row = {data} size={STYLE.clase.height}></Clases>
                  </Grid>
                    
                )
            })}
            </Grid>   
          </div>
        </div>
		<Footer/>
  
      
    </div>
  );
}

export default Dashboard;
