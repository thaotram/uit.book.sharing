<template>
    <div id="sidebar"
         class="col hasShadow">
        <ai-space size="40" />
        <h6>Thành viên tích cực</h6>
        <div class="col users hasShadow">
            <div class="row user hasShadow"
                 v-for="(user, index) in users"
                 :key="index">
                <ai-image size="30"
                          class="round"
                          :src="user.picture.thumbnail" />
                <ai-space size="10" />
                <ai-label class="full"
                          :text="user.name.last" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {
    components
} from 'modules';

export default {
    name: 'sidebar',
    components: {
        ...components('container'),
        ...components('units')
    },
    data() {
        return {
            users: []
        };
    },
    mounted() {
        var self = this;
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
#sidebar {
    width: 200px;
    color: #999; // background: blueviolet;
    .users {
        margin: 10px 0;
    }
    .user {
        margin: 5px 0;
        >.image {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5)
        }
    }
}
</style>