import { Box } from '@chakra-ui/react'
import React from 'react'
import Comments from './Comments'
import CommentList from './CommentList'


const commentsData = [
{
  name:"tarun kataria",
  text:"lorem ipsum text",
  replies:[
   {
    name:"vk",
    text:"hello tarun",
    replies:[
        {
            name:"ru",
            text:"reply to you",
            replies:[
                
            ]
        }
    ]
   }
  ]
},
{
    name:"tarun kataria",
    text:"lorem ipsum text",
    replies:[
     {
      name:"vk",
      text:"hello tarun",
      replies:[
          {
              name:"ru",
              text:"reply to you",
              replies:[
                  
              ]
          }
      ]
     }
    ]
  },
  {
    name:"tarun kataria",
    text:"lorem ipsum text",
    replies:[
     {
      name:"vk",
      text:"hello tarun",
      replies:[
          {
              name:"ru",
              text:"reply to you",
              replies:[
                  
              ]
          }
      ]
     }
    ],
    
  }
  ,
  {
    name:"tarun kataria",
    text:"lorem ipsum text",
    replies:[
     {
      name:"vk",
      text:"hello tarun",
      replies:[
          {
              name:"ru",
              text:"reply to you",
              replies:[
                  
              ]
          },
          
      ]
     }
    ]
  }

]


const CommentSection = () => {
  return (
   <Box w={["95%","52%"]}>

{commentsData.map((comment,index)=>{
   return (commentsData.length!==0)? <CommentList key={index} comment={comment}/>:""
})}
    

  
   </Box>
  )
}

export default CommentSection