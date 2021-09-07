import React, { Component } from "react";
import axios from "axios";
import md5 from "md5";
import uuid from "react-uuid";
import {Link} from "react-router-dom";
import 'spectre.css'

const url = "http://class-components-geek.herokuapp.com/usuario";

export default class Login extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      form: {
        id: "",
        apellido_paterno: "",
        apellido_materno: "",
        nombre: "",
        username: "",
        password: ""
      }
    }
  }

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form); //imprimir todo el estado
  };

  handleSubmit = (e) => {
      e.preventDefault()
  }

  RegistroUsuarios = async () => {
      console.log('wwww')
      await axios.post(url,{
        id: uuid,
        apellido_paterno: this.state.form.apellido_paterno,
        apellido_materno: this.state.form.apellido_materno,
        nombre: this.state.form.nombre,
        username: this.state.form.username,
        password: md5(this.state.form.password)
      }).then(res => {
          alert('Usuario Registrado');
      }).catch(err => {
          console.error(err);
      })
  }

  render() {
    return (
      <div className="Registro py-5 container text-center">
        <form className="form-signin" onSubmit={this.handleSutmit}>
          <h1 className="h3 mb-3 font-weight-normal">
            ¡Registrate en nuestro sistema! 
          </h1>
          <div className="fadeIn first ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS689Xb1GJwNGzZl9KR7CTRKAZFaXt1060H32xPbb8hw_NXNpJ409Sl-aLnPsJQUfKJnYEV_KndttR1bbUKS_f7DGE3OP59H1Y&usqp=CAU&ec=45725305"
              id="icon"
              alt="User Icon"
              width="100px"
            />
            <h3>Crea una cuenta</h3>
          </div>

          <input
            type="text"
            placeholder="Apellido paterno"
            name="apellido_paterno"
            className="form-control"
            autoComplete="off"
            onChange={this.handleChange}
          />

          <input
            type="text"
            placeholder="Apellido materno"
            name="apellido_materno"
            className="form-control"
            autoComplete="off"
            onChange={this.handleChange}
            required=""
          />

          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="nombre"
            required=""
            onChange={this.handleChange}
          />

          <input
            type="email"
            name="username"
            className="form-control"
            placeholder="Email"
            required=""
            onChange={this.handleChange}
          />

          <input
            type="Password"
            name="password"
            className="form-control"
            placeholder="Password"
            required=""
            onChange={this.handleChange}
          />
          <br />

          <input type="button" value="Register" 
          className="btn btn-primary btn-block" 
          onClick={() => this.RegistroUsuarios()}/>
          <br />
          <Link to="/" className="link">
            Already registered?
          </Link>
        </form>
      </div>
    );
  }
}
