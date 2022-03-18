export class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }
    editProfile(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
            name,
            about
          })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }
    addCard({name, link}) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
            name,
            link
          })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }
    removeCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers
             
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }
   deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes `, {
            method: "DELETE",
            headers: this._headers
             
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }
    addLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes `, {
            method: "PUT",
            headers: this._headers
             
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }
    addAvatar({avatar}) {
        return fetch(`${this._baseUrl}/users/me/avatar `, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
               avatar
              }) 
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }
}