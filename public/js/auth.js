async function auth() {
    const response = await fetch(
      'http://localhost:8080/user/authentication'
      + '/?name=' 
      + document.getElementById('username').value
      + '&password=' 
      + document.getElementById('password').value, {
        method: 'POST',
      })
      localStorage.setItem('jwt', 'Bearer ' + await response.text())
}