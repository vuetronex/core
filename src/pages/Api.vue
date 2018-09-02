<template>
    <div class="w-1/2 rounded overflow-hidden shadow-lg bg-white">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Api Example</div>
            <p class="text-grey-darker text-base">
                The below data is coming from the api
            </p>
            <div class="mt-4 overflow-y-scroll overflow-x-hidden" style="max-height: 200px;">
                <User v-for="user in users" :key="user.id" 
                    :avatar="user.avatar_url" :name="user.login" :info="user.html_url"></User>
            </div>
        </div>
        <div class="px-6 py-4">
            <router-link class="no-underline inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2" 
                to="/">&laquo; Database Example</router-link>
        </div>
    </div>
</template>

<script>
import User from '../components/User.vue';

export default {
    components: {User},
    data() {
        return {
            users: []
        }
    },
    created() {
        this.$http.get('https://api.github.com/users').then((response) => {
            this.users = response.data;
        });
    }
}
</script>

