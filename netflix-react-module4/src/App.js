import "./App.css"
import NetflixNavbar from "./components/NetflixNavbar"
import SearchArea from "./components/SearchArea"
import CustomCarousel from "./components/CustomCarousel"
import Footer from "./components/Footer"
import React,{Component} from "react"

class App extends Component{
  state={
    query:""
  }
  render(){
     return (
    <>
      <NetflixNavbar />
      <SearchArea />
      {/* <CustomCarousel searchQuery="Lord of the rings" /> */}

      {/*  <CustomCarousel /> */}
      <>
      <NetflixNavbar  searchCallback={(childSearchquery)=>this.setState({query:childSearchquery})} />
{console.log(this.state.query)}
     {!this.state.query?<CustomCarousel searchQuery="harry potter" title="harry potter" />:<CustomCarousel searchQuery={this.state.query} title=" Searched Movies" />} 
     <CustomCarousel searchQuery="Lord of the rings" title="lord of the rings" />
     <CustomCarousel searchQuery="star wars" title="star wars" />
    
    </>
      <Footer />
    </>
  )
  }
 
}

export default App
