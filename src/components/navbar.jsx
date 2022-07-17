import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logoutUser } from "../redux/actions/session";
import { deleteUser } from "../redux/actions/user";
import { unsetUID } from "../redux/actions/uid";

import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
    Link,
} from "@mui/material";

const NavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const isAuth = useSelector(state => state.session);

    return (
        <Box>
            <AppBar
                color="primary"
                elevation={0}
            >
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            sx={{
                                cursor: "pointer",
                                flexGrow: 1,
                            }}
                            onClick={() => history.push('/')}
                        >
                            TFA Dashboard
                        </Typography>
                        {
                            isAuth
                            ?
                                <Button
                                    variant="contained"
                                    color="info"
                                    onClick={() => {
                                        dispatch(logoutUser());
                                        dispatch(unsetUID());
                                        dispatch(deleteUser());
                                    }}
                                    disableElevation
                                >
                                    Logout
                                </Button>
                            :
                                <Button
                                    variant="contained"
                                    color="info"
                                    href="/auth"
                                    disableElevation
                                >
                                    Login
                                </Button>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
        </Box>
    )
}

export default NavBar;