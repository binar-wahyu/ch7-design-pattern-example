# Design Pattern Example

Contoh Design Pattern untuk membantu pembuatan challenge Chapter 7.
Pada `example-1`, menggunakan pemisahan antara `web` dan `api`, baik pada router maupun controller. Keuntungannya adalah terdapat kejelasan mana yang memberikan tampilan (view), dan mana yang memberikan Rest API.

Pada `example-2`, menggunakan pemisahan per modul, dalam hal ini ada modul `article`, `user`, dan `page`. Pada router, setiap modul mengandung router gabungan untuk web dan api. Begitu juga dengan controllernya. Keuntungannya adalah terdapat pemisahan antar modul sehingga seluruh kode pada modul bergantung pada satu file.

Tidak harus sama persis. Dikombinasi antara `example-1` dan `example-2` pun bisa. Contoh menggunakan router dari `example-1` dengan memisahkan `web` dan `api`, namun controller nya per modul seperti `example-2`.

Pada controller `users` dan `articles` terdapat perbedaan cara menulis method pada setiap controller nya. Itu digunakan sebagai contoh dimana terdapat 2 alternatif untuk melakukan export sebuah method. Pilihlah salah satu yang lebih cocok dengan anda.

Semoga bermanfaat 🙌
