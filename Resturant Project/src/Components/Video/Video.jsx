import { useRef, useState } from 'react'
import './Video.css'
import { meal } from '../../constants';
import {BsPauseFill , BsFillPlayFill} from 'react-icons/bs'

const Video=()=>{
    let [VidPlayer,setVideoPlayer]=useState(false)
    let videRef=useRef();
    return <div className="app__video">
        <video
        ref={videRef}
        src={meal}
        loop
        muted
        // controls={false}
        />
            <div className="app__video-overlay flex__center">
                <div className="app__video-overlay_circle flex__center"
                    onClick={()=> {
                        setVideoPlayer(!VidPlayer)
                        if(VidPlayer){
                            videRef.current.pause()
                        }else{
                            videRef.current.play()
                        }
                    }}
                >
                     {VidPlayer ? (
                        <BsPauseFill color="#fff" fontSize={30} />
                    ) : (
                        <BsFillPlayFill color="#fff" fontSize={30} />
                    )}
                </div>
            </div>
    </div>
}
export default Video 