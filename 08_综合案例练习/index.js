const App = {
    template: "#mwf",
    data: function () {
        return {
           books:[
            {
                id:1,
                name:'《算法导论》',
                publicDate:'20060301',
                price:95,
                count:1
            },
            {
                id:2,
                name:'《UNIX编程艺术》',
                publicDate:'20070301',
                price:59,
                count:1
            },
            {
                id:3,
                name:'《编程珠玑》',
                publicDate:'20080301',
                price:39,
                count:1
            },
            {
                id:4,
                name:'《代码大全》',
                publicDate:'200100301',
                price:128,
                count:1
            },
           ]
        };
    },
    methods: {
        increment(index){
            this.books[index].count++
        },
        decrement(index){
            this.books[index].count--
        },
        removeBook(index){
            this.books.splice(index,1)
            console.log(index);
        },
        formatePrice(formateValue){
            return formateValue = "￥"+formateValue
        }
        
    },
    computed:{
        totalPrice(){
            let total=0
            for(item of this.books){
                total+=item.price*item.count
            }
            return total
            // return this.books.map(item=>{
            //     console.log(item);
            //     //  this.totalPrice += item.price*item.count
            // })
        }
    }
};
Vue.createApp(App).mount("#app");
