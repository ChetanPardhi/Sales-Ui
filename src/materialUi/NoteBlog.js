import { 
    Container, Grid,
     Paper, Typography,
     Card, CardHeader, IconButton, CardContent, Avatar
} from "@mui/material";

import {DeleteOutlined} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { green, pink, red, yellow, blue, purple } from "@mui/material/colors";

const useStyles = makeStyles(
    {
        test : {
            border : (d) => {
                if(d.category === 'Money'){
                    return '5px solid red'
                }
            }
        },
        avatarC : {
            backgroundColor : (d) => {
                if(d.category === 'Money'){
                    return yellow[700]
                }
                if(d.category === 'xyz'){
                    return green[500]
                }
                // if(d.category == 'todo'){
                //     return gradient.some
                // }
                return 'linear-gradient(45deg, #9c9898 30%, #524f4f 90%)';
            }
        },
    }
)

const NoteBlog = ({d, handleDelete}) => {

    const gradient = {
        some : 'linear-gradient(45deg, #9c9898 30%, #524f4f 90%)'
    }

    const classes = useStyles(d)

    return ( 
        <Card elevation={2} className={classes.test}>
            <CardHeader 
            avatar = {
                <Avatar sx = {{
                    backgroundColor : () => {
                        if(d.category === 'Money'){
                            return yellow[700]
                        }
                        if(d.category === 'xyz'){
                            return green[500]
                        }
                        // if(d.category == 'todo'){
                        //     return gradient.some
                        // }
                        return 'linear-gradient(45deg, #9c9898 30%, #524f4f 90%)';
                    }
                }}> 
                    {d.category[0].toUpperCase()}
                </Avatar>
            }
            action = {
                <IconButton onClick={() => handleDelete(d.id)}>
                    <DeleteOutlined />
                </IconButton>
            }
            title = {d.name}
            subheader = {d.category}
            />
            <CardContent>
                <Typography>
                    {d.address}
                </Typography>
            </CardContent>
        </Card>
     );
}
 
export default NoteBlog;