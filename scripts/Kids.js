import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li 
        data-id="${child.id}" 
        data-type="child" 
        data-wish="${child.wish}"
        >${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        debugger
        const itemClicked = clickEvent.target;
        if (itemClicked.dataset.type === "child") {
            const childId = parseInt(itemClicked.dataset.id); 

            for (const child of children) {
                if (child.id === childId) {
                    window.alert(`${child.name}'s wish is ${child.wish}`);
                }
            }
        }
    }
);