const{createApp, watchEffect}=Vue;

const app=createApp({
    data(){
        return{
            items: [
                {  
                    image: 'img/AOT1.jpg',
                    title: 'Levi Ackerman',
                    text: "The only thing we're allowed to do il believe that we won't regret the choice we made ",
                }, {
                    image: 'img/AOT2.png',
                    title: 'Eren Jaeger',
                    text: 'I have the freedom to continue moving forward',
                }, {
                    image: 'img/TG2.jpg',
                    title: 'Ken Kaneki',
                    text: "The pain you feel today will be the strength you'll have tomorrow.",
                }, {
                    image: 'img/DN2.jpg',
                    title: 'Light Yagami',
                    text: "Look around you, and all you will see are people the world would be better off without.",
                }, {
                    image: 'img/JK2.jpg',
                    title: "Satoru Gojo",
                    text: "Nah, i'd win",
                },{
                    image: 'img/SAO2.jpg',
                    title: "Kirigaya Kazuto",
                    text: "I'd rather trust and regret, than doubt and regret",
                }
            ],
            currentIndex: 0,
            isHovered: false,
            autoplayInterval: null,
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
        startAutoplay() {
            this.autoplayInterval = setInterval(() => {
                this.nextItem();
            }, 10000000);
        },
        stopAutoplay() {
            clearInterval(this.autoplayInterval);
        },
    },
    watch: {
        isHovered(value) {
            if (value) {
                this.stopAutoplay();
            } else {
                this.startAutoplay();
            }
        },
    },
}).mount('#app');

watchEffect(() => {
    app.startAutoplay();
});