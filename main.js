import { setFailed, info } from "@actions/core";
import github from "@actions/github";

run();

async function run() {
    let context = github.context;

    try {
        if (context.eventName === "push") {
            info("pushed!!");
        }
    } catch (error) {
        setFailed(error.message);
    }
}
