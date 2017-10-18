<template>
    <div id="header"
         class="row"
         size="50">
        <ai-container class="row">
            <ai-label id="logo"
                      text="BookSharing"
                      style="flex:1" />
            <ai-col class="square">
                <ai-image size="30" src="https://graph.facebook.com/ai.scanlation/picture?width=200" />
            </ai-col>
        </ai-container>
    </div>
</template>
<script>
import {
    components
} from 'modules';

export default {
    name: 'header',
    components: {
        ...components('container'),
        ...components('units')
    }
};
</script>
<style lang="scss">
#header {
    color: #666;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    #logo {
        >.text {
            font-family: 'Pacifico', cursive;
            font-size: 1.2em;
            flex: 1;
            text-align: left;
        }
    }
}
</style>