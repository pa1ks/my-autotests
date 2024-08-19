import NavComponent from "./components/nav-comp.js"

class HomePage {
    open () {
        return browser.url('/')
    }

    get btnGetStarted() {
        return $('#get-started')
    }

    get imageLogo() {
        return $('//img[@alt="Practice E-Commerce Site"]')
    }

    get txtHeading() {
        return $('h1.elementor-heading-title.elementor-size-default')
    }

    get NavComponent() {
        return NavComponent
    }
}

export default new HomePage()