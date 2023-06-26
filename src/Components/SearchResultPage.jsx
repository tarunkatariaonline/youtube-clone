import { Box, HStack, Heading, Image, LinkBox, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom";
import SearchVideo from './SearchVideo';
const SearchResultPage = () => {
    let [searchParams] = useSearchParams();
    const query = searchParams.get("search_query")
    // console.log(query)

    const [videos,setVideos] = useState(null)
   
 

  useEffect(()=>{
    const  getSearchResults = async()=>{
        const res =  await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyD5J-yFntgSCvJ7X0Bdw4WHOUXKMvUl_ec`)
        const json = await res.json()
        console.log(json.items)
        setVideos(json.items)
       
      }
   getSearchResults()
  },[query])
  return (!videos)?<div>searching</div>: (

   <Box w={"100%"}>

   {videos.map((video)=>{
    return  (video.id.kind==="youtube#video")? <Link to={'/watch?v='+video.id.videoId} key={ video.id.videoId}>  < SearchVideo thumbnail={video.snippet.thumbnails.medium} title={video.snippet.title} channelTitle={video.snippet.channelTitle} desc={video.snippet.description} /> </Link>:""
   })} 
  
   </Box>
  )
}

export default SearchResultPage