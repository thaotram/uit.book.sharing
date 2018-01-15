<template>
    <div class="col users hasShadow">
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
    margin: 10px 0;
}

.user {
    margin: 5px 0;
    >.image {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5)
    }
}
</style>