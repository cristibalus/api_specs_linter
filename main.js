let core = require("@actions/core");
let github = require("@actions/github");

run();

async function run() {
    let context = github.context;

    try {
        if (context.eventName === "push") {
            info("pushed!!");
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}
