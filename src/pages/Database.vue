<template>
    <div class="w-1/2 rounded overflow-hidden shadow-lg bg-white">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Database Example</div>
            <p class="text-grey-darker text-base">
                The below data is coming from the database
            </p>
            <div class="mt-4">
                <User v-for="user in userList" :key="user.id" :name="user.name" :avatar="user.avatar" :info="user.email"></User>
            </div>
        </div>
        <div class="px-6 py-4">
            <router-link class="no-underline inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2" 
                to="/api">API Example &raquo;</router-link>
        </div>
    </div>
</template>

<script>
import User from '../components/User.vue';
import md5 from 'md5';

export default {
    components: {User},
    data() {
        return {
            users: []
        };
    },
    computed: {
        userList() {
            return this.users.map((user) => {
                let hash = md5(user.email.toLowerCase());
                user.avatar = 'https://www.gravatar.com/avatar/'+hash;
                
                return user;
            });
        }
    },
    created() {
        this.$db.User.query().then(data => {
            this.users = data;
        });
    }
}
</script>

