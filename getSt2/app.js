const app= Vue.createApp({

data(){
    return{
        courseGoal: 'Finish Vue',
        vueLink:'https://vuejs.org'
    };
    
},
methods: {
outputGoal (){
    const randomNumber= Math.random();
    if(randomNumber<0.5){
        return "Learn vue again"
    }
    else{
        return "You Mastere"
    }
}
}
    
});
app.mount('#user-goal')