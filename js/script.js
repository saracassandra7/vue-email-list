const {createApp} = Vue;

createApp({
  data(){
    return{
      emails: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      isLoaded: false
    }
  },

  methods:{
    getApi(){
      this.isLoaded= false;
      axios.get(this.apiUrl)
      .then( result =>{
        console.log(result.data);
        this.emails.push(result.data.response);
        this.isLoaded = true;
      })
    }

  },

  mounted(){
    for(let i = 0; i< 10; i++){
      this.getApi();
    }

  }
}).mount('#app')