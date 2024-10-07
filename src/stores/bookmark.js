import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useBookmarkStore = defineStore("bookmark", () => {
    //    refs
    const bookmarks = ref([]);

    const addBookmark = (productId) => {
        if ( bookmarks.value.includes(productId) ) {

            // remove bookmark
            bookmarks.value = bookmarks.value.filter( id => id !== productId );
            return;
        }


        bookmarks.value.push( productId );
    }


    // action: check pokemon id is bookmarked
    const isBookmarked = (productId) => bookmarks.value.includes( productId );

    // getter: length of bookmarks
    const getBookmarkLength = computed(() => bookmarks.value.length);

    return { bookmarks, addBookmark, isBookmarked, getBookmarkLength }
})