import React from 'react';
import global from "../styles/global.js";
import UserNavBar from '../components/NavBars/User_NavBar';
import DashboardNavBar from '../components/NavBars/Dashboard_NavBar.js';
import Carousel from '../components/Carousels/Carousel';
//import { Image } from "semantic-ui-react";
import Grid from '@material-ui/core/Grid';
import Clases from '../components/Classes/Classes';
import Footer from '../components/Footer';
import Sticky from 'react-sticky-el';
import ContinueLesson from '../components/Classes/ContinueLesson';
import DashboardTendencie from '../components/DashboardTendencie';
//import CDashboardNavBar from '../components/NavBars/CDashboardNavBar';
//import Word from '../components/word/word';
//import Form from '../components/form/form';

import '../styles/css/Class.css';

import database from '../api/api';


 
  var lessonData = database.lessonData;

  var tendencieData = database.tendencieData;

  var classes = database.classes;


function Dashboard(props) {

  return (   
    <div >
		<UserNavBar/>		
  		<Sticky style = {{zIndex: 10001}}><DashboardNavBar/></Sticky>
	  	
		<div style= {global.mainContainer}>
			<h1 style={global.bMainTitleFont}>Medu Lectures</h1>
			<h3 style={global.gSecondaryTitleFont}>Continuar Lección </h3>
		</div>

   
		<Carousel component = {
         lessonData.map((lessonData,index) =>{
            return (
              <ContinueLesson lessonData = {lessonData}/>
              )})
            
          } /> 


		{/*Classes*/}
		<div  style= {{textAlign:"center", marginTop:'3em'}}>
			<h3 style = {global.bSecondaryTitleFont}>ESPECIALIDADES</h3>
		</div>
		<div style={global.mainContainer}>
			<div style={{textAlign:"center"}}>
				<Grid container = {true} >
				{classes.map((classes,index) =>{
					return(
					<Grid item sm= {12} md={6} className = 'clase' key= {index} >
						<Clases  row = {classes} ></Clases>
					</Grid>
					
					)
				})}
			</Grid>   
			</div>
		</div>

		<DashboardTendencie tendencieData = {tendencieData}/>
		<Footer/>
  
      
    </div>
  );
}

export default Dashboard;
