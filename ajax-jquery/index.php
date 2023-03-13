<!doctype html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ajax Query Bootstrap Php</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="js/jquery.js"></script>
    <script src="js/app.js"></script>
    </head>
    <body>     

    <div class="container">
        <div class="row mt-4">
            <h1>Belajar Ajax JQuery Bootstrap PHP</h1>
        </div>
        <div class="row">
            <div class="col-4">
                <button type="button" id="btn-tambah" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Tambah Data
                </button>
            </div>
        </div>
        <div class="row mt-4">
            <!-- <div class="col">
                <div class="row">
                    <h2>Input data pelanggan</h2>
                </div>
                <div class="row">
                    <div id="msg">
                    </div>
                    
                </div>
            </div> -->
            <div class="col">
                <div class="row">
                    <h2>Data Pelanggan</h2>
                </div>
                <div class="row">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Pelanggan</th>
                                <th scope="col">Alamat</th>
                                <th scope="col">Telp</th>
                                <th scope="col">Hapus</th>
                                <th scope="col">Ubah</th>
                            </tr>
                        </thead>
                        <tbody id="isidata">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" hidden id="id" required aria-describedby="emailHelp">
                                <label for="exampleInputEmail1" class="form-label">Pelanggan</label>
                                <input type="text" class="form-control" id="pelanggan" required aria-describedby="emailHelp">
                                <div id="emailHelp" class="form-text">Harus di isi.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Alamat</label>
                                <input type="text" class="form-control" id="alamat" required>
                                <div id="emailHelp" class="form-text">Harus di isi.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Telp</label>
                                <input type="text" class="form-control" id="telp" required>
                                <div id="emailHelp" class="form-text">Harus di isi.</div>
                            </div>
                        </form>
                </div>
                <div class="modal-footer">
                            <button type="submit" id="submit" class="btn btn-primary" data-bs-dismiss="modal">Simpan</button>
                </div>
            </div>
        </div>
        </div>  

    </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
</html>