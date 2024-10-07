import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useBookmarkStore = defineStore("bookmark", () => {
    //    refs
    const bookmarks = ref([]);

    const addBookmark = (product) => {
        if ( bookmarks.value.includes(product) ) {

            // remove bookmark
            bookmarks.value = bookmarks.value.filter( id => id !== product );
            return;
        }

        // add bookmark
        bookmarks.value.push( product );
    }


    // action: check pokemon id is bookmarked
    const isBookmarked = (product) => bookmarks.value.includes( product );

    // getter: length of bookmarks
    const getBookmarkLength = computed(() => bookmarks.value.length);

    return { bookmarks, addBookmark, isBookmarked, getBookmarkLength }
})