With the help of createElement we are creating a plain JS object.

In this we have props which consist of 2nd and 3rd argument, specifying 
attributes and children respectively.

when we do root.render() then this render method basically converts this object to actual tag and 
put it in the DOM.


if we want to create nested structure:
  <div id="parent">
      <div id="child">
         <h1> I am h1 tag.</h1>
      </div>
  </div>
  --> ReactElement (object) => chnages to html (browser understands)
 const parent=React.createElement("div",{id:"parent"},
     React.createElement("div",{id:"child"},
         React.createElement("h1",{},"I am h1 tag.")
     )
 );
 
 
 if we want to create nested structure with siblings:(using array)
  <div id="parent">
      <div id="child">
         <h1> I am h1 tag.</h1>
         <h2> I am h2 tag.</h2>
      </div>
  </div>
const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
         [
            React.createElement("h1",{},"I am h1 tag."),
            React.createElement("h2",{},"I am h2 tag.")
         ]
     )
 );


 for structure like this:
  <div id="parent">
      <div id="child1">
         <h1> I am h1 tag.</h1>
         <h2> I am h2 tag.</h2>
      </div>
       <div id="child2">
         <h1> I am h1 tag.</h1>
         <h2> I am h2 tag.</h2>
      </div>
  </div>
   const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},
         [
            React.createElement("h1",{},"I am h1 tag."),
            React.createElement("h2",{},"I am h2 tag.")
         ]
     ),
     React.createElement("div",{id:"child2"},
        [
           React.createElement("h1",{},"I am h1 tag."),
           React.createElement("h2",{},"I am h2 tag.")
        ]
    )
    ]
 );

All the above example is core of react. It is hard to maintain when code is lengthier so to make our
life easy we use JSX. But it is not true that we can only write react using JSX.

# browserslist ==> it is an npm package. (array)
We need to tell our project which all browser are supported.It is done by configuring package.json


# Parcel (what all it is doing)
- Dev Build
- Local server (it host our site on server.)
- HMR= Hot module replacement (it automatically reloads the page when we do changes in the file and save it.)
- Uses File watching algorithm: written in C++.
- Caching: faster builds (inside .parcel-cache folder)
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential bundling : Support old browser.
- Diagnostic
- Error handling
- Give a way to host on https also.
- Tree Shaking: remove unused code.
- Different dev and prod builds (prod build take more time than dev builds.)
