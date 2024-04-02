## Installation

You will need a few things to get started with this template, namely:
- Node.js
- GitHub account (optional)
- Git (optional)
- A text editor of choice (I use [Visual Studio Code](https://code.visualstudio.com/)!)

### 1. Install Node.js

This can be done with any method of choice. Node can be downloaded directly at [nodejs.org](https://nodejs.org/en) or with a version manager like [nvm](https://github.com/nvm-sh/nvm) (that's [nvm-windows](https://github.com/coreybutler/nvm-windows) for you Windows users.)

### 2. Get the code in this repository

#### 2a: I have a GitHub account (Optional)
I recommend creating your own repository with the "Use this template" button at the top of this repository. This allows you to use Git to manage your website's version history.

#### 2b: I have Git

[Git](https://git-scm.com/) is a great way to manage updates for your repository. Git allows you to see the full history of changes to your code, which is great for debugging or figuring out how you did something several months ago. GitHub also allows you to create [actions](https://docs.github.com/en/actions), such as uploading your website to your hosting provider of choice automatically every time you make a new change to Git.

If you have Git, you can download the files to your computer by opening a command line in your directory of choice (e.g. `Documents/Projects/`) and enter this into the command bar:

```
git clone https://github.com/portfiend/eleventy-template.git
```

...or replace that link with the HTTPS/SSH link to your personal repository, which can be found in the "Code" dropdown button at the top of the repository.

#### 2c: I don't have Git

This repository's files can be downloaded as a .ZIP file through the "Code" dropdown at the top. Underneath the "Clone" section should be a button that says "Download ZIP".

Make sure to extract these files, because it's pretty hard to edit files when they're in a zipped folder!

### 3. Set up your Node environment and run the project

Now that you have your files, open your project directory in a command line (e.g. `Documents/Projects/eleventy-oc-directory-template/`) and type `npm i`. This should install all dependencies that allow you to run the project.

Once you have your dependencies, type `npm start` in the command line to serve a **live server** of this template. You can view your website by typing `localhost:8080` in your browser's address bar! Alternatively, you can type `npm build` to run a one-time generation of your project files, but this can't be viewed through your browser.

Eleventy projects work by taking your source files - including "template" files such as `.njk`, `.html`, or `.md`, data files, assets (`.css`, `.js`, `.png`, etc...), and then uses all of these combined to generate a complete website. This repository outputs your files to a folder called `build`. The contents of the `build` folder can then be uploaded to any website host of choice, such as Neocities.

The [Eleventy](https://www.11ty.dev/) website contains extensive documentation to using the static site generator. In the future I would like to create proper tutorials for navigating this project.

## TODO

If you have any issues / bugs / etc., feel free to open a GitHub issue for it!

- Developer guides
  - Content warning documentation
  - Tabbed pane documentation