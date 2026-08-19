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

const showCart=async()=>{
    console.log("show cart");
    
}
const updateCart=async()=>{
  console.log("update cart");
  
}
const deleteFromCart=async()=>{
    console.log("delete from cart");
    
}




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
            let data = await cin.question("Enter id,name,price,qty");
            let p = data.split(",");
           
             let q=p.map((item)=> item.trim());
           
             let [id,name,price,qty]=q;
             console.log(id,name,price,qty);
             const product={
              id:Number(id),name,
              price:Number(price),
              qty:Number(qty),
             };
            //  console.log(product);
             await addTocart(product);
             
            
            
              break;
          case 2:
            await showCart();
              break;
          case 3:
            await deleteFromCart();
              break;
          case 4:
            await updateCart();
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