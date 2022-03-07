export class Section {
    constructor({items,renders}, conteiner) {
        this._items = items;
        this._renders = renders;
        this._conteiner = conteiner;
    }

  //функция добавления в dom
  addItems(card) {
    this._conteiner.prepend((card))
    }
//функция обхода исходного массива и добавления на страницу
  renderItems() { 
    this._items.forEach((data) => {
        this.addItems(this._renders(data))})    
    }  
       
} 