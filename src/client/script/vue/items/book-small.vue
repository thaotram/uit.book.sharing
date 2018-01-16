<template>
    <div class="book row hasShadow">
        <router-link class="image-link"
                     :to="'/Sách/' + book.id">
            <ai-image :src="book.image" />
        </router-link>
        <ai-button icon=""
                   class="heart noHover" />
        <div class="col">
            <div class="col hasShadow">
                <h4 class="title">
                    {{ book.title }}
                </h4>
                <div class="author">
                    {{ book.author }}
                </div>
                <div class="full" />
                <div class="info">
                    <p>Tổng: 7</p>
                    <p>Đang chờ: 2</p>
                    <p>Đang mượn: 5</p>
                </div>
            </div>
            <ai-line class="light" />
            <ai-row size="20"
                    class="hasShadow">
                <ai-button class="tag"
                           v-for="tag in book.tags"
                           :key="tag"
                           :text="tag" />
            </ai-row>
        </div>
    </div>
</template>
<script>
import {
    components
} from 'modules';
export default {
    name: 'BookSmall',
    components: {
        ...components('container'),
        ...components('units')
    },
    props: {
        book: {
            type: Object,
            default: () => ({})
        }
    },
    data: () => ({
        dataBook: undefined
    })
};
</script>
<style lang="scss">
$size: 20px;
$image-size: 200px;
$red: #ff4d4d;
// $blue: #3498db;
.book {
    flex: 1;
    margin: 30px 10px 10px 10px;
    min-width: $image-size * 2;
    max-width: $image-size * 2;
    position: relative;
    >.image-link {
        display: block;
        position: absolute;
        top: $size * -1;
        left: $size;
        height: $image-size;
        width: $image-size / 8 * 5;
        border-radius: 3px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
        overflow: hidden;
        >.image {
            width: 100%;
            height: 100%;
        }
    }
    >.heart {
        position: absolute;
        right: $size;
        top: $size;
        padding: 10px;
        font-size: 20px;
        color: rgba($red, 0.8);
        text-shadow: 0 0 0px rgba($red, 0);
        transition: all 0.2s;
        cursor: pointer;
        * {
            overflow: visible;
        }
        &:hover {
            text-shadow: 0 0 15px rgba($red, 0.5);
        }
    }
    >.col {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        overflow: hidden!important;
        background: white;
        flex: 1;
        >.col:nth-child(1) {
            margin-left: $image-size / 8 * 5 + $size * 2;
            padding: $size $size $size 0;
            height: $image-size - $size * 2;
            >.title {
                font-weight: bold;
                line-height: 1em;
                padding: 10px 0 3px 0;
            }
            >.author {
                color: rgba(black, 0.6);
                font-weight: bold;
                font-size: 0.9em;
                line-height: 1em;
            }
            >.info {
                font-size: 0.9em; // margin: 10px 0;
            }
        }
        >.line {
            height: 2px;
        }
        >.row:nth-child(3) {
            margin: $size * 0.75 calc(#{$size} - 0.25em);
            >.tag {
                background-color: #3498db;
                box-shadow: 0 0 10px rgba(#3498db, 0.5);
                color: white;
                border-radius: 20px;
                padding: 0 0.25em;
                margin: 0 0.25em;
            }
        }
    }
}

.book-enter,
.book-leave-to {
    opacity: 0;
    transform: scale(0);
}

.book-enter-to {
    opacity: 1;
    transform: scale(1);
}

.book-move {
    opacity: 1;
    transition: all 0.5s;
}
</style>