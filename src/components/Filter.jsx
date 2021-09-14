import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'

const useStyles = makeStyles({

    allFilter:{
        paddingBottom:"80vh",
        background: "#08605F",
        color: "white"
    },

    infoFilter:{
        background: "#d18c6f",
        paddingBottom:"80vh",
        color: "white"
    },

    gameFilter:{
        background: "#ccb866",
        paddingBottom:"80vh",
        color: "white"
    },

    videoFilter:{
        background: "#8e53b5",
        paddingBottom:"80vh",
        color: "white"
    },

    filters:{
        display:"flex",
        justifyContent: "center",
        paddingTop: "2rem",
        
        "& .MuiButtonBase-root":{
            background:"#177E89",
            textTransform: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
            margin: "0 20px",
            fontSize: "1.25rem",
            width: "10rem"
        },

		"& .MuiButtonBase-root:hover":{
			color:"#177E89",
			background: "white",
		},
    },

    activeFilter:{
        borderBottom: "5px solid #75B03E",
    },

    activities:{
        border: "5px solid white",
        borderRadius: "20px",
        marginTop:"2rem",

        display: "flex",
        flexDirection:"column",
        justifyContent:"center",

        margin: "auto",
        width:"50%",
        padding: "2rem",

        "& h1":{
            marginBottom: ".75rem"
        },

        "& p":{
            margin: ".3rem 0 .3rem 1.25rem",
            fontWeight: 500,
            fontSize: "1.15rem"
        }
    }

})

const Filter = () => {
    
    const classes = useStyles()

    const data = {
        "games": [
            "Box Breathing",
            "Calm Counting",
            "Decoding Messages",
            "Going on an Adventure",
            "Match the Color",
            "Superhero Workout",
            "5-4-3-2-1 Technique",
            "Milk, Milk, Milk"
        ],
        
        "informational": [
            "Healthy Habits",
            "How to do the Five",
            "How to wash your hands",
            "Jumping Jacks",
            "Pushups"
        ],

        "video":[
            "Hokey Pokey",
            "What is COVID-19?"
        ]
    }

    const [content, setContent] = useState(
        Object.keys(data).map(key => data[key]).flat()
    )

    const [filter, setFilter] = useState("all")

    const filterClick = (filterBy) => {
        var _data;
        if(filterBy === "games"){
            _data = data.games
            setContent(_data)
            setFilter("games")
        }
        else if(filterBy === "informational"){
            _data = data.informational
            setContent(_data)   
            setFilter("informational")
        }
        else if (filterBy === "video"){    
            _data = data.video
            setContent(_data)
            setFilter("video")
        }
        else{
            _data = Object.keys(data).map(key => data[key]).flat()
            setContent(_data)
            setFilter("all")
        }
    }
 
    return (
        <div 
            className = {
                filter === "games" ? classes.gameFilter
                : filter === "informational" ? classes.infoFilter 
                : filter === "video" ? classes.videoFilter
                : classes.allFilter    
            }
        >

            {/* filters */}
            <div className ={classes.filters}>
                <Button 
                    className = {filter === "all" && classes.activeFilter}
                    onClick = {()=>filterClick("all")}
                >
                    All
                </Button>

                <Button
                    className = {filter === "informational" && classes.activeFilter}
                    onClick = {()=>filterClick("informational")}
                >
                    Informational
                </Button>

                <Button
                    className = {filter === "games" && classes.activeFilter}
                    onClick = {()=>filterClick("games")}
                >
                    Games
                </Button>

                <Button
                    className = {filter === "video" && classes.activeFilter}
                    onClick = {()=>filterClick("video")}
                >
                    Video
                </Button>
                
            </div>

            {/* filtered activities */}
            <div className ={classes.activities}>

                <h1>Activities</h1>

                {content.map( (item) => {
                    return (
                        <p>
                         {`⚫ ${item}`}
                        </p>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Filter
