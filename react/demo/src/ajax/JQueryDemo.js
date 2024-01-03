import React, { useState } from 'react'
import $ from 'jquery'

export default function JQueryDemo() {
    const [now, setNow] = useState('')

    function getDateTime() {
        var timezone = document.getElementById("txtTimezone").value
        $.getJSON('http://worldtimeapi.org/api/timezone/' + timezone,
            (data) => {
                console.log(data)
                if (data.error) {
                    alert("Error:" + data.error)
                }
                else
                    setNow(data.datetime)
            }
        )
    }



    return (
        <>
            <h2>AJAX with jQuery</h2>
            <h1>{now}</h1>
            TimeZone : <input type="text" id="txtTimezone" />
            <p></p>
            <button onClick={getDateTime}>Get DateTime</button>


        </>
    )
}
