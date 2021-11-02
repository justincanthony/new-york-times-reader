export const getTopStories = async (section) => {
  section = 'home';
  const response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=H7gdiWL0eP6A5389w0R1HGa8rgBO7rvu`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );
  return await response.json();
};

// Data
// {status: 'OK', copyright: 'Copyright (c) 2021 The New York Times Company. All Rights Reserved.', section: 'home', last_updated: '2021-11-01T22:17:39-04:00', num_results: 9, …}
// copyright: "Copyright (c) 2021 The New York Times Company. All Rights Reserved."
// last_updated: "2021-11-01T22:17:39-04:00"
// num_results: 9
// results: Array(9)
// 0:
// abstract: "His remarks went viral after he repeated the chant, which is understood to be code for swearing at President Biden, during a Southwest Airlines flight."
// byline: "By Melina Delkic"
// created_date: "2021-10-31T20:06:56-04:00"
// des_facet: Array(4)
// 0: "Airlines and Airplanes"
// 1: "Pilots"
// 2: "United States Politics and Government"
// 3: "Social Media"
// length: 4
// [[Prototype]]: Array(0)
// geo_facet: []
// item_type: "Article"
// kicker: ""
// material_type_facet: ""
// multimedia: (5) [{…}, {…}, {…}, {…}, {…}]
// org_facet: (2) ['Southwest Airlines Company', 'Republican Party']
// per_facet: ['Biden, Joseph R Jr']
// published_date: "2021-10-31T20:06:56-04:00"
// section: "us"
// short_url: "https://nyti.ms/3BrcLcI"
// subsection: ""
// title: "Why a Pilot Is Under Investigation for Saying ‘Let’s Go Brandon’"
// updated_date: "2021-11-01T12:37:54-04:00"
// uri: "nyt://article/49c5702b-6ca8-5d8d-8892-32c430700e9a"
// url: "https://www.nytimes.com/2021/10/31/us/lets-go-brandon-southwest-airlines.html"
// [[Prototype]]: Object
