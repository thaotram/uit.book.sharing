<script>
import {
    components
} from 'modules';
export default {
    name: 'template',
    render(h) {
        return h(
            'transition-group', {
                class: 'nav row',
                props: {
                    name: 'nav'
                }
            }, this.links ? this.links.map((link, index) => {
                return [
                    index === 0 ? null : h('span', {
                        class: 'icon',
                        key: index
                    }, ''),
                    h('router-link', {
                        props: {
                            to: link[1]
                        },
                        key: link[0]
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
    height: 30px;
    >* {
        height: 30px;
        line-height: 30px;
    }
    >a {
        font-size: 1.2em;
    }
    >span {
        margin: 0 10px;
        font-weight: bold;
        color: #3498db
    }
}

.nav-enter-active,
.nav-leave-active {
    transition: all 0.3s!important;
}

.nav-enter,
.nav-leave-to {
    opacity: 0;
}
</style>