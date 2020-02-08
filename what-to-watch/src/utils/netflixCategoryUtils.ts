import { netflixCatData, NetflixCatItem } from "../shared/netflixCategoryData"

interface IDictionary {
    [id: string]: boolean;
}


export class FavLookupFromLocalStorage {

    public favLookUp: IDictionary = {}
    constructor() {
        this.setUpFavLookUp()
    }
    setUpFavLookUp() {

        netflixCatData.forEach((categoryItem: NetflixCatItem) => {
            let id = categoryItem.id
            let favStatusFromStorage = localStorage.getItem(`${id}`)
            let isFave = favStatusFromStorage === "true"
            this.favLookUp[id] = isFave
        })
    }
    setFavStatus = (id: number, status: boolean) => {
        localStorage.setItem(`${id}`, `${status}`)
        this.setUpFavLookUp()
    }
    getSortedItems = (): NetflixCatItem[] => {
        let sortedItems: NetflixCatItem[] = [...netflixCatData]
        Object.assign(sortedItems, netflixCatData)
        sortedItems.sort((one: NetflixCatItem, two: NetflixCatItem): number => {
            let oneIsFav = this.getFavStatus(one.id)
            let twoIsFav = this.getFavStatus(two.id)
            return twoIsFav > oneIsFav  ? 1 : -1
        })
        return sortedItems
    }
    getFavStatus(id: number): boolean {
        if (id in this.favLookUp) {
            const status = this.favLookUp[id]
            console.log(`Return fav status of id: ${id} status: ${this.favLookUp[id]}`)

            return status
        }
        return false
    }
}