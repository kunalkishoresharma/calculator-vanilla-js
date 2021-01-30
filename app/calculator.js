const operator = ['.','+','-','*','/'];
let num = 9;
export default class Calculator{
    constructor({selector, size, cssClass, heading, border}){
        this.size = size;
        this.cell = [];
        this.element = document.querySelector(selector);
        this.element.classList.add(cssClass);
        this.heading = heading;
        this.border = border;
        this.init();
    }
    init(){
        var title = document.createElement('h2');
     

        if(this.heading){
            title.innerText = this.heading;
            this.element.appendChild(title);    
        }else{
            title.innerText = 'My Calculator';
            this.element.appendChild(title);    
        }
        
        this.elements = this.element.appendChild(document.createElement('div'));
        this.elements.classList.add('calc-box');
        var input = document.createElement('input');
        input.setAttribute('type','text');
        this.elements.appendChild(input);


        if(this.size){
            this.element.style.minWidth = this.size;
            this.element.style.minHeight = this.size;
        }else{
            this.element.style.minWidth = '90vmin';
            this.element.style.minHeight = '90vmin'; 
        }

        //story id - 100
        if(this.border){
            this.element.style.border = this.border;
        }else{
            this.element.style.border = '1rem solid red'
        }
        
        while(num >= 0){
            var div = document.createElement('button');
            div.classList.add('btn--digit');
            div.innerText = num;
            this.elements.appendChild(div);
            num--;
        }

        operator.forEach((_,i)=>{
            var div = document.createElement('button');
            div.classList.add('btn--digit');
            div.innerText = _;
            this.elements.appendChild(div)
        });

        
    }
}