import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

setDate();

const App = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
      <div className="App">
        <div>ユーザ：{user.username}</div>
        <div>
          <p>開始時間 終了時間 休憩時間合計</p>
        </div>
        <div>
          <span id="date_0"></span>
          <input type="time" id="start_time_0" required />
          <input type="time" id="end_time_0" required />
          <input type="time" id="rest_time_0" required />
        </div>

        <div>
          <span id="date_1"></span>
          <input type="time" id="start_time_1" required />
          <input type="time" id="end_time_1" required />
          <input type="time" id="rest_time_1" required />
        </div>

        <div>
          <span id="date_2"></span>
          <input type="time" id="start_time_2" required />
          <input type="time" id="end_time_2" required />
          <input type="time" id="rest_time_2" required />
        </div>

        <div>
          <span id="date_3"></span>
          <input type="time" id="start_time_3" required />
          <input type="time" id="end_time_3" required />
          <input type="time" id="rest_time_3" required />
        </div>

        <div>
          <span id="date_4"></span>
          <input type="time" id="start_time_4" required />
          <input type="time" id="end_time_4" required />
          <input type="time" id="rest_time_4" required />
        </div>

        <div>
          <span id="date_5"></span>
          <input type="time" id="start_time_5" required />
          <input type="time" id="end_time_5" required />
          <input type="time" id="rest_time_5" required />
        </div>
    
        <div>
          <span id="date_6"></span>
          <input type="time" id="start_time_6" required />
          <input type="time" id="end_time_6" required />
          <input type="time" id="rest_time_6" required />
        </div>

        <button type="button" onClick={submitButtonClicked}>送信</button>
        <AmplifySignOut />
      </div>
    ) : (
      <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          formFields={[
            { type: "username" },
            { type: "password" },
            { type: "email" }
          ]}
        />
      </AmplifyAuthenticator>
  );
}

function setDate() {
  var dateArray = [];
  const date = new Date() 
  const dayOfWeek = date.getDay() // 曜日を取得
  const today = date.getDate()    // 日にちを取得
  for (let i = 0; i < 7; i++) {
    if (i <= dayOfWeek) {
      date.setDate(today - (dayOfWeek - i))
      dateArray[i] = date.toLocaleDateString()
    } else {
      date.setDate(today + i - dayOfWeek)
      dateArray[i] = date.toLocaleDateString()
    }
    console.log(dateArray[i])
  }

  window.onload = function(){
    var i = 0;
    dateArray.forEach(element => {
      document.getElementById("date_" + i).innerHTML = element
      i++
    });
  }
}

function submitButtonClicked() {
  var start = document.getElementById('start_time_0').value
  var end = document.getElementById("end_time_0").value
  var rest = document.getElementById("rest_time_0").value
  console.log("開始時刻は" + start + ", 終了時刻は" + end + ", 休憩時間は" + rest + "でした")
}

// function submitButtonClicked() {
  // var req = new XMLHttpRequest();
  // req.open(
  //   "GET",
  //   // TODO AWS API Gateway URL
  // );
  // req.send();
  // req.onreadystatechange = function () {
  //   var text = req.responseText;
  // }
// }

export default App;