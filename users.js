const users = [
    {
        id: 1,
        emai: 'aluno1presente@gmail.com',
        senha: 'aluno1',
        admin: true,
    },

    {
        id: 2,
        emai: 'aluno2presente@gmail.com',
        senha: 'aluno2',
        admin: true,
    },

    {
        id: 3,
        emai: 'aluno3presente@gmail.com',
        senha: 'aluno3',
        admin: true,
    },
];

function salvaNovoUser(id){
    const usuario = usuarios.find(function (novo) {
        return novo.id === id;
    });
    return usuario;
}