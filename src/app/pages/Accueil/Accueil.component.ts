import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../../services/EcommerceService.service';
import { IArticle } from '../../models/Iarticle';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-Accueil',
  standalone: true,
  imports : [NgFor],
  templateUrl: './Accueil.component.html',
  styleUrls: ['./Accueil.component.css']
})
export class AccueilComponent implements OnInit {
  articles : IArticle[]  = [];

  constructor(private ecommerce : EcommerceService) { }

  ngOnInit() : void {
    this.ecommerce.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }

}
