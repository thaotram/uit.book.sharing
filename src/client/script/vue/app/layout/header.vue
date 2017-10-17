<template>
    <div id="header" class="row" size="40">
        <ai-row>
            <ai-button text="hongphuc" />

        </ai-row>
    </div>
</template>
<script>
import {
    components
} from 'modules';

export default {
    name: 'header',
    components: {
        ...components('row'),
        ...components('button')
    }
};
</script>