export class Section {
    constructor({items,renders}, conteinerSelector) {
        this._items = items;
        this._renders = renders;
        this._conteinerSelector = conteinerSelector;
    }

  //функция добавления в dom
  addItems(card) {
    this._conteinerSelector.prepend((card))
    }
//функция обхода исходного массива и добавления на страницу
  renderItems() { 
    this._items.forEach((data) => {
        this._conteinerSelector.prepend(this._renders(data))})    
    }  
       
} 