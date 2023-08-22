import logging
from multiprocessing.connection import wait
from flask import Flask, request
from flask_cors import CORS
import pymysql
import datetime

app = Flask(__name__)
CORS(app)


@app.route("/api/recommendations", methods=["GET"])
def get_recommendations():
    try:
        db = pymysql.connect(host="localhost", user="root",
                             password="Y1012Jqkhkp", db="portfolio_web", autocommit=True)
        cursor = db.cursor()
        query = "SELECT * FROM recommendations WHERE onShowcase=True"
        cursor.execute(query)

        recommendations = cursor.fetchall()
        results = []
        for recommendation in recommendations:
            recommendation_obj = {
                "id": recommendation[0],
                "title": recommendation[5],
                "excerpt": recommendation[1],
                "company": recommendation[3],
            }
            results.append(recommendation_obj)
        cursor.close()
        db.close()
        return {"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/skills", methods=["GET"])
def get_skills():
    try:
        db = pymysql.connect(host="localhost", user="root",
                             password="Y1012Jqkhkp", db="portfolio_web", autocommit=True)
        cursor = db.cursor()
        query = "SELECT * FROM skills"
        cursor.execute(query)

        skills = cursor.fetchall()
        results = []
        for skilll in skills:
            skill_obj = {
                "id": skilll[0],
                "imageurl": skilll[1],
                "totalstars": skilll[3],
                "greystars": skilll[4],
            }
            results.append(skill_obj)
        cursor.close()
        db.close()
        return {"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/projects", methods=["GET"])
def get_projects():
    try:
        db = pymysql.connect(host="localhost", user="root",
                             password="Y1012Jqkhkp", db="portfolio_web", autocommit=True)
        cursor = db.cursor()
        query = "SELECT id,title,imageurl,excerpt FROM projects"
        cursor.execute(query)
        projects = cursor.fetchall()
        results = []
        for project in projects:
            project_obj = {
                "id": project[0],
                "title": project[1],
                "imageurl": project[2],
                "excerpt": project[3],
                 "body": project[4],
            }
            results.append(project_obj)
        cursor.close()
        db.close()
        return {"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/project", methods=["POST"])
def add_project():
    try:
        project = request.json
        print(project)
        db = pymysql.connect(host="localhost", user="root",
                             password="Y1012Jqkhkp", db="portfolio_web", autocommit=True)
        cursor = db.cursor()
        query = "INSERT INTO projects VALUES(%s,%s,%s,%s,%s,%s,%s)"
        cursor.execute(query, [project["id"], project["title"],
                       project["imageurl"], project["excerpt"], project["body"], True, datetime.datetime.now(), ],)
        cursor.close()
        db.close()
        return {"isSuccessful": True}

    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False}


@app.route("/api/projectt", methods=["GET"])
def get_body_project():
    try:
        id = request.args.get("id")
        db = pymysql.connect(host="localhost", user="root",
                             password="Y1012Jqkhkp", db="portfolio_webs", autocommit=True)
        cursor = db.cursor()
        query = "SELECT imageurl,title,body FROM projects WHERE id=%s;"
        cursor.execute(query, [id])
        project = cursor.fetchone()
        print(project)
        project_obj = {
            "imageurl": project[0], "title": project[1], "body": project[2]}
        cursor.close()
        db.close()
        return {"isSuccessful": True, "results": project_obj}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}
