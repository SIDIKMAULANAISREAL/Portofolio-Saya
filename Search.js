function toggleSearch() {
    // Mengambil elemen search-form
    var searchForm = document.getElementById("search-form");
    
    // Menambahkan atau menghapus class 'active' untuk menampilkan atau menyembunyikan search form
    if (searchForm.style.display === "none" || searchForm.style.display === "") {
        searchForm.style.display = "inline-block"; // Menampilkan search form
    } else {
        searchForm.style.display = "none"; // Menyembunyikan search form
    }
}
