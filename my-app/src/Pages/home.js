import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ListItemIcon from '@mui/material/ListItemIcon';
import CallIcon from '@mui/icons-material/Call';
import StoreIcon from '@mui/icons-material/Store';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Divider from '@mui/material/Divider';
import { IconButton } from '@mui/material';

export default function Home(){
    return(
    <><h1>X Coffee Shop</h1>
    <List sx={{ width: '100%', maxWidth: 360}}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WatchLaterIcon></WatchLaterIcon>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Opening hours:" secondary="8:00-18:00"></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <StoreIcon></StoreIcon>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Location:" secondary="GenericAv str 123"></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <CallIcon></CallIcon>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Contact us:" secondary="111-111-111"></ListItemText>
            </ListItem>
        </List>
        
        <h2>Epic New Coffee</h2>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white', alignSelf: 'center' }}>
            <ListItem secondaryAction={
                <IconButton>
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                </IconButton>
            }>
                <ListItemAvatar>
                    <CoffeeIcon></CoffeeIcon>
                </ListItemAvatar>
                <ListItemText primary="Mocachino" secondary="5$"></ListItemText>
            </ListItem>
            <ListItem secondaryAction={
                <IconButton>
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                </IconButton>
            }>
                <ListItemAvatar>
                <CoffeeIcon></CoffeeIcon>
                </ListItemAvatar>
                <ListItemText primary="Vanilla Spice Latte" secondary="10$"></ListItemText>
            </ListItem>
            <ListItem secondaryAction={
                <IconButton>
                    <AddShoppingCartIcon></AddShoppingCartIcon>
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