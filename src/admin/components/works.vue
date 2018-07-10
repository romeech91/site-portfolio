<template lang="pug">
    .wrap
        input(type="text" placeholder="title" v-model="work.title")
        input(type="text" placeholder="techs" v-model="work.techs")
        input(type="text" placeholder="link" v-model="work.link")
        input(type="file")
        button(@click="addWork") Добавить
</template>



<script>
import {mapActions} from 'vuex';

export default {
    data() {
        return {
            work: {
                title: "",
                techs: "",
                link: "",
                photo: ""
            }
        }
    },
    methods: {
        ...mapActions(["addNewWork"]),
        addWork() {
            this.addNewWork();
        }
    }
}
</script>
