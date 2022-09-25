import { Blog } from '@/models'

// Fetch all blogs that associated with specified user.
export const fetchUserBlog = async (id: number | string): Promise<[Blog]> =>
  await useApi(`/api/users/${id}/blog`)