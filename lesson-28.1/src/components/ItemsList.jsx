import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const ItemsList = (props) => {
  const { items } = props;

  return (
    <Box
      sx={{
        width: "100%",
        mt: 10,
        bgcolor: "background.paper",
      }}
    >
      <List>
        {items.map((item, index) => (
  <Box key={index}>
    <Divider />
    <ListItem>
      <ListItemText primary={item} />
    </ListItem>
  </Box>
))}
      </List>
    </Box>
  );
};

export default ItemsList;
