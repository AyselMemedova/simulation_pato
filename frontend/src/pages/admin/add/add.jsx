import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./add.css"

const Add = () => {
    const { data, setdata } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Add</title>
            </Helmet>


            <div>
                <Formik
                    initialValues={{ title: '', description: '', price: "" }}

                    onSubmit={(values, { setSubmitting }) => {
                        axios.post("http://localhost:8080/api/simulation", {
                            image: values.image,
                            title: values.title,
                            description: values.description,
                            price: values.price

                        })
                        .then(res=>{
                            setdata([...data,res.data])
                        })


                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>

                            <Field type="text" name="image" id="field" placeholder="Imege URL" />
                            <ErrorMessage name="image" component="div" />

                            <Field type="text" name="title" id="field" placeholder="Title" />
                            <ErrorMessage name="title" component="div" />

                            <Field type="text" name="description" id="field" placeholder="Description" />
                            <ErrorMessage name="description" component="div" />

                            <Field type="number" name="price" id="field" placeholder="Price" />
                            <ErrorMessage name="price" component="div" />

                            <button type="submit" id="button_add" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>

            </div>
        </>
    )
}

export default Add
