import React from 'react';
//es6 option below allows 'Component' instead of 'React.Component'. same as const Component = React.Component
  //import React, { Component } from 'react';

//create an es6 class based react component. It's just a plain js  object until extended.
class SearchBar extends React.Component {
  //State is an object used to record and react to user events, existing on all class-based components (instances). When a component's state changes, it re-renders. First, initialize the state object...

  //the constructor function pperforms setup inside of a class
  constructor(props) {
    //call the parent method (from React.Component) with super
    super(props);
    //Initialization: assign the state object to this.state  Here in the constructor function is the ONLY time to use this.state to MANIPULATE state.
    this.state = { term: '' };
  }

  //define render method. all class-based react components must have this. this is also the syntax for defining methods on a class.
  render() {
    //commented out to continue with course
    //return <input onChange={this.onInputChange} />;

    //outside of the constructor function MANIPULATE state using this.setState
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }
  //define event handler function. Above, put it into the brackets of the onChange jsx attribute of the element. Or write it within the curly brackets if it's short in es6 syntax.
  // //commented out to continue with course.
  // onInputChange(event) {
  //   //this will log the value of the input field to the console, using the properties of the triggering event.
  //     console.log(event.target.value);
  //   //react reuses events, so logging the event itself will show many null properties. if you want to see the event try to clone it first, or use the debugger statement and console log the event manually, or persist:
  //   //will not show event correctly:
  //     //console.log(event);
  //   //clone to show event:
  //     console.log(Object.assign({},event));
  //   //...or event.persist() ..use only when persist is really needed:
  //     // event.persist();
  //     // console.log(event);
  // }

}

export default SearchBar;
