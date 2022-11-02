import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NewTaskView from '../views/NewTaskView.vue'
import EditTaskView from '../views/EditTaskView.vue'
import DeleteTaskView from '../views/DeleteTaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tasks/new',
      name: 'new-task',
      component: NewTaskView
    },
    {
      path: '/task/edit',
      name: 'edit-task',
      component: EditTaskView
    },
    {
      path: '/task/deletes',
      name: 'delete-task',
      component: DeleteTaskView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
