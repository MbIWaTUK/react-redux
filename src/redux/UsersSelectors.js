import { createSelector } from "reselect"

const getUsersSelector = (state)=>{
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users)=>{
    return users
})

const getPageSizeSelector = (state)=>{
    return state.usersPage.pageSize
}

export const getPageSize = createSelector(getPageSizeSelector, (pageSize)=>{
    return pageSize
})

const getTotalUserCountSelector = (state)=>{
    return state.usersPage.totalUserCount
}

export const getTotalUserCount = createSelector(getTotalUserCountSelector, (totalUserCount)=>{
    return totalUserCount
})

const getCurrentPageSelector = (state)=>{
    return state.usersPage.currentPage
}

export const getCurrentPage = createSelector(getCurrentPageSelector, (currentPage)=>{
    return currentPage
})

const getIsFetchingSelector= (state)=>{
    return state.usersPage.isFetching
}

export const getIsFetching = createSelector(getIsFetchingSelector, (isFetching)=>{
    return isFetching
})

const getFollowButtonDisabledSelector = (state)=>{
    return state.usersPage.followButtonDisabled
}

export const getFollowButtonDisabled =createSelector(getFollowButtonDisabledSelector,(followButtonDisabled)=>{
    return followButtonDisabled
})