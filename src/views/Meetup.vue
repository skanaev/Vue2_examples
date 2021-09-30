<template>
    <!-- ----------------------------------------------------------------> 
  <div>
     <h1 style="marginTop: 5px; marginBottom: 25px;"> v-model input</h1>
    <div>
      <b-form-input
        v-model="text"
        placeholder="Enter your name"
        size="lg"
        class="container sm">
      </b-form-input>
      <div class="mt-2">V-model magic value: {{ text }}</div>
    </div>

    <h2 style="marginTop: 25px; marginBottom: 15px;"> v-model radio button </h2>
    <div>
      <input type="radio" id="one" value="Один" v-model="picked"> &nbsp;
      <label for="one">Один</label>
      <br> 
      <input type="radio" id="two" value="Два" v-model="picked"> &nbsp; 
      <label for="two">Два</label> 
      <br>
      <span>Выбрано: {{ picked }}</span>
    </div>
     
    <h2 style="marginTop: 15px; marginBottom: 15px;"> v-model checkbox</h2>
    <input type="checkbox" id="checkbox" v-model="checked"> &nbsp; 
    <label for="checkbox">{{ checked }}</label>

    <div class="border" />

    <h1 style="marginTop: 15px; marginBottom: 25px;"> Директивы v-if и v-show </h1>
    <div> 
      <button type="button" class="btn btn-primary" @click="showDescription= !showDescription"> Show information about Vue </button>
      <div v-if="showDescription" class="description"> <strong> v-if </strong> Vue (произносится /vjuː/, примерно как view) — это прогрессивный фреймворк для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов, Vue создан пригодным для постепенного внедрения. Его ядро в первую очередь решает задачи уровня представления (view), что упрощает интеграцию с другими библиотеками и существующими проектами. С другой стороны, Vue полностью подходит и для создания сложных одностраничных приложений (SPA, Single-Page Applications), если использовать его совместно с современными инструментами и дополнительными библиотеками. </div>
      <div v-show="showDescription" class="description"> <strong> v-show </strong> Vue (произносится /vjuː/, примерно как view) — это прогрессивный фреймворк для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов, Vue создан пригодным для постепенного внедрения. Его ядро в первую очередь решает задачи уровня представления (view), что упрощает интеграцию с другими библиотеками и существующими проектами. С другой стороны, Vue полностью подходит и для создания сложных одностраничных приложений (SPA, Single-Page Applications), если использовать его совместно с современными инструментами и дополнительными библиотеками. </div>
    </div>
    <div class="border" />
    <!------------------------------------------------------------------>
 
    <h1 style="marginTop: 15px; marginBottom: 25px;"> Директива v-bind: или сокращённо : </h1>
    <input type="text" class="container sm form-control form-control-sm" v-model="url" />
    <a :href="url" target="_blank">{{url}}</a> &nbsp; &nbsp; &nbsp;       
    <div class="border" />

    <h2 style="marginTop: 15px; marginBottom: 25px;"> Директива v-bind: Динамически изменяем тип инпута </h2>
    <input :type="inputType" class="container sm form-control form-control-sm" v-model="password" />
    <button type="button" class="btn btn-primary" style="marginTop: 10px" @click="inputType = inputType === 'password' ? 'text': 'password'"> Поменять тип inputа на password </button>
    <div class="border" />

     <!------------------------------------------------------------------>
    <h1 style="marginTop: 15px; marginBottom: 25px;"> Модификаторы: форма </h1>
    <form @submit.prevent="sendRequest($event)">
      <input v-model="message" placeholder="отредактируй меня">
      <p>Введённое сообщение: {{ message }}</p>
    </form>
    
    <h2 style="marginTop: 15px; marginBottom: 25px;"> Модификаторы: всплытие события </h2>
    <div @click="clickParentMethod()"> 
       <div @click.stop="clickChildMethod()"> Кликни на меня </div> 
    </div>

    <h2 style="marginTop: 15px; marginBottom: 25px;"> Модификаторы для v-model (lazy и другие)</h2>
    <form @submit="sendRequest()">
      <input v-model.lazy="message2" placeholder="отредактируй меня">
      <p>Введённое сообщение: {{ message2 }}</p>
    </form>

    <div class="border" />
