import React, { Fragment, useState } from 'react';
import Stories from 'react-insta-stories';

type FormELement = React.FormEvent<HTMLFormElement>;

const heading = {
	heading: "Burak Deniz",
	subheading: "burakdeniz@gmail.com",
	profileImage: "https://i.imgur.com/lq0DC3a.jpg"
}

const initialStories = [
	{
		url: 'https://i.imgur.com/QpUEcfi.jpg',
		type: 'image',
		header: heading,
		duration: 1500
	},
	{
		url: 'https://i.imgur.com/in5Jr1h.jpg',
		type: 'image',
		header: heading,
	},
	{
		url: 'https://i.imgur.com/Zo5Kpnd.mp4',
		type: 'video',
		header: heading
	},
	{
		url: 'https://i.imgur.com/LBRXhIq.jpg',
		type: 'image',
		header: heading
	},
	{
		url: 'https://i.imgur.com/ARMxyC4.png',
		type: 'image',
		header: heading
	}
]

function App(): JSX.Element {
	// const initialStories = [];
	// const stories: Story[] = [];
	const [stories, setStory] = useState(initialStories)

	const onAllStoriesEndHandler = () =>{
		console.log('stories ended')
	}

	const handleSubmit = (e: FormELement) => {
		e.preventDefault()
	}
  	return (
	  	<Fragment>
			<Stories
				stories={stories}
				defaultInterval={1500}
				width={432}
				height={768}
			/>
		</Fragment>
	);
}

export default App;
