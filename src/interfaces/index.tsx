import React from 'react';

export interface User{
    id: number;
    username: string;
    seguidores: object;
    foto: string;
    sobre: string;
    seguindo: object;
    first_name: string;
    last_name: string;
}

export interface Piu{ 
    id: number;
    texto: string;
    usuario: User; //usuario se comporta como a interface User. <- a ideia é não escrever user.usuario.ksdjflkasjdf
    horario: string;
    favoritado_por: User[];
    likers: User[];
} 