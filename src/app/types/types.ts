type TravelSite ={
  'img': string,
  'address': string,
  'phone': number,
  'weather': Weather,
  'followers': number,
  'following': number,
  'socialInfo': SocialInfo
  'type': string
}

type Weather = {
  'title': string,
  'icon':string,
  'water':number,
  'temperature': number
}

type SocialInfo = {
  'title': string,
  'img': string,
}
