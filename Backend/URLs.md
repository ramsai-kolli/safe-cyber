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

   - url: /tfake-create
   - input : {headline:"",tcontent : "rpee banned"}
   - output : {success : true} // successfully created
   - action/backend : check if headline already exist ?? then push it to DB by { happened: 1, headline:"", tcontent: "" }

   2. Get trend list

   - url: /tfake-list
   - input : null (get method)
   - action: sort it in Descending order by happened-int-count
   - output : [ {headline:"",tcontent: ""}, {headline:"",tcontent: ""} ]

   3. Upvote / happened to me

   - url : /happenedtome
   - input : {headline}
   - action/backnd : increase happened-count by 1
   - output : {success: true}
   - action/frontend : reload the page

5. Trending scams:

   1. Create scam

   - url: /tscam-create
   - same above

   2. Get trend list

   - url: /tscam-list
   - same above

   3. Upvote / happened to me

   - url : /noticedit
   - same

6. complaint portal

   - url : /complaint
   - input : {tdata: "he abused me"}
   - action/back : send email of tdata to cybersecurty@gmail.com
   - output/back : {success: true}

7. Cyber-Support AI chatbot
   - we already have it
