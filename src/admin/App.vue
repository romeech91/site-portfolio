<template lang="pug">
  div
    form.form
      label(for='name') Введите имя
      input#name(type='text', required, v-model='parameters.name'
                  @invalid='addErrorClass', @focus='deleteErrorClass')
      .error-message Ошибка
      label(for='email') Введите email
      input#email(type='email', required, v-model='parameters.email'
                  @invalid='addErrorClass', @focus='deleteErrorClass')
      .error-message Ошибка
      label(for='number') Введите число
      input#number(type='number', required, v-model='parameters.number'
                    @invalid='addErrorClass', @focus='deleteErroClass')
      .error-message Ошибка
      label(for='text') Введите текст
      textarea#text(v-model='parameters.text')
      .form__actions
        button(type='reset') Очистить
        button(type='submit') Отправить
    pre {{ data }}
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      parameters: {
        name: '',
        email: '',
        number: null,
        text: ''
      }
    }
  },
  methods: {
    addErrorClass (e) {
      console.log(e)
      e.target.classList.add('invalid')
      e.target.nextSibling.classList.add('error-message--active')
    },
    deleteErrorClass (e) {
      e.target.classList.remove('invalid')
      e.target.nextSibling.classList.remove('error-message--active')
    }
  }
};
</script>
<style>
</style>
