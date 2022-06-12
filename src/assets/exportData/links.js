export const staticLinks = {
  main: '/',
  form: '/forms/:id',
  auth: '/authorization',
  register: '/registration',
  confirmEmail: '/confirmEmail',
  myForms: '/myForms',
  forms: 'forms'
}

export const dynamicLinks = {
  form: (id) => `/forms/${id}`
}