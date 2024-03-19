console.log('works');
//https://flynn.boolean.careers/exercises/api/random/mail

const { createApp } = Vue

createApp({
    data() {
        return {
            randomEmails: []
        }
    },
    methods: {
        callApi() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => { this.randomEmails.push(response.data.response) });
            }
            console.log(randomEmails);
        }
    },
    mounted() {
        this.callApi()
    }
}).mount('#app')