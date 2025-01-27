# Urls and routes

1. Content Sensor

   1. Textual

   - url : /contsensor-text
   - input/frontend : { tdata: user tweet text data }
   - output/backend : { sdata:"sensored data" , sensored: true }

   2. Image

   - url : /contsensor-image
   - input/frontend : image
   - output/backend : { allowed: true }

   3. Video

   - url : /contsensor-video
   - input/frontend : video
   - output/backend : { allowed: true }

2. Misinformation verification

   - url : /misinfo
   - input : { tdata : text data }
   - output/backend : { isreal: true, realperc: 70 , source: "src data" }

3. Group Chat :

4. Trending fake news:

   1. Create News

   - url: /trend-create
   - input : {tdata : "2000 rpee banned"}
   - output : {success : true} // successfully created
   - action/backend : push it to DB by { happened: 1, content: {tdata} }

   2. Get trend list

   - url: /trend-list
   - input : null \*\* so use get method
   - action: sort it in Descending order on basis of happened int-count
   - output : [ {content1: ""}, {content2 : ""} ]

   3. Upvote / happened to me

   - url : /happenedtome
   - input : id of trend-content (if posble) else trend-cont like "2000 rupee .."
   - action/backnd : increase count by 1
   - output : {success: true}
   - action/frontend : reload the page
