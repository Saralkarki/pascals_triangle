from flask import Flask, render_template , request
app = Flask(__name__)
app.config['DEBUG'] = True

@app.route("/")
def main():
    return render_template('index.html')

# @app.route('/', methods=['POST'])
# def index_post():
#     rows = int(request.form['num'])
#     coeff = 1
#     for lines in range(0, rows): #Int is not iterable
#         for spaces in range(1, rows - lines):
#             print(" ",end="")
#         for num in range(0,lines + 1):
#             if (num == 0 or lines == 0):
#                 print("",coeff, end = "")
#             else:
#                 coeff = int(coeff * (lines - num + 1)/num)
#                 print(" ",coeff, end = "")
        
#     print("\r")  

if __name__ == "__main__":
    app.run()
    app.debug = True

