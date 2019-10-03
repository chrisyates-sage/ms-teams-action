const core = require('@actions/core');
const github = require('@actions/github');

try {
	  // `message` input defined in action metadata file
	  //const nameToGreet = core.getInput('message');
	  //console.log(`Hello ${nameToGreet}!`);
	  //const time = (new Date()).toTimeString();
	  //core.setOutput("time", time);
	  // Get the JSON webhook payload for the event that triggered the workflow
	  const payload = JSON.stringify(github.context.payload, undefined, 2)
	  console.log(`The event payload: ${payload}`);
	  console.log(`Test1: ${payload.head_commit.message}`)
	  console.log(`Test2: ${process.env.GITHUB_REPOSITORY}`)
	  
} catch (error) {
	  core.setFailed(error.message);
}
