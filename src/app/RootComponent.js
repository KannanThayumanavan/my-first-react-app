// Import react dependencies
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import MediaQuery from 'react-responsive';
import $  from 'jquery';
// import local json contains data to render
import myData from './json/data.json';

//CSS requires
import './css/index.css';

// Import Child Components
import MenuItem from './MenuItemComponent';
import DisplayDetails from './DisplayDetailsComponent';

// Create root component
class RootComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        data: myData,
        displayData: [],
        showResults: false,
        showMenu: true,
        heading: null
      };
    }
    // Update data state with JSON data
    componentDidMount() {
      // Call getData() for initial data loading
      this.getData(0);
    }
    // Render method to return mockup
    render() {
        var jsondata1 = this.state.data;
        var menuItem = Object.keys(jsondata1);
        //  MenuItem child component
        menuItem = menuItem.map(function (item, index){
          return ( <MenuItem onMenuClicked={() => this.onMenuClicked(index)} key={index} item={item}/> );
        }.bind(this));

        var finalData = this.state.displayData;
        var finalData1 = Object.entries(finalData);
        // Display detailschild component
        finalData1 = finalData1.map(([index,value])=>{
          return( <DisplayDetails value={index} key={index} item={value} /> );
        });
        // Return template for DOM rendering
        return (
          <div>
            <div className="page-heading">Dinosour Application</div>
            <MediaQuery query='only screen and (min-device-width: 1224px)'>
              <ul className="menuitem">{menuItem}</ul>
              <div className="details"><h3 className="heading">{this.state.heading}</h3>{finalData1}</div>
            </MediaQuery>
            <MediaQuery query='only screen and (min-device-width: 768px) and (max-device-width: 1244px)'>
              <ul className="menuitem">{menuItem}</ul>
              <div className="details"><h3 className="heading">{this.state.heading}</h3>{finalData1}</div>
            </MediaQuery>
            <MediaQuery query='only screen and (min-device-width: 320px) and (max-device-width: 736px)'>
              { this.state.showMenu ? <ul className="mobile-menuitem">{menuItem}</ul> : null }
              { this.state.showResults ? <div className="mobile-details"><span onClick={() => this.backHome()} className="backbutton">Back</span><h3 className="heading">{this.state.heading}</h3>{finalData1}</div> : null }
            </MediaQuery>
          </div>
        );
    }

    // Custom functions
    // Function that trigger on menu click
    onMenuClicked(i) {
      this.getData(i);
      this.setState({
        showResults: true,
        showMenu: false
      });
    }
    // Function that trigger on clicking back button (only on mobile layout)
    backHome() {
      this.setState({
        showResults: false,
        showMenu: true
      });
    }
    // Get data from JSON based on the index passed
    getData (getrecords) {
      var jsondata1 = this.state.data;
      var headingContent = Object.keys(jsondata1);
      // Get parent Object to display header above the details
      var headingContent1 = headingContent.map(function (item, index){
        return [item];
      }.bind(this));
      // Return an array to update state
      var array = $.map(jsondata1, function(value, index) {
          return [value];
      });
      var displayData = array[getrecords];
      var heading = headingContent1[getrecords];
      this.setState({
          displayData: displayData,
          heading: heading
      });
    }
}

export default RootComponent;
