
let bd = [
    {
        email: "sebas20osorio@gmail.com",
        password: "qwe123ASD",
        username: "sebas20",
        active: true
    },
    {
        email: "vane@gmail.com",
        password: "1234",
        username: "vane20",
        active: true
    },
    {
        email: "adatt@gmail.com",
        password: "qweASD",
        username: "adatt20",
        active: false
    }
]

function sayh5() {
    //alert (" Hola, como estas ")
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value

    for (let i = 0; i < bd.length; i++) {
        if (username == bd[i].username || username == bd[i].email) {
            if (password == bd[i].password) {
                if (bd[i].active) {
                    return alert(" ha iniciado sesión correctamente")
                } else return alert(" el usuario no esta activo")
            }
        }
    } alert("el usuario o la contraseña es incorrecta")

}
  /*   if (username === "" || username.length || email.length || password.length) return alert (" el usuario no cumple con los requerimientos")
      for (let i = 0; i = username.length; i = email.length; i = password.length; i++) {
          return alert ( "se inicio sesión correctamente");
          const element = array[index];
      }
  console.log (username)
  console.log (password)

} 
*/
