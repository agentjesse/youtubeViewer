//import libraries
import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//importing personal code? use relative path with necessary ./ indicating starting directory
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//constants
const API_KEY = 'AIzaSyD7PZ1yhWl3KdHG57spUvC2IkP6Z52iEAo';

//create a class-based (originally this was functional. but updated. hence the es5 example) react component that produces HTML. It just sends out jsx when called.
//---es5 syntax
  // const App = function(){
  //   return <div>poop</div>; //this jsx will turn into a React.createElement call which depends on the import of React at the top.
  // };
//---es6 arrow function syntax
class App extends Component {
  //constructor function
  constructor(props) {
    //make a call to super
    super(props);
    //set the state
    this.state = {
      videos: [],
      selectedVideo: null,//this will be changed when a video is clicked, see below.
    };
    //run a function named videoSearch in this class component
    this.videoSearch('cats');
  }
  
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (data)=> {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }  

  render() {

    return (
      <div>
        {/* here 700 is ms that lodash debounce method waits before executing the callback function. used to throttle the many calls fired by changing input of the searchbar. time starts at most recent call.*/}
        <SearchBar 
          onSearchTermChange={ _.debounce((term)=>{this.videoSearch(term)}, 700) }
        />
        <VideoDetail 
          title='mainViewer'
          videoElement={this.state.selectedVideo}
        />

        {/*this callback function passes to video_list then to _item where it receives an argument and calls back to here with it. */}
        <VideoList
          onVideoSelect={ (selectedVideo)=>{
              this.setState({selectedVideo:selectedVideo});
            } }
          videos={this.state.videos}
        />

      </div>
    );
  }

}


ReactDOM.render(<App />, document.getElementById('root')); 