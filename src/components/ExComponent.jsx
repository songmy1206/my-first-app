function ExComponent(){
  const helloStr = "Hello, first exercise";
  const styleEx = {marginTop : "32px", backgroundColor : "skyblue"}
  function alertFunc(){
    alert("click")
  }
  return(
    <div style={styleEx} onClick={alertFunc}>{helloStr}</div>
  )
}

export default ExComponent;

