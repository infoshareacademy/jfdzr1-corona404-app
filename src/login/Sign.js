import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import firebase from 'firebase';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

export class Sign extends React.Component {
    state = {
        email: '',
        password: '',
        shouldRedirect: false
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        if (this.props.isSignUp) {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {this.setState({ shouldRedirect: true })})
                .catch((error) => alert(error.message));
        } else {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {this.setState({ shouldRedirect: true })})
                .catch((error) => alert(error.message));
        }
    }

    render() {
        const { isSignUp } = this.props;

        if (this.state.shouldRedirect) {
            return <Redirect to="/form" />
        }

        return (
            <Container component="main" maxWidth="xs">
                <div style={{marginTop: "20px", display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Avatar>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {isSignUp ? 'Register New User' : 'Sign in'}
                    </Typography>
                    <form noValidate onSubmit={this.handleOnSubmit}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={this.state.email}
                            onChange={this.handleOnChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.handleOnChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            color="primary"
                            size="large"
                        >
                            {isSignUp ? 'Register' : 'Sign In'}
                        </Button>
                        <div style={{ textAlign: 'center', marginTop: '5px'}}>
                            {isSignUp
                                ? <Link to="/sign-in">Already have an account? Sign In</Link>
                                : <Link to="/sign-up">Don't have an account? Register</Link>
                            }
                        </div>
                    </form>
                </div>
            </Container>
        );
    }
}