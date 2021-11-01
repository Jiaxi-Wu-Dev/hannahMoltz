import React from 'react'
import './Window.css';


class Window extends React.Component {
    render() { 
        return <div className="square">
        <div className="content" >
          {this.props.number} 
        </div>
      </div>;
    }
}
 
export default Window;