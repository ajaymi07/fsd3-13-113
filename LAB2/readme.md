<!-- C-create/add/insert
R-relative/view/get
U-update/edit
D-delete/Remove -->



# FS (File System)
it directconnect with client os than browser

## Major task of FS Module

- Reading and Writing  files
  - readFile()
  - writeFile()
  - appendFile()

- Directory mangement
  - mkdir()
  - rmdir()
  - rm()
  - readdir()
- Metadata/information
  - start()
  - lstat()
  - fstat()

- watching for changes 
  - watch()
  - watchFile() 
  - unwatchFile()

- Streaming Large File
  - createReadStream()
  - createWriteStream()

- File operation
  - rename()
  - truncate()
  - link()
  - unlink()
  - syslink()

  ## CRUD operation
   create/insert, Read/Retrieve, Update,Delete

   ## item 
     id,name,price,qty

   ## Opretions
     1. add to cart
     2. show cart
     3. Remove from cart
     4. Update quantity from cart
     5. checkout

  NOTE: all items will be stored in hdd , so after termination of program we can retrive cart details   

## Required files :
  - crud.js -it contains all the methods and entry point 
  - products.json - it contains the product details in array form