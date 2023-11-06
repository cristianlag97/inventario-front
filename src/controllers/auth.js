import axios from "axios"



export const loginWithUser = async ({email, password}) => {
  try {
    const resp = await axios.post('http://localhost:3000/api/auth/login', {
      'email': email,
      'password': password,
    });
    const {name,id, token} = resp.data;
    // Guardar el ID del usuario en localStorage
    console.log(resp.data);
    localStorage.setItem('userId', id);
    localStorage.setItem('token', token);

    return {
      ok: true,
      id,
      name,
      email
    }
    
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const registerUser = async ({email, password, name}) => {
  try {
    
  const resp = await axios.post('http://localhost:3000/api/auth/register', {
    'name': name,
    'email': email,
    'password': password,
  });
  const {id, token} = resp.data.user;
    localStorage.setItem('userId', id);
    localStorage.setItem('token', token);

    return {
      ok: true,
      id,
      name,
      email,
    }

  } catch (error) {
    const {data} = error.response;
    return {
      ok: false,
      errorMessage: data.errors[0].msg
    }
  }
}

export const validateToken = async ({id}) => {
  if(!id) return;
  const token = localStorage.getItem('token');

  const config = {
    headers: {
        'x-token': token 
    }
};

  try {
    const resp = await axios.post('http://localhost:3000/api/auth/active', {
      'uid': id
    }, config);
    console.log(resp);
    const {email, name} = resp.data;
    return {
      email,
      name,
      id
    }
  } catch (error) {
    const {data} = error.response;
    return {
      ok: false,
      errorMessage: data.msg
    }
  }
}