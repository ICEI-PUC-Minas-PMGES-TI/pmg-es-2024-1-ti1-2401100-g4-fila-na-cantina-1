import { auth, database, createUserWithEmailAndPassword, ref, set, signInWithEmailAndPassword } from '../script.js';

const emailCliente = document.getElementById("email-cliente");
const psswrdCliente = document.getElementById("psswrd-cliente");
const nomeCliente = document.getElementById("nome-cliente");
const signUpCliente = document.getElementById("btn-cadastro-cliente");

const emailClienteLogin = document.getElementById("email-cliente-login");
const psswrdClienteLogin = document.getElementById("psswrd-cliente-login");
const signInCliente = document.getElementById("btn-login-cliente");

const emailEmpresa = document.getElementById("email-empresa");
const psswrdEmpresa = document.getElementById("psswrd-empresa");
const nomeEmpresa = document.getElementById("nome-empresa");
const docsEmpresa = document.getElementById("input-file");
const cnpj = document.getElementById("cnpj");
const signUpEmpresa = document.getElementById("btn-cadastro-empresa");

const emailEmpresaLogin = document.getElementById("email-empresa-login");
const psswrdEmpresaLogin = document.getElementById("psswrd-empresa-login");
const signInEmpresa = document.getElementById("btn-login-empresa");

signUpCliente.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, emailCliente.value, psswrdCliente.value)
    .then((userCredential) => {
      let user = userCredential.user;
      const db = database;
      set(ref(db, 'Cliente/' + nomeCliente.value), {
        Nome: nomeCliente.value,
        Email: emailCliente.value
      })
    })
    .catch((error) => {});
});

signUpEmpresa.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, emailEmpresa.value, psswrdEmpresa.value)
    .then((userCredential) => {
      let user = userCredential.user;
      const db = database;
      set(ref(db, 'Empresa/' + nomeEmpresa.value), {
        Nome: nomeEmpresa.value,
        Email: emailEmpresa.value,
        Documento: docsEmpresa.value,
        CNPJ: cnpj.value
      })
    })
    .catch((error) => {});
})

signInCliente.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, emailClienteLogin.value, psswrdClienteLogin.value)
  .then((userCredential) => {
    let user = userCredential.user;
    window.location.href ="../index.html"
  }).catch((error) => {

  })
})

signInEmpresa.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, emailEmpresaLogin.value, psswrdEmpresaLogin.value)
  .then((userCredential) => {
    let user = userCredential.user;
    window.location.href ="../index.html"
  }).catch((error) => {

  })
})