import { Children } from "react";
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    document.innerHtml = reactElement.Childen
    for (const prop in reactElement.Childen) {
        if (prop == 'childern') continue
        domElement.setAttribute(prop, reactElement.props[prop])

    }
    mainContainer.appendChild(domElement)

}
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: '_blank'

    },
    Children: 'click me to  visit google'
}
const mainContainer = document.querySelector('#root')
customRender = (reactElement, mainContainer)