import React, { useState, useEffect } from 'react';

import produce from 'immer'

import Button from "@material-ui/core/Button";

function App() {
  const [state, setState] = useState({
    a: 1,
    b: 1,
    c: 1
  });

  console.log(state.a)

  // const getData = () => {
  //   ajax.asdklfj

  //   setState(asdlfjkls)
  // }

  
  // useEffect(() => {
  //   setState(
  //     produce(draft => {
  //       if (draft.a <= 10) {
  //         draft.a = state.a + 1;
  //       }

  //       if (draft.a === 1) {
  //         draft.b = "실행";
  //       }
  //     })
  //   );
  // }, [state.a, state.b]);

  return (
    <>
      <p>{state.a}</p>
      <p>{state.b}</p>
      <p>{state.c}</p>
      Count : {state.a}
      <Button
        onClick={() =>
          setState(
            produce(x => {
              x.a = x.a + 1;
            })
          )
        }
      >
        +
      </Button>
      <Button
        onClick={() =>
          setState(
            produce(x => {
              x.a = x.a - 1;
            })
          )
        }
      >
        -
      </Button>
    </>
  );
}

export default App;