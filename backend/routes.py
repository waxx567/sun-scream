from flask import current_app,jsonify,request
from app import create_app,db
from models import Articles,articles_schema

# Create an application instance
app = create_app()

# Defines a route to collect the data, then serialize objects by giving them to the schema's dump method, which will provide the structured results 
# jsonify() produces a Response object with the mimetype application/json set
@app.route("/articles", methods=["GET"], strict_slashes=False)
def articles():

	articles = Articles.query.all()
	results = articles_schema.dump(articles)

	return jsonify(results)


if __name__ == "__main__":
	app.run(debug=True)
	