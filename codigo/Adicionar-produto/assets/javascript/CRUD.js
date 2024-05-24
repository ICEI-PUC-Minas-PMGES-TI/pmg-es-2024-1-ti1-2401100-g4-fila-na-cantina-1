


// CRUD-- create read update delete
const tempProduto ={
    img: "",
    nome: "",
    preco: "",
    qtd: ""
}
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_Produto')) ?? []
const setLocalStorage = () => localStorage.setItem("dbProdutos", JSON.stringify(produto))





// CRUD-- DELETE
const deleteProduto = (index) => {
    const dbProdutos = readProduto()
    dbProdutos.splice(index,1)
    setLocalStorage(dbProdutos)
}



// CRUD-- UPDATE
const updateProduto = (index, produto) => {
    const dbProdutos = readProduto()
    dbProdutos[index] = produto
    setLocalStorage(dbProdutos)
}

// CRUD-- READ
const readProduto = () => getLocalStorage()



// CRUD-- CREATE
const criarProduto = (produto) =>{
    const dbProdutos = getLocalStorage()
    dbProdutos.push (produto)
    setLocalStorage(dbProdutos)
}