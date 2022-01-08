class StudentController {
    index() {
        res.send("Menampilkan data students");
    }

    store() {
        res.send("Menambahkan data students");
    }

    update() {
        const { id } = req.params;
        res.send("Mengedit students ${id}");
    }

    destroy() {
        const { id } = req.params;
        res.send("Menghapus students ${id}");
    }



}