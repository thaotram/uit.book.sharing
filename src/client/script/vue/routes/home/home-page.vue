<template>
    <div>
        <!-- TODO: add home-header -->
        <ai-contain class="row">
            <ai-home-sidebar class="hidden-sm-down" />
            <ai-line class="dark hidden-sm-down" />
            <ai-home-main/>
        </ai-contain>
    </div>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'home',
    components: {
        ...components('contain'),
        ...components('units'),
        ...components('routes/home')

    }
};
</script>