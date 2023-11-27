import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../../models/room.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lightcontrol',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lightcontrol.component.html',
  styleUrl: './lightcontrol.component.css'
})
export class LightcontrolComponent {
  room: Room;
  rooms: Room[];
  sliderValue = 100;

  constructor(
  ) {
    this.rooms = [
      { id: 1, name: 'Quarto', on: false, brightness: 100 },
      { id: 2, name: 'Cozinha', on: false, brightness: 100 },
      { id: 3, name: 'Sala', on: false, brightness: 100 },
      { id: 4, name: 'Banheiro', on: false, brightness: 100 },
      { id: 5, name: 'Lavanderia', on: false, brightness: 100 },
    ];
    this.room = this.rooms[0];
  }

  lightBulb() {
    if (this.room.on) {
      this.room.on = false;
      this.room.brightness = 100;
    } else {
      this.room.on = true;
    }

  }

  setCurrentRoom(room: Room) {
    this.room = room;
  }
}