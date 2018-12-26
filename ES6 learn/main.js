Vue.component({
    template:`





    <div class= "tabs-details"> 
 <slot></slot>
</div>
    `

    mounted(){
        console.log(this.$children)

    }
}) 

Vue.component('tab', {
    template: `
      <div><slot></slot></div>
    `,
     
    props:{
        name: {required: true},

        selected: { default: false}
    }
});

new Vue({
    el: '#root',

    data:{

        showModal:false
    }
});