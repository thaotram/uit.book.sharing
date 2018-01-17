<template>
    <div class="col users hasShadow"
         size="30">
        <ai-user v-for="(user, index) in users"
                 :key="index"
                 :user="user" />
    </div>
</template>

<script>
import axios from 'axios';
import {
    components
} from 'modules';

export default {
    name: 'AiListOfUsers',
    components: {
        ...components('items')
    },
    data() {
        return {
            users: []
        };
    },
    mounted() {
        const self = this;
        axios.get('https://randomuser.me/api/', {
            params: {
                inc: 'name,picture',
                nat: 'vn',
                gender: 'female',
                results: 5
            }
        }).then(function(response) {
            self.users = response.data.results;
        });
    }
};
</script>

<style lang="scss">
.users {
    margin-top: 25px;
    >.user {
        margin: 0.25em;
    }
}
</style>