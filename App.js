/* if we want to create nested structure:
  <div id="parent">
      <div id="child">
         <h1> I am h1 tag.</h1>
         <h2> I am h2 tag.</h2>
      </div>
  </div>
  ReactElement (object) => chnages to html (browser understands)
*/



const heading= React.createElement("h1",{id:"heading"},"Hello World by React!!");
 const root= ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);