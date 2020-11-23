Vue.component('peoples-list', {
  props: {
    peoples: {
      type: Array,
      required: true
    },
    deleteuser: {
      type: Function,
    }
  },
  template: `
    <div>
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <User @deleteuser="deleteuser" v-for="(user, index) in this.peoples" :user="user" :index="index"></User>  
      </table>

    </div>
  `,
  data() {
    return {
      sad: 'Socks'
    }
  }
})

Vue.component('User', {
  props: {
    user: {
      type: Object,
    },
    index: {
      type: Number,
    }
  },
  methods: {
    log() {
      console.log(this.index, this.user);
      this.$emit('deleteuser', this.index)
    }
  },
  template: `
  <tr> 
    <td>{{ user.name }}</td>
    <td>{{ user.surname }}</td>
    <td>{{ user.email }}</td>
    <td><button @click="log">settings</button></td>
  </tr>
  `
})

Vue.component('add-user', {
  data() {
    return {
      user: {
        name: '',
        surname: '',
        email: ''
      },
      showModal: false
    }
  },
  methods: {
    onSubmit() {
      this.$emit('adduser', { ...this.user, id: +new Date() })
  
      this.user.name = ""
      this.user.surname = ""
      this.user.email = ""
    }
  },
  template: `
    <div> 
    <button @click="showModal = !showModal">Add user</button>

    <form v-show="showModal" @submit.prevent="onSubmit">
      <label>Name:<input type="text"v-model="user.name"></label>
      <label>Surname:<input type="text"v-model="user.surname"></label>
      <label>Email:<input type="text"v-model="user.email"></label>
      <button type="Submit">Add user</button>
    </form>

    </div>
  `
});

Vue.component("modal", {
  template: `
   <div class="modal-mask">
      <button class="modal-default-button" @click="$emit('close')">
       OK
      </button>
    </div>`
});

var app = new Vue({
  el: '#app',
  data: {
    peoples: [
      { 
        name: "yurii",
        surname: "strakhov",
        email: "yrua@gmail.com",
        id: 21
      },
      { 
        name: "mama",
        surname: "strakhov",
        email: "yrueqweqweqwea@gmail.com",
        id: 22
      }
    ]
  },
  methods: {
    adduser(user) {
      this.peoples.push(user);
      console.log(this.peoples);
    },
    deleteuser(index) {
       this.peoples.splice(index, 1);
      // changing props below and it works
      // (this.peoples.find(element => element.id === id).name = "swat");
    }
  }
});
