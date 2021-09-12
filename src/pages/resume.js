import * as React from 'react'
import { Link } from 'gatsby';

const resume_loc = "https://uofi.box.com/s/7uufzaqil79sozt8h5uf43baeth1tciz";

class Resume extends React.Component {

componentDidMount() {
  window.location.href = resume_loc;
}

render() {
  return (
    <div>
     <h4>Redirecting to <Link to={resume_loc}>{resume_loc}</Link></h4>
    </div>
  )
}
}

export default Resume;