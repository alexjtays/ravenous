const apiKey = 'zN8ZA0jKLVX6DUoai2fNsiQHGQG8dzJuEsuCfS5vRFPK8nibrNt7NWPPY5MSqxjC_Zq0dEaVRmKoY2tw6HPmEDy0PnbC4Lrfu_rB0BJmrNCmBgG2Uhd1w0D72uvlYHYx';

const yelp = {
    searchYelp(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
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
          }));
        }
      });
    }
  };

export default yelp;