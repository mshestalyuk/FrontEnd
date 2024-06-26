import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/shared/Property';
import { Owner } from 'src/app/shared/Owner';

@Component({
  selector: 'app-market-offer',
  templateUrl: './market-offer.component.html',
  styleUrls: ['./market-offer.component.css']
})
export class MarketOfferComponent {
    property = new Property(
    1,
    "Mieszkanie 60m2",   // name
    "Spokojna",          // street
    "9",                 // buildingNo
    "desc",              // description
    1000,                // rentAmount
    1000,                // utilityCosts
    2000                 // deposit
);  owner = new Owner("Paweł", "Kowalski", "999222111", "pawelk@gmail.com", "https://static2.strzelce360.pl/data/wysiwig/wqtv1fum7knmhdb.jpg")
  constructor(private router: Router) { }
  
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
  returnHome() {
    this.router.navigate(['/home']);
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    const offset = 80;
  
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementTop - offset, behavior: 'smooth' });
    }
  }
  
}


