import { Component, useEffect, useState } from 'react';
import Stories from 'react-insta-stories';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Modal } from 'react-bootstrap';
// import { render } from '@testing-library/react';
// import reactToWebComponent from 'react-to-webcomponent';
// import { ReactPropTypes } from 'react';

const burakHeading = {
  heading: "",
  subheading: "",
  profileImage: "https://i.imgur.com/lq0DC3a.jpg"
}

const initialStories = [
  {
    url: 'https://i.imgur.com/QpUEcfi.jpg',
    type: 'image',
    header: burakHeading,
    // seeMore2: true,
    duration: 1500,
    /* seeMore: ({ close }: () => void) => {
			return <div onClick={close}>Hello, click to close this.</div>;
		} */
    /* content: ({ action, isPaused }) => {
			useEffect(() => {
				setTimeout(() => {
					action('pause');
					setTimeout(() => {
						action('play');
					}, 2000);
				}, 2000);
			}, []);
			return (
				<div style={{ background: 'pink', padding: 20 }}>
					<h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
					<h1>{isPaused ? 'Paused' : 'Playing'}</h1>
				</div>
			);
		} */
  },
  {
    url: 'https://i.imgur.com/in5Jr1h.jpg',
    type: 'image',
    header: burakHeading
  },
  {
    url: 'https://i.imgur.com/Zo5Kpnd.mp4',
    type: 'video',
    header: burakHeading
  },
  {
    url: 'https://i.imgur.com/LBRXhIq.jpg',
    type: 'image',
    header: burakHeading,
  },
  {
    url: 'https://i.imgur.com/ARMxyC4.png',
    type: 'image',
    header: burakHeading,
  }
]

// const StoryComponent = (): JSX.Element => {
// class StoryComponent extends Component {
// class StoryComponent extends Component {
const StoryComponent: React.FC = (): JSX.Element => {
// class StoryComponent extends HTMLElement {
    /* constructor() {
      super()
    } */

    const [stories, setStories] = useState(initialStories);
    const [show, setShow] = useState<boolean>(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
      handleShow();
    }, [])

    const onAllStoriesEndHandler = () =>{
      console.log('stories ended')
      // handleClose()
    }

    const onStoryStartHandler = () => {
      console.log('started')
      // handleShow();
    }
    // render() {
      return (
        <>
          <Button variant="primary" className="custom-btn" onClick={handleShow}>
            Primary
          </Button>
          <Modal show={show} onHide={handleClose} contentClassName="modal-content-custom">
            {/* <Modal.Body className="modal-content-custom"> */}
              <Stories
                stories={stories}
                defaultInterval={1500}
                // width={'100%'}
                // height={'100vh'}
                loop={false}
                keyboardNavigation={true}
                onStoryStart={onStoryStartHandler}
                onStoryEnd={() => { } }
                onAllStoriesEnd={onAllStoriesEndHandler} />
            {/* </Modal.Body> */}
          </Modal>
        </>

      )
    // }
  // }
}

// customElements.define('stories-widget', reactToWebComponent(StoryComponent, React, ReactDOM))
export default StoryComponent;
// customElements.define('stories-widget', StoryComponent);
