document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('.profile-avatar');
    const name = document.querySelector('.profile-name');
    const username = document.querySelector('.profile-username');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('.profile-link');

    async function fetchGitHubData() {
        try {
            const response = await fetch('https://api.github.com/users/jpnune');
            
            if (!response.ok) {
                throw new Error('Erro ao buscar dados do GitHub');
            }

            const data = await response.json();

            avatar.src = data.avatar_url;
            name.innerText = data.name || data.login;
            username.innerText = `@${data.login}`;
            repos.innerText = data.public_repos;
            followers.innerText = data.followers;
            following.innerText = data.following;
            link.href = data.html_url;

        } catch (error) {
            console.error('Ocorreu um erro:', error);
            alert('Não foi possível carregar as informações do GitHub.');
        }
    }

    fetchGitHubData();
});
