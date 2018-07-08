import Vue from "vue";
import axios from 'axios';

new Vue({
    el: "#auth-component",
    data() {
        return {
            user: {
                name: "",
                password: ""
            }
        };
    },
    methods: {
        login() {
            axios.post('http://localhost:8000/login', this.user).then(response => {
                if(response.status === 200) {
                    const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem("ttl", ttl);
                }
            });
        }
    }
});
