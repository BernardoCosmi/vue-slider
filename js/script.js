const{createApp}=Vue;

const app=createApp({
    data(){
        return{
            items: [
                {  
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            currentIndex: 0,
        };
    },
    computed:{
        //Ogni volta che currentIndex o gli elementi cambiano, Vue.js ricalcolerà automaticamente il valore di currentItem
        currentItem(){
            return this.items[this.currentIndex]
        }, 
    },
    methods:{
        nextItem(){
            this.currentIndex = (this.currentIndex + 1);
            if(this.currentIndex > this.items.length - 1){
                this.currentIndex = this.currentIndex-this.items.length;
            }
            console.log('Indice corrente' + this.currentIndex)
        },
        prevItem() {
            this.currentIndex = (this.currentIndex - 1);
            if( this.currentIndex < 0 ){
                this.currentIndex = this.items.length - 1;
              }
            console.log('Indice corrente' + this.currentIndex)
        },
        changeItem(index) {
            this.currentIndex = index;
        },
        
    }
}).mount('#app');
