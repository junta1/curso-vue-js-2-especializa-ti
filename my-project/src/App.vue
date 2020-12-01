<template>
  <div id="app" class="comp">
    Testando: {{msg}}

    <test-component></test-component>
    <form-component></form-component>
    <taks-component></taks-component>
  </div>
</template>

<script>
import TestComponent from './components/TestComponent'
import FormComponent from './components/FormComponent'
import TaksComponent from './components/TaksComponent'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Curso de Vue Js - Especializa Ti'
    }
  },
  components: {
    TestComponent,
    FormComponent,
    TaksComponent
  }
}
</script>

<style>

.comp{
  border: 1px solid blue;
  margin: 5px;
  padding: 5px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
