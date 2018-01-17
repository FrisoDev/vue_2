<script>
    export default {
        beforeCreate () {
            if (!store.state.isLogged) {
                router.push('/login')
            }
        }
    }
</script>
