import * as React from "react"

export default function Component () {
  return "Hello world"
}

// import React from 'react';

// const HelloWorld = () => {
  
//   function sayHello() {
//     alert('Hello, World!');
//   }
  
//   return (
//     <button onClick={sayHello}>Click me!</button>
//   );
// };

// export default HelloWorld;



// import * as React from "react"
// import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

// const PostTemplate = () => {
//   let disqusConfig = {
//     url: `${config.siteUrl+location.pathname}`,
//     identifier: post.id,
//     title: post.title,
//   }
//   return (
//     <>
//       <h1>{post.title}</h1>
//       <CommentCount config={disqusConfig} placeholder={'...'} />
//       /* Post Contents */
//       <Disqus config={disqusConfig} />
//     </>
//   )
// }

// export default PostTemplate