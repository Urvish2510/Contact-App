import RegisterComponent from '../containers/Register/index';
import LoginComponent from '../containers/Login/index';
import ContactsComponent from '../containers/Contacts/index';
import CreateContactComponent from '../containers/CreateContact/index';

const routes = [
    {
        path: "/auth/register",
        component: RegisterComponent,
        title: "Register"
    },
    {
        path: "/auth/login",
        component: LoginComponent,
        title: "Login"
    },
    {
        path: "/",
        component: ContactsComponent,
        title: "Contacts"
    },
    {
        path: "/contacts/create",
        component: CreateContactComponent,
        title: "Create Contact"
    }
]

export default routes;