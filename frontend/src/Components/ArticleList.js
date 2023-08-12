// With  data from our backend, the next step is to iterate through the queryset, displaying each article's title, description, and date of publication.
const ArticleList = (props) => {

    return (
        <div className="m-2">
        {/* Display the article details if article is not None */} 
   	    {props.articles && props.articles.map(article =>{
            return (

              <div key= {article.id}>
                <h2 className="text-primary"> { article.title} </h2>
                <p> { article.body } </p>
                <p> { article.date } </p>
    	        <hr/>
              </div>
            )
            
            })}
        </div>
        )
}

export default ArticleList;

// This component receives props that we will pass in the next phase.
// We also need to export the component we just constructed so that it may be imported into other components.
