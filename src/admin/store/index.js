import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import skills from "./modules/skills";
import user from "./modules/user";

export default new Vuex.Store({
    modules: {
        skills,
        user
    }
});

