import{
    ARTICLES_FETCHED,
    ARTICLES_UPDATED
 } from 'Settings';
export const changeSearchTextAction=(search_text,full_articles)=>{

    return(dispatch)=>{

        const pattern = new RegExp(search_text,"ig");
        const articles = full_articles.filter((article)=>{
            return pattern.test(article.body_text) 
            || pattern.test(article.title) || pattern.test(article.topic.name)
            
        });
        dispatch({
            type: ARTICLES_UPDATED,
            payload : articles

        });

    }
   


}