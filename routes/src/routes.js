import HomeComponent from './components/HomeComponent'
import ProductsComponent from './components/ProductsComponent'
import TasksComponent from './components/TasksComponent'
import NotFoundComponent from './components/NotFoundComponent'

export default [
    {path: '/', component: HomeComponent},
    {path: '/produtos', component: ProductsComponent},
    {path: '/tarefas/:id', component: TasksComponent, name: 'tasks', props: true},
    {path: '/redirect', redirect: '/produtos'},
    {path: '*', component: NotFoundComponent}

]