<template>
    <div class="book row">
        <ai-image src="https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409" />
        <div class="col">
            <div class="col">
                <div class="title">
                    Harry Potter
                </div>
                <div class="author">
                    J. K. Rowling
                </div>
                <p class="full description">
                    Harry Potter và Hòn đá Phù thủy là cuốn đầu trong loạt tiểu thuyết Harry Potter
                </p>
                <ai-row class="book-button"
                        size="35">
                    <ai-button text="Mượn ngay" />
                    <ai-button icon="" />
                </ai-row>
            </div>
            <ai-line class="light" />
            <ai-row size="20"
                    class="hasShadow">
                <ai-button class="tag"
                           text="Giả tưởng" />
            </ai-row>
        </div>
    </div>
</template>
<script>
import {
    components,
    style
} from 'modules';
export default {
    name: 'book',
    components: {
        ...components('container'),
        ...components('units'),
        ...components('item')
    },
    props: ['what'],
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            // '.book[size="#{$size}"]': [
            //     'width: #{$size}px'
            // ]
        }
    },
    mounted() {
        style.set(this, {
            height: style.get('size', this, 40)
        });
    }
};
</script>