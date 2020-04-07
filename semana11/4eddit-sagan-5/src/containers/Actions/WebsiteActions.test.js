import { setPosts, setSelectedPost, setPostDetails, setSelectedPostID } from "./WebsiteActions";

describe("Testando Actions", () => {
    test("SET_POSTS", () => {
        const mockPost = "Post mockado";
        const mockAction = setPosts(mockPost)

        expect(mockAction.type).toEqual("SET_POSTS")
        expect(mockAction.payload.posts).toBeDefined()
        expect(mockAction.payload.posts).toEqual(mockPost)
        })
    
    test("SET_SELECTED_POST", () => {
        const mockPostID = "123";
        const mockAction = setSelectedPost(mockPostID)

        expect(mockAction.type).toEqual("SET_SELECTED_POST")
        expect(mockAction.payload.postID).toBeDefined()
        expect(mockAction.payload.postID).toEqual(mockPostID)
        })

    test("SET_POST_DETAILS", () => {
        const mockpostDetails = "Details mockado";
        const mockAction = setPostDetails(mockpostDetails)

        expect(mockAction.type).toEqual("SET_POST_DETAILS")
        expect(mockAction.payload.postDetails).toBeDefined()
        expect(mockAction.payload.postDetails).toEqual(mockpostDetails)
        })
})