<template lang="pug">
    tr
        td {{skill.title}}
        td 
            span {{skill.percent}} %
        td
            button() удалить
</template>

<script>
export default {
    props: {
        skill: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
