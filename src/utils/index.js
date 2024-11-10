import toast from "react-hot-toast"

export const getReads = () => {
    let reads = []
    const storedReads = localStorage.getItem('reads')
    if(storedReads){
        reads = JSON.parse(storedReads)
    }

    return reads
}
export const getWishLists = () => {
    let WishLists = []
    const storedWishLists = localStorage.getItem('wishes')
    if(storedWishLists){
        WishLists = JSON.parse(storedWishLists)
    }

    return WishLists
}

export const saveRead = read => {
    let reads = getReads()
    const isExist = reads.find(r=>r.bookId === read.bookId)
    if(isExist){
        return toast.error('Already in Read list')
    }
    reads.push(read)
    localStorage.setItem('reads', JSON.stringify(reads))
    toast.success('Book added to Read list successfully!!')
}

export const saveWishList = WishList => {
    let WishLists = getWishLists()
    const isExist =WishLists.find(w=>w.bookId === WishList.bookId)
    if(isExist){
        return toast.error('Already in Wish list')
    }
    WishLists.push(WishList)
    localStorage.setItem('wishes', JSON.stringify(WishLists))
    toast.success('Book added to Wish list successfully!!')
}

