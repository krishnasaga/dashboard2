import React from "react";
import { Grid } from "theme-ui";
import { Box } from "rebass";
import GridLayout from "react-grid-layout";
import dashboard from "./dashboard";

const GridElement = props => {
  return (
    <Box
      p={0}
      bg={"background"}
      sx={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
      }}
      {...props}
    >
      <Box
        p={2}
        sx={{
          borderBottom: "1px solid #e5e5e5"
        }}
      >
        ...
      </Box>
      {props.children}
    </Box>
  );
};

const DashboardGrid = () => {
  return (
    <div style={{ position: "relative" }}>
      <GridLayout
        className="layout"
        layout={dashboard.layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        {dashboard.layout.map(data => {
          const C = data.content;
          return (
            <GridElement key={data.i}>
              <C height={data.h * 30} width={"200"} />
            </GridElement>
          );
        })}
      </GridLayout>
    </div>
  );
};

export const Main = () => {
  return (
    <Grid>
      <Box bg={"white"} p={10}>
        <DashboardGrid />
      </Box>
    </Grid>
  );
};
