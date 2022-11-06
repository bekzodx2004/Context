import Content from "./Content/Content";
import Form from "./Form/Form";

export let ochiq = [
    {
        id : Math.random(),
        path : '/',
        element : <Content/>
    },
    {
        id : Math.random(),
        path : 'form',
        element : <Form/>
    }
]

export let yopiq = [
    {
        id : Math.random(),
        path : '*',
        element : <Form/>
    },
]