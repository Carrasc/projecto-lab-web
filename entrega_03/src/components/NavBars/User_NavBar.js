import React, {useState} from 'react';
import globalStyles from  "../../styles/globalStyles.js";
import Grid from '@material-ui/core/Grid';
import img from '../../images/1.jpg'
import '../../styles/css/UserNavBar.css';

import { selectActiveWord } from '../../store/word/reducer';
import { connect } from 'react-redux';

import {Auth} from 'aws-amplify';

function signOut() {
	Auth.signOut()
	  .then(
          data => console.log(data),
          window.location.reload()
        )
	  .catch(err => console.log(err))
}

const UserNavBar = ({word}) => {

    const [username, setUsername] = useState('');
	
	Auth.currentAuthenticatedUser()
		.then(user => { setUsername(user.attributes.name); })
		.catch(err => console.log(err));

    return (
        <div className='user_nav_mainContainer'>
            <Grid container= {true} className='colorStyle' alignItems = 'center' justify = 'center'>
                <Grid  item  xs = {12} md={3} >
                    <div className='logoNavBar'>
                        <h1  style = {globalStyles.wMainTitleFont} >MEDU</h1>
                        <p style= {globalStyles.wmFont}>DASHBOARD</p>
                    </div>
                </Grid>
                <Grid item  xs = {12} md={6} >
                    <div  className='nameNavBar'>
                        <h1  style = {globalStyles.wSecondaryTitleFont} >{username}</h1>
                        <button style= {globalStyles.solidButtonStyle} onClick={signOut}> Cerrar sesión</button>
                    </div>
                </Grid>
                <Grid  item  xs = {12} md={3} >
                    <div className='photoNavBar'>
                        <img alt='avatar' style={{width:'100px', height:'100px', borderRadius: '50%'}}src ={img}/>
                    </div>
                </Grid>
                
            </Grid>
                    
               
        </div>

    );

}


const mapStateToProps = state =>{
    return {
        word:selectActiveWord(state)
    }
}

export default connect(mapStateToProps)(UserNavBar);