<!------------------------------------------------------------------>

    <h1 style="marginTop: 25px; marginBottom: 5px;"> Развеиваем магию v-model </h1>
    <div style="marginTop: 15px; marginBottom: 25px;">
      <input
        :value="text2" 
        @input="text2 = $event.target.value"
        placeholder="Enter your name"
        class="container sm form-control form-control-lg"
      />
      <div class="mt-2"> Native input value: {{ text2 }}</div>
    </div>
    <div class="border" />
    

    <!------------------------------------------------------------------>
    <h1 style="marginTop: 25px; marginBottom: 5px;"> Methods, Computed, Watch </h1>
    <h2 style="marginTop: 45px; marginBottom: 25px;"> computed - вычисляемые свойства </h2>
    <div>
      <button type="button" class="btn btn-primary" @click="counterUp"> Кликни на меня  </button>
      <button type="button" class="btn btn-primary" style="marginLeft: 10px" @click="counter = 0"> Очистить </button>
      <div class="description" :class="{'green': сounterMoreThan5()}"> Использум method: Кол-во кликов: {{counter}} </div>
      <div class="description" :class="{'green': сounterIsGreen}"> Использум computed: Кол-во кликов: {{counter}} </div>
    </div>
    <div class="border" />

    <!------------------------------------------------------------------>

    <h1 style="marginTop: 45px; marginBottom: 25px;"> Директива v-for </h1>
    <ul class="list-group">
      <li
        v-for="item in list"
        :key="item.id" 
        class="list-group-item"
        >
          {{item.text}} 
      </li>
    </ul>
    <div class="border" />

    <!------------------------------------------------------------------>
    <h1 style="marginTop: 45px; marginBottom: 25px;"> Директива v-for + слушатель события. Проблемы с реактивностью</h1>
    <div class="list-group">
        <custom-form
          title="add Todo"
          class="list-group-item"
          @addTodo="addNewTodo"
        />
    </div>

    <li v-for="todo in todos" :key="todo.id" class="list-group-item">
        {{todo.text}}
    </li>
  
    <!-- <div> Отфильтрованные todo: {{filteredTodos}}</div>  -->

    <button type="button" class="btn btn-primary" style="margin: 10px" @click="todos = []"> Очистить список  </button> 
    <div> {{getText()}}</div> 
    <div class="border" />
  
    <!------------------------------------------------------------------>

    <h1 style="marginTop: 45px; marginBottom: 25px;"> Слоты </h1>
    <MessageBox>
        <template v-slot:header>   
          <h3> Проблема с одним из важных сервисов </h3>  
        </template>
        <template v-slot:default="slotProps">
          <div> WARNING for user: {{slotProps.user.name}} </div> 
        </template>
    </MessageBox>
    <div class="border" />
    <!------------------------------------------------------------------>

    <h1 style="marginTop: 45px; marginBottom: 25px;"> VUEX </h1>
    <span v-if="user"> Имя: {{user.name}}, возраст: {{user.age}} </span>
    <span v-else> Загрузка данных о пользователе </span> 

    <h2  style="marginTop: 25px;"> Использование геттеров </h2>
    <span v-if="onlyCoders.length"> 
      <div v-for="(employee, index) in onlyCoders" :key="index">
          Имя: {{employee.name}}, возраст: {{employee.age}} 
      </div>
    </span>
    <span v-else> Загрузка сотрудников программистов </span> 
    <div class="border" />
    <!------------------------------------------------------------------>

  </div>
</template>

<script>
import CustomForm from './CustomForm.vue'
import MessageBox from './MessageBox.vue'
import {mapGetters, mapState} from 'vuex'
export default {
  components: {
    CustomForm, MessageBox
  },
  data () {
    return {
      additionalData: {},
      inputType: 'text',
      checked: null,
      picked: null,
      message: '',
      message2: '',
      url: 'https://google.com',
      password: null,
      text: '',
      text2: '',
      showDescription: false,
      counter: 0,
      list: [
        {id: '1', text: "check code for frontend meetup"},
        {id: '2', text: "help parents"},
        {id: '3', text: "buy bread"},
        {id: '4', text: "go for a walk"},
        {id: '5', text: "learn Vue"},
        {id: '6', text: "play computer"}
      ],
      todos: []
    }
  },
  methods: {
    changeInputType() {
      if (this.inputType === 'password') this.inputType = 'text'
      else if (this.inputType === 'text') this.inputType = 'password'
    },
    clickChildMethod () {
      console.log('childMethod handler')
    },
    clickParentMethod () {
      console.log('parentMethod handler')
    },
    sendRequest () {
      alert('Hello All!')
    },
    counterUp () {
      this.counter++
    },
    сounterMoreThan5 () {
      console.log('сounterMoreThan5 method call')
      return this.counter > 5
    },
    addNewTodo (todo) {
      const id = +new Date()
      this.todos.push({id: id, text: todo})
      if (this.todos.length === 5) this.additionalData.someText = 'Вы добавили уже 5 дел' // Проблема реактивности у объектов

      // Как пофиксить: if (this.todos.length === 5) this.$set(this.additionalData, 'someText', 'Вы добавили уже 5 дел')

      // Проблемы реактивности у массивов (потестить в консоли)
      // this.todos.length = 3 // не реактивно  //fix: $vm.todos.splice(3)
      // this.todos[1] = {id: 0, text: 'new text'} // не реактивно  //fix $vm.todos.splice(0, 1, {id: '123123', text: 'reactive changes'})
    },                                                               // $vm.$set($vm.todos, 0, {id: '123123', text: 'reactive changes'})
    getText() {
      return `Значение переменной someText: ${this.additionalData.someText ? this.additionalData.someText : 'Переменная ещё не существует на экземпляре компонента'}`
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    }),
    ...mapGetters({
      onlyCoders: 'onlyCoders'
    }),
    сounterIsGreen () {
      console.log('сounterIsGreen method call')
      return this.counter > 5
    },
    filteredTodos () {
      return this.todos.filter (todo => todo.text.length > 15)
    }
  },
  watch: {
    counter: function (newValue) {
      console.log('watch, новое значение в поле counter', newValue)
    }
  },
  mounted () {
    this.$store.dispatch('getUserInfo')
    this.$store.dispatch('getEmployees')
  },
}
</script>

<style scoped>
  .description {
    color: #757575;
    margin-top: 20px;
  }
  .green {
    color: #00a533;
  }
  .border {
    margin-top: 50px;
    border: 3px solid #00a533 !important;
  }

</style>