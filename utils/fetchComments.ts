import { Comment } from '../typings'

export const fetchComments = async (tweetId: string) => {
    const comments: Comment[] = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getComments?tweetId=${tweetId}`).then((res) => res.json())

    return comments
}