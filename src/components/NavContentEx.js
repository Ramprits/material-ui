import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

const list = [
  {
    primaryText: "Product",
    icon: "publish",
    href: "/products"
  },
  {
    primaryText: "Backups",
    icon: "backup"
  },
  {
    primaryText: "Trash",
    icon: "delete"
  }
];
const NavContentEx = () => (
  <List>
    {list.map(({ primaryText, icon, href }, i) => (
      <ListItem key={primaryText} selected={i === 0} button>
        <Link to={href} style={{ textDecoration: "none", display: "flex" }}>
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
          <ListItemText
            style={{ marginLeft: "-22px" }}
            primary={primaryText}
            primaryTypographyProps={{ noWrap: true }}
          />
        </Link>
      </ListItem>
    ))}
    <Divider style={{ margin: "12px 0" }} />
    <ListItem button>
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText
        primary={"Settings & account"}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
  </List>
);

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;
