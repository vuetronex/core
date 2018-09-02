import Database from './pages/Database.vue';
import Api from './pages/Api.vue';

const routes = {
    routes: [
        { path: '/', component: Database },
        { path: '/api', component: Api },
    ]
}

export default routes;