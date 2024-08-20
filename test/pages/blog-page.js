class BlogPage {
    async open () {
        return browser.url('/blog')
    }

    get postsList() {
        return $$('#recent-posts-3 ul li')
    }

    
}

export default new BlogPage()