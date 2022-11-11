const {createApp} = Vue;

createApp({
  data(){
    return{
      emails: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then( result =>{
        console.log(result.data);
        this.emails.push(result.data.response)
      })
    }

  },

  mounted(){
    for(let i = 0; i< 10; i++){
      this.getApi();
    }

  }
}).mount('#app')