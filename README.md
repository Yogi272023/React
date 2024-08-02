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


# JSX =markup + logic
JSX= JS syntax it is an easier way to create react element than the core react.
It is merge of html + JS.
It is not html inside JS but it is html like syntax.


# Babel (package managed by parcel used for converting one language to another)
Even before whole code goes to JS engine it is first transpiled. Transpilation is done by Babel (
    which is managed by parcel. 
)

JSX code ==> transpiled to React.createElement==> ReactElement (JS object)==>HTML Element (render)

If JSX is is in single line it is okay but if it is in multiple line then wrap it in () parenthesis so that babel can understand where JSX starts and ends.

JSX can prevent cross-site cripting attack. It will sanitize the data.
It makes our react code more readable.

There are 2 types of components: class based (old) and function based component(new).

#React Element ==> const heading=<h1>Hello React!</h1>

React functional Component ==> It is normal JS function which returns some JSX
 const HeadingComponent=()=><h1>Welcome</h1> -->when there is one line of code can be written this way
 const HeadingComponent=()=>{ return <h1>Welcome</h1> } -->If return keyword is used then use {} curly braces.
 const HeadingComponent=()=>(
    <h1>
      Welcome
    </h1> 
)

 This is component composition--> When one component is used inside another component
 We can call it as <Title/> or another way is {Title()}.
 If we want to use any JS code inside jsx then we can pass it inside curly braces {}.

 # Component= just normal JS function

 # Props (properties)= just normal arguments for a function
 Passing props to a component is same as passing argument to a function.
 React will take all these properties and wrap it inside an object called props.
 When you want to pass some data dynamically to a component you pass it as a prop.

 # Config Driven UI==> Your UI is driven from config that is data. 
 For example offers in Banglore and Delhi are different so to create UI for Delhi and Banglore is difficult if we just create 2 different UI for them it is better that UI is set in such a manner that it will be shown differently for different data.

 # UI + Data layer

# browserslist ==> it is an npm package. (array)
We need to tell our project which all browser are supported.It is done by configuring package.json

# map ==> always provide unique key to each item
If anything comes new and we didn't provide key then react doesn't know which item came it will treat all items as same and re-render all items each time new item is added.So we have to pass key to each item so that react can identify which item is added. This helps in huge optimization.
Some uses index which can be used as 2nd argument for map function.
e.g.  list.map((item,index)=>(
    <h1 key={index} >{item}</h1>
))
But react itself recommended not to use indexes as key.
Not using key (not acceptable)<<<< Indexes as key (last resort)<<<<< unique id (best practice)

# Filter==> filter out what we want.
list.filter()

# whenever state variable updates, react re-renders the component

# Never put hardcoded data in the component file.

# Named export (import uuing {}) and default export


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


# Food ordering app
/** First do planning, how will your app look like:
* Header
   - Logo
   - Nav Items
* Body
   - Search
   - ReastaurantContainer
      - RestaurantCard
         - Img
         - Name of restaurant, star rating, cuisines, delivery time
* Footer
   - Copyright
   - Links
   - Address
   - Contact
**/

# React hooks
- Normal JS utility function: present inside react package (main 2 hooks)
[imported as named import]
useState():- In this we provide function as second argument it is a trigger to render react component.[We do array destructuring when we create state variable.]
Modification is done first and then whole component is rendered again with updated values. So when it will run , it would run with updated value instead of default value that's why we can say const is used without any error as for const type of variable we can't change value once it is set. But here we are replacing and running from start. So value is not changed in between.
useEffect():- It is called once component is rendered.(useEffect is called after rendering is done)
// if no dependency array==> useEffect is called on every render.
// if dependency array is empty ([]) ==> useEffect is called on initial render(just once).
// if dependency array is [btnName]==> useEffect is called every time btnName is updated.


#                        Efficient DOM manipulation
# React uses Reconciliation algorithm also known as react fiber [Came in React16]
# Virtual DOM is representation of actual dom.(it is collection of react element/normal JS object-->object representation).
# Diff Algorithm==> find difference between 2 virtual DOM (older and new dom)
then it will update the actual DOM on every render cycle.
# Finding difference b/w 2 html is slow as compared to 2 objects in JS. 
# That's why React is faster.


# Monolith (all services in one place) & Microservices (breaking services according to single responsibility)

# Loads==> Render UI==> API call==> Re-Render UI (This approach is used in react)

# fetch() function is given by browser.JS engine give this to us. It return promise so to resolve it we use async-await.

# cross-origin: origin mismatch then it will show an error.

# Shimmer UI:- We load fake page until we get actual data from API.[show fake cards]

# Whenever state variables update, react triggers a reconciliation cycle (rerenders the component)


# Rules of hook:
1. Used inside functional component
2. Created at top of the component
3. Not to be used inside condition(if) and loop


# react-router-dom: helps to create routes in our app.