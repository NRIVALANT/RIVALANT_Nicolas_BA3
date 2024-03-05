import { Component, OnInit } from '@angular/core';
import { ProductAddService } from '../../services/productAdd.service';
import { IArticlePanier } from '../../models/IArticlePanier';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports : [NgFor],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  products : IArticlePanier[] = [];

  constructor(private productaddservice : ProductAddService) { }

  ngOnInit() : void {
    this.products = this.productaddservice.getProducts();
    console.log(this.products.map(product => product.Id));
  }

  // fonction pour supprimer un produit
  removeProduct(product : IArticlePanier) {
    // Récupérez d'abord les produits existants
    let products = this.productaddservice.getProducts();
    

    products = products.filter(p => p.Id !== product.Id);
    // Supprimez le produit juste par Id 

    
    // Enregistrez le tableau de produits mis à jour dans le localStorage
    localStorage.setItem('products', JSON.stringify(products));
    
    // Mettre à jour la liste des produits
    this.products = products;
  }

}
