import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videofon',
  templateUrl: './videofon.component.html',
  styleUrls: ['./videofon.component.css']
})
export class VideofonComponent implements OnInit {

  // Esta referencia almacenará el elemento <video> para controlarlo
  videoElement!: HTMLVideoElement;

  constructor() { }

  ngOnInit(): void {
    // Obtenemos una referencia al elemento <video> en la plantilla utilizando la clase CSS o el id del elemento.
    this.videoElement = document.querySelector('.video-container video') as HTMLVideoElement;
    
    // Verificamos que el elemento <video> existe antes de intentar reproducirlo
    if (this.videoElement) {
      // Silenciamos el video si es necesario para evitar restricciones de reproducción automática
      this.videoElement.muted = true;
      
      // Intentamos reproducir el video
      this.videoElement.play()
        .catch((error) => {
          console.error('Error al reproducir el video:', error);
        });
    }
  }
}

