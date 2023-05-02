import { instance } from './axios'

export const getPostsByUser = async (userName) => {
  try {
    const response = await instance.get(`post/getPostsByUser=${userName}`)
    return response
  } catch (error) {
    if (error.response.data.Errors) {
      alert(error.response.data.Errors[0].Detail)
    } else {
      alert(error.message)
    }
  }
}

export const getPostsById = async (postId, token) => {
  try {
    const response = await instance.get(`post/getPost=${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    if (error.response.data.Errors) {
      alert(error.response.data.Errors[0].Detail)
    } else {
      alert(error.message)
    }
  }
}

export const getLikesByPostId = async (postId, token) => {
  try {
    const response = await instance.get(`post/getLike=${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    if (error.response.data.Errors) {
      alert(error.response.data.Errors[0].Detail)
    } else {
      alert(error.message)
    }
  }
}

export const getCommentsByPostId = async (postId, token) => {
  try {
    const response = await instance.get(`post/getComment=${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    if (error.response.data.Errors) {
      alert(error.response.data.Errors[0].Detail)
    } else {
      alert(error.message)
    }
  }
}

export const getRepostsByPostId = async (postId, token) => {
  try {
    const response = await instance.get(`post/getRepost=${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    if (error.response.data.Errors) {
      alert(error.response.data.Errors[0].Detail)
    } else {
      alert(error.message)
    }
  }
}

export const createPost = async (
  creator,
  content,
  image,
  video,
  audio,
  token
) => {
  try {
    const response = await instance.post(
      `post/createPost`,
      {
        title: creator,
        content,
        imageUrl: image,
        videoUrl: video,
        audioUrl: audio,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response
  } catch (error) {
    if (error.response.data.Errors) {
      alert(error.response.data.Errors[0].Detail)
    } else {
      alert(error.message)
    }
  }
}

export const addComment = async (postId, content, token) => {
  try {
    const response = await instance.post(
      `post/addComment`,
      {
        postId,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response
  } catch (error) {
    alert(error.message)
  }
}

export const addLike = async (postId, token) => {
  try {
    const response = await instance.post(
      `post/addLike`,
      {
        postId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response
  } catch (error) {
    if (error.response.data.Errors) {
      alert(error.response.data.Errors[0].Detail)
    } else {
      alert(error.message)
    }
  }
}

export const repost = async (postId, token) => {
  try {
    const response = await instance.post(
      `post/repost`,
      {
        postId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response
  } catch (error) {
    if (error.response.data.Errors) {
      alert(error.response.data.Errors[0].Detail)
    } else {
      alert(error.message)
    }
  }
}

export const removeLike = async (likeId, token) => {
  try {
    const response = await instance.delete(`post/removeLike=${likeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    alert(error.message)
  }
}

export const deletePost = async (postId, token) => {
  try {
    const response = await instance.delete(`post/deletePost=${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    if (error.response.data.Errors) {
      alert(error.response.data.Errors[0].Detail)
    } else {
      alert(error.message)
    }
  }
}
