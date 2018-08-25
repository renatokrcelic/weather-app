const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY
module.exports = {
  WEATHER_API_URL: `http://api.openweathermap.org/data/2.5/forecast?cnt=45&units=metric&APPID=${WEATHER_API_KEY}`,  // &q={city name},{country code}&cnt={cnt}
  CITY_API_URL: `https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=`  // {city}
}
