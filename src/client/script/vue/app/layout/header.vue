<template>
    <div id="header"
         class="row"
         size="40">
        <ai-container style="background: rgba(0,50,90,0.2)"
                      class="row">
            <ai-label id="logo"
                      text="BookSharing"
                      style="flex:1" />
            <ai-image src="https://graph.facebook.com/ai.scanlation/picture?width=200" />
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