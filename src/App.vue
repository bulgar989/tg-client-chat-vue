<template>
  <div>
    <button @click="clickButton">78678678</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    sockets: {
      connect: function () {
        console.log('Connected. Sending Authentication');
        this.$socket.emit('my message', 'asdgsdgsdfg');
      },
    },
    methods: {
      clickButton: function () {
        this.$socket.emit('my message', 'sdfsdfgdfsdfsdfgdf')
      }
    },
    mounted() {
      this.$socket.on('foo', (socket) => {
        console.log(socket)
      })
    }
  }
</script>
