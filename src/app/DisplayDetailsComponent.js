// Import react dependencies
import React from 'react';

class DisplayDetails extends React.Component{

    render() {
        return(
          <span className="detailsdata" key={this.props.index}>{this.props.value} : {this.props.item}</span>
        );
    }
}

export default DisplayDetails;
