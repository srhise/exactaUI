BaseUI

## Getting Started
Install Node - http://nodejs.org/download/

Install Grunt via Terminal - ```npm install -g grunt-cli``` (http://gruntjs.com/getting-started)

Instal Bower via NPM - ```npm install -g bower```

Node is a program that runs on your computer, you may already have it. Also, you don't have to install grunt for each project. So you might have that too. However, bower is project specific and needs to be installed inside the root folder of your project. From here on out you should be at a terminal in your root project folder.

## Running the Project
Run - ```npm install```

Run - ```bower install```

Fire up Grunt Serve Task - ```grunt serve```

That's it, now code away!

## Please read
Don't ever commit the following stuff:

	.DS_Store
	
	bower_components/
	
	node_modules/
	
	public/
	
    
Those are local. I'm gonna try to get those on a .gitignore file here. It's getting late though.
