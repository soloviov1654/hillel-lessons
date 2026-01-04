import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useSelector } from "react-redux";

const ItemsList = () => {
  const items = useSelector((state) => state.todos.items);
  return (
    <Box sx={{ width: "100%", mt: 10, bgcolor: "background.paper" }}>
      <List>
        {items.map((item, index) => (
  <ListItem key={index}>
    <ListItemText primary={item.text} />
  </ListItem>
))}
      </List>
    </Box>
  );
};

export default ItemsList;
