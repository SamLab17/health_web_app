import React from "react";
import {Checkbox, Grid, Form, Input} from 'semantic-ui-react';

const Preferences = () => {
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
                        <Input placeholder={'First name'}/>
                    </Form.Field>
                    <Form.Field >
                        <label>Last name</label>
                        <Input placeholder={'Last name'}/>
                    </Form.Field>
                </Form.Group>
                <Form.Field >
                    <label>UT EID</label>
                    <Input readOnly placeholder={'EID'}/>
                </Form.Field>
                <Form.Field >
                    <label>E-mail</label>
                    <Input placeholder={'email'}/>
                </Form.Field>
            </Form>
            </Grid.Column>
            <Grid.Column>
                <h3>Dietary Information</h3>
                <Form>
                    <Form.Field control={Checkbox} label={"Vegan"}/>
                    <Form.Field control={Checkbox} label={"Vegetarian"}/>
                    <Form.Field control={Checkbox} label={"Lactose Intolerant"}/>
                    <Form.Field control={Checkbox} label={"Glucose Intolerant"}/>

                </Form>
            </Grid.Column>
        </Grid>
       </div>
    )
};

export default Preferences;