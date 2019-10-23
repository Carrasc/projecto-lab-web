import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import styles from "./StyleCarousel.css"

class ReactSlickDemo extends React.Component {
  render() {
    const imagesCarousel = [
      require("../../images/2.jpg"),
      require("../../images/3.jpg"),
      require("../../images/4.jpg"),
      //"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      //"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      //"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      
    ];
    var settings = {
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      //variableWidth: true,
      //variableHeight: true,
      centerPadding: '60px',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    }
  
    const designImg = {
      margin: '0 auto',
      paddingTop: "5em"
    };
    const design = {
      width:"100%",
      //paddingTop: "5em"
    };

    return (
      <div style={design}>
        <Slider {...settings}>
          <div >
            <img alt = ''  src="http://placekitten.com/g/400/200" />
          </div>
          <div >
            <img  alt = '' src="http://placekitten.com/g/400/200" />
          </div>
          <div >
            <img  alt = '' src="http://placekitten.com/g/400/200" />
          </div>
          <div >
            <img  alt = '' src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ReactSlickDemo;




/*

import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true
    };

    const containere = {
      padding: '40px',
      background: '#419be0'
    }
    
    

    return (
      <div style={containere}>
        <Slider {...settings}>
          <div>
            <img style={{margin:'auto'}} src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img style={{margin:'auto'}}src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img style={{margin:'auto'}} src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img style={{margin:'auto'}} src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ReactSlickDemo;


import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

let slides = [
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/801/?random" alt="1" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/802/?random" alt="2" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/600/803/?random" alt="3" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/500/?random" alt="4" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/804/?random" alt="5" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/500/800/?random" alt="6" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/600/?random" alt="7" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/805/800/?random" alt="8" />
  }
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
        <div style={{height:'800px'}}>
      <div style={{ width: "80%", height: "600px", margin: "0 auto" }}>
        <Carousel
          slides={slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div>
            <label>Go to slide: </label>
            <input name="goToSlide" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Offset Radius: </label>
            <input name="offsetRadius" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Show navigation: </label>
            <input
              type="checkbox"
              checked={this.state.showNavigation}
              name="showNavigation"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                this.setState({ showNavigation: e.target.checked });
              }}
            />
          </div>
          <div>
            <button
              onClick={(e: React.MouseEvent) => {
                this.setState({ config: config.gentle });
              }}
              disabled={this.state.config === config.gentle}
            >
              Gentle Transition
            </button>
          </div>
          <div>
            <button
              onClick={(e: React.MouseEvent) => {
                this.setState({ config: config.slow });
              }}
              disabled={this.state.config === config.slow}
            >
              Slow Transition
            </button>
          </div>
          <div>
            <button
              onClick={(e: React.MouseEvent) => {
                this.setState({ config: config.wobbly });
              }}
              disabled={this.state.config === config.wobbly}
            >
              Wobbly Transition.
            </button>
          </div>
          <div>
            <button
              onClick={(e: React.MouseEvent) => {
                this.setState({ config: config.stiff });
              }}
              disabled={this.state.config === config.stiff}
            >
              Stiff Transition
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

var settings = {
      centerMode: true,

        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        variableHeight: true,
  centerPadding: '60px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
}
  
    const design = {
      margin: '0 auto',
      paddingTop: "5em"
    };
    const designImg = {
      width:"100%",
      //paddingTop: "5em"
    };

    return (
      <div style={{ padding:"5em", width:"100%"}} >
        <Slider {...settings}>
          <div style={designImg}>
            <img alt = ''  src="http://placekitten.com/g/400/200" style={design}/>
          </div>
          <div style={designImg} >
            <img  alt = '' src="http://placekitten.com/g/400/200" style={design}/>
          </div>
          <div style={designImg}>
            <img  alt = '' src="http://placekitten.com/g/400/200" style={design}/>
          </div>
          <div style={designImg}>
            <img  alt = '' src="http://placekitten.com/g/400/200" style={design}/>
          </div>
        </Slider>
      </div>
    );
  }
}

*/
