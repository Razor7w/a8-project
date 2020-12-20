import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  async login (email: string, pass: string) {
    try {
      const respAuth = await this.angularFireAuth.auth.signInWithEmailAndPassword(email, pass)
      console.log('Respuesta Auth -->', respAuth)
    } catch (error) {
      console.error('error', error)
    }
  }

  async logout () {
    try {
      const respAuth = await this.angularFireAuth.auth.signOut()
      console.log('Respuesta Auth -->', respAuth)
    } catch (error) {
      console.error('error', error)
    }
  }

  async registerByUserEmail(email: string, pass: string) {
    try {
      const respAuth = await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass)
      console.log('Respuesta Auth -->', respAuth)
    } catch (error) {
      console.error('error', error)
    }
  }
}
