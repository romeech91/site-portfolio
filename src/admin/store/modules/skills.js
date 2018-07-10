const skills = {
    state: {
        data: []
    },
    mutations: {
        fillUpSkills(state, skills) {
            state.data = skills;
        }
    },
    actions: {
        addNewSkill(store, skill) {
            console.log(skill);
            return this.$axios
                .post("/skills", skill)
                .then(response => {
                    console.log("addSkill", response);
            })
            .catch(e => console.error(e));
        },
        fetchSkills({commit}) {
            return this.$axios
                .get("/skills/1")
                .then(response => {
                    commit('fillUpSkills', response.data);
                })
            .catch(e => console.error(e));
        }
    }
};



export default skills;