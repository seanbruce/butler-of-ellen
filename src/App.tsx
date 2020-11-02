/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled/macro";

const Button = styled.button({
  width: "100px",
  height: "20px",
  backgroundColor: "lightgreen",
});
function App() {
  return (
    <div
      css={{ width: "100px", height: "100px", backgroundColor: "lightblue" }}
    >
      <Button>this is a button</Button>
    </div>
  );
}

export default App;
