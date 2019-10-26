const doo = require("./D");

const data = `
    <ul>  
        <li>content</li>  
        <li>more content</li>  
        <ol>  
            <li>    numbered item</li>  
            <li>second numbered  
    item</li>  
        </ol>  
        <li>     even more content</li>  
    </ul>  
    
    <ol>  
        <li>numbered item</li>  
        <li>second numbered item</li>  
        <ol>  
            <li>numbered sublist item</li>  
            <li>another one</li>  
            <ol>  
                <li>third numbered level</li>  
            </ol>  
        </ol>  
    </ol>
`;

console.log(doo(data));
/*
- content  
- more content  
  1. numbered item  
  2. second numbered item  
- even more content  
1. numbered item  
2. second numbered item  
   2.1. numbered sublist item  
   2.2. another one  
        2.2.1. third numbered level
*/
