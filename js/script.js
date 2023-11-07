const {createApp} = Vue;

createApp({
    data(){
        return{
            emails:[]
        }
    },
    methods:{

    },
    mounted(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
                // console.log(resp.data.response);
                this.emails.push(resp.data.response);
    
            })
        }

    }
}).mount('#app')