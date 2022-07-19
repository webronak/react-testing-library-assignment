import React from "react";
import "./App.css";
import Button from "./components/common/button";
import Card from "./components/common/card";
import Text from "./components/common/typography";
import SearchInput from "./components/common/searchInput";
import { ThemeProvider } from "styled-components";
import Seat from "./components/common/seat";
import theme from "./constants/css/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button>Book now</Button>
        <Button disabled={true}>Book Now</Button>
        <Text variant="h1" color="red">
          H1 Heading
        </Text>
        <Text variant="h2" color="blue">
          H2 Heading
        </Text>
        <Text variant="h3" color="green">
          H3 Heading
        </Text>
        <Text variant="h4">H4 Heading</Text>
        <Text variant="h5">H5 Heading</Text>
        <Text variant="h6">H6 Heading</Text>
        <Text variant="display1">Display 1</Text>
        <Text variant="display2">Display 2</Text>
        <Text variant="body1">Body Text 1</Text>
        <Text variant="body2">Body Text 1</Text>
        <Text variant="body3">Body Text 1</Text>
        <Card hoveredContent={<>ronak</>} />
        <SearchInput />
        <Seat type="active" />
        <Seat type="disabled" />
        <Seat type="default" />
      </div>
    </ThemeProvider>
  );
}

export default App;
