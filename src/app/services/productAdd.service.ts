import { Injectable } from '@angular/core';
import { IArticlePanier } from '../models/IArticlePanier';

@Injectable({ providedIn: 'root' })
export class ProductAddService {
  
  constructor() { }
   
  // fonction pour ajouter un produit
  addProduct(product: IArticlePanier) {
    // Récupérez d'abord les produits existants
    let products = this.getProducts();
    
    // Ajoutez le nouveau produit
    products.push(product);
    
    // Enregistrez le tableau de produits mis à jour dans le localStorage
    localStorage.setItem('products', JSON.stringify(products));
  }

  // fonction pour récupérer les produits
  getProducts(): IArticlePanier[] {
    // Récupérez les produits du localStorage
    let products = localStorage.getItem('products');
    
    return products ? JSON.parse(products) : [];
  }

}
