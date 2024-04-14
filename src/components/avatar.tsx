import { useEffect, useState } from 'react'
import './avatar.css'





function Avatar(name: string) {
  const [nm, setName] = useState('')
  const [color, setColor] = useState([0,0,0])
  const [txtcolor, settxtColor] = useState([0,0,0])


  function asciiToRGB(string1:string){
    setName(string1);
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
    setColor(tmp)
    mx = Math.max(...tmp)
    settxtColor(tmp.map(function(item){
      if (item==mx){
        return 100
      }
      else {
        return 0
      }
    }))
    return
}
useEffect(()=>{
    asciiToRGB(name)
},[name])
  return (
    <>
      <div className="clrSqr" onClick={()=>{navigator.clipboard.writeText(`rgb(${color.join(",")})`)}} style={{backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`}}>
        <div className='ltr unselectable' unselectable="on" style={{color: `rgb(${txtcolor[0]},${txtcolor[1]},${txtcolor[2]})`}}>{nm.toUpperCase()[0]}</div>
      </div>
    </>
  )
}

export default Avatar
