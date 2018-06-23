import Vue from "vue";

const skillsRow = {
    template: "#skills-row",
    props: {
        skillGroupName: String
    }
};

new Vue({
    el: "#skills-container",
    components: {
        skillsRow
    },
    data: {
        skills: {}
    },
    created() {
        const data = require("../../../data/skills.json");
        this.skills = data;
        console.log(data);
    },
    template: "#skills-list"
});