# Frontend service 2022

Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)

# Table of contents

- [Setup and installation](#setup)
	- [Runtime](#runtime)
	-	[Package manager](#package_manager)
- [Running project in development](#run)
- [Code of conduct](#conduct)
-	[Contribution](#contribution)
	- [Branching](#branching)
	- [Pull requests and issues](#pr_issues)

<h1 id="setup">Setup and Installation</h1>

This will guide you through step by step means to setup the project properly on your computer for development
Depending on your `Operating System` there is no limitation to development, as `Windows` ,`Linux` and `Mac` os are supported as the project is [cross-platform](https://en.wikipedia.org/wiki/Cross-platform_software) and is independent of your environment.

The project runs with `vite` a frontend tool for [HMR](https://webpack.js.org/guides/hot-module-replacement/) and fast module reload for faster development. 

<h3 id="runtime">Runtime environment</h3>

The `JavaScript` ecosystem has so many tools at hand such as [bun](https://bun.sh/) Which is a new runtime for JS and has a package manager of the same name i.e `bun` and the runtime itself also `bun`. We also have a popular runtime [nodejs](https://nodejs.org/en/) and most used. Has three package managers i.e `npm`, `pnpm` and `yarn`

Well install nodejs in our system and the required version should be `>=16.*.*` and not below that.
If you don't have nodejs installed in your system check on the documentation on how to install nodejs on [Windows](https://nodejs.org/dist/v16.18.0/node-v16.18.0-x86.msi), [Mac](https://nodejs.org/dist/v16.18.0/node-v16.18.0.pkg) and [Linux](https://github.com/nodesource/distributions#deb) or you can also use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to install and manage node

Once you have node installed and the package manager installed then we can move to the next step then choose a package manager

<h3 id="package_manager">Package manager</h3>

Because we'll be using `nodejs` we have to pick on a package manager and trade-off the other two. Here is the summary of the package managers

> [npm](https://docs.npmjs.com/) - For Node package manager that has the largest community of packages and comes default with `nodejs` installation

> [yarn]() which also a package manager working as `npm` still. Has [Caching capabilities](https://aws.amazon.com/caching/#:~:text=In%20computing%2C%20a%20cache%20is,the%20data's%20primary%20storage%20location.) making it faster than `npm`. For more Information you can check on the [Yarn Docs](https://yarnpkg.com/getting-started)

> [pnpm](https://pnpm.io/) Newest in town package manager for node and performs better compared to the previous two. Uses [Symbolic links](https://en.wikipedia.org/wiki/Symbolic_link) for module installation. Faster in performance as compared also to `yarn` and `npm`. For more info please check on the [pnpm docs](https://pnpm.io/)

Going forward `pnpm` is suitable for our application and offers better performance as compared to the other two i.e `npm` and `yarn`

With `npm` installed we can install any other module into the system globally to access in the global scope of the system.

Installing `pnpm` on `windows`
```sh
npm install -g pnpm
```
On 	`Linux`
```sh
sudo npm install -g pnpm
```
To confirm `pnpm` has been insalled use the version check command
```sh
pnpm -v # 7.12.2
```
Then now we are ready to run the project

<h1 id="run">Runnning the project locally</h1>
---
<h1 id="setup">Setup and Installation</h1>
---
<h1 id="conduct">Code of conduct</h1>
---
<h1 id="contribution">Contribution</h1>
---
<h3 id="branching">Branching</h1>
---
<h1 id="pr_issues">Pull requests(PR) and isssues</h1>


