@extends('layout.admin_layout')
@section('content')
    <div>
        <nav class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ url('articel') }}">Artikel</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data Artikel</li>
            </ol>
        </nav>

        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h6 class="card-title">Daftar Data Artikel</h6>
                            <a href="{{ url('articel/create') }}" class="btn btn-primary">Tambah</a>
                        </div>
                        <div class="table-responsive">
                            <table class="table text-center">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Tanggal</th>
                                        <th>Judul Artikel</th>
                                        <th>Slug</th>
                                        <th>Deskripsi</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>11-11-2024</td>
                                        <td>Pelatihan Pembuatan Sasirangan</td>
                                        <td>https://galynaheiwa</td>
                                        <td>Cara membuat sasirangan yang menarik, kreatif dan elegan</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn" type="button" id="dropdownMenuButton2"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i data-feather="more-vertical"></i>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Hapus</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection