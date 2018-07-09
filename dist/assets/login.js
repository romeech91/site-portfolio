import Vue from "vue";
import axios from "axios";

new Vue({
    el: "#auth-component",
    data() {
        return {
            user: {
                name: "adminRoma",
                password: "admin"
            }
        };
    },
    methods: {
        login() {
            console.log('RABOTAET');
            axios.post("http://webdev-api.loftschool.com/login", this.user).then(response => {
                if (response.status === 200) {
                    const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("ttl", ttl);
                }
            });
        },
        addErrorClass(e) {
            e.preventDefault();
            e.target.classList.add("invalid");
            e.target.nextSibling.classList.add("error-message--active");
        },
        deleteErrorClass(e) {
            e.target.classList.remove("invalid");
            e.target.nextSibling.classList.remove("error-message--active");
        }
    }
});