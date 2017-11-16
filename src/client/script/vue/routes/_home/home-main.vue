<template>
    <div id="home-main"
         class="full">
        <ai-list-of-books :books="books" />
    </div>
</template>

<script>
import axios from 'axios';
import {
    components
} from 'modules';
export default {
    name: 'home-main',
    components: {
        ...components('list-of-items'),
        ...components('units')
    },
    data() {
        return {
            books: []
        };
    },
    created() {
        const self = this;
        axios
            .get('/api/book')
            .then((response) => {
                self.books = response.data;
            });
    }
};
</script>

<style lang="scss">
#home-main {
    padding: 20px 0;
}
</style>