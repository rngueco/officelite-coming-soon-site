// Month lookup
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// Get today's date
const release_date = new Date()

// Set release date to 1 month from now
release_date.setMonth(release_date.getMonth()+1)

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
            releaseDate: release_date
        }
    }
}

const app = Vue.createApp(Officelite)
    .component('countdown-timer', {
        template: `
        <p>Coming <span class="release-date">{{ printReleaseDate }}</span></p>
        <div class="countdown__timer">
            <div>
                <span class="number">{{ days }}</span>
                <span class="label">days</span>
            </div>
            <div>
                <span class="number">{{ getHours }}</span>
                <span class="label">hours</span>
            </div>
            <div>
                <span class="number">{{ getMinutes }}</span>
                <span class="label">min</span>
            </div>
            <div>
                <span class="number">{{ getSeconds }}</span>
                <span class="label">sec</span>
            </div>
        </div>
        `,
        props: ['end'],
        data() {
            return {
                // Return how many days between release date and now
                days: Math.floor((this.end.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),
                hours: 0,
                minutes: 0,
                seconds: 0,
                start: new Date()
            }
        },
        mounted() {
            // Count down by 1 on all fields
            this.days--
            this.hours--
            this.minutes--
            this.seconds--

            setInterval(() => {
                this.days--
            }, 86400000)

            setInterval(() => {
                this.hours--
            }, 3600000)

            setInterval(() => {
                this.minutes--
            }, 60000)

            setInterval(() => {
                this.seconds--
            }, 1000)
        },
        computed: {
            getHours() {
                if (this.hours < 0) this.hours = 23
                return this.hours
            },
            getMinutes() {
                if (this.minutes < 0) this.minutes = 59
                return this.minutes
            },
            getSeconds() {
                if (this.seconds < 0) this.seconds = 59
                return this.seconds
            },
            printReleaseDate() {
                return this.end.getDate() + ' ' + months[this.end.getMonth()] + ' ' + this.end.getFullYear()
            }
        }
    })
    .component('signup-form', {
        template: `
        <form class="subscription-form">
            <input type="text" v-model="name" aria-label="Full name" placeholder="Name" required>
            <input type="email" v-model="email" aria-label="Email address" placeholder="Email Address" required>
            <div class="select-wrapper">
                <select v-model="plan_type" aria-label="Subscription type">
                    <option v-for="plan in planslist" v-bind:value="plan.name"><span class="pack-label">{{ plan.name }} Pack </span><span class="pack-price">{{ plan.price }}</span></option>
                </select>
                <div class="select-arrow">
                    <img src="assets/sign-up/icon-arrow-down.svg" alt="">
                </div>
            </div>
            <input type="text" v-model="phone" aria-label="Phone number" placeholder="Phone Number" required>
            <input type="text" v-model="company" aria-label="Company name" placeholder="Company" required>
            <input type="submit" value="Get on the list" aria-label="Submit" class="button--primary">
        </form>
        `,
        props: ['planslist'],
        data() {
            return {
                name: '',
                email: '',
                plan_type: 'Basic',
                phone: '',
                company: ''
            }
        }
    })

app.mount('#app')