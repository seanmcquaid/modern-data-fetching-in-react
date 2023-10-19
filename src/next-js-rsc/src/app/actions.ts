"use server";

import QueryKeys from "@/services/QueryKeys";
import postsService from "@/services/postsService";
import sleep from "@/utils/sleep";
import { revalidateTag } from "next/cache";

export const deletePost = async (formData: FormData) => {
    const id = formData.get('id')?.toString()!;
    await sleep(2000)
    await postsService.deletePost(id);
    revalidateTag(QueryKeys.GET_POSTS);
}