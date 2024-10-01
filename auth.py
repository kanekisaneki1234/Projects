from flask import Blueprint,render_template,request
import pickle
import numpy as np
auth = Blueprint('auth',__name__)
model = pickle.load(open('model.pkl','rb'))
covid = pickle.load(open('covid.pkl','rb'))

@auth.route('/')
def home():
    return render_template('index.html')

@auth.route('/dashboard')
def dashboard():
    return render_template('index.html')

@auth.route('/predictEpidemic')
def predictEpidemic():
    return render_template('predictEpidemic.html')

@auth.route('/predictCovid')
def predictCovid():
    return render_template('predictCovid.html')
    
@auth.route('/epidemicDisease',methods=['POST'])
def epidemicDisease():
    req = request.form
    dname = req.get("dname")
    cases = int(req.get("noofcases"))
    death = int(req.get("noofdeath"))
    recover = int(req.get("rpatient"))
    mrate = int(req.get("mrate"))
    features = [cases,death,recover,mrate]
    final = [np.array(features)]
    predict = model.predict(final)
    output = predict.tolist()
    res = ""
    if(output[0] == 1):
        res = "The given Disease has a high probability of becoming an Epidemic!"
    else:
        res = "The given Disease has a low probability of becoming an Epidemic!"
    ans = [{
        "dname" : dname,    
        "cases" : cases,
        "death" : death,
        "recover" : recover,
        "mrate" : mrate,
        "res" : res,
    }]
    return render_template('epidemicOutput.html',ans=ans)

@auth.route('/covidDisease',methods=['POST'])
def covidDisease():
    req = request.form
    gender = int(req.get("gender"))
    nocor = int(req.get("nocor"))
    cardio = int(req.get("cardio"))
    endo = int(req.get("endo"))
    tumor = int(req.get("tumor"))
    resp = int(req.get("resp"))
    diges = int(req.get("diges"))
    renal = int(req.get("renal"))
    liver = int(req.get("liver"))
    fever = int(req.get("fever"))
    cough = int(req.get("cough"))
    chest = int(req.get("chest"))
    fatigue = int(req.get("fatigue"))
    diarrhea = int(req.get("diarrhea"))
    rna = int(req.get("rna"))
    features = [gender,nocor,cardio,endo,tumor,resp,diges,renal,liver,fever,cough,chest,fatigue,diarrhea,rna]
    final = [np.array(features)]
    predict = covid.predict(final)
    output = predict.tolist()
    resCOVID = ""
    if(output[0] == 1):
        resCOVID = "COVID Positive (+)"
    else:
        resCOVID = "COVID Negative (-)"
    ansCOVID = [{
        "resCOVID" : resCOVID,
    }]
    return render_template('covidOutput.html',ansCOVID=ansCOVID)
