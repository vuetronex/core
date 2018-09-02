<template>
    <div class="flex items-center mb-2">
        <img class="w-10 h-10 rounded-full mr-4" v-if="avatar" :src="avatar" :alt="`Avatar of ${name}`">
        <div class="text-sm">
            <p class="text-black leading-none">{{ name }}</p>
            <a href="#" class="text-grey-dark no-underline" @click.prevent="onLinkClick">{{ info }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['avatar', 'name', 'info'],
    computed: {
        link() {
            return this.info.includes('@') ? `mailto:${this.info}` : this.info;
        }
    },
    methods: {
        onLinkClick() {
            this.$electron.shell.openExternal(this.link);
        }
    }
}
</script>

