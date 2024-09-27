function AppendToResult(value){
    document.getElementById('result').value+=value
  }
  function deleteresult(){
    let backspace=document.getElementById('result').value;
    document.getElementById('result').value=backspace.slice(0,-1)
  }
  function clearresult(){
    document.getElementById('result').value="";
  }
  function calculate(){
    let r=document.getElementById('result').value;
    let finalresult=eval(r);
    document.getElementById('result').value=finalresult;
  }