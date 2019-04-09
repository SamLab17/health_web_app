import React, {Component} from "react";
import {Checkbox, Grid, Form, Input, Button, Message} from 'semantic-ui-react';
import axios from 'axios';

class Preferences extends Component {

    state = {
        personal_info: {
            firstName: 'First Name',
            lastName: 'Last Name',
            id: '0',
            email: 'test@test.com',
        },
        dietary_info: {
            beef: false,
            pork: false,
            fish: false,
            eggs: false,
            milk: false,
            soy: false,
            gluten: false,
            nuts: false
        },
        trySubmitDietInfo: false,
        didSubmitDietInfo: false,
        trySubmitPersonalInfo: false,
        didSubmitPersonalInfo: false
    };

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response);
                let first = response.data[0];
                this.setState({firstName: first.name.split(" ")[0], lastName: first.name.split(" ")[1], id: first.id, email: first.email});
            })
    }

    submitDietaryPreferences = () =>{
        this.setState({didSubmitDietInfo: true});
        this.setState({trySubmitDietInfo: true})
    };

    submitPersonalInformation = () => {
        //Try Submitting
        //If Successful
        this.setState({didSubmitPersonalInfo: true});
        
        this.setState({trySubmitPersonalInfo: true})
    };

    useDietaryPreset = (e, data) => {
            if (data.name === 'vegan') {
                this.setState({dietary_info: {beef: true, pork: true, fish: true, eggs: true,
                        milk: true, soy: false, gluten: false, nuts: false}});
            } else if (data.name === 'vegetarian') {
                this.setState({dietary_info: {beef: true, pork: true, fish: true, eggs: false,
                        milk: false, soy: false, gluten: false, nuts: false}});
            }
    };
    handleCheckBox = (e, data) => {
        this.setState({dietary_info:{[data.name]:data.checked}});
    }

    clearAll = () => {
        this.setState({dietary_info:{beef: false, pork: false, eggs: false, fish: false, milk:
                    false, soy: false, nuts: false, gluten: false, vegan: false, vegetarian: false}});
    };

    render() {
        return (
            <div>
                <h1>Preferences</h1>

                <Grid columns={2} divided>
                    <Grid.Column>
                        <h3>Personal Information</h3>
                        <Form>
                            <Form.Group unstackable width={'equal'}>
                                <Form.Field required>
                                    <label>First name</label>
                                    <Input placeholder={this.state.firstName}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Last name</label>
                                    <Input placeholder={this.state.lastName}/>
                                </Form.Field>
                            </Form.Group>
                            <Form.Field>
                                <label>UT EID</label>
                                <Input readOnly placeholder={this.state.id}/>
                            </Form.Field>
                            <Form.Field>
                                <label>E-mail</label>
                                <Input placeholder={this.state.email}/>
                            </Form.Field>
                            <Button color={'orange'} type={"submit"} disabled> Apply Changes</Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Dietary Information</h3>
                        <h4>Dietary Presets</h4>
                        <Form>
                            <Button basic color={'orange'} onClick={this.useDietaryPreset} name={"vegan"}>Vegan</Button>
                            <Button basic color={'orange'} onClick={this.useDietaryPreset} name={"vegetarian"}>Vegetarian</Button>
                        </Form>
                        <h4>The following checked items will never appear in your recommendations. </h4>
                        <Form>
                            <Form.Field control={Checkbox} label={"Beef"} checked={this.state.dietary_info.beef} onChange={this.handleCheckBox}/>
                            <Form.Field control={Checkbox} label={"Pork"} checked={this.state.dietary_info.pork}onChange={this.handleCheckBox} />
                            <Form.Field control={Checkbox} label={"Fish/Shellfish"} checked={this.state.dietary_info.fish}onChange={this.handleCheckBox} />
                            <Form.Field control={Checkbox} label={"Eggs"} checked={this.state.dietary_info.eggs}onChange={this.handleCheckBox} />
                            <Form.Field control={Checkbox} label={"Milk"} checked={this.state.dietary_info.milk}onChange={this.handleCheckBox} />
                            <Form.Field control={Checkbox} label={"Soy"} checked={this.state.dietary_info.soy}onChange={this.handleCheckBox} />
                            <Form.Field control={Checkbox} label={"Gluten"} checked={this.state.dietary_info.gluten}onChange={this.handleCheckBox} />
                            <Form.Field control={Checkbox} label={"Peanuts/Tree Nuts"} checked={this.state.dietary_info.nuts}onChange={this.handleCheckBox} />
                            <Button color={'orange'} type={"submit"} onClick={this.submitDietaryPreferences}>Apply Changes</Button>
                            <Button onClick={this.clearAll}>Clear All</Button>
                            
                            {this.state.trySubmitDietInfo ? (
                                this.state.didSubmitDietInfo ? (
                                <Message positive>
                                    <Message.Header> Successfully updated dietary prefrences </Message.Header>
                                    <p>Your dietary preferences have been successfuly updated and stored.</p>
                                </Message>
                            ) : (
                                <Message negative>
                                    <Message.Header> Could not update dietary prefrences </Message.Header>
                                    <p>An error occurred and your dietary preferences could not be updated. Try again later.</p>
                                </Message>
                            )) : null}

                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
};

export default Preferences;