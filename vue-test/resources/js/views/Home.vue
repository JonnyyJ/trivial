<template>
    <div class="container">
        <div class="colums">
            <div class="colum">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">jonnyy </div>
                       <p>
                            {{ status.user.name}} said... 
                       </p>

                       <p>

                          A moment ago... 
                       </p>
                    <div class="message-body" v-text="status.body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
              data(){
                  return{
                      statuses: []
                  }
              },

              created(){
                  axios.get('/statuses')
                   .then(({data}) => this.statuses = data);
              }
        }
    
</script>
