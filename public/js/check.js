async function check() {
    localStorage.getItem('jwt')
    const response = await fetch(
        'http://localhost:8080/user/check', {
          method: 'GET',
          headers: {
            'Authorization': localStorage.getItem('jwt')
          }
      })
      if(!response.ok) {
        location.href = 'http://localhost:3000/authentication'
      }
}

document.addEventListener("DOMContentLoaded", check)