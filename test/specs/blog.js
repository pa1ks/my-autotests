import BlogPage from "../pages/blog-page.js"

describe('Blog page', () => {
    it('Get the list of all Recent posts and assert the text length and assert the total of posts', async () => {
        await BlogPage.open()


        // Get the recent posts
        const posts = await BlogPage.postsList

        // Loop through the list and assert the text length is greater then 10

        for (const post of posts) {
            const postText = await post.getText()
            await expect(postText.length).toBeGreaterThan(10);
        }

        // Assert the total length is 5

        await expect(posts).toHaveLength(5)

    })
})