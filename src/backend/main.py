from flask import Flask, g, request
from flask_cors import CORS
import pymysql
import logging
import datetime

app=Flask(__name__)
CORS(app)

# @app.before_request
# def before_request():
#     print("Establishing connection with the database")
#     g.db=pymysql.connect(host="localhost",user="root",password="Y1012Jqkhkp",db="portfolio_web",autocommit=True)
#     g.cursor=g.db.cursor()

# @app.teardown_request
# def teardown_request(exception):
#     print("Closing the database")
#     g.cursor.close()
#     g.db.close()
    



@app.route("/api/recommendations", methods=["GET"])
def get_recommendation():
    try:
        print("recommendations")
        db=pymysql.connect(host="localhost",user="root",password="Y1012Jqkhkp",db="portfolio_web",autocommit=True)
        cursor=db.cursor()
        query="SELECT * FROM recommendations WHERE onShowcase=True;"
        cursor.execute(query)
        recommendations=cursor.fetchall()
        results=[]   
        for recommendation in recommendations:
            recommendation_object={
                "id":recommendation[0],
                "name":recommendation[1],
                "company":recommendation[3],
                "designation":recommendation[4],
                "message":recommendation[5],
            } 
            results.append(recommendation_object)
        cursor.close()
        db.close()
        return {"isSuccessful":True, "results":results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful":False,"results":[]}
@app.route("/api/skills",methods=["GET"])
def get_skills():
    try:
        print("Skills")
        #database connection
        db=pymysql.connect(host="localhost",user="root",password="Y1012Jqkhkp",db="portfolio_web",autocommit=True)
        cursor=db.cursor()
        
        query="SELECT * FROM skills;"
        #fetch the data
        cursor.execute(query)
        skills=cursor.fetchall()
        #process the data
        results=[]   
        for skill in skills:
            skill_obj={
                "id":skill[0],
                "imageUrl":skill[1],
                "name":skill[2],
                "starsTotal":skill[3],
                "starsActive":skill[4],
            }
            results.append(skill_obj)
        #clean up
        cursor.close()
        db.close()
        return{"isSuccessful":True,"results":results}
    except Exception as e:
        logging.error(e)
        return{"isSuccessful":False,"results":[]}

@app.route("/api/projects",methods=["GET"])
def get_projects():
    try:
        #database connection
        db=pymysql.connect(host="localhost",user="root",password="Y1012Jqkhkp",db="portfolio_web",autocommit=True)
        cursor=db.cursor()
        query="SELECT * FROM projects WHERE isPublished=True ORDER BY lastModified DESC;"
        #fetch the data
        cursor.execute(query)
        projects=cursor.fetchall()
        #process the data
        results=[]   
        for project in projects:
            project_obj={
                "id":project[0],
                "imageUrl":project[1],
                "title":project[2],
                "excerpt":project[3],
               # "body":project[4],
                
            }
            results.append(project_obj)
        #clean up
        cursor.close()
        db.close()
        return{"isSuccessful":True,"results":results}
    except Exception as e:
        logging.error(e)
        return{"isSuccessful":False,"results":[]}


@app.route("/api/projects", methods=["POST"])
def add_project():
    try:
        db=pymysql.connect(host="localhost",user="root",password="Y1012Jqkhkp",db="portfolio_web",autocommit=True)
        cursor=db.cursor()
        project=request.json
        print(project)
        #SQL Query
        query="INSERT INTO projects VALUES(%s, %s, %s, %s, %s, %s, %s);"
        cursor.execute(query, [project["id"],project["imageUrl"],project["title"],project["excerpt"],project["body"],True,datetime.datetime.now(),])
        cursor.close()
        db.close()


        return {"isSuccessful":True}


    except Exception as e:
        logging.error(e)
        return{"isSuccessful":False}
@app.route("/api/recommendation", methods=["POST"])
def add_recommendation():
    try:
        db=pymysql.connect(host="localhost",user="root",password="Y1012Jqkhkp",db="portfolio_web",autocommit=True)
        cursor=db.cursor()
        recommendation=request.json
        query="INSERT INTO recommendations VALUES(%s, %s, %s, %s, %s, %s, %s);"
        cursor.execute(
            query,
            [
                recommendation["id"],
                recommendation["name"],
                recommendation["email"],
                recommendation["company"],
                recommendation["designation"],
                recommendation["message"],
                False,
            ],
        )
        cursor.close()
        db.close()
        return{"isSuccessful":True}
    except Exception as e:
        logging.error(e)
        return{"isSuccessful":False}

@app.route("/api/contact",methods=["POST"])
def add_contact():
    try:
        db=pymysql.connect(host="localhost",user="root",password="Y1012Jqkhkp",db="portfolio_web",autocommit=True)
        cursor=db.cursor()
        contact=request.json
        query="INSERT INTO contact VALUES(%s,%s,%s,%s);"
        cursor.execute(
            query,
            [
                contact["name"],
                contact["email"],
                contact["description"],
                datetime.datetime.now(),
            ],
        )
        return{"isSuccessful":True}
    except Exception as e:
        logging.error(e)
        return{"isSuccessful":False}
@app.route("/api/project", methods=["GET"])
def get_project_by_id():
    try:
        id = request.args.get("id")
        # SQL query
        query = "SELECT imageUrl, title, body FROM projects WHERE id=%s;"

        g.cursor.execute(query, [id])

        project = g.cursor.fetchone()

        project_obj = {"imageUrl": project[0], "title": project[1], "body": project[2]}

        return {"isSuccessful": True, "result": project_obj}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "result":{}}


