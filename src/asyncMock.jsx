import boss1 from "/gifBoss.gif";
import gifBoss1 from "/gifBoss1.gif";
import gifBoss2 from "/gifBoss2.gif";
import gifBoss5 from "/gifBoss5.gif";
import setItems1 from "/setItems1.jpg";
import setItem9 from "/setItem9.jpg";
import setItem10 from "/setItem10.jpg";
import setItems4 from "/setItems4.jpg";
import pjPixel1 from "/pjPixel1.jpg";
import pjPixel2 from "/pjPixel2.jpg";
import pjPixel3 from "/pjPixel3.jpg";
import pjPixel9 from "/pjPixel9.jpg";
import ojoDragon from "/ojoDragon.jpg";
import giftRedStar from "/giftRedStar.gif";
import gameBoyPixel from "/gameBoyPixel.jpg";
import pittricolor from "/pittricolor.jpeg";

const products = [
  {
    id: '1',
    name: 'Boss1',
    price: 210,
    category: 'boss',
    img: boss1,
    stock: 5,
    description: "Here's a sneak peek of this Boss that can be added to any game, created in pixel art and animated with its basic skill.",      
  },
  { id: '2', name: 'Boss2', price: 220, category: 'boss', img: gifBoss1, stock: 5, description: "Here's a sneak peek of this Boss that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '3', name: 'Boss3', price: 230, category: 'boss', img: gifBoss2, stock: 5, description: "Here's a sneak peek of this Boss that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '4', name: 'Boss4', price: 240, category: 'boss', img: gifBoss5, stock: 5, description: "Here's a sneak peek of this Boss that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '5', name: 'Set1', price: 310, category: 'set', img: setItems1, stock: 10, description: "Here's a sneak peek of this Game Set that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '6', name: 'Set2', price: 320, category: 'set', img: setItem9, stock: 10, description: "Here's a sneak peek of this Game Set that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '7', name: 'Set3', price: 330, category: 'set', img: setItem10, stock: 10, description: "Here's a sneak peek of this Game Set that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '8', name: 'Set4', price: 340, category: 'set', img: setItems4, stock: 10, description: "Here's a sneak peek of this Game Set that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '9', name: 'Caracter1', price: 410, category: 'caracter', img: pjPixel1, stock: 5, description: "Here's a sneak peek of this Caracter that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '10', name: 'Caracter2', price: 420, category: 'caracter', img: pjPixel2, stock: 5, description: "Here's a sneak peek of this Caracter that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '11', name: 'Caracter3', price: 430, category: 'caracter', img: pjPixel3, stock: 5, description: "Here's a sneak peek of this Caracter that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '12', name: 'Caracter4', price: 440, category: 'caracter', img: pjPixel9, stock: 5, description: "Here's a sneak peek of this Caracter that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '13', name: 'Other1', price: 510, category: 'other', img: ojoDragon, stock: 1, description: "Here's a sneak peek of this Alternative products that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '14', name: 'Other2', price: 520, category: 'other', img: giftRedStar, stock: 1, description: "Here's a sneak peek of this Alternative products that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '15', name: 'Other3', price: 530, category: 'other', img: gameBoyPixel, stock: 1, description: "Here's a sneak peek of this Alternative products that can be added to any game, created in pixel art and animated with its basic skill." },
  { id: '16', name: 'Other4', price: 540, category: 'other', img: pittricolor, stock: 1, description: "Here's a sneak peek of this Alternative products that can be added to any game, created in pixel art and animated with its basic skill." },
];

export const getProducts = () => {
  return new Promise((resolve)=> {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductsById = (productId) => {
  return new Promise ((resolve) => {
    setTimeout (() => {
      resolve(products.find(prod => prod.id === productId))
    }, 500)
  })
}

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === productCategory))
    }, 500);
  });
}
