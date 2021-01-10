import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-ditto',
  templateUrl: './ditto.component.html',
  styleUrls: ['./ditto.component.styl']
})
export class DittoComponent implements OnInit {

  public name = ''
  public id = ''
  public srcImg = ''

  constructor(
    private pokeApi: PokeApiService
  ) { }

  ngOnInit() {
    this.pokeApi.ditto().subscribe(resp => {
      console.log(resp)
      this.name = resp.name
      this.id = resp.id
      this.srcImg = resp.sprites.front_default
      console.log(resp.id)
      console.log(resp.name)
      console.log(resp.sprites.front_default)
      console.log(resp.sprites.back_default)
    }, error => {
      console.log(error)
    })
  }

}
