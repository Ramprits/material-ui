import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { useFullBorderedGridStyles } from "@mui-treasury/styles/grid/fullBordered";

const styles = ({ breakpoints }) => ({
  root: {
    padding: 2,
    [breakpoints.up("sm")]: {
      padding: 24,
      maxWidth: 500,
      margin: "auto"
    },
    [breakpoints.up("md")]: {
      maxWidth: 1000
    }
  }
});

const Product = ({ classes }) => {
  const colWidth = { xs: 12, sm: 6, md: 2, lg: 3 };
  const borderColor = "primary.main";
  const styles = useFullBorderedGridStyles({ borderColor });

  return (
    <div className={classes.root}>
      <Box>
        <Grid container classes={styles}>
          {Array(20)
            .fill(0)
            .map((number, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Grid key={i} item {...colWidth} classes={styles}>
                <Box minHeight={200} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
};
export default withStyles(styles)(Product);
