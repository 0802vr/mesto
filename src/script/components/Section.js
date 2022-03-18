export class Section {
    constructor({items,renders}, container) {
        this._items = items;
        this._renders = renders;
        this._container = container;
    }

  //функция добавления в dom
  addItems(card) {
    this._container.prepend((card))
    }
//функция обхода исходного массива и добавления на страницу
renderItems(items, userId){
  items.forEach(date => {
      this._container.append(this._renders({ name: date.name, link: date.link, likes: date.likes, id: date._id, userId: userId, ownerId: date.owner._id }));    
  });   }
   
       
} 