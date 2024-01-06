import { base } from "$app/paths";
import fs from "fs";

export function get_journals(n = 0) {
    const journal_dir = `${base}static/journal-entries`;
    const journal_files = fs.readdirSync(journal_dir);

    journal_files.sort((a, b) => {
        // Remove the .md extension and split the date by "-"
        let dateA = a.slice(0, -3).split("-");
        let dateB = b.slice(0, -3).split("-");

        // Create new Date objects
        let dateObjA = new Date(dateA[2], dateA[1] - 1, dateA[0]);
        let dateObjB = new Date(dateB[2], dateB[1] - 1, dateB[0]);

        // Compare the Date objects
        return dateObjA - dateObjB;
    });
    journal_files.reverse();

    let journal_data = [];

    journal_files.forEach((value, index, array) => {
        if (n != 0 && index > n) {
            return false;
        }
        journal_data.push({
            name: fs.readFileSync(`${journal_dir}/${value}`).toString().split("\n")[0].slice(2),
            date: value.slice(0, -3),
        });
    })

    return {
        journal_data: journal_data
    };
}