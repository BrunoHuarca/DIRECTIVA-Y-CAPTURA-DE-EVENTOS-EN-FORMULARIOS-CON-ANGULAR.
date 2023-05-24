import { Component } from '@angular/core';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  camposValidos: boolean = false;

  validarCampos() {
    this.camposValidos = this.nombre !== '' && this.email !== '';
  }

  confirmarEnvio(event: Event) {
    if (!confirm('¿Estás seguro de que deseas enviar el formulario?')) {
      event.preventDefault();
    } else {
      this.onSubmit();
    }
  }
  abrirNuevaVentana() {
    const nuevaVentana = window.open('', '_blank');
    if (nuevaVentana) {
      nuevaVentana.document.write(`
      <html>
      <head>
        <title>Datos del formulario</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #eee;
          }
    
          .container {
            width: 400px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            text-align: center;
          }
    
          h2 {
            color: black;
          }
    
          strong {
            color: orange;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Campos del Formulario</h2>
          <p><strong>Nombre:</strong> ${this.nombre}</p>
          <p><strong>Email:</strong> ${this.email}</p>
        </div>
      </body>
      </html>
      `);
    }
  }
  onSubmit() {
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);
  }
}
