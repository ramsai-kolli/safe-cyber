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

4. Trending fake:
