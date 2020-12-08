import React from "react"
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/Home"
import './App.css';
import SignUp from "./components/pages/signup/SignUp";
import Products from "./components/pages/products/Products"
import Vegetables from  "./components/pages/products/categories/Vegetables"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      isLoading: true
    }
  }

  componentDidMount(products, vegetables) {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }


  render() {
    return (
      <div>
        <Router>
          <Navbar />
        </Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/products" component={Products} isLoading={this.state.isLoading }/>
          <Route path="/vegetables" component={Vegetables} isLoading={this.state.isLoading }/>
        </Switch>
      </div>
    );
    
  }
}
export default App;
