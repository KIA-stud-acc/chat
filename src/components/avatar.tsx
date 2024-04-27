import { useEffect, useState } from 'react'
import './avatar.css'



function Avatar(name: string) {


  function asciiToRGB(string1:string){
    const string = string1.toLowerCase()
    var tmp = [([...string].length>0)? string.charCodeAt(0)%975:0,([...string].length>1)?string.charCodeAt(1)%975:0,([...string].length>2)?string.charCodeAt(2)%975:0]
    const mn = Math.min(...tmp)
    const indMn = tmp.indexOf(mn)
    tmp.splice(indMn,1,0)
    var mx = Math.max(...tmp)
    const indMx = tmp.indexOf(mx)
    tmp.splice(indMx,1,0)
    tmp[tmp.indexOf(Math.max(...tmp))] > 110?tmp[tmp.indexOf(Math.max(...tmp))] += 50:tmp[tmp.indexOf(Math.max(...tmp))] -=50
    tmp[indMn] = mn/3-(mn/3)%1
    tmp[indMx] = mx?mx+80:0
    return tmp}
  function RGBToText(tmp:any){
    var mx = Math.max(...tmp)
    return tmp.map(function(item:any){
      if (item==mx){
        return 100
      }
      else {
        return 0
      }
    })
}

var color:any = asciiToRGB(name)
var txtcolor:any=RGBToText(color)
  return (
    <>
      <div className="clrSqr" onClick={()=>{navigator.clipboard.writeText(`rgb(${color.join(",")})`)}} style={{backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`}}>
        <div className='ltr unselectable' unselectable="on" style={{color: `rgb(${txtcolor[0]},${txtcolor[1]},${txtcolor[2]})`}}>{name.toUpperCase()[0]}</div>
      </div>
    </>
  )
}

export default Avatar
