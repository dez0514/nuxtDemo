<template>
    <div>
        <edit-page></edit-page>
    </div>
</template>
<script>
import EditPage from './index.vue';
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    components: {
        EditPage
    }
}
</script>
<style lang="scss" scoped>

</style>


