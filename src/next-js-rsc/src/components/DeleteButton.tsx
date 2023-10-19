"use client";

import { experimental_useFormStatus } from "react-dom";

const DeleteButton = () => {
    const { pending } = experimental_useFormStatus()

    return <button type="submit" aria-disabled={pending}>{pending ? 'Loading' : 'Delete'}</button>
}

export default DeleteButton