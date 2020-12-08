import React, { Component } from 'react'
import './index.css'

class TouchableOpacity extends Component {
    state = {
        touched: false
      }
      
      toggleTouched = () => {
        this.setState( prevState => ({
          touched: !prevState.touched
        }));
      }
      
      handleMouseUp = () => {
        // Handle smooth animation when clicking without holding
        setTimeout( () => {
          this.setState({ touched: false });
        }, 150);
      }
      
      render () {
        const { touched } = this.state;
        const className = touched ? 'btn touched' : 'btn';
        return (
            <button 
              className={className}
              onMouseDown={this.toggleTouched}
              onMouseUp={this.handleMouseUp}
              {...this.props}
            >
              {this.props.children}
            </button>
        )
      }
}

export default TouchableOpacity;