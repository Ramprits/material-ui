import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {
  Root,
  Header,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon
} from "@mui-treasury/layout";
import { muiTreasuryPreset } from "@mui-treasury/layout/presets";

import NavContentEx from "./components/NavContentEx";
import NavHeaderEx from "./components/NavHeaderEx";
import HeaderEx from "./components/HeaderEx";
import ContentEx from "./components/ContentEx";
import FooterEx from "./components/FooterEx";

function App() {
  return (
    <Root config={muiTreasuryPreset}>
      {({ headerStyles, sidebarStyles }) => (
        <React.Fragment>
          <CssBaseline />
          <Header>
            <Toolbar>
              <CollapseBtn
                component={IconButton}
                className={headerStyles.leftTrigger}
              >
                <CollapseIcon />
              </CollapseBtn>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
              <HeaderEx />
            </Toolbar>
          </Header>
          <Content>
            <Switch>
              <Route path="/" component={ContentEx}></Route>
            </Switch>
          </Content>
          <Sidebar>
            {({ collapsed }) => (
              <>
                <NavHeaderEx collapsed={collapsed} />
                <div className={sidebarStyles.container}>
                  <NavContentEx />
                </div>
                <CollapseBtn className={sidebarStyles.collapseBtn}>
                  <CollapseIcon />
                </CollapseBtn>
              </>
            )}
          </Sidebar>
          <Footer>
            <FooterEx />
          </Footer>
        </React.Fragment>
      )}
    </Root>
  );
}
export default App;
