import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Content = [
    {
        title:"Limbo",
        description:{
            "p1":"Limbo, a somber place where mortals await anxiously to ascertain if they are worthy of entering the Clan. Within its confines, souls undergo tests and trials that will ascertain their suitability to access that sacred realm. ",
            "p2":"The air is thick with uncertainty and anticipation as aspirants contemplate their past deeds. Will they be deemed deserving? Limbo serves as a threshold of transition, where the murmurs of those already judged intermingle with the hopes of newcomers. ",
            "p3":"Time stretches on, and each moment feels like an eternity as they await the verdict that will irrevocably alter their destinies."
        },
        Button: <ArrowDownwardIcon/>,
        id:1,
        down:true
    },
    {
        title:"Ascencio",
        description:{
            p1:"Ascension, the stage that follows Limbo, is the moment when the newly selected can enter what we will call 'The Clan'. It represents a significant threshold that signifies the transition from trial to reward."  ,
            p2:"Those who have proven themselves in the trials are embraced warmly within this sacred community."  ,
            p3:"In The Clan, they will experience a profound spiritual awakening and establish a deep connection with the elevated beings that surround them. Ascension marks the commencement of a magnificent new journey, where they will uncover hidden knowledge and ascend to unparalleled levels of wisdom and power."
        },
        Button: <ArrowDownwardIcon/>,
        id:2,
        down:true
    },
    {
        title:"The Clan",
        description:{
            p1:"The Clan is the place where we come together as a community to delve into the essence of ANIMALS. It is here that we gather to unravel its true meaning."  ,
            p2:"Time is a collective perception, but if you pause and observe carefully, only the present moment truly exists. In The Clan, we embrace the power of now, recognizing that the past and future are mere illusions. It is within this sacred space that we connect, share wisdom, and unlock profound insights.",
            p3:"Together, we navigate the mysteries of existence, fostering a deep sense of unity and purpose.                                  "                                                                                                                  
        },
        Button: <ArrowDownwardIcon/>,
        id:3,
        down:true
    },
    {
        title:"Illumination",
        description:{
            p1:"Illumination, a transcendental learning process, is the necessary step to obtain a place among the exclusive group of 7777 ANIMALS.",
            p2: "It involves a deep inner exploration and an awakening of consciousness. Those who attain Enlightenment develop a deeper understanding of the interconnectivity between all life forms and the universe. They become wise and compassionate mentors, dedicated to safeguarding and conserving the natural world." ,
            p3:"Enlightenment represents an invitation to join in the noble mission of helping and educating others in order to forge a sustainable future for our community",
        },
        Button: <ArrowUpwardIcon/>,
        id:4,
        down:false
    }
]

export default Content