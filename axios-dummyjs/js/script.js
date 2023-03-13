let tampil = document.querySelector("#tampil");
let cart = document.querySelector("#cart");
let no = 1;

//          All Product

function allProduct() {
    axios.get("https://dummyjson.com/products").then(function (response){
        let produk = response.data.products;
        console.log(produk);
        let out = '<table class="table mt-4 "><thead class="table-light"><tr><th>No</th><th>Title</th><th>Description</th><th>Update</th><th>Delete</th><th>Buy</th></tr></thead><tbody>';
        produk.forEach(el => {
            out += `<tr>
                    <td>${el.id}</td>
                    <td>${el.title}</td>
                    <td>${el.description}</td>
                    <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="showUbah(${el.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                    </button></td>
                    <td><button type="button" class="btn btn-secondary text-dark" onclick="hapusProduct(${el.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                    </button></td>
                    <td><button type="button" class="btn btn-primary text-white" onclick="cartProduct(${el.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                    </button></td>
            </tr>`;
        });
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

//          Cart Product

function cartProduct(idproduct) {
    axios.get("https://dummyjson.com/products/" + idproduct).then(function (response){
        let product = response.data;
        let out = '<table class="table mt-4"><thead class="table-light"><tr><th>Id</th><th>Order By</th><th>Title</th><th>Description</th><th>Amount</th><th>Checkout</th></tr></thead><tbody>';
        out += `<tr>
                    <td>${product.id}</td>
                    <td id="order"></td>
                    <td>${product.title}</td>
                    <td>${product.price}</td>
                    <td><input type="number" class="small" id="jumlah"></td>
                    <td><button class="btn btn-success ms-2" onclick="checkout('${product.id}','${product.price}','${product.title}')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart ms-1 me-1 mb-1" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </button></td>
            </tr>`;
        out += '</tbody></table>';
        cart.innerHTML = out;
    })
}

//          Order By

var idplgn = "";
var nama = "";
var alamat = "";
function orderBy(idpelanggan) {
    let data = {
        id : idpelanggan
    };
    axios.get("http://localhost/axios/php/selectwhere.php?id=" + idpelanggan, JSON.stringify(data)).then(function (response){
        let out = response.data.pelanggan;
            order.innerHTML = out;
            idplgn = response.data.idpelanggan;
            nama = response.data.pelanggan;
            alamat = response.data.alamat;
    })
}

//          Checkout

function checkout(idbarang, harga, barang) {
    let order = 0;
    let idorder = order++;
    let jumlah = document.getElementById("jumlah").value;
    let data = {
        idorder: idorder,
        idbarang: idbarang,
        jumlah: jumlah,
        harga: harga,
        barang: barang,
        idpelanggan: idplgn,
        pelanggan: nama,
        alamat: alamat
    };
    axios.post("http://localhost/axios/php/addtocart.php", JSON.stringify(data)).then(function (response){
        console.log(data);
        alert(response.data);
        window.location.href = "http://127.0.0.1:5502";
    })
    
}

//          Search Product With Id

function productid() {
    let idproduct = document.getElementById("idproduct").value;
    axios.get("https://dummyjson.com/products/" + idproduct).then(function (response){
        console.log(response.data);
        let product = response.data;
        let out = '<table class="table mt-4"><thead class="table-light"><tr><th>Id</th><th>Title</th><th>Description</th></tr></thead><tbody>';
        out += `<tr>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.description}</td>
            </tr>`;
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

//          Search With Category

function productCategory() {
    let kategori = document.getElementById("category").value;
    axios.get("https://dummyjson.com/products/category/" + kategori).then(function (response){
        let product = response.data.products;
        console.log(product);
        let out = '<table class="table mt-4"><thead class="table-light"><tr><th>Id</th><th>Title</th><th>Description</th></tr></thead><tbody>';
        product.forEach(el => {
            out += `<tr>
                    <td>${el.id}</td>
                    <td>${el.title}</td>
                    <td>${el.description}</td>
            </tr>`;
        })
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

//          Add Product

function addProduct() {
    let data = {
        title : document.getElementById("title").value,
        description : document.getElementById("description").value,
        category : document.getElementById("productcategory").value
    };
    axios.post("https://dummyjson.com/products/add", JSON.stringify(data)).then(function (response) {
        console.log(data);
        alert("Data Sudah Di Simpan !");
    })
    allProduct();
}

//          Show Update Product

function showUbah(idubah) {
    axios.get("https://dummyjson.com/products/" + idubah).then(function (response){ 
        document.getElementById('idproducts').value = response.data.id;
        document.getElementById('products').value = response.data.title;
        document.getElementById('descriptions').value = response.data.description;
    })
}

//      Update Product

function updateProduct() {
    let idupdate = document.getElementById("idproducts").value;
    let data = {
        idproduct : document.getElementById("idproducts").value,
        product : document.getElementById("products").value,
        description : document.getElementById("descriptions").value
    };
    axios.put("https://dummyjson.com/products/" + idupdate, JSON.stringify(data)).then(function (response){
        console.log(data);
        alert("Sucsess !");
    })
}

//          Delete Product

function hapusProduct(idproduct) {
    let data = {
        id : idproduct
    }
    axios.delete("https://dummyjson.com/products/" + idproduct, JSON.stringify(data)).then(function (response){
        console.log("Product Id " + idproduct + " Telah Di Hapus !");
        alert("Product Id " + idproduct + " Telah Di Hapus !");
    })
}

//          All Pelanggan

function allPelanggan() {
    axios.get("http://localhost/axios/php/select.php").then(function (response) {
        let pelanggan = response.data;
        console.log(pelanggan);
        let out = '<table class="table mt-4"><thead class="table-light"><tr><th>No</th><th>Pelanggan</th><th>Alamat</th><th>Telp</th><th>Update</th><th>Delete</th><th>Order</th></tr></thead><tbody>';
        pelanggan.forEach(el => {
            out += `<tr>
                    <td>${no++}</td>
                    <td>${el.pelanggan}</td>
                    <td>${el.alamat}</td>
                    <td>${el.telp}</td>
                    <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal7" onclick="showUpdate(${el.idpelanggan})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                    </button></td>
                    <td><button type="button" class="btn btn-secondary text-dark" onclick="hapusPelanggan(${el.idpelanggan})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                    </button></td>
                    <td><button type="button" class="btn btn-primary text-white" onclick="orderBy(${el.idpelanggan})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                    </button></td>
            </tr>`;
        });
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

//          Add Pelanggan

function addPelanggan() {
    let data = {
        pelanggan : document.getElementById("nama").value,
        alamat : document.getElementById("alamat").value,
        telp : document.getElementById("telp").value
    };
    console.log(data);
    axios.post("http://localhost/axios/insert.php", JSON.stringify(data)).then(function (response){
        console.log(response.data);
        alert(response.data);
    })
    allpelanggan();
}

//      Show Update

function showUpdate(idpelanggan) {
    let data = {
        idpelanggan : idpelanggan
    }
    axios.post("http://localhost/axios/selectupdate.php", JSON.stringify(data)).then(function (response){
        console.log(response);
        document.getElementById('idpelang').value = response.data.idpelanggan;
        document.getElementById('pelanggans').value = response.data.pelanggan;
        document.getElementById('alamats').value = response.data.alamat;
        document.getElementById('telps').value = response.data.telp;
    })
}

//          Update Pelanggan

function updatePelanggan() {
    let data = {
        idpelanggan : document.getElementById("idpelang").value,
        pelanggan : document.getElementById("pelanggans").value,
        alamat : document.getElementById("alamats").value,
        telp : document.getElementById("telps").value
    };
    axios.post("http://localhost/axios/update.php", JSON.stringify(data)).then(function (response){
        console.log(response.data);
        alert(response.data);
    })
    allPelanggan();
}

//          Delete Pelanggan

function hapusPelanggan(idpelanggan) {
    let data = {
        idpelanggan : idpelanggan
    }
    console.log(data);
    axios.post("http://localhost/axios/delete.php", JSON.stringify(data)).then( function (response){
        console.log(response.data);
        alert(response.data);
    })
    allPelanggan();
}