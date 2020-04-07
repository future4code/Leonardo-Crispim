import postsReducer from "./posts";
import { setPosts, setSelectedPost, setPostDetails } from "../containers/Actions/WebsiteActions";

const mockStore = {
    postList: [],
    selectedPostID: "",
    postDetails: [],
}

describe("Posts Reducers", () => {
    test("SET_POSTS", () =>{
        const mockText = "h"
        const newSetPosts = setPosts(mockText)
        const newStore = postsReducer(mockStore, newSetPosts)

        expect(newStore.postList).toHaveLength(1)
        expect(newStore.postList[0]).toBe(mockText)
        expect(newStore.postList[0]).toBeDefined()
    })

    test("SET_SELECTED_POST", () =>{
        const mockPostID = "123"
        const newSetSelectedPost = setSelectedPost(mockPostID)
        const newStore = postsReducer(mockStore, newSetSelectedPost)

        expect(newStore.selectedPostID).toBeDefined()
        expect(newStore.selectedPostID).toBe(mockPostID)
    })

    test("SET_POST_DETAILS", () =>{
        const mockPostDetails = "Details Here"
        const newSetPostDetails = setPostDetails(mockPostDetails)
        const newStore = postsReducer(mockStore, newSetPostDetails)

        expect(newStore.postDetails).toBeDefined()
        expect(newStore.postDetails).toBe(mockPostDetails)
    })
})