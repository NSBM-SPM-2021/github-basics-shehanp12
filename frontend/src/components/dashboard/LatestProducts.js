import { v4 as uuid } from "uuid";
import moment from "moment";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import book1 from "../../static/images/books/1.jpeg";
import book2 from "../../static/images/books/2.jpeg";
import book3 from "../../static/images/books/3.jpeg";
import book4 from "../../static/images/books/4.jpeg";
import book5 from "../../static/images/books/5.jpeg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import React from "react";
const products = [
  {
    id: uuid(),
    name: "The Lincoln Highway",
    imageUrl: book1,
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Animal",
    imageUrl: book2,
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Let Me Tell You What I Mean",
    imageUrl: book3,
    updatedAt: moment().subtract(3, "hours"),
  },
  {
    id: uuid(),
    name: "Second Place",
    imageUrl: book4,
    updatedAt: moment().subtract(5, "hours"),
  },
  {
    id: uuid(),
    name: "The Push",
    imageUrl: book5,
    updatedAt: moment().subtract(9, "hours"),
  },
];

const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader subtitle={`${products.length} in total`} title="Latest Books" />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem divider={i < products.length - 1} key={product.id}>
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48,
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${product.updatedAt.fromNow()}`}
          />
          <IconButton edge="end" size="small">
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestProducts;
