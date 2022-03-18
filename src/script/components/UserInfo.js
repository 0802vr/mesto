export class UserInfo {
    constructor({name, info, userAvatar}) {
        this._name =document.querySelector(name);
        this._info =document.querySelector(info);
        this._userAvatar =document.querySelector(userAvatar);
        
    }

   
    getUserInfo() {
     return {
        name: this._name.textContent, info:this._info.textContent, userAvatar: this._userAvatar.src
    
    };
    
    
    }
 
    setUserInfo(name,info, userAvatar) { 
       this._name.textContent = name;
        this._info.textContent = info;
       this._userAvatar.src = userAvatar;
    }  
   //setUserInfo({name, info, avatar}){
   // if(avatar !== undefined){this.userName.textContent = name;}
  //  if(avatar !== undefined){this.userInfo.textContent = info;}
   //// if(avatar !== undefined){this.userAvatar.src = avatar;}      
//}   
} 