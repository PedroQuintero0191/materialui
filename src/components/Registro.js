import React from 'react'
import { Grid,Paper,Avatar,TextField} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";




const Registro=()=>{

  const [name, setname] = React.useState('')
  const [correo, setCorreo] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [lista, setLista] = React.useState([])

  const guardarDatos = (e) => {

      e.preventDefault()

      if(!name.trim()){
          console.log('esta vacio nombre')
          return
      }

      if(!correo.trim()){
          console.log('esta vacio correo')
          return
      }

      if(!password.trim()){
          console.log('esta vacio password')
          return
      }

// console.log('procesando datos...' + nombre +' '+ correo+' '+ password )

setLista([
    ...lista,
    {nombraNombre: name, nombreDireccion: correo, nombreTelefono: password }
])

e.target.reset()
setname('')
setCorreo('')
setPassword('')

fetchData()

}
  //
  // React.useEffect(() => {
  //         fetchData()
  //     }, [])
  const fetchData = async () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name, login: correo, password: password })
  };
  const response = await fetch('http://192.168.0.121:3001/users',requestOptions);
  const data = await response.json();
  // this.setState({ postId: data.id });
}

      // const fetchData = async () => {
      //   console.log(name, correo, password)
      //     const requestOptions = {
      //       method: 'POST',
      //       headers: {'Content-Type':'aplication/json'},
      //       body: JSON.stringify({"name":'name',
      //                            "login":'correo',
      //                            "password":'password'
      //                                   })
      //     }
      //
      //     try{
      //       const data = await fetch('http://192.168.0.121:3001/users',requestOptions)
      //       const users = await data.json()
      //       this.setState({postId:users})
      //
      //        console.log(users)
      //     }
      //     catch (error){
      //       console.log(error)
      //     }
      //
      //     // setUsuarios(users)
      // }


const paperStyle={padding :20,height:'70vh',width:270,margin:'20px auto'}
const avatarStyle={backgroundColor:'#325ed8'}
const btnstyle={margin:'8px 0'}

    return (
      <Grid >
          <Paper elevation={10} style={paperStyle}>

                <Grid align='center'>
                <Avatar style={avatarStyle}><LockIcon/></Avatar>
                  <h2>Sign up </h2>

                  <form onSubmit={ guardarDatos } >
                  <TextField label='Nombre' placeholder='Ingresar Nombre' onChange={ e => setname(e.target.value) }fullwidth required/>
                  <TextField label='Correo Electronico' placeholder='Ingresar Correo'  onChange={ e => setCorreo(e.target.value) }  fullwidth required/>
                  <TextField label='Password' placeholder='Ingresar Clave' type='Password'   onChange={ e => setPassword(e.target.value) } fullwidth required/>


                    <Button type='submit'color='primary' variant='contained' style={btnstyle} fullwidth>Registrar</Button>

                  </form>



                </Grid>
            </Paper>
        </Grid>

    )
}

export default Registro
