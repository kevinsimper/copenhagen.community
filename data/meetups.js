const meetups = [
  {
    name: 'CopenhagenJS',
    url: 'https://www.meetup.com/copenhagenjs/',
    meetupslug: 'copenhagenjs',
    image:
      'https://images.unsplash.com/photo-1526056316312-ed419ce34a05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=235a8dea6dc46624996665b953e152f6&auto=format&fit=crop&w=500&q=60',
    color: '#f9e035',
    logo: 'http://copenhagenjs.dk/static/images/cphjs.png',
  },
  {
    name: 'ngCopenhagen',
    url: 'https://www.meetup.com/ngCopenhagen/',
    meetupslug: 'ngCopenhagen',
    image:
      'https://images.unsplash.com/photo-1491596841158-6079a111f87d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d88273ee244036c8c4813ff416ca7a5&auto=format&fit=crop&w=500&q=60',
    color: '#dd2034',
    logo: 'https://i.imgur.com/dQ7BN3T.png',
    active: false,
  },
  {
    name: 'GDG',
    url: 'https://www.meetup.com/GDG-Copenhagen/',
    meetupslug: 'GDG-Copenhagen',
    image:
      'https://images.unsplash.com/photo-1523352054314-d33af9fdf6ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6a250c3192845b9c40adc7f4ac8bfd64&auto=format&fit=crop&w=500&q=60',
    color: '#7bd0c1',
    logo: 'https://i.imgur.com/vQwRuVR.png',
  },
  {
    name: 'GDG Cloud',
    url: 'https://www.meetup.com/gdg-cloud-copenhagen/',
    meetupslug: 'gdg-cloud-copenhagen',
    image:
      'https://images.unsplash.com/photo-1519143587129-d7ae992bc44c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41cb269cddd7dbd66a0b85266f65a5c2&auto=format&fit=crop&w=500&q=60',
    color: '#c75b9b',
  },
  {
    name: 'AI Copenhagen',
    url: 'https://www.meetup.com/aicopenhagen/',
    meetupslug: 'aicopenhagen',
    image:
      'https://images.unsplash.com/photo-1467627003363-f047333cbf44?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e32cc6ee7556cbea77946138ae543ee2&auto=format&fit=crop&w=500&q=60',
    color: '#8bc34a',
    logo:
      'https://pbs.twimg.com/profile_images/664153381364211713/nzuM7x4y_400x400.png',
  },
  {
    name: 'React Native CPH',
    url: 'https://www.meetup.com/React-Native-CPH/',
    meetupslug: 'React-Native-CPH',
    image:
      'https://images.unsplash.com/photo-1515749968044-d1d417bf629c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ba0724278aad6ee5e0e68f58c3178c7&auto=format&fit=crop&w=500&q=60',
    color: '#ffc107',
    active: false,
  },
  {
    name: 'Copenhagen React Meetup',
    url: 'https://www.meetup.com/Copenhagen-React-Meetup/',
    meetupslug: 'Copenhagen-React-Meetup',
    image:
      'https://images.unsplash.com/photo-1486623021874-2d24a5b1e148?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b8c6c32fc45e7b5a7ce492b4f4d4e19&auto=format&fit=crop&w=500&q=60',
    color: '#61dafb',
    active: false,
  },
  {
    name: 'ReasonML CPH',
    url: 'https://www.meetup.com/ReasonML-CPH/',
    meetupslug: 'ReasonML-CPH',
    image:
      'https://images.unsplash.com/photo-1516178761885-7ecb13b39255?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=128705fb70446e0953f8e647273c917b&auto=format&fit=crop&w=500&q=60',
    color: '#61dafb',
    active: false,
  },
  {
    name: 'Copenhagen Ruby Brigade',
    url: 'https://www.meetup.com/Copenhagen-Ruby-Brigade/',
    meetupslug: 'Copenhagen-Ruby-Brigade',
    image:
      'https://images.unsplash.com/photo-1521819868521-19ccbf804cf0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e949869ae3f5da1a32c1152cb466af2&auto=format&fit=crop&w=500&q=60',
    color: '#009688',
  },
  {
    name: 'Rails Girls Copenhagen',
    url: 'https://www.meetup.com/Rails-Girls-Copenhagen/',
    meetupslug: 'Rails-Girls-Copenhagen',
    image:
      'https://images.unsplash.com/photo-1522535918752-9ce93d3f65f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c580d490993a2d269304d45a7824c3da&auto=format&fit=crop&w=500&q=60',
    color: '#3f51b5',
  },
  {
    name: 'CPH Tech Books & Film',
    url: 'https://www.meetup.com/CPH-Tech-Books-Film/',
    meetupslug: 'CPH-Tech-Books-Film',
    image:
      'https://images.unsplash.com/photo-1499689496495-5bdf4421b725?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ec9ff7da4a4f5e788843453112f2fcd&auto=format&fit=crop&w=500&q=60',
    color: '#607d8b',
  },
  {
    name: 'Women Techmakers copenhagen',
    url: 'https://www.meetup.com/wtm-copenhagen/',
    meetupslug: 'wtm-copenhagen',
    image:
      'https://images.unsplash.com/photo-1524555197196-a7ef01c3c9d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a0a76e469be273a15f17ba96c225909&auto=format&fit=crop&w=500&q=60',
    color: '#ff5722',
  },
  {
    name: 'Copenhagen SEO Meetup',
    url: 'https://www.meetup.com/copenhagen-seo-meetup/',
    meetupslug: 'Copenhagen-SEO-Meetup',
    image:
      'https://images.unsplash.com/photo-1474899420076-a61e74989430?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    color: '#009688',
  },
  {
    name: 'Laravel CPH Meetup',
    url: 'https://www.meetup.com/laravel-cph/',
    meetupslug: 'laravel-cph',
    image: 'https://images.unsplash.com/photo-1551651781-ed763439ef5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    logo: 'http://images.pooyan.info/meetups/laravel-cph/laravel-cph-logo.png',
    color: '#f7503d',
  },
  {
    name: 'GraphQL Copenhagen',
    url: 'https://www.meetup.com/Copenhagen-GraphQL-Meetup-Group/',
    meetupslug: 'Copenhagen-GraphQL-Meetup-Group',
    image: 'https://secure.meetupstatic.com/photos/event/d/4/5/600_486663397.jpeg',
    logo: 'https://secure.meetupstatic.com/photos/event/d/4/d/600_486663405.jpeg',
    color: '#E535AB',
  },  
];
exports.meetups = meetups;
