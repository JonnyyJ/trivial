//<coupon v-model="coupon"></coupon>

Vue.component('coupon', {

    props: ['code'],
    //key
    template: `
    <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
    `,
    

    data(){
        return{
           invalids: ['ALL', 'something']
        }
    },
    methods: {
        updateCode(code){

            if(this.invalids.includes(code)){
                alert('go fuck urself')

                this.$refs.input.value = code = ``;
            }
          
             
            this.$emit('input', code);
        }
    }
})




new Vue({
    
    el: '#app',

    data:{
        coupon: 'freebie'
    }
})