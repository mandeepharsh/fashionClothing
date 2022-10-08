import {createSelector }  from 'reselect'
const selecetCategoryReducer = (state)=>  state.categories
const selectCAtegories = createSelector(
    [selecetCategoryReducer],
    (categoriesSlice)=> categoriesSlice.categories
)

export const categorySelector = createSelector([selectCAtegories],
    (catagories)=> catagories.reduce((acc,catagory)=>{
    const {title,items} = catagory;
    acc[title.toLowerCase()] = items;
    return acc;
 },{}))


 export const selectCategoriesIsLoading = createSelector(
    [selecetCategoryReducer],
    (categorieslice) => categorieslice.isLoading
 )