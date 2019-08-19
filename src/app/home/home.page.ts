
 import { Component } from '@angular/core';
 import { NavController } from '@ionic/angular';
import { Cliente } from 'src/modelo/cliente';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { NOMEM } from 'dns';
import { ChildActivationEnd } from '@angular/router';

 
 @Component({
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
 })
 export class HomePage {
   public clientes:Cliente[];
 
   constructor(public navCtrl:NavController) {
     this.clientes = [
       {nome:"Tupac Shakur", telefone:"2163-3673", imagem: "assets/tupac.jpg", endereco: "Rua 1", cidade: "Itaquaquecetuba", estado: "São Paulo"},
       {nome:"J. Cole", telefone:"3882-5363", imagem: "assets/jcole.jpg", endereco: "Rua 5", cidade: "Itaquaquecetuba", estado: "São Paulo"},
       {nome:"Eminem", telefone:"2163-2352", imagem: "assets/eminem.jpg", endereco: "Rua 7", cidade: "Itaquaquecetuba", estado: "São Paulo"},
       {nome:"Buffon", telefone:"5446-6464", imagem: "assets/buffon.jpg", endereco: "Rua 2", cidade: "Itaquaquecetuba", estado: "São Paulo" },
       {nome:"Rihanna", telefone:"2543-5343", imagem: "assets/rihanna.jpg", endereco: "Rua 4", cidade: "Itaquaquecetuba", estado: "São Paulo" },
       {nome:"Beyonce", telefone:"2166-5343", imagem: "assets/beyonce.jpg", endereco: "Rua 8", cidade: "Itaquaquecetuba", estado: "São Paulo"},
       {nome:"Lionel Messi", telefone:"2529-3373", imagem: "assets/LeoMessi.jpg", endereco: "Rua 3", cidade: "Itaquaquecetuba", estado: "São Paulo" },
       {nome:"Neymar", telefone:"2799-6583", imagem: "assets/neymar.jpg", endereco: "Rua 10", cidade: "Itaquaquecetuba", estado: "São Paulo" },
       {nome:"Dybala", telefone:"4456-3683", imagem: "assets/dybala.jpg", endereco: "Rua 6", cidade: "Itaquaquecetuba", estado: "São Paulo" },
       {nome:"50 Cent", telefone:"6763-3573", imagem: "assets/50cent.jpg", endereco: "Rua 9", cidade: "Itaquaquecetuba", estado: "São Paulo"},
     ]
   }
 SelecionarCliente(cliente:Cliente)
  {
     //console.log("Nome: " + cliente.nome, "Telefone: " + cliente.telefone, "Endereço: " + cliente.endereco, "Cidade: " + cliente.cidade,  "Estado: " + cliente.estado  );
     //alert("este é um teste do método " + cliente.nome + cliente.telefone + cliente.endereco + cliente.cidade + cliente.estado);
     
     this.navCtrl.navigateForward('/escolha');
     
  }
  {
    selectSobre(cliente:Client)
 }

  