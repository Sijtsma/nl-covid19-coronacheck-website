<template>
    <div>
        <router-link
            v-if="to && label"
            class="link"
            :to="to" >
            {{ label }}
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'PrintFaqPositiveTest',
    props: {
        label: {
            type: String,
            required: false
        },
        to: {
            type: Object,
            required: true
        }
    }
};
</script>
<style scoped lang="scss">
.link {
    display: inline-block;
    padding-top: 8px;
    font-weight: bold;
    text-decoration: none;
}
</style>
