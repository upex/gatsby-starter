---
templateKey: blog-post
title: 'Vue.js rest api consumption with javascript''s native Promise constructor '
date: 2019-06-13T14:01:54.618Z
category:
  - Vue
  - SPA
thumbnail: /images/vue.png
featuredpost: true
---
Vue doesn't have its own http module, but we can easily make http requests by combining the Vue Resource module and javascript's native new Promise constructor. Vue Resource exposes a $http instance which can be accessed throughout the Vue instance.

**Getting started:**

We will use [vue-cli-3 ](https://github.com/vuejs/vue-cli)to scaffold our project.

```
vue create my-rest-app
```

**Installations:**

```
cd my-rest-app

yarn add vue-resource

Or

npm install vue-resource
```

**Configuration:**

Import Vue Resource module in the main.js file.

**src/main.js**

```
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

Let's create a directory inside **src** to put all api related stuff together.

```
cd src && mkdir api
```

Now create a file called **routes.js** to keep all our routes endpoint in single place. For demonstration purpose we will be using [jsonplaceholder](https://jsonplaceholder.typicode.com/) fake api server and use some of their endpoints.

**src/api/routes.js**

```
const routesConfig = {
    user : {
      USERS: `https://jsonplaceholder.typicode.com/users`
    }
}
export default routesConfig
```

Now create another file called **http-client.js** and define our request methods to be consumed by components.

**src/api/http-client.js**

```
import routes from './routes'
/** Optional headers can be set here */
const headers = {
  'Content-Type': 'application/json;charset=utf-8'
};
export default { 
  methods: {
    /** Pushing Data with a POST Request */
    addUser(context, payload) {
      headers['Authorization'] = `some header value`
      const url = routes.user.USERS;
      return new Promise((resolve, reject) => {
        context.$http.post(url, payload, {headers})
          .then((response) => {
            resolve(response.body);
          }, (e) => {
            reject(e);
          });
      });
    }, 
    /** Fetching Data with a GET Request */
    getUsers(context) {
      const url = routes.user.USERS;
      return new Promise((resolve, reject) => {
        context.$http.get(url, {headers})
          .then((response) => {
            resolve(response.body);
          }, (e) => {
            reject(e);
          });
      });
    }
    /** similarly other requests PUT PATCH DELETE etc goes below */
  }
}
```

Finally we will create an example component to consume the request methods in our application.

**src/components/ExampleComponent.vue**

```
<template>
  <div>
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" v-model="name" placeholder="User name">
      <input type="email" v-model="email" placeholder="Email address">
      <button @click="addUser">Add user</button>
    </form>
    <div class="users">
      <p v-for="(item, index) in users"
      :key="index">
      {{index+1}}. {{item.name}} --- {{item.email}}
      </p>
    </div>
  </div>
</template>
<script>
import http from '../api/http-client'
export default {
  name: 'ExampleComponent',
  /** other code */
  created() {
    const vm = this;
    vm.getAllUsers()
  },
  methods: {
    getAllUsers() {
      const vm = this;
      http.methods.getUsers(vm).then((resp) => {
        vm.users = resp
      })
      .catch(e => {
        console.log('e', e)
      })
    },
    /** other methods */
  }
}
</script>
```

The final code could be found here [source](https://github.com/upex/vue-rest-api).

This shows how easily we can consume rest api's in our Vue applications.
