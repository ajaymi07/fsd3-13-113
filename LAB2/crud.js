import readline  from "readline/promises";
import {writeFile , readFile}from"fs/promises";
import{stdin,stdout } from "process";
 
const FILE ="products.json"

const saveCart=async(cart)=>{
    await writeFile(FILE,JSON.stringify(cart,null,2));
};
const getCart=async()=>{
    const data = await readFile(FILE,"utf-8");
    return JSON.parse(data);
};

const addTocart=async(item)=>{
      const products= await getCart();
      products.push(item);
      await saveCart(products);
};



const main = async()=>{
     const cin = readline.createInterface({input:stdin,output: stdout });
     let choice;
     do {
    console.log("welcome to shoping cart🛍️ ")
    console.log("1 ----Add to cart");
    console.log("2 ----Show  Cart");
    console.log("3 ----Remove cart");
    console.log("4 ----Update quantity");
    console.log("5 ----Checkout");
     choice =await cin.question("enter your choice");
    console.log("Enter choice:",choice );
       switch(Number(choice)){
          case 1:
            console.log("add to cart");
              break;
          case 2:
            console.log("show cart items");
              break;
          case 3:
            console.log("remove items");
              break;
          case 4:
            console.log("update quantity");
              break; 
           case 5:
            console.log("see you later ....😄");
            process.exit();
              break; 
           default :
           console.log("invalid choice! try again😠") ;  
              

       }



     } while(choice !="5");
    
    cin.close();
};

main();