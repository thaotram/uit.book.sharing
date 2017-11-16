<script>
import {
    components
} from 'modules';
export default {
    name: 'template',
    render(h) {
        return h(
            'ai-row', {
                class: 'nav',
                attrs: {
                    size: 30
                }
            },
            this.links ? this.links.map((link, index) => {
                return [
                    index === 0 ? null : h('span', {
                        class: 'icon'
                    }, ''),
                    h('router-link', {
                        props: {
                            to: link[1]
                        }
                    }, link[0])
                ];
            }) : null
        );
    },
    props: ['links'],
    components: {
        ...components('contain'),
        ...components('units')
    }
};
</script>

<style lang="scss">
.nav {
    >* {
        height: 30px;
        line-height: 30px;
    }
    >a {
        font-size: 16px;
    }
    >span {
        margin: 0 10px;
    }
}
</style>