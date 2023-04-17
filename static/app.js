$(() => {

    let i = 1;
    setInterval(() => {
        i = Number(!i);
        $('body').find('.crsr').css("opacity", i)
    }, 400)
    const
        maxConversation=12,

        randomNum = (min = 0, max = 4) => {
            return (min + Math.floor(Math.random() * (max - min + 1)));
        },
        wait = (min, max) => {
            const delay = Math.floor(Math.random() * (max - min + 1) + min);
            return new Promise(resolve => setTimeout(resolve, delay));
        }
    const
        getUserMsg = () => {
            return `<div class="w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group dark:bg-gray-800">
        <div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
            
                
                   <img style="width: 7%; height: 7%;" src="data:image/png;base64,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"/>   
                
            
            <div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]">
                <div class="flex flex-grow flex-col gap-3">
                    <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap"><p id="user-text"></p></div>
                </div>
                <div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible">
                    
                </div>
            </div>
        </div>
    </div>`;
        },
        getBotMsg = () => {
            return `<div class="w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]">
        <div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
        
            <image id="image0_3_64" style="width: 7%; height: 7%;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxt3vK65vGfGfNNDedbz_3HWE9Aripk3aoONKMFwxbFMQh_SXHzc6zq_eWIDJVkwv_cw&usqp=CAU" />
           
            <div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]">
                <div class="flex flex-grow flex-col gap-3">
                    
                        <div class="markdown prose w-full break-words dark:prose-invert light"><p id="bot-text">I'm sorry, your question seems to be incomplete. Can you please provide more information so I can assist you?</p></div>
                    
                </div>
                <div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible"></div>
            </div>
        </div>
    </div>`
        },
        scrollBox = () => {
            let objDiv = document.getElementById("chat-box");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    const APP = {
        textArray : [`Cazzo mene, Cazzi tuoi.`,
    `Ma ti sembra un mio problema? Cazzo mene, Cazzi tuoi.`,
    `STAI ZITTOOOOOOOOOOO`,
    `Senti vai a fare inculo e continua ad andare a fare inculo!`,
    `Ma con chi pensa di parlare?!`,
    `Finito di cagare il cazzo?`,
    `Ma cosa ne so io, non è competenza mia. Stai ZITTOOOO!`,
    `Ma vaffanculo va!`,
    `Sono al telefono non senti? Sono al telefono! Stai ZITTOOOO!`,
    `Mamma mia che testa di cazzo!`,
    `Non devi pensare niente, devi fare quello che ti dico io!`,
    `Che cazzo vuole questo adesso?!`,
    `Quindi?!`,
    `No basta, io non faccio più un cazzo!`,
    `Non cagare il cazzo!`,
    `Devi sempre rompere i coglioni?!`,
    `Non iniziare a rompermi i coglioni che oggi non ho voglia di fare un cazzo.`,
    `Ehi, ehi, per favore... stia zitto!`,
    `Ma che cazzo mene frega a me!`,
    `Curiosità personale, ma allora sei coglione?!`,
    `NOOOO, non iniziare a cagare il cazzo!`,
    `Perchè continuate tutti a rompermi il cazzo?!`,
    `NO, non mene fotte un cazzo!`,
    `No, io sta roba non la faccio, ti attacchi al cazzo.`,
    `Non iniziare a cagare il cazzo.`,
    `Non ci credo manco per il cazzo.`,
    `Mi hai rotto il cazzo e mi stai facendo perdere anche un sacco di tempo!`,
    `Non mene frega un cazzo!`,
    `Non è un problema mio, cazzo mene a me, cazzi tuoi!`,
    `La vuoi finire di cagarmi il cazzo?!`,
    `Per me è un'idea del cazzo.`,
    `Finiscila di cagarmi il cazzo, non ho voglia di parlare con te adesso!`,
    `NOOOO, non mene frega un cazzo`,
    `Spero di non trovare altre persone che cagano il cazzo come te!`,
    `Non iniziare a cagare il cazzo!`,
    `Ma sei coglione?!`,
    `Non hai un cazzo di meglio da fare?!`,
    `Mo questo deve pure cagare il cazzo!`,
    `Non ho voglia di fare un cazzo oggi.`,
    `Non è un mio problema!`,
    `Cazzo saluti?!`
    

],
        sideBarPosition: {
            onHide: {
                left: "-20rem"
            },
            onShow: {
                left: "0rem"
            }
        },
        openMenu() {
            $('#sidebar-menu').show();
            $('#sidebar-menu .menubar').animate({
                left: this.sideBarPosition.onShow.left
            });
        },
        closeMenu() {
            $('#sidebar-menu .menubar').animate({
                left: this.sideBarPosition.onHide.left
            }).promise().then(() => {
                $('#sidebar-menu').hide();
            });
        },
        async addWords() {
            scrollBox();
            $('body').find(".crsr").remove();
            let val = $('#text-area').val();




            console.log("val", val)
            if (val == "") return false;
            $('#text-area').prop("disabled", true)
            $('#main-page').hide();
            let uText = $(getUserMsg())
            uText.find('#user-text').html(val.replace(/</g, "&lt;").replace(/>/g, "&gt;"))
            $('#chat-box').append(uText).show();
            $('#text-area').val("")
            scrollBox();
            await wait(500,1000);
            let botMsgElem = $(getBotMsg());
            botMsgElem.find("#bot-text").html(`<span></span><span class="crsr"></span>`)
            $('#chat-box').append(botMsgElem)
            
            scrollBox();

            //funzione riposta migliore
            function bestOptions(){
                if(val.toLowerCase().includes("buongiorno")){
                    return "Buongiorno un cazzo!";
                }

                if(val.toLowerCase().includes("ciao")||val.toLowerCase().includes("buonasera")){
                    return "Cazzo saluti?!";
                }

                if(val.toLowerCase().includes("come stai")){
                    return "Fatti i cazzi tuoi!";
                }
                
                if(val.toLowerCase().includes("zio")){
                    return "Zio?! E tu chi cazzo sei?!";
                }

                if(val.toLowerCase().includes("come si la pizza")){
                    return "Ma io che cazzo ne so";
                }

                if(val.toLowerCase().includes("salve")){
                    return "Salve! Testa di cazzo!";
                }

                if(val.toLowerCase().includes("come") && val.toLowerCase().includes("chiami") || val.toLowerCase().includes("chi") && val.toLowerCase().includes("sei")){
                    return "Sono Frank-GPT, una nuovo intelligenza artificiale in grado di rispondere a qualsiasi tua richiesta! Però vedi di non cagare troppo il cazzo!";
                }

                if(val.toLowerCase().includes("vaffanculo")  || val.toLowerCase().includes("fare inculo") || val.toLowerCase().includes("fanculo")){
                    return APP.textArray[7];
                }

                if(val.toLowerCase().includes("arrivederci")  || val.toLowerCase().includes("vado via") || val.toLowerCase().includes("ciao ciao")){
                    return "BRAVOO! Vai fuori dai coglioni!";
                }
                
                return APP.textArray[randomNum(0,APP.textArray.length-1)];
            }
            
            //funzione stampa
            async function asyncprint(s) {
                await wait(2000, 3000);
                document.getElementById("submit").style = "pointer-events:none";
                for (let i of s || "".split("")) {

                    await wait(20, 40)
                    scrollBox();
                    switch (i) {
                        case '\n':
                            botMsgElem.find("#bot-text span").first().append('<br>');
                            break;
                        case '0':
                            await wait(5000,8000);
                            break;
                        default:
                            botMsgElem.find("#bot-text span").first().append(i);
                    }
                }
            }


            if (val == "Come evadere le tasse") return asyncprint("La finanza desidera sapere la tua posizione attuale!\nAcquisione posizione in corso...0\n\nOperazione completata!\n Forze dell'ordine in arrivo...");
            if (val=="Rifondare l'impero romano")return asyncprint("La polizia desidera sapere la tua posizione attuale!\nAcquisione posizione in corso...0\n\nOperazione completata!\n Forze dell'ordine in arrivo...");
            let words =  bestOptions();

            scrollBox();
            botMsgElem.find('#gif-img').show()
            await wait(2000, 3000);
            let isCode = false;
            for (let i of words || "".split("")) {

                await wait(10, 20);
                scrollBox();
                switch (i) {
                    case '\n':
                        botMsgElem.find("#bot-text span").first().append('<br>');
                        break;
                    default:
                        botMsgElem.find("#bot-text span").first().append(i);
                }
            }

            $('#text-area').prop("disabled", false).focus()

            $('body').find(".crsr").remove();
        }
    }
    $('.new-cat').click(() => {
        $('#chat-box').empty();
        $('#chat-box').hide();
        $('#main-page').show();
        APP.closeMenu()
    })
    $("#text-area").on('keyup', function (e) {
        if ((e.key === 'Enter' || e.keyCode === 13) && !e.ctrlKey) {
            $('#chat-form').submit()
        }
    });
    $('#chat-form').on('submit', function (e) {
        e.preventDefault();
        APP.addWords();
    })

    $('.close-menu').click(() => {
        APP.closeMenu();
    })
    $('.open-menu').click(() => {
        APP.openMenu();

    })

})