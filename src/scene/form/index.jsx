import { useMediaQuery } from '@mui/material'
import { Formik } from 'formik'
import React from 'react'
import Header from '../../components/Header'

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)")
    const handleFormSubmit = (values) => {
        console.log(values)
    }


    return (
      <>
        <Box m="20px">
          <Header title="Create User" subtitle="Create a new user" />
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userScheme}
          >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
              <form onSubmit={handleSubmit}></form>
            )}
          </Formik>
        </Box>
      </>
    );
}

export default Form