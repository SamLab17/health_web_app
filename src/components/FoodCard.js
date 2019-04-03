import React, {Component} from "react";
import { Card, Image } from 'semantic-ui-react'

class FoodCard extends Component{
   render(){
       return (
           <Card>
               <Image floated={"right"} src={this.props.ImageSource} size={"small"}/>
               <Card.Content>
                   <Card.Header>{this.props.Title}</Card.Header>
                   <Card.Meta>{this.props.Subtitle}</Card.Meta>
                   <Card.Description>{this.props.Description}</Card.Description>
               </Card.Content>
               <Card.Content extra>
                   <a> Remove Item </a>
               </Card.Content>
           </Card>

       )
   }

}

export default FoodCard;