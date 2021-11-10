import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Groot', 'Blade', 'Wolverine', 'Rogue', 'Captain America', 'Black Panther', 'Black Widow', 'Suri', 'Gamora', 'Starlord']
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
