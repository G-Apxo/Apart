import React from 'react'
import ThreeSixty from 'react-360-view-simple'

function Test() {
  return (
    <>
    <div class="v360-header text-light bg-dark">
    <span class="v360-header-title">36 Images - Autoplay (1 loop) - Reverse Spin</span>
    <span class="v360-header-description"></span>
</div>
<ThreeSixty
    amount={36}
    imagePath="https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36"
    fileName="chair_{index}.jpg?v1"
/>
</>
  )
}

export default Test