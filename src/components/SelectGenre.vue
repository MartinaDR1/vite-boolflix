<script>
export default {
    name: 'SelectGenre',
}
</script>

<template>
    <!-- TODO caricare dinamicamente -->
   <select class="mx-3">
    <option value="">Generi</option>
    <option value="" >Azione</option>
    <option value="" >Avventura</option>
    <option value="" >Animazione</option>
    <option value="" >Commedia</option>
    <option value="" >Crime</option>
   </select>
</template>


<style lang="scss" scoped>
select{
    width: 80px;
    background-color: rgba(0, 0, 0, 0.26);
    color: rgba(255, 255, 255, 0.747);

}
</style>