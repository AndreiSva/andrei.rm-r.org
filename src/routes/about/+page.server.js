import os from "os";
import { exec, execSync } from "child_process";

export function load() {
    let data = {};
    data["commands"] = {};

    const uptime = os.uptime();
    const days = Math.floor(uptime / (3600 * 24));
    const hours = Math.floor(uptime % (3600 * 24) / 3600);
    const minutes = Math.floor(uptime % 3600 / 60);
    const seconds = Math.floor(uptime % 60);

    const uptime_string = `${days} ${(days == 1 ? "day" : "days")}, ${hours} ${(hours == 1 ? "hour" : "hours")}, ${minutes} ${(minutes == 1 ? "minute" : "minutes")}, and ${seconds} ${(seconds == 1 ? "second" : "seconds")}`;

    data["uptime"] = uptime_string;

    const commands = [
        "uname -a",
        "free -m"
    ];

    commands.forEach((value, index, array) => {
        data["commands"][value] = execSync(value).toString();
    })

    return data;
}