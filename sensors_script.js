window.addEventListener("load", () => {
    //api section
    const api = 'https://thingspeak.com/channels/882685/field/1.json';
    fetch(api)
        .then(res => { return res.json() })
        .then(data => {
            //console.log(data);
            let temp = data.feeds;
            let curr_temp = (temp[temp.length - 1]);
            const pulse = (curr_temp.field1);
            console.log(pulse);
            if (pulse < 20)
                email_send();
        })
        //to send email
    function email_send() {
        var data = {
            service_id: 'service_bvmtexj',
            template_id: 'template_97hbpmf',
            user_id: 'user_3dQiaaCRk4BdcwwQv0pOg',
            template_params: {
                'username': 'Nitin Kumar',
                'to_name': ' Local Hospital XYZ',
                'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
            }
        };
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            alert('Your mail is sent!');
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    }
})