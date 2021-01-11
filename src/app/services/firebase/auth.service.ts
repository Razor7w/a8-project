import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  setLoggedIn (value: boolean): void {
    this.loggedInStatus = value
  }

  get isLoggedIn (): boolean {
    return this.loggedInStatus
  }

  async login (email: string, pass: string) {
    try {
      return await this.angularFireAuth.auth.signInWithEmailAndPassword(email, pass)
      // console.log('Respuesta Auth -->', respAuth)
    } catch (error) {
      return error
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
