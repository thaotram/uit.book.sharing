<template>
    <div class="contain">
        <div class="row full">
            <slot/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'contain'
};
</script>
<style lang="scss">
.contain {
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    &.wrap {
        flex-wrap: wrap;
        width: auto;
    }
    >.row {
        overflow: visible;
        max-width: 1400px;
    }
}

// width < 600px
@media all and (max-width:575px) {
    .contain {
        padding: 0 10px;
    }
}

// 600px < width
@media all and (min-width:576px) {
    .contain {
        padding: 0 50px;
    }
}
</style>