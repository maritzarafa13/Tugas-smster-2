//      Menampilkan Seluruh Data 
$(document).ready(function () {
    $(".all").click(function (e) {
        e.preventDefault();
        let url = "https://dummyjson.com/products";
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response.products);
                let out =
                    '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th class="table-light">Update</th><th scope="col"class="table-light">Buy</th></tr></thead><tbody>';
                $.each(response.products, function (key, val) {
                    out += `<tr>
            <th scope="row">${val.id}</th>
            <td>${val.title}</td>
            <td>${val.description}</td>
            <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="ubah(${val.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>
            </button></td>
            <td><button type="button" class="btn btn-primary text-white" onclick="cart(${val.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </button></td>
            </button></td>
            </tr>`;
                });
                out += "</tbody></table>";
                $("#tampil").html(out);
            },
        });
    });
});


//  Show Cart Id

function cart(id) {
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            let out = "<h2 class='mt-2'>Cart</h2>"
            out += '<table class="table"><thead><tr><th scope="col">ID</th><th scope="col">Order By</th><th scope="col">Product</th><th scope="col">Price</th><th scope="col">Jumlah</th><th scope="col">Checkout</th></tr></thead><tbody>';
            out += `<tr>
                    <th scope="row">${response.id}</th>
                    <td id="order"></td>
                    <td>${response.title}</td>
                    <td>$ ${response.price}</td>
                    <td><input type="number" class="small" id="jumlah"></td>
                    <td><button class="btn btn-sucsess ms-2" onclick="checkout('${response.id}','${response.price}','${response.title}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart ms-1 me-1 mb-1" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    </button></td>
                </tr>`;
            out += '</tbody></table>';
            $("#cart").html(out);
        }
    });
}

//      Order By

var idplgn = "";
var nama = "";
var alamat = "";
function cartP(idpelanggan) {
    let url = "http://localhost/json2/php/selectwhere.php/?id=" + idpelanggan;
    $.ajax({
        type: "get",
        url: url,
        dataType: "JSON",
        success: function (response) {
            let out = response.pelanggan;
            $("#order").html(out);
            idplgn = response.idpelanggan;
            nama = response.pelanggan;
            alamat = response.alamat;
        }
    });
}


//      Checkout

function checkout(idbarang, harga, barang) {
    let order = 0;
    let idorder = order++;
    let jumlah = $("#jumlah").val();
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

    $.ajax({
        type: "post",
        url: "http://localhost/json2/php/addtocart.php",
        data: JSON.stringify(data),
        success: function (response) {
            window.location.href = "http://127.0.0.1:5501/";
            alert("Sucsess");
        }
    });
}


//      Menampilkan Seluruh Data Sesuai Kategori 
$(document).ready(function () {
    $(".cproduct").click(function (e) {
        e.preventDefault();
        let link = "";
        let kategori = document.getElementById("select").value;
        if (kategori === "smartphones") {
            link = "smartphones";
        }
        if (kategori === "laptops") {
            link = "laptops";
        }
        if (kategori === "fragrances") {
            link = "fragrances";
        }
        if (kategori === "skincare") {
            link = "skincare";
        }
        if (kategori === "groceries") {
            link = "groceries";
        }
        if (kategori === "home-decoration") {
            link = "home-decoration";
        }
        let url = "https://dummyjson.com/products/category/" + link;
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response.products);
                let out =
                    '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th><th class="table-light">Update</th></tr></thead><tbody>';
                $.each(response.products, function (key, val) {
                    out += `<tr>
                      <th scope="row">${val.id}</th>
                      <td>${val.title}</td>
                      <td>${val.description}</td>
                      <td>${val.category}</td>
                      <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="ubah(${val.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                      </button></td>
                    </tr>`
                });
                out += '</tbody></table>';
                $("#tampil").html(out);
            }
        });
    });
});


//      Memilih Produk Sesuai Dengan Yang Kita Pilih

$(document).ready(function () {
    $(".nproduct").click(function (e) {
        e.preventDefault();

        let id = document.getElementById("id").value;
        let url = "https://dummyjson.com/products/" + id;
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response);
                let out =
                    '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th></tr></thead><tbody>';
                out += `<tr>
                <th scope="row">${response.id}</th>
                <td>${response.title}</td>
                <td>${response.description}</td>
                <td>${response.category}</td>
            </tr>`;
                out += "</tbody></table>";
                $("#tampil").html(out);
            },
        });
    });
});


//   Add Produk

$(document).ready(function () {
    $(".addp").click(function (e) {
        e.preventDefault();
        let url = "https://dummyjson.com/products/add";
        let produk = $("#title").val();
        let deskripsi = $("#description").val();
        let kategori = $("#category").val();

        let data = {
            title: produk,
            description: deskripsi,
            category: kategori
        };

        $.ajax({
            type: "POST",
            url: url,
            body: data,
            success: function (response) {
                console.log(data);
            }
        });
    });
});


//      Update Data Produk

$(document).ready(function () {
    $(".upp").click(function (e) {
        e.preventDefault();
        let id = $("#idproduct").val();
        let data = {
            id: $("#idproduct").val(),
            produk: $("#products").val(),
            deskripsi: $("#descriptions").val()
        };
        let link = "https://dummyjson.com/products/" + id;

        $.ajax({
            type: "patch",
            url: link,
            body: data,
            success: function (response) {
                console.log(data);
            }
        });
    });
});

//       Show Update Produk

function ubah(idubah) {
    let url = "https://dummyjson.com/products/" + idubah;
    $.ajax({
        type: "get",
        url: url,
        data: "json",
        success: function (response) {
            $(".np").val(response.title);
            $(".dp").val(response.description);
            $(".idp").val(response.id);
        }
    });
}


//      Delete Data

$(document).ready(function () {
    $(".delp").click(function (e) {
        e.preventDefault();

        let id = document.getElementById("iddel").value;
        let url = "https://dummyjson.com/products/" + id;

        $.ajax({
            type: "DELETE",
            url: url,
            data: id,
            success: function (response) {
                console.log("Product Id " + id + " Telah Dihapus !");
            }
        });
    });
});


//      All Pelanggan

$(document).ready(function () {
    $(".plgn").click(function (e) {
        e.preventDefault();
        // console.log("tes");

        $.ajax({
            type: "get",
            url: "http://localhost/json2/php/select.php",
            dataType: "json",
            success: function (response) {
                console.log(response);
                let no = 1;
                let out =
                    '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">No</th><th scope="col" class="table-light">Pelanggan</th><th scope="col" class="table-light">Alamat</th><th scope="col" class="table-light">Telp</th><th class="table-light">Update</th><th class="table-light">Delete</th><th scope="col"class="table-light">Order</th></tr></thead><tbody>';
                $.each(response, function (key, val) {
                    out += `<tr>
                <th scope="row">${no++}</th>
                <td>${val.pelanggan}</td>
                <td>${val.alamat}</td>
                <td>${val.telp}</td>
                <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal7" onclick="update(${val.idpelanggan})">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>
                </button></td>
                <td><button type="button" class="btn btn-secondary text-dark" onclick="hapus(${val.idpelanggan})">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
                </button></td>
                <td><button type="button" class="btn btn-primary text-white" onclick="cartP(${val.idpelanggan})">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
                </button></td>
            </tr>`
                });
                out += "</tbody></table>";
                $("#tampil").html(out);
            }
        });
    });
});


//      Add Pelanggan

$(document).ready(function () {
    $('.addplgn').click(function (e) {
        e.preventDefault();

        let data = {
            pelanggan: $("#nama").val(),
            alamat: $("#alamat").val(),
            telp: $("#telp").val()
        };
        $.ajax({
            type: "post",
            url: "http://localhost/json2/php/insert.php",
            data: JSON.stringify(data),
            success: function (response) {
                console.log(response);
                alert(response);
                window.location.href = "http://127.0.0.1:5500/";
            }
        });
    });
});


//      Show Update Customer

function update(idpelanggan) {
    console.log(idpelanggan);
    let data = {
        idpelanggan: idpelanggan
    };

    $.ajax({
        type: "post",
        url: "http://localhost/json2/php/selectupdate.php",
        data: JSON.stringify(data),
        success: function (response) {
            let data = JSON.parse(response);

            console.log(data);
            $(".npelanggan").val(data.pelanggan);
            $(".alamatpel").val(data.alamat);
            $(".telppel").val(data.telp);
            $(".idpel").val(data.idpelanggan);
        }
    });
}


//      Update Customer

$(document).ready(function () {
    $(".updatepel").click(function (e) {
        e.preventDefault();
        let dataPelanggan = {
            idpelanggan: $("#idpelang").val(),
            pelanggan: $("#pelanggans").val(),
            alamat: $("#alamats").val(),
            telp: $("#telps").val()
        }

        $.ajax({
            type: "post",
            url: "http://localhost/json2/php/update.php",
            data: JSON.stringify(dataPelanggan),
            success: function (response) {
                window.location.href = "http://127.0.0.1:5500/";
                alert(response);
            }
        });
    });
});


//      Delete customer

function hapus(idpelanggan) {
    console.log(idpelanggan);
    let data = {
        idpelanggan: idpelanggan
    };
    $.ajax({
        type: "post",
        url: "http://localhost/json2/php/delete.php",
        data: JSON.stringify(data),
        cahce: false,
        success: function (response) {
            window.location.href = "http://127.0.0.1:5500/";
            alert(response);
        }
    });
}