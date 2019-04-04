import React, {Component} from "react";
import { Card, Image } from 'semantic-ui-react'

class FoodCard extends Component{

    handleCardClick = (clickEvent) => {

    };

    render(){
       return (
           <Card onClick={this.handleCardClick}>
               <Image centered src={this.props.ImageSource} size={"tiny"}/>
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