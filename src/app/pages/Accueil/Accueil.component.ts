import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../../services/EcommerceService.service';
import { IArticle } from '../../models/Iarticle';
import { NgFor } from '@angular/common';
import { ProductAddService } from '../../services/productAdd.service';
import { IArticlePanier } from '../../models/IArticlePanier';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-Accueil',
  standalone: true,
  imports : [NgFor, ReactiveFormsModule],
  templateUrl: './Accueil.component.html',
  styleUrls: ['./Accueil.component.css']
})
export class AccueilComponent implements OnInit {
  articles : IArticle[]  = [];
  articlesPanier : IArticlePanier[] = [];

  constructor(
    private ecommerce : EcommerceService, 
    private productaddservice : ProductAddService
  ) { }

  ngOnInit() : void {
    this.ecommerce.getArticles().subscribe((articles) => {
      this.articles = articles.map(article => ({
        ...article,
        quantityControl: new FormControl(0) // Ajouter une instance FormControl pour chaque article
      }));
    });
  }
  

  addToCard(article : IArticle, quantityControl : FormControl) {
    const products : IArticlePanier = {
      Id: article['UniqueEntry ID'],
      name: article.Name,
      price: article.Buy,
      totalPrice: article.Buy * quantityControl.value, // Utiliser la valeur de quantityControl pour le calcul du prix total
      quantity: quantityControl.value // Utiliser la valeur de quantityControl pour la quantité
    };
    this.productaddservice.addProduct(products);
    alert(JSON.stringify(this.productaddservice.getProducts()));
  }
}
