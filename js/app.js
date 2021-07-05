const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const now = new Date()
console.log('Date: '+now)
now.setMonth(now.getMonth()+1)
console.log('Month: '+now.getMonth())

const Officelite = {
    data() {
        return {
            plansList: [
                { 
                    name: 'Basic', 
                    price: 'Free', 
                    priceDescription: 'Up to 5 users for free', 
                    perksList: [
                        'Basic documentation collaboration',
                        '2 GB storage',
                        'Great security and support'
                    ] 
                },
                { 
                    name: 'Pro', 
                    price: '$9.99', 
                    priceDescription: 'Per user, billed monthly', 
                    perksList: [
                        'All essential integrations',
                        '50 GB storage',
                        'More control and insights'
                    ] 
                },
                { 
                    name: 'Ultimate', 
                    price: '$19.99', 
                    priceDescription: 'Per user, billed monthly', 
                    perksList: [
                        'Robust work management',
                        '100 GB storage',
                        'VIP support'
                    ]
                }
            ],
            releaseDate: now
        }
    }, 
    computed: {
        printReleaseDate() {
            return this.releaseDate.getDay() + ' ' + months[this.releaseDate.getMonth()] + ' ' + this.releaseDate.getFullYear()
        }
    }
}

const app = Vue.createApp(Officelite)

app.mount('#app')