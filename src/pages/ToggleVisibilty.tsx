import React from 'react'

function ToggleVisibilty() {
  const [textDisplay, setTextDisplay] = React.useState(false);
  const toggleText = () => {
    setTextDisplay(!textDisplay);
  }
  return (
    <>
      <div>Shows/hides text when a button is clicked</div>
      <div className="App flex justify-center items-center">
        <div>
          <button className="btn btn-primary mt-6" onClick={toggleText}>
            Toggle
          </button>
        </div>
      </div>
      <div>{textDisplay? "hide" : "show"}</div>
    </>
  );
}

export default ToggleVisibilty