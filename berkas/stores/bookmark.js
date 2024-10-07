import { defineStore } from "pinia";
import { ref } from "vue";

export const useBookmarkStore = defineStore('bookmark', () => {
    // State untuk menyimpan array bookmark
    const bookmarks = ref([]);

    // Fungsi untuk menambah bookmark
    const addBookmark = (product) => {
        if (!bookmarks.value.some(item => item.id === product.id)) {
            bookmarks.value.push(product);
        }
    };

    // Fungsi untuk mengecek apakah produk sudah di-bookmark
    const isBookmarked = (productId) => {
        return bookmarks.value.some(item => item.id === productId);
    };

    // Fungsi untuk menghapus bookmark
    const removeBookmark = (productId) => {
        bookmarks.value = bookmarks.value.filter(item => item.id !== productId);
    };

    return { bookmarks, addBookmark, isBookmarked, removeBookmark };
});
