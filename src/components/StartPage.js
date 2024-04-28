/* eslint-disable */
import './StartPage.css';
// https://i.postimg.cc/wMpnP8wp/bureau4b.png
// https://i.postimg.cc/vm7FbZkK/bureau3b.png

export const StartPage = () => {

    return (
      <div className="startpage">
        <h1>Heirloom Room</h1>
        <h2>- Where Every Object Has a Tale to Tell</h2>
        <div className="infosection">
            <p>Welcome to Heirloom Room, a unique digital sanctuary where history is preserved and cherished. Here, each object tells a story, bridging generations with tangible links to the past. Our platform is dedicated to safeguarding these precious narratives, allowing you to capture and share the essence of beloved items that have stood the test of time.</p>
            <div className="keyfeatures">
                <p className="keyfeatures-title">Key Features of Heirloom Room:</p>
                <p><span className="keyfeature">Photo Uploads:</span> Showcase your heirlooms with vibrant, detailed images.</p>
                <p><span className="keyfeature">Document History:</span> Note key historical information such as origin, acquisition, and more.</p>
                <p><span className="keyfeature">Personal Stories:</span> Add depth to your items with personal anecdotes and memories.</p>
                <p><span className="keyfeature">Secure Sharing:</span> Control the visibility of your information, keeping personal details private or sharing them with a community that values heritage as much as you do.</p>
            </div>
            <p>Join Heirloom Room to celebrate the legacy of your most cherished possessions. Begin your journey to keep the past alive, one precious memory at a time.</p>
        </div>
        <img src="https://i.postimg.cc/wMpnP8wp/bureau4b.png" className='bureau-img' alt="a bureau filled with various artefacts" />
        <div className="howtosection">
            <h3>How it works</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec enim sed ex bibendum ultricies. Cras auctor nulla id pellentesque dapibus. Aliquam ultricies elementum rhoncus. Donec mollis aliquet arcu, condimentum consectetur neque efficitur non. In metus nibh, luctus eget maximus eget, sagittis vitae metus. Nullam dapibus nibh eget est eleifend dignissim. </p>
            <p>Duis sed enim sed erat tincidunt efficitur eget et urna. Aenean sed lacus a ipsum mollis tristique eu in risus. Fusce eu ante pellentesque, gravida sem in, bibendum ipsum.</p>
            <p>Integer ornare porta tincidunt. Vivamus et venenatis ligula. Mauris pharetra leo vitae libero bibendum, ac porttitor libero molestie. Cras justo lorem, placerat et mattis at, laoreet in felis. Sed magna urna, mattis id turpis nec, eleifend congue ipsum.</p>
            <p>Aenean egestas eu nisl cursus volutpat. Proin maximus lacinia convallis. Mauris sit amet tempor lacus. Quisque tempor vel erat a tempus. Pellentesque vel mauris vel ligula aliquet ornare vitae ut magna. Etiam quis mi nibh. Nullam ullamcorper diam quam, et facilisis lorem feugiat vel. Phasellus in sapien velit.</p>
        </div>
      </div>
    )
  }