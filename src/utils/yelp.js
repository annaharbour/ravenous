import axios from 'axios'

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3'

const ID = 'xckhRPEhWlHFGaNRouX_AQ'

const KEY = '3vE9utNgAfEpVc6FTaPMn2iSOzcvjIl-pSzxuAoYP5eM3Tv5JTahtKKOxwCxcyF093RjEWhbn8zat1J-sEKPuhuljKBwy7duobXsDQrLaDJTc7s2-umU7BXR-lVeZHYx'

export const search = async (term, location, sortBy) => {
    try {
        const response = await axios.get(`${BASE_URL}/businesses/search`, {
            headers: {
                Authorization: `Bearer ${KEY}`
            },
            params: {
                term,
                location,
                sort_by: sortBy
            }
        })

        const businesses = response.data.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
        }))
        return businesses
    } catch(error) {
        console.log(error)
    }
 }

