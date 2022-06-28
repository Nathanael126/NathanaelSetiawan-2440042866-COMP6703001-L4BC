import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { IconButton } from '@mui/material';

export default function Cart(){
    return(
    <><h1>Cart</h1>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white', alignSelf: 'center' }}>
            <ListItem secondaryAction={
                <IconButton>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            }>
                <ListItemAvatar>
                    <CoffeeIcon></CoffeeIcon>
                </ListItemAvatar>
                <ListItemText primary="Mocachino" secondary="5$"></ListItemText>
            </ListItem>
            <ListItem secondaryAction={
                <IconButton>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            }>
                <ListItemAvatar>
                <CoffeeIcon></CoffeeIcon>
                </ListItemAvatar>
                <ListItemText primary="Vanilla Spice Latte" secondary="10$"></ListItemText>
            </ListItem>
            <ListItem secondaryAction={
                <IconButton>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            }>
                <ListItemAvatar>
                <CoffeeIcon></CoffeeIcon>
                </ListItemAvatar>
                <ListItemText primary="Unicorn Flavor" secondary="100$"></ListItemText>
            </ListItem>
        </List>
    </>
    )
}