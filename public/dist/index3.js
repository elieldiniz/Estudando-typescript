const users = [];
async function fethcUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    if (user.message) {
        console.log('Usuario nao encontrado');
    }
    else {
        users.push(user);
    }
}
