import { createApp } from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-3-socket.io'
import { io } from 'socket.io-client';

export const SocketInstance = io.connect("http://localhost:3000", { transports: ['websocket'], upgrade: false});

const app = createApp(App)
app.use(new VueSocketIO({
    debug: true,
    connection: SocketInstance
}))

app.mount('#app')
