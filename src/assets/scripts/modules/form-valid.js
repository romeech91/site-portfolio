import Vue from "vue";

let inputAttr = document.querySelector('.form__input-name').getAttribute('type');
let inputVal = document.querySelector('.form__input-name').value;

if (inputAttr == 'text' && inputVal >= 0 && inputVal <= 9) {
    console.log('is works!');
}

new Vue({
    el: '#form',
    data() {
        return {
           parameters: {
            name: '',
            email: '',
            text: ''
            } 
        }
        
    },
    methods: {
        addErrorClass(e) {
            e.preventDefault();
                
            e.target.classList.add('invalid');
            e.target.nextSibling.classList.add('error-msg--active');
        },
        deleteErrorClass(e) {
            e.target.classList.remove('invalid');
            e.target.nextSibling.classList.remove('error-msg--active');
        }
    }
})

