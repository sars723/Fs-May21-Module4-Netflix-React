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
       <div className="container-fluid mx-3 ">
         <NetflixNavbar />
         <SearchArea />

         <NetflixNavbar
           searchCallback={(childSearchquery) =>
             this.setState({ query: childSearchquery })
           }
         />

         {!this.state.query ? (
           <CustomCarousel searchQuery="Kung Fu Panda" title="Kung Fu Panda" />
         ) : (
           <CustomCarousel
             searchQuery={this.state.query}
             title=" Searched Movies"
           />
         )}
         <CustomCarousel
           searchQuery="Luca"
           title="Luca"
         />
         <CustomCarousel searchQuery="Shrek" title="Shrek" />
         <CustomCarousel searchQuery="Toy Story" title="Toy Story" />

         <Footer />
       </div>
     );
  }
 
}

export default App
