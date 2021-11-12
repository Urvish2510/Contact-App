import React from 'react';
import { Button, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react';
import Header from '../../components/Header';

const RegisterUI = ({ form: { onChange, form, registerFormValid, loading, onSubmit, fieldErrors } }) => {
    return (
        <div>
            <Header />

            <Grid centered>
                <Grid.Column style={{ maxWidth: '550px', marginTop: '20px' }}>
                    <SemanticHeader>Signup Here</SemanticHeader>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input
                                    value={form.username || ""}
                                    onChange={onChange}
                                    name="username"
                                    placeholder="Username"
                                    label="Username"
                                    error={
                                        fieldErrors.username && {
                                            contant: fieldErrors.username,
                                            pointing: "below",
                                        }
                                    }
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={form.firstName || ""}
                                    onChange={onChange}
                                    name="firstName"
                                    placeholder="First Name"
                                    label="First Name"
                                    error={
                                        fieldErrors.first_name && {
                                            contant: fieldErrors.first_name,
                                            pointing: "below",
                                        }
                                    }
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={form.lastName || ""}
                                    onChange={onChange}
                                    name="lastName"
                                    placeholder="Last Name"
                                    label="Last Name"
                                    error={
                                        fieldErrors.last_name && {
                                            contant: fieldErrors.last_name,
                                            pointing: "below",
                                        }
                                    }
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={form.email || ""}
                                    onChange={onChange}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    label="Email"
                                    error={
                                        fieldErrors.email && {
                                            contant: fieldErrors.email,
                                            pointing: "below",
                                        }
                                    }
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={form.password || ""}
                                    onChange={onChange}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    label="Password"
                                    error={
                                        fieldErrors.password && {
                                            contant: fieldErrors.password,
                                            pointing: "below",
                                        }
                                    }
                                />
                            </Form.Field>

                            <Button
                                onClick={onSubmit}
                                disabled={registerFormValid || loading}
                                primary
                                loading={loading}
                                fluid
                                type='submit'
                            >
                                Submit
                            </Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default RegisterUI;
