import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
// import SubTotal from './ShoppingCart/SubTotal/SubTotal';
// import PickupSaving from './ShoppingCart/PickupSavings/PickupSaving';
// import TaxesFees from './ShoppingCart/TaxesFees/TaxesFees';
// import EstimatedTotal from './ShoppingCart/EstimatedTotal/EstimatedTotal';
// import ItemDetails from './ShoppingCart/ItemDetails/ItemDetails';
import ShoppingList from './ShoppingCart/ShoppingList';

class Projects extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab: 0,
    };
  }

  onPageMove = () => {

  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              React project description.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              React project description.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        // <div><h1>This is Javascript</h1></div>
        <ShoppingList />
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is Java</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is C#</h1></div>
      )
    } else if(this.state.activeTab === 4) {
      return (
        <div><h1>This is Oracle</h1></div>
      )
    } else if(this.state.activeTab === 5) {
      return (
        <div><h1>This is MS-SQL</h1></div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>
            ShoppingList
          </Tab>
          <Tab>Java</Tab>
          <Tab>C#</Tab>
          <Tab>Oracle</Tab>
          <Tab>MS-SQL</Tab>
        </Tabs>

        <Grid className="project-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;