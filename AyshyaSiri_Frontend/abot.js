var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hi there, I'm AyushyaSiri. I help you providing home remedies for the symptoms you show.\n"+
    "Please type '/start' to begin the conversation.";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

let exitFlag = false;

function getResponse() {
    let userText = $("#textInput").val();

    if (userText === "") {
        userText = "It's an empty response!!, Please type something valid";
        bot_chat(userText);
    }

    if(userText === '/start') {
        user_chat(userText);
        s_res = " Tell me how are you feeling";
        bot_chat(s_res);
    }

    else if(userText === '/exit') {
        user_chat(userText)
        e_res = "Bye, will be happy to help whenever you need us";
        bot_chat(e_res);
        exitFlag = true;
    }
    
    else {
        // Define the regular expression pattern
        const fever_regex = /\b(fever|sick|unwell|not feeling well)\b/i;
    
        const allergy_regex = /\b(itchy|rash|itchyness|rashes)\b/i;
    
        const migraine_regex = /\b(migraine|severe headache)\b/i;
    
        const backpain_regex = /\b(stiffness|aching pain|numb)\b/i;
    
        const headache_regex = /\b(pain in head|headache|dizz)\b/i;
    
        const flu_regex = /\b(high fever|sore throat)\b/i;
    
        const cold_regex = /\b(runny nose|cough|sneezing)\b/i;
    
        const acidity_regex = /\b(swallow|vomit)\b/i;

        if (fever_regex.test(userText)) { // Test the input against the regular expression
            user_chat(userText);
            Fever(function() {
                repeat();
            });
        }
        else if (allergy_regex.test(userText)) { // Test the input against the regular expression
            user_chat(userText);
            Allergy(function() {
                repeat();
            });
        }

        else if (migraine_regex.test(userText)) { // Test the input against the regular expression
            user_chat(userText);
            Migraine(function() {
                repeat();
            });
        }
        else if (backpain_regex.test(userText)) { // Test the input against the regular expression
            user_chat(userText);
            Backpain(function() {
                repeat();
            });
        }
        else if (headache_regex.test(userText)) { // Test the input against the regular expression
            user_chat(userText);
            Headache(function() {
                repeat();
            });
        }
        else if (flu_regex.test(userText)) { // Test the input against the regular expression
            user_chat(userText);
            Flu(function() {
                repeat();
            });
        }
        else if (cold_regex.test(userText)) { // Test the input against the regular expression
            user_chat(userText);
            Cold(function() {
                repeat();
            });
        }
        else if (acidity_regex.test(userText)) { // Test the input against the regular expression
            user_chat(userText);
            Acidity(function() {
                repeat();
            }); 
        }
        else {
            user_chat(userText);
            bot_chat("Sorry, I don't understand. Please try again or type '/exit' to quit.");
        } 
    }
}


function user_chat(userText) {
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function bot_chat(botResponse) {
    let botHtml = '<p class="botText"><span>' + botResponse.replace(/\n/g, "<br>") + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// function empty_response(res) {
//     res = "It's an empty response!!, Please type something valid";
//     bot_chat(res);
// }

function error() {
    err_res = "Sorry, but based on your response, I am not able to find any matches in my database!!,\n"+
    "If you wish you can schedule an appointment with the doctor by moving to the home page of our website";
    bot_chat(err_res);
}

function sendButton() {
    getResponse();
}


function Fever(callback) {
    let res1 = "Okay, along with this, do you feel anything from the below \n"+ 
    "Body temperature ranging from 100 to above 102°F (38.9°C)\n"+
    "Chilling and Sweats \nLoss of appetite \nHeadache\nIf so please type yes and press enter";
    bot_chat(res1);

    // Add an event listener to the text input field to listen for the user's input
    $("#textInput").on("keypress", function(e) {
        if (e.which === 13) { // Check if the enter key was pressed
            let chat1 = $("#textInput").val();
            user_chat(chat1);

            if(chat1 === "yes") {
                let res3 = 'Well based on your response. You show symptoms for a Fever.\nNothing to worry, '+
                'here are some home remedies that may help you:\n'+ 
                'Drink plenty of fluids. \n\nTake sufficient rest. \n\nTry wearing lightweight clothes. \n\nTake a lukewarm bath which '+
                'help lower your body temperature and reduce fever symptoms.\n\n'+
                '\nPlease keep in mind that these home remedies can help you alleviate some of the symptoms of a fever,'+ 
                ' but it is important to remember that a fever is a symptom of an underlying condition and is important '+
                'to seek medical attention if your fever persists for more than a few days, or if your fever is above 103°F (39.4°C), '+
                'or if you have other concerning symptoms such as difficulty breathing or severe headache.'
                bot_chat(res3);
                setTimeout(() => {
                    callback();
                }, 2000)
            }
            else {
                error();
            }

            // Remove the event listener to prevent it from triggering again
            $("#textInput").off("keypress");
        }
    });
}

function Allergy(callback) {
    let res1 = "Okay, along with this do you feel anything from the below \n"+
    "Persistent Sneezing \nSwelling of the face, lips, tongue, or throat \n"+
    "Runny or stuffy nose\nWatery eyes\nCoughing or wheezing\nIf so please type yes and press enter";
    bot_chat(res1);

    // Add an event listener to the text input field to listen for the user's input
    $("#textInput").on("keypress", function(e) {
        if (e.which === 13) { // Check if the enter key was pressed
            let chat1 = $("#textInput").val();
            user_chat(chat1);

            if(chat1 === 'yes') {
                let res2 = 'Well based on your response. You show symptoms for Allergies.\nNothing to worry, '+
                'here are some home remedies that may help you:\n\n'+
                'Saline nasal irrigation:\n'+
                '   Rinsing your nasal passages with a saline solution can help relieve nasal congestion and reduce inflammation.'+
                'You can use a neti pot or nasal spray to irrigate your nasal passages.\n\n'+
                'Steam inhalation: \n '+
                '   Inhaling steam can help relieve nasal congestion and soothe irritated nasal passages.\n\n'+
                'Quercetin: \n'+
                '   Quercetin is a natural antihistamine found in foods like apples, berries, and onions. You can also take quercetin supplements.\n\n'+
                'Honey: Consuming honey may help you alleviate seasonal allergies.\n'+
                'Vitamin C: \n'+
                '   Vitamin C is a natural antihistamine and can help reduce inflammation. '+
                'You can consume vitamin C through foods like citrus fruits, kiwi, and peppers or take vitamin C supplements.\n\n\n'+
                'It is important to talk to your healthcare provider before trying any home remedies, especially '+
                'if you are taking medication or have other medical conditions.\nAdditionally, these remedies may not work for everyone, '+
                'and they should not replace traditional medical treatments for allergies.';
                bot_chat(res2);
                setTimeout(() => {
                    callback();
                }, 2000)
            }
            else {
                error();
            }

            // Remove the event listener to prevent it from triggering again
            $("#textInput").off("keypress");
        }
    });
}

function Migraine(callback) {
    let res1 = "Okay, along with this do you feel anything from the below \n"+
    "Sensitivity to light, sound, and smells\nNausea and vomiting\nVisual disturbances\n"+
    "Tingling or Numbness in face, hands, or feet.\n If so please type yes and press enter";
    bot_chat(res1);

    // Add an event listener to the text input field to listen for the user's input
    $("#textInput").on("keypress", function(e) {
        if (e.which === 13) { // Check if the enter key was pressed
            let chat1 = $("#textInput").val();
            user_chat(chat1);

            if(chat1 === 'yes') {
                let res2 = 'Well based on your response. You show symptoms for Migraine.\nNothing to worry, '+
                'here are some home remedies that may help you:\n\n'+
                'Techniques such as deep breathing, meditation, or yoga may help alleviate migraine symptoms by reducing stress and promoting relaxation.\n\n'+
                'Applying a cold compress to the affected area of the head or neck may help reduce migraine pain and discomfort. You can use a cold pack or wrap ice in a towel.\n\n'+
                'Massaging the affected area of the head or neck may help alleviate migraine symptoms by promoting relaxation and reducing muscle tension.\n\n\n'+
                'It is important to note that if you have a history of migraines and experience a sudden, severe headache or any other concerning symptoms, you should seek medical attention from a doctor.\n'+
                'Additionally, if you have a pre-existing medical condition or are taking medication, you should consult a doctor before trying any home remedies or over-the-counter medications.';
                bot_chat(res2);
                setTimeout(() => {
                    callback();
                }, 2000)
            }
            else {
                error();
            }

            // Remove the event listener to prevent it from triggering again
            $("#textInput").off("keypress");
        }
    });
}

function Backpain(callback) {
    let res1 = "Okay, along with this do you feel anything from the below \n"+
    "Muscle Spasms which cause sudden and intense pain.\nWeakness in the back, legs, or feet, which make it difficult to stand or walk.\n"+
    "Tingling or Numbness in back, legs, or feet.\nIf so please type yes and press enter";
    bot_chat(res1);

    // Add an event listener to the text input field to listen for the user's input
    $("#textInput").on("keypress", function(e) {
        if (e.which === 13) { // Check if the enter key was pressed
            let chat1 = $("#textInput").val();
            user_chat(chat1);

            if(chat1 === 'yes') {
                let res2 = 'Well based on your response. You show symptoms for Backpain.\nNothing to worry, '+
                'here are some home remedies that may help you:\n\n'+
                'Apply a hot or cold compress to the affected area of your back may help alleviate pain.\n\n'+
                'You can use a hot water bottle or a cold pack wrapped in a towel.\n\n'+
                'Massage the affected area of your back which helps to relieve muscle tension and alleviate pain.\n\n'+
                'You can use a foam roller or a tennis ball to massage the affected area.\n\n'+
                'Avoid slouching and make sure you maintain a good posture while sitting and standing which helps to prevent back pain.\n\n\n'+
                'It is important to note that if your back pain is severe, lasts for more than a few days, or is accompanied by other concerning symptoms,'+
                'such as loss of bladder or bowel control, you should seek medical attention from a doctor.\nAdditionally, '+
                'if you have a pre-existing medical condition or are taking medication, you should consult a healthcare provider before trying any home remedies.';
                bot_chat(res2);
                setTimeout(() => {
                    callback();
                }, 2000)
            }
            else {
                error();
            }

            // Remove the event listener to prevent it from triggering again
            $("#textInput").off("keypress");
        }
    });
}

function Headache(callback) {
    let res1 = "Okay, along with this do you feel anything from the below \n"+
    "Sensitivity to light or sound.\nNausea or vomiting.\nMuscle tension or Stiffness in the neck, shoulders, or scalp.\n"+
    "Visual disturbances.\nDifficulty in concentrating on any tasks\nIf so please type yes and press enter";
    bot_chat(res1);

    // Add an event listener to the text input field to listen for the user's input
    $("#textInput").on("keypress", function(e) {
        if (e.which === 13) { // Check if the enter key was pressed
            let chat1 = $("#textInput").val();
            user_chat(chat1);

            if(chat1 === 'yes') {
                let res2 = 'Well based on your response. You show symptoms for Headache.\nNothing to worry, '+
                'here are some home remedies that may help you:\n'+
                'Dehydration can sometimes cause headaches, so it is important to stay hydrated by drinking plenty of water.\n\n'+
                'Applying a hot or cold compress to the affected area of your head may help alleviate headache pain.\n\n'+
                'Massaging the temples, neck, and shoulders can help relax tense muscles and alleviate headache pain.\n\n'+
                'Practicing relaxation techniques, such as deep breathing, meditation, or yoga, can help reduce stress and tension, which may trigger headaches.\n\n'+
                'Getting enough sleep and maintaining a regular sleep schedule can help reduce the frequency and severity of headaches.\n\n\n'+
                'It is important to note that if your headaches are severe, frequent, or accompanied by other concerning symptoms, you should seek medical attention from a doctor.\n'+
                'Additionally, if you have a pre-existing medical condition or are taking medication, you should consult a healthcare provider before trying any home remedies.';
                bot_chat(res2);
                setTimeout(() => {
                    callback();
                }, 2000)
            }
            else {
                error();
            }

            // Remove the event listener to prevent it from triggering again
            $("#textInput").off("keypress");
        }
    });
}

function Flu(callback) {
    let res1 = "Okay, along with this do you feel anything from the below \n"+
    "Muscle aches and pains\nHeadache\nCough which can be either dry or produce phlegm.\n"+
    "Feeling tired or exhausted\nIf so please type yes and press enter";
    bot_chat(res1);

    // Add an event listener to the text input field to listen for the user's input
    $("#textInput").on("keypress", function(e) {
        if (e.which === 13) { // Check if the enter key was pressed
            let chat1 = $("#textInput").val();
            user_chat(chat1);

            if(chat1 === 'yes') {
                let res2 = 'Well based on your response. You show symptoms for Influenza, commonly known as the flu.\nNothing to worry, '+
                'here are some home remedies that may help you:\n\n'+
                'Getting plenty of rest can help your body fight off the virus and reduce symptoms.\n\n'+
                'Stay hydrated: Drinking plenty of fluids, such as water, herbal tea, and clear broth, can help keep you hydrated and loosen congestion.\n\n'+
                'Use Saline nasal drops or spray, it helps in reducing congestion and alleviate a runny or stuffy nose.\n\n'+
                'Gargle with salt water, it helps to relieve a sore throat and reduce inflammation.\n\n'+
                'Vitamin C is believed to boost the immune system, so eating foods rich in vitamin C, such as citrus fruits, strawberries, kiwi, '+
                'and bell peppers, or taking a vitamin C supplement, may help shorten the duration of the flu.\n\n\n'+
                'It is important to note that if your symptoms persist or if you have other concerning symptoms, such as difficulty breathing, chest pain, '+
                'or confusion, you should seek medical attention from a doctor. \nAdditionally, if you have a high-risk condition such as '+
                'asthma, heart disease, or diabetes, you should consult a healthcare provider before trying any home remedies.';
                bot_chat(res2);
                setTimeout(() => {
                    callback();
                }, 2000)
            }
            else {
                error();
            }

            // Remove the event listener to prevent it from triggering again
            $("#textInput").off("keypress");
        }
    });
}

function Cold(callback) {
    let res1 = "Okay, along with this do you feel anything from the below \n"+
    "Sore or Scratchy throat\nFeeling tired or exhausted\nMuscle aches and pains\n"+
    "A mild fever (less than 100.4°F or 38°C)\nIf so please type yes and press enter";
    bot_chat(res1);

    // Add an event listener to the text input field to listen for the user's input
    $("#textInput").on("keypress", function(e) {
        if (e.which === 13) { // Check if the enter key was pressed
            let chat1 = $("#textInput").val();
            user_chat(chat1);

            if(chat1 === 'yes') {
                let res2 = 'Well based on your response. You show symptoms for Common Cold.\nNothing to worry, '+
                'here are some home remedies that may help you:\n\n'+
                'Getting plenty of rest can help your body fight off the virus and reduce symptoms.\n\n'+
                'Stay hydrated: Drinking plenty of fluids, such as water, herbal tea, and clear broth, can help keep you hydrated and loosen congestion.\n\n'+
                'Use Saline nasal drops or spray, it helps in reducing congestion and alleviate a runny or stuffy nose.\n\n'+
                'Gargle with salt water, it helps to relieve a sore throat and reduce inflammation.\n\n'+
                'Vitamin C is believed to boost the immune system, so eating foods rich in vitamin C, such as citrus fruits, strawberries, kiwi, '+
                'and bell peppers, or taking a vitamin C supplement, may help shorten the duration of a cold.\n\n\n'+
                'It is important to note that if your symptoms persist despite these remedies, or if you have other concerning symptoms, such as '+
                'a high fever or difficulty breathing, you should seek medical attention from a doctor.';
                bot_chat(res2);
                setTimeout(() => {
                    callback();
                }, 2000)
            }
            else {
                error();
            }

            // Remove the event listener to prevent it from triggering again
            $("#textInput").off("keypress");
        }
    });
}

function Acidity(callback) {
    let res1 = "Okay, along with this do you feel anything from the below \n"+
    "A burning sensation in the chest that may radiate up to the neck, throat, and jaw.\nA sour or bitter taste in the mouth\n"+
    "Indigestion, bloating, and discomfort in the upper abdomen.\nA persistent cough, especially at night\nIf so please type yes and press enter";
    bot_chat(res1);

    // Add an event listener to the text input field to listen for the user's input
    $("#textInput").on("keypress", function(e) {
        if (e.which === 13) { // Check if the enter key was pressed
            let chat1 = $("#textInput").val();
            user_chat(chat1);

            if(chat1 === 'yes') {
                let res2 = 'Well based on your response. You show symptoms for Acidity or Acid Reflux.\nNothing to worry, '+
                'here are some home remedies that may help you:\n\n'+
                'Drinking enough water can help neutralize stomach acid and prevent the buildup of excess acid in the stomach.\n\n'+
                'Certain foods can trigger acid reflux, including spicy, fried, and fatty foods, caffeine, alcohol, and chocolate. '+
                'Avoiding these foods can help reduce acidity.\n\n'+
                'Eating smaller meals throughout the day can help reduce the amount of acid produced in the stomach and prevent acid reflux.\n'+
                'Wait at least two to three hours after eating before lying down or going to bed to prevent acid reflux.\n\n'+
                'Elevating the head of your bed by six to eight inches can help prevent acid reflux at night.\n\n\n'+
                'It is important to note that if your symptoms persist despite these remedies, or if you experience severe or recurring symptoms, '+
                'you should seek medical attention from a doctor.';
                bot_chat(res2);
                setTimeout(() => {
                    callback();
                }, 2000)
            }
            else {
                error();
            }

            // Remove the event listener to prevent it from triggering again
            $("#textInput").off("keypress");
        }
    });
}


function repeat() {
    if (!exitFlag) {
      $("#textInput").val("");
      $("#textInput").focus();
      let res = "Do you wish to check any more symptoms?If so please type yes and press enter";
      bot_chat(res);
    
    $("#textInput").on("keypress", function(e) {
        if (e.which === 13) { // Check if the enter key was pressed
            let chat1 = $("#textInput").val();
            user_chat(chat1);

            if(chat1 === 'yes') {
                let res1 = "Okay tell me how are you feeling?";
                bot_chat(res1);
            }
            else {
                exit();
            }
           //Remove the event listener to prevent it from triggering again
            $("#textInput").off("keypress");
        }
    }); 
    }
  }

function exit() {
    e_res = "Bye, will be happy to help whenever you need us";
    bot_chat(e_res);
    exitFlag = true;
}

