const products=[
    {id:1,name :'maker',qty:100,price:115},
    {id:2,name:'duster',qty:50,price:10},
]

let nextId=3;

 export const getAllProducts = () =>{
    return products; 
}

 export const addProducts = (item) =>{
      item.id = nextId;
      nextId++
      products.push(item);  
      return item;
 }

 export const deleteProduct=(id)=>{
    const item = products.findIndex((prd)=>prd.id===id);
    if(item===-1){
        return false;
    }
    products.splice(item,1);
    console.log("products remaining:",products);
    return true;

 };

 export const  updateProduct=(pid,updateItem)=>{
    const index = products.findIndex((prd)=>prd.id===pid );
    if(index==-1){
        return false;
    }
    updateItem.id=pid;
    products[index]=updateItem;
    return updateItem;

 };
 export const getProductById=(pid)=>{
    const index=products.findIndex((prd)=>prd.id ===pid);
 

 if(index==-1){
    return false;

 }
 return products[index];

};