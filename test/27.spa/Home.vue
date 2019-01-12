<script>

  import moment from 'moment';
  import Status from '../models/Status';
export default {
    data(){
        return {
            statuses: []
        }
    },

    created() {
        Status.all(statuses => this.wstatuses = statuses);
    },
}
</script>
