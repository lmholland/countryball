class Entity {
    constructor(){
        this.mapWidth = 13508;
        this.mapHeight = 7698;
        this.squareWidth = 1228;
        this.squareHeight = 1283;
        this.countryNames = {
            0: ["Afghanistan", "Afghanistan"], 
            1: ["Albania", "Albania"], 
            2: ["Algeria", "Algeria"], 
            3: ["Andorra", "Andorra"], 
            4: ["Angola", "Angola"], 
            5: ["AntiguaAndBarbuda", "Antigua and Barbuda"], 
            6: ["Argentina", "Argentina"], 
            7: ["Armenia", "Armenia"], 
            8: ["Australia", "Australia"], 
            9: ["Austria", "Austria"],  
            10: ["Azerbaijan", "Azerbaijan"],  
            11: ["Bahamas", "The Bahamas"], 
            12: ["Bahrain", "Bahrain"], 
            13: ["Bangladesh", "Bangladesh"], 
            14: ["Barbados", "Barbados"], 
            15: ["Belarus", "Belarus"], 
            16: ["Belgium", "Belgium"], 
            17: ["Belize", "Belize"], 
            18: ["Benin", "Benin"], 
            19: ["Bhutan", "Bhutan"], 
            20: ["Bolivia", "Bolivia"], 
            21: ["BosniaAndHerzegovina", "Bosnia and Herzegovina"], 
            22: ["Botswana", "Botswana"], 
            23: ["Brazil", "Brazil"], 
            24: ["Brunei", "Brunei"], 
            25: ["Bulgaria", "Bulgaria"], 
            26: ["BurkinaFaso", "Burkina Faso"], 
            27: ["Burundi", "Burundi"], 
            28: ["CapeVerde", "Cape Verde"], 
            29: ["Cambodia", "Cambodia"], 
            30: ["Cameroon", "Cameroon"], 
            31: ["Canada", "Canada"], 
            32: ["CentralAfricanRepublic", "Central African Republic"], 
            33: ["Chad", "Chad"], 
            34: ["Chile", "Chile"], 
            35: ["China", "China"], 
            36: ["Colombia", "Colombia"], 
            37: ["Comoros", "Comoros"], 
            38: ["Congo", "Republic of the Congo"], 
            39: ["CostaRica", "Costa Rica"], 
            40: ["Croatia", "Croatia"], 
            41: ["Cuba", "Cuba"], 
            42: ["Cyprus", "Cyprus"], 
            43: ["Czechia", "Czechia"], 
            44: ["DRCongo", "Democratic Republic of the Congo"], 
            45: ["Denmark", "Denmark"], 
            46: ["Djibouti", "Djibouti"], 
            47: ["Dominica", "Dominica"], 
            48: ["DominicanRepublic", "Dominican Republic"], 
            49: ["Ecuador", "Ecuador"], 
            50: ["Egypt", "Egypt"], 
            51: ["ElSalvador", "El Salvador"], 
            52: ["EquatorialGuinea", "Equatorial Guinea"], 
            53: ["Eritrea", "Eritrea"], 
            54: ["Estonia", "Estonia"], 
            55: ["Eswatini", "Eswatini"], 
            56: ["Ethiopia", "Ethiopia"], 
            57: ["Fiji", "Fiji"], 
            58: ["Finland", "Finland"], 
            59: ["France", "France"], 
            60: ["Gabon", "Gabon"], 
            61: ["Gambia", "The Gambia"], 
            62: ["Georgia", "Georgia"], 
            63: ["Germany", "Germany"], 
            64: ["Ghana", "Ghana"], 
            65: ["Greece", "Greece"], 
            66: ["Grenada", "Grenada"], 
            67: ["Guatemala", "Guatemala"], 
            68: ["Guinea", "Guinea"], 
            69: ["GuineaBissau", "Guinea Bissau"], 
            70: ["Guyana", "Guyana"], 
            71: ["Haiti", "Haiti"], 
            72: ["Honduras", "Honduras"], 
            73: ["Hungary", "Hungary"], 
            74: ["Iceland", "Iceland"], 
            75: ["India", "India"], 
            76: ["Indonesia", "Indonesia"], 
            77: ["Iran", "Iran"], 
            78: ["Iraq", "Iraq"], 
            79: ["Ireland", "Ireland"], 
            80: ["Israel", "Israel"], 
            81: ["Italy", "Italy"], 
            82: ["IvoryCoast", "Ivory Coast"], 
            83: ["Jamaica", "Jamaica"], 
            84: ["Japan", "Japan"], 
            85: ["Jordan", "Jordan"], 
            86: ["Kazakhstan", "Kazakhstan"], 
            87: ["Kenya", "Kenya"], 
            88: ["Kiribati", "Kiribati"], 
            89: ["Kuwait", "Kuwait"], 
            90: ["Kyrgyzstan", "Kyrgyzstan"], 
            91: ["Laos", "Laos"], 
            92: ["Latvia", "Latvia"], 
            93: ["Lebanon", "Lebanon"], 
            94: ["Lesotho", "Lesotho"], 
            95: ["Liberia", "Liberia"], 
            96: ["Libya", "Libya"], 
            97: ["Liechtenstein", "Liechtenstein"], 
            98: ["Lithuania", "Lithuania"], 
            99: ["Luxembourg", "Luxembourg"], 
            100: ["Madagascar", "Madagascar"], 
            101: ["Malawi", "Malawi"], 
            102: ["Malaysia", "Malaysia"], 
            103: ["Maldives", "Maldives"], 
            104: ["Mali", "Mali"], 
            105: ["Malta", "Malta"], 
            106: ["MarshallIslands", "The Marshall Islands"], 
            107: ["Mauritania", "Mauritania"], 
            108: ["Mauritius", "Mauritius"], 
            109: ["Mexico", "Mexico"], 
            110: ["Micronesia", "Micronesia"], 
            111: ["Moldova", "Moldova"], 
            112: ["Monaco", "Monaco"], 
            113: ["Mongolia", "Mongolia"], 
            114: ["Montenegro", "Montenegro"], 
            115: ["Morocco", "Morocco"], 
            116: ["Mozambique", "Mozambique"], 
            117: ["Myanmar", "Myanmar"],
            118: ["Namibia", "Namibia"], 
            119: ["Nauru", "Nauru"], 
            120: ["Nepal", "Nepal"], 
            121: ["Netherlands", "The Netherlands"], 
            122: ["NewZealand", "New Zealand"], 
            123: ["Nicaragua", "Nicaragua"], 
            124: ["Niger", "Niger"], 
            125: ["Nigeria", "Nigeria"], 
            126: ["NorthKorea", "North Korea"], 
            127: ["Norway", "Norway"], 
            128: ["Oman", "Oman"], 
            129: ["Pakistan", "Pakistan"], 
            130: ["Palau", "Palau"], 
            131: ["Palestine", "Palestine"], 
            132: ["Panama", "Panama"], 
            133: ["PapuaNewGuinea", "Papua New Guinea"], 
            134: ["Paraguay", "Paraguay"], 
            135: ["Peru", "Peru"], 
            136: ["Philippines", "The Philippines"], 
            137: ["Poland", "Poland"], 
            138: ["Portugal", "Portugal"], 
            139: ["Qatar", "Qatar"], 
            140: ["Romania", "Romania"], 
            141: ["Russia", "Russia"], 
            142: ["Rwanda", "Rwanda"], 
            143: ["SaintKittsAndNevis", "St. Kitts and Nevis"], 
            144: ["SaintLucia", "Saint Lucia"], 
            145: ["SaintVincentAndTheGrenadines", "St. Vincent and the Grenadines"], 
            146: ["Samoa", "Samoa"], 
            147: ["SanMarino", "San Marino"], 
            148: ["SaoTomeAndPrincipe", "Sao Tome and Principe"], 
            149: ["SaudiArabia", "Saudi Arabia"], 
            150: ["Senegal", "Senegal"], 
            151: ["Serbia", "Serbia"], 
            152: ["Seychelles", "Seychelles"], 
            153: ["SierraLeone", "Sierra Leone"], 
            154: ["Singapore", "Singapore"], 
            155: ["Slovakia", "Slovakia"], 
            156: ["Slovenia", "Slovenia"], 
            157: ["SolomonIslands", "The Solomon Islands"], 
            158: ["Somalia", "Somalia"], 
            159: ["SouthAfrica", "South Africa"], 
            160: ["SouthKorea", "South Korea"], 
            161: ["SouthSudan", "South Sudan"], 
            162: ["Spain", "Spain"], 
            163: ["SriLanka", "Sri Lanka"], 
            164: ["Sudan", "Sudan"], 
            165: ["Suriname", "Suriname"], 
            166: ["Sweden", "Sweden"], 
            167: ["Switzerland", "Switzerland"], 
            168: ["Syria", "Syria"], 
            169: ["Tajikistan", "Tajikistan"], 
            170: ["Tanzania", "Tanzania"], 
            171: ["Thailand", "Thailand"], 
            172: ["TimorLeste", "Timor-Leste"], 
            173: ["Togo", "Togo"], 
            174: ["Tonga", "Tonga"],
            175: ["TrinidadAndTobago", "Trinidad and Tobago"], 
            176: ["Tunisia", "Tunisia"], 
            177: ["Turkey", "Turkey"], 
            178: ["Turkmenistan", "Turkmenistan"], 
            179: ["Tuvalu", "Tuvalu"], 
            180: ["Uganda", "Uganda"], 
            181: ["Ukraine", "Ukraine"], 
            182: ["UnitedArabEmirates", "The United Arab Emirates"], 
            183: ["UnitedKingdom", "The United Kingdom"], 
            184: ["UnitedStates", "The United States"], 
            185: ["Uruguay", "Uruguay"], 
            186: ["Uzbekistan", "Uzbekistan"], 
            187: ["Vanuatu", "Vanuatu"], 
            188: ["Vatican", "Vatican City"], 
            189: ["Venezuela", "Venezuela"], 
            190: ["Vietnam", "Vietnam"], 
            191: ["Yemen", "Yemen"], 
            192: ["Zambia", "Zambia"], 
            193: ["Zimbabwe", "Zimbabwe"]
        }
    }

    getRandomNumber(range){
        return Math.floor(Math.random() * range);
    }

    addImage(src){
        let create = {
            image: new Image(),
        }

        let addSource = {
            source: create.image.src = src,
        }

        return create.image;
    }

    drawRect(ctx, color, x, y, width, height){
        return  ctx.fillStyle = color, 
                ctx.fillRect(x, y, width, height);
    }

    drawRoundRect(ctx, color, x, y, width, height, radii){
        return  ctx.fillStyle = color, 
                ctx.beginPath(),
                ctx.roundRect(x, y, width, height, radii),
                ctx.fill(),
                ctx.stroke();
    }

    drawText(ctx, font, color, alignment, text, x, y){
        return  ctx.font = font,
                ctx.fillStyle = color,
                ctx.textAlign = alignment,
                ctx.fillText(text, x, y);
    }
    
    clickArea(leftX, rightX, topY, bottomY){
        let clicked = {
            afterLeftX: this.mouseX >= leftX,
            beforeRightX: this.mouseX < rightX,
            underTopY: this.mouseY >= topY,
            aboveBottomY: this.mouseY < bottomY,
        }

        return  clicked.afterLeftX && clicked.beforeRightX && clicked.underTopY && clicked.aboveBottomY;
     }

    allTrue(object){
        return Object.values(object).every(item => item === true);
    }
}

class Ball extends Entity {
    constructor(){
        super();
        this.x = this.getRandomNumber(this.mapWidth);
        this.y = this.getRandomNumber(this.mapHeight);
        this.countryChoice = this.getRandomNumber(Object.keys(this.countryNames).length);
        this.width = 50;
        this.height = 50;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;
        this.moveSpeed = 4;
        this.eyes = ["happy", "angry", "worried", "normal"];
        this.eyeChoice = this.getRandomNumber(this.eyes.length);
        this.image = this.addImage(`img/balls/${Object.values(this.countryNames)[this.countryChoice][0]}.png`);
        this.health = 100;
        this.id = new Id().create();
        this.score = 0;
        this.killedBy = '';
        this.kills = 0;
        this.flags = 0;
        this.damageTaken = 0;
        this.aware = false;
    }

    drawEyesAndClones(ctx, leftEyeX, rightEyeX, eyeY, mood, startscreen){
        return  drawClones(0, mood), 
                drawClones(-this.mapWidth, mood), 
                drawClones(this.mapWidth,mood);

        function drawClones (offset, mood) {            
            function drawEyes(x, mood){
                let pos = {
                    leftX: x + offset,
                    leftBendX: startscreen == true ? x + offset + document.body.clientHeight * 0.005 : x + offset + 5,
                    centerX: startscreen == true ? x + offset + document.body.clientHeight * 0.010 : x + offset + 10,
                    rightBendX: startscreen == true ? x + offset + document.body.clientHeight * 0.015 : x + offset + 15,
                    rightX: startscreen == true ? x + offset + document.body.clientHeight * 0.020 : x + offset + 20,
                    topBendY: startscreen == true ? eyeY - document.body.clientHeight * 0.015 : eyeY - 15,
                    topY: startscreen == true ? eyeY - document.body.clientHeight * 0.010 : eyeY - 10,
                    bottomBendY: startscreen == true ? eyeY - document.body.clientHeight * 0.005 : eyeY - 5,
                    centerY: eyeY,
                    bottomY: eyeY + 5,
                    radius: startscreen == true ? document.body.clientHeight * 0.007 : 7,
                    startDegree: 0,
                    endDegree: 2 * Math.PI,
                    fill: ctx.fillStyle = "white",
                    stroke: ctx.strokeStyle = "black",
                    lineWidth: ctx.lineWidth = 1,
                }

                let setMood = {
                    happy: mood === "happy" ? happy() : "",
                    angry: mood === "angry" ? angryOrWorried(mood) : "",
                    worried: mood === "worried" ? angryOrWorried(mood) : "",
                    normal: mood === "normal" ? normal() : "",
                }

                function happy(){
                    let draw = {
                        start: ctx.beginPath(),
                        moveToStart: ctx.moveTo(pos.leftX, pos.centerY),
                        topCurve: ctx.bezierCurveTo(pos.leftBendX, pos.topBendY, pos.rightBendX, pos.topBendY, pos.rightX, pos.centerY),
                        bottomCurve: ctx.bezierCurveTo(pos.rightBendX, pos.bottomBendY, pos.leftBendX, pos.bottomBendY, pos.leftX, pos.centerY),
                        end: ctx.closePath(),
                        fill: ctx.fill(),
                        line: ctx.stroke(),
                    }
                }

                function angryOrWorried(mood){
                    let draw = {
                        start: ctx.beginPath(),

                        leftAngryRightWorried: 
                            x === leftEyeX && mood === "angry" || x === rightEyeX && mood === "worried" 
                                ? (
                                    ctx.moveTo(pos.leftX, pos.topY), 
                                    ctx.lineTo(pos.rightX, pos.centerY), 
                                    ctx.bezierCurveTo(pos.rightBendX, pos.bottomY, pos.leftBendX, pos.bottomY, pos.leftX, pos.topY)
                                ) : "",

                        rightAngryLeftWorried: 
                            x === rightEyeX && mood === "angry" || x === leftEyeX && mood === "worried"
                                ? (
                                    ctx.moveTo(pos.leftX, pos.centerY),
                                    ctx.lineTo(pos.rightX, pos.topY),
                                    ctx.bezierCurveTo(pos.rightBendX, pos.bottomY, pos.leftBendX, pos.bottomY, pos.leftX, pos.centerY)
                                ) : "",

                        end: ctx.closePath(),
                        fill: ctx.fill(),
                        line: ctx.stroke(),
                    }
                }

                function normal(){    
                    let draw = {
                        start: ctx.beginPath(),
                        circle: ctx.arc(pos.centerX, pos.centerY, pos.radius, pos.startDegree, pos.endDegree),
                        fill: ctx.fill(),
                        line: ctx.stroke(),
                    }
                }
            }

            return drawEyes(leftEyeX, mood), drawEyes(rightEyeX, mood);
        }
    }

    drawImageAndClones(ctx, image, x, y, width, height){
        return drawImage(0), drawImage(-this.mapWidth), drawImage(this.mapWidth);

        function drawImage(offset){
            let draw = {
                image: ctx.drawImage(image, x + offset, y, width, height),
            }
        }
    }

    drawRectAndClones(ctx, color, x, y, width, height){
        return drawRect(0), drawRect(-this.mapWidth), drawRect(this.mapWidth);

        function drawRect(offset){
            let draw = {
                setColor: ctx.fillStyle = color,
                rect: ctx.fillRect(x + offset, y, width, height),
            }
        }
    }

    drawLineAndClones(ctx, color, width, startX, startY, endX, endY){
        return drawLine(0), drawLine(-this.mapWidth), drawLine(this.mapWidth);

        function drawLine(offset){
            let draw = {
                lineColor: ctx.strokeStyle = color,
                lineWidth: ctx.lineWidth = width,
                start: ctx.beginPath(),
                moveToPosition1: ctx.moveTo(startX + offset, startY),
                drawLineToEnd: ctx.lineTo(endX + offset, endY),
                applyLine: ctx.stroke(),
            }
        }
    }

    drawTextAndClones(ctx, font, color, alignment, text, x, y){
        return drawText(0), drawText(-this.mapWidth), drawText(this.mapWidth);

        function drawText(offset){
            let draw = {
                setFont: ctx.font = font,
                setColor: ctx.fillStyle = color,
                setTextAlignment: ctx.textAlign = alignment,
                drawText: ctx.fillText(text, x + offset, y),
            }
        }
    }

    maxHealth(){
        let health = {
            max: 100,
        }

        let checkIfTooMuch = {
            setMaxHealth: this.health > health.max ? this.health = health.max : "",
        }
    }

    drawGunOrArrow(player, arrow, color, width, ballX, ballY, arrowX, arrowY, start, end){
        return  player[`${arrow}`] = {
                    color: color,
                    width: width,
                    startX: ballX + (arrowX * start), 
                    startY: ballY + (arrowY * start), 
                    endX: ballX + (arrowX * end), 
                    endY: ballY + (arrowY * end),
                };
    }

    draw(ctx, directionsDiff){
        let info = {
            ballX: this.screenX + this.halfWidth,
            ballY: this.screenY + (this.height / 2),
            gunStart: 30,
            gunEnd: 50,
            arrowStart: 50,
            arrowEnd: 70,
            eyeMoveRange: 5,
            glabella: 10, // space between the eyes
            eyeRadius: 10,
            healthbarIndent: this.width / 5,
            healthbarMargin: this.height + 5,
            healthbarWidth: 30,
            healthbarDamage: this.health / 100,
            usernameMargin: this.height + 25,
        }

        let player = {
            eye: {
                leftX: info.ballX + (this.gunX * info.eyeMoveRange) - info.glabella - info.eyeRadius,
                rightX: info.ballX + (this.gunX * info.eyeMoveRange) + info.glabella - info.eyeRadius,
                y: info.ballY + (this.gunY * info.eyeMoveRange) - info.eyeRadius,
                mood: this.mood,
            },

            healthbar: {
                redColor: "#FF0000",
                greenColor: "#00FF00",
                x: this.screenX + info.healthbarIndent,
                y: this.screenY + info.healthbarMargin,
                redWidth: info.healthbarWidth,
                greenWidth: info.healthbarWidth * info.healthbarDamage,
                height: 5,
            },

            username: {
                font: "7px retropixels",
                color: "black",
                alignment: "center",
                id: `${this.id}`,
                x: this.screenX + this.halfWidth,
                y: this.screenY + info.usernameMargin,
            },
        }

        let addGunOrArrows = {
            gun: this.drawGunOrArrow(player, "gun", "black", 4, info.ballX, info.ballY, this.gunX, this.gunY, info.gunStart, info.gunEnd),
            flagArrow: this.drawGunOrArrow(player, "flagArrow", "blue", 3, info.ballX, info.ballY, this.flagArrowX, this.flagArrowY, info.arrowStart, info.arrowEnd),
            healthArrow: this.drawGunOrArrow(player, "healthArrow", "red", 3, info.ballX, info.ballY, this.healthArrowX, this.healthArrowY, info.arrowStart, info.arrowEnd),
        }

        let draw = {
            ball: this.drawImageAndClones(ctx, this.image, this.screenX, this.screenY, this.width, this.height),
            gun: this.drawLineAndClones(ctx, player.gun.color, player.gun.width, player.gun.startX, player.gun.startY, player.gun.endX, player.gun.endY),
            eyes: this.drawEyesAndClones(ctx, player.eye.leftX, player.eye.rightX, player.eye.y, player.eye.mood),
            redHealthbar: this.drawRectAndClones(ctx, player.healthbar.redColor, player.healthbar.x, player.healthbar.y, player.healthbar.redWidth, player.healthbar.height),
            greenHealthbar: this.drawRectAndClones(ctx, player.healthbar.greenColor, player.healthbar.x, player.healthbar.y, player.healthbar.greenWidth, player.healthbar.height),
            username: this.drawTextAndClones( ctx, player.username.font, player.username.color, player.username.alignment, player.username.id, player.username.x, player.username.y),
            arrows: 
                directionsDiff === "easy" 
                    ? (
                        this.drawLineAndClones(ctx, player.flagArrow.color, player.flagArrow.width, player.flagArrow.startX, player.flagArrow.startY, player.flagArrow.endX, player.flagArrow.endY),
                        this.drawLineAndClones(ctx, player.healthArrow.color, player.healthArrow.width, player.healthArrow.startX, player.healthArrow.startY, player.healthArrow.endX, player.healthArrow.endY)
                    ) : "",
        }
    }
}

class Target extends Entity {
    constructor(){
        super();
        this.x = 0;
        this.y = 0;

        this.locations = [
            {city: "Kandahar", country: "Afghanistan", x: 9219, y: 2624, difficulty: "medium", capital: false}, 
            {city: "Herat", country: "Afghanistan", x: 9087, y: 2511, difficulty: "hard", capital: false}, 
            {city: "Mazar-e Sharif", country: "Afghanistan", x: 9272, y: 2410, difficulty: "hard", capital: false}, 
            {city: "Kabul", country: "Afghanistan", x: 9350, y: 2504, difficulty: "medium", capital: true}, 
            {city: "Tirana", country: "Albania", x: 7498, y: 2208, difficulty: "hard", capital: true}, 
            {city: "Tamanrasset", country: "Algeria", x: 6961, y: 2976, difficulty: "hard", capital: false}, 
            {city: "Ghardaia", country: "Algeria", x: 6892, y: 2588, difficulty: "hard", capital: false}, 
            {city: "Constantine", country: "Algeria", x: 7002, y: 2425, difficulty: "hard", capital: false}, 
            {city: "Oran", country: "Algeria", x: 6731, y: 2452, difficulty: "hard", capital: false}, 
            {city: "Algiers", country: "Algeria", x: 6869, y: 2409, difficulty: "medium", capital: true}, 
            {city: "Pago Pago", country: "American Samoa", x: 349, y: 4393, difficulty: "hard", capital: false}, 
            {city: "Port Blair", country: "Andaman Islands", x: 10234, y: 3404, difficulty: "hard", capital: false}, 
            {city: "Andorra la Vella", country: "Andorra", x: 6812, y: 2152, difficulty: "hard", capital: true}, 
            {city: "Malanje", country: "Angola", x: 7367, y: 4212, difficulty: "hard", capital: false}, 
            {city: "Huambo", country: "Angola", x: 7345, y: 4334, difficulty: "hard", capital: false}, 
            {city: "Benguela", country: "Angola", x: 7257, y: 4328, difficulty: "hard", capital: false}, 
            {city: "Namibe", country: "Angola", x: 7211, y: 4428, difficulty: "hard", capital: false}, 
            {city: "Lubango", country: "Angola", x: 7260, y: 4417, difficulty: "hard", capital: false}, 
            {city: "Menongue", country: "Angola", x: 7418, y: 4407, difficulty: "hard", capital: false}, 
            {city: "Luanda", country: "Angola", x: 7251, y: 4186, difficulty: "hard", capital: true}, 
            {city: "St. John's", country: "Antigua and Barbuda", x: 4434, y: 3196, difficulty: "hard", capital: true}, 
            {city: "Rio Gallegos", country: "Argentina", x: 4157, y: 5981, difficulty: "hard", capital: false}, 
            {city: "Comodoro Rivadavia", country: "Argentina", x: 4221, y: 5700, difficulty: "hard", capital: false}, 
            {city: "Rawson", country: "Argentina", x: 4311, y: 5580, difficulty: "hard", capital: false}, 
            {city: "San Carlos de Bariloche", country: "Argentina", x: 4079, y: 5483, difficulty: "hard", capital: false}, 
            {city: "Neuquen", country: "Argentina", x: 4200, y: 5385, difficulty: "hard", capital: false}, 
            {city: "Bahia Blanca", country: "Argentina", x: 4418, y: 5376, difficulty: "hard", capital: false}, 
            {city: "Mar del Plata", country: "Argentina", x: 4593, y: 5343, difficulty: "hard", capital: false}, 
            {city: "La Plata", country: "Argentina", x: 4579, y: 5211, difficulty: "hard", capital: false}, 
            {city: "Rosario", country: "Argentina", x: 4478, y: 5128, difficulty: "hard", capital: false}, 
            {city: "Mendoza", country: "Argentina", x: 4172, y: 5126, difficulty: "hard", capital: false}, 
            {city: "Cordoba", country: "Argentina", x: 4346, y: 5065, difficulty: "hard", capital: false}, 
            {city: "Posadas", country: "Argentina", x: 4657, y: 4901, difficulty: "hard", capital: false}, 
            {city: "Formosa", country: "Argentina", x: 4571, y: 4854, difficulty: "hard", capital: false}, 
            {city: "San Miguel de Tucuman", country: "Argentina", x: 4307, y: 4879, difficulty: "hard", capital: false}, 
            {city: "Salta", country: "Argentina", x: 4299, y: 4799, difficulty: "hard", capital: false}, 
            {city: "Buenos Aires", country: "Argentina", x: 4563, y: 5199, difficulty: "easy", capital: true}, 
            {city: "Yerevan", country: "Armenia", x: 8424, y: 2259, difficulty: "hard", capital: true}, 
            {city: "Hobart", country: "Australia", x: 12281, y: 5560, difficulty: "medium", capital: false}, 
            {city: "Devonport", country: "Australia", x: 12245, y: 5485, difficulty: "hard", capital: false}, 
            {city: "Kalgoorlie", country: "Australia", x: 11312, y: 5037, difficulty: "hard", capital: false}, 
            {city: "Katherine", country: "Australia", x: 11717, y: 4400, difficulty: "hard", capital: false}, 
            {city: "Mount Isa", country: "Australia", x: 11988, y: 4641, difficulty: "hard", capital: false}, 
            {city: "Alice Springs", country: "Australia", x: 11778, y: 4756, difficulty: "medium", capital: false}, 
            {city: "Longreach", country: "Australia", x: 12167, y: 4747, difficulty: "hard", capital: false}, 
            {city: "Windorah", country: "Australia", x: 12107, y: 4825, difficulty: "hard", capital: false}, 
            {city: "Bourke", country: "Australia", x: 12230, y: 5011, difficulty: "hard", capital: false}, 
            {city: "Broken Hill", country: "Australia", x: 12061, y: 5087, difficulty: "hard", capital: false}, 
            {city: "Bendigo", country: "Australia", x: 12168, y: 5289, difficulty: "hard", capital: false}, 
            {city: "Orange", country: "Australia", x: 12349, y: 5142, difficulty: "hard", capital: false}, 
            {city: "Dubbo", country: "Australia", x: 12330, y: 5100, difficulty: "hard", capital: false}, 
            {city: "Armidale", country: "Australia", x: 12445, y: 5028, difficulty: "hard", capital: false}, 
            {city: "Whyalla", country: "Australia", x: 11916, y: 5132, difficulty: "hard", capital: false}, 
            {city: "Adelaide", country: "Australia", x: 11955, y: 5212, difficulty: "medium", capital: false}, 
            {city: "Portland", country: "Australia", x: 12067, y: 5358, difficulty: "hard", capital: false}, 
            {city: "Melbourne", country: "Australia", x: 12194, y: 5335, difficulty: "easy", capital: false}, 
            {city: "Wollongong", country: "Australia", x: 12416, y: 5190, difficulty: "hard", capital: false}, 
            {city: "Sydney", country: "Australia", x: 12427, y: 5169, difficulty: "easy", capital: false}, 
            {city: "Newcastle", country: "Australia", x: 12451, y: 5124, difficulty: "hard", capital: false}, 
            {city: "Brisbane", country: "Australia", x: 12496, y: 4905, difficulty: "easy", capital: false}, 
            {city: "Rockhampton", country: "Australia", x: 12402, y: 4743, difficulty: "hard", capital: false}, 
            {city: "Townsville", country: "Australia", x: 12261, y: 4584, difficulty: "hard", capital: false}, 
            {city: "Cairns", country: "Australia", x: 12224, y: 4493, difficulty: "medium", capital: false}, 
            {city: "Katherine", country: "Australia", x: 11717, y: 4400, difficulty: "hard", capital: false}, 
            {city: "Darwin", country: "Australia", x: 11664, y: 4322, difficulty: "medium", capital: false}, 
            {city: "Broome", country: "Australia", x: 11341, y: 4534, difficulty: "hard", capital: false}, 
            {city: "Karratha", country: "Australia", x: 11140, y: 4641, difficulty: "hard", capital: false}, 
            {city: "Geraldton", country: "Australia", x: 11054, y: 4958, difficulty: "hard", capital: false}, 
            {city: "Perth", country: "Australia", x: 11101, y: 5087, difficulty: "medium", capital: false}, 
            {city: "Busselton", country: "Australia", x: 11082, y: 5158, difficulty: "hard", capital: false}, 
            {city: "Albany", country: "Australia", x: 11178, y: 5215, difficulty: "hard", capital: false}, 
            {city: "Canberra", country: "Australia", x: 12350, y: 5228, difficulty: "medium", capital: true}, 
            {city: "Vienna", country: "Austria", x: 7368, y: 1886, difficulty: "easy", capital: true}, 
            {city: "Baku", country: "Azerbaijan", x: 8625, y: 2249, difficulty: "hard", capital: true}, 
            {city: "Ponta Delgada", country: "Azores", x: 5791, y: 2365, difficulty: "hard", capital: false}, 
            {city: "Freeport", country: "Bahamas", x: 3801, y: 2829, difficulty: "hard", capital: false}, 
            {city: "Nassau", country: "Bahamas", x: 3852, y: 2887, difficulty: "hard", capital: true}, 
            {city: "Manama", country: "Bahrain", x: 8652, y: 2842, difficulty: "hard", capital: true}, 
            {city: "Chittagong", country: "Bangladesh", x: 10199, y: 2994, difficulty: "hard", capital: false}, 
            {city: "Khulna", country: "Bangladesh", x: 10115, y: 2974, difficulty: "hard", capital: false}, 
            {city: "Dhaka", country: "Bangladesh", x: 10146, y: 2941, difficulty: "hard", capital: true}, 
            {city: "Bridgetown", country: "Barbados", x: 4517, y: 3349, difficulty: "hard", capital: true}, 
            {city: "Brest", country: "Belarus", x: 7643, y: 1693, difficulty: "hard", capital: false}, 
            {city: "Homyel", country: "Belarus", x: 7917, y: 1677, difficulty: "hard", capital: false}, 
            {city: "Minsk", country: "Belarus", x: 7788, y: 1603, difficulty: "hard", capital: true}, 
            {city: "Brussels", country: "Belgium", x: 6917, y: 1757, difficulty: "easy", capital: true}, 
            {city: "Belmopan", country: "Belize", x: 3423, y: 3191, difficulty: "hard", capital: true}, 
            {city: "Parakou", country: "Benin", x: 6852, y: 3493, difficulty: "hard", capital: false}, 
            {city: "Porto-Novo", country: "Benin", x: 6852, y: 3602, difficulty: "hard", capital: true}, 
            {city: "Cotonou", country: "Benin", x: 6849, y: 3606, difficulty: "hard", capital: true}, 
            {city: "Hamilton", country: "Bermuda", x: 4323, y: 2596, difficulty: "hard", capital: false}, 
            {city: "Thimphu", country: "Bhutan", x: 10118, y: 2793, difficulty: "hard", capital: true}, 
            {city: "Riberalta", country: "Bolivia", x: 4274, y: 4267, difficulty: "hard", capital: false}, 
            {city: "Trinidad", country: "Bolivia", x: 4319, y: 4414, difficulty: "hard", capital: false}, 
            {city: "Cochabamba", country: "Bolivia", x: 4271, y: 4513, difficulty: "hard", capital: false}, 
            {city: "Santa Cruz", country: "Bolivia", x: 4382, y: 4526, difficulty: "hard", capital: false}, 
            {city: "Potosi", country: "Bolivia", x: 4287, y: 4596, difficulty: "hard", capital: false}, 
            {city: "Tarija", country: "Bolivia", x: 4324, y: 4671, difficulty: "hard", capital: false}, 
            {city: "La Paz", country: "Bolivia", x: 4197, y: 4479, difficulty: "hard", capital: true}, 
            {city: "Sucre", country: "Bolivia", x: 4305, y: 4575, difficulty: "hard", capital: true}, 
            {city: "Sarajevo", country: "Bosnia and Herzegovina", x: 7444, y: 2092, difficulty: "medium", capital: true}, 
            {city: "Serowe", country: "Botswana", x: 7756, y: 4705, difficulty: "hard", capital: false}, 
            {city: "Gaborone", country: "Botswana", x: 7726, y: 4795, difficulty: "hard", capital: true}, 
            {city: "Pelotas", country: "Brazil", x: 4791, y: 5079, difficulty: "hard", capital: false}, 
            {city: "Porto Alegre", country: "Brazil", x: 4833, y: 5009, difficulty: "hard", capital: false}, 
            {city: "Florianopolis", country: "Brazil", x: 4933, y: 4910, difficulty: "hard", capital: false}, 
            {city: "Joinville", country: "Brazil", x: 4921, y: 4860, difficulty: "hard", capital: false}, 
            {city: "Curitiba", country: "Brazil", x: 4903, y: 4824, difficulty: "hard", capital: false}, 
            {city: "Santos", country: "Brazil", x: 5015, y: 4766, difficulty: "hard", capital: false}, 
            {city: "Sao Paulo", country: "Brazil", x: 5004, y: 4751, difficulty: "easy", capital: false}, 
            {city: "Campinas", country: "Brazil", x: 4987, y: 4725, difficulty: "hard", capital: false}, 
            {city: "Rio de Janeiro", country: "Brazil", x: 5132, y: 4726, difficulty: "easy", capital: false}, 
            {city: "Ribeirao Preto", country: "Brazil", x: 4959, y: 4658, difficulty: "hard", capital: false}, 
            {city: "Belo Horizonte", country: "Brazil", x: 5106, y: 4609, difficulty: "hard", capital: false}, 
            {city: "Vitoria", country: "Brazil", x: 5241, y: 4627, difficulty: "hard", capital: false}, 
            {city: "Montes Claros", country: "Brazil", x: 5108, y: 4486, difficulty: "hard", capital: false}, 
            {city: "Vitoria da Conquista", country: "Brazil", x: 5221, y: 4415, difficulty: "hard", capital: false}, 
            {city: "Salvador", country: "Brazil", x: 5310, y: 4343, difficulty: "hard", capital: false}, 
            {city: "Feira de Santana", country: "Brazil", x: 5292, y: 4315, difficulty: "hard", capital: false}, 
            {city: "Petrolina", country: "Brazil", x: 5234, y: 4206, difficulty: "hard", capital: false}, 
            {city: "Maceio", country: "Brazil", x: 5413, y: 4215, difficulty: "hard", capital: false}, 
            {city: "Recife", country: "Brazil", x: 5444, y: 4156, difficulty: "medium", capital: false}, 
            {city: "Joao Pessoa", country: "Brazil", x: 5445, y: 4119, difficulty: "hard", capital: false}, 
            {city: "Natal", country: "Brazil", x: 5432, y: 4069, difficulty: "hard", capital: false}, 
            {city: "Fortaleza", country: "Brazil", x: 5306, y: 3991, difficulty: "medium", capital: false}, 
            {city: "Teresina", country: "Brazil", x: 5149, y: 4043, difficulty: "hard", capital: false}, 
            {city: "Sao Luis", country: "Brazil", x: 5093, y: 3944, difficulty: "hard", capital: false}, 
            {city: "Maraba", country: "Brazil", x: 4911, y: 4052, difficulty: "hard", capital: false}, 
            {city: "Belem", country: "Brazil", x: 4935, y: 3904, difficulty: "hard", capital: false}, 
            {city: "Macapa", country: "Brazil", x: 4839, y: 3847, difficulty: "hard", capital: false}, 
            {city: "Santarem", country: "Brazil", x: 4701, y: 3941, difficulty: "hard", capital: false}, 
            {city: "Boa Vista", country: "Brazil", x: 4478, y: 3741, difficulty: "hard", capital: false}, 
            {city: "Manaus", country: "Brazil", x: 4503, y: 3966, difficulty: "medium", capital: false}, 
            {city: "Cruzeiro do Sul", country: "Brazil", x: 4027, y: 4139, difficulty: "hard", capital: false}, 
            {city: "Rio Branco", country: "Brazil", x: 4210, y: 4228, difficulty: "hard", capital: false}, 
            {city: "Porto Velho", country: "Brazil", x: 4356, y: 4182, difficulty: "hard", capital: false}, 
            {city: "Ji-Parana", country: "Brazil", x: 4429, y: 4261, difficulty: "hard", capital: false}, 
            {city: "Vilhena", country: "Brazil", x: 4498, y: 4333, difficulty: "hard", capital: false}, 
            {city: "Cuiaba", country: "Brazil", x: 4650, y: 4442, difficulty: "hard", capital: false}, 
            {city: "Corumba", country: "Brazil", x: 4591, y: 4575, difficulty: "hard", capital: false}, 
            {city: "Campo Grande", country: "Brazil", x: 4705, y: 4630, difficulty: "hard", capital: false}, 
            {city: "Ribeirao Preto", country: "Brazil", x: 4959, y: 4658, difficulty: "hard", capital: false}, 
            {city: "Uberlandia", country: "Brazil", x: 4943, y: 4570, difficulty: "hard", capital: false}, 
            {city: "Goiania", country: "Brazil", x: 4904, y: 4486, difficulty: "hard", capital: false}, 
            {city: "Barreiras", country: "Brazil", x: 5066, y: 4311, difficulty: "hard", capital: false}, 
            {city: "Brasilia", country: "Brazil", x: 4956, y: 4451, difficulty: "medium", capital: true}, 
            {city: "Bandar Seri Begawan", country: "Brunei", x: 11067, y: 3663, difficulty: "hard", capital: true}, 
            {city: "Sofia", country: "Bulgaria", x: 7629, y: 2146, difficulty: "hard", capital: true}, 
            {city: "Ouagadougou", country: "Burkina Faso", x: 6697, y: 3378, difficulty: "hard", capital: true}, 
            {city: "Gitega", country: "Burundi", x: 7880, y: 3979, difficulty: "hard", capital: true}, 
            {city: "Bujumbura", country: "Burundi", x: 7856, y: 3978, difficulty: "hard", capital: true}, 
            {city: "Siem Reap", country: "Cambodia", x: 10651, y: 3339, difficulty: "medium", capital: false}, 
            {city: "Phnom Penh", country: "Cambodia", x: 10691, y: 3410, difficulty: "medium", capital: true}, 
            {city: "Douala", country: "Cameroon", x: 7118, y: 3694, difficulty: "hard", capital: false}, 
            {city: "Maroua", country: "Cameroon", x: 7292, y: 3445, difficulty: "hard", capital: false}, 
            {city: "Yaounde", country: "Cameroon", x: 7186, y: 3702, difficulty: "hard", capital: true}, 
            {city: "Dawson City", country: "Canada", x: 1523, y: 1078, difficulty: "hard", capital: false}, 
            {city: "Whitehorse", country: "Canada", x: 1687, y: 1251, difficulty: "medium", capital: false}, 
            {city: "Inuvik", country: "Canada", x: 1737, y: 860, difficulty: "hard", capital: false}, 
            {city: "Fort Good Hope", country: "Canada", x: 1927, y: 965, difficulty: "hard", capital: false}, 
            {city: "Kugluktuk", country: "Canada", x: 2434, y: 888, difficulty: "hard", capital: false}, 
            {city: "Prince Rupert", country: "Canada", x: 1864, y: 1581, difficulty: "hard", capital: false}, 
            {city: "Prince George", country: "Canada", x: 2147, y: 1601, difficulty: "hard", capital: false}, 
            {city: "Victoria", country: "Canada", x: 2126, y: 1874, difficulty: "medium", capital: false}, 
            {city: "Vancouver", country: "Canada", x: 2134, y: 1833, difficulty: "easy", capital: false}, 
            {city: "Yellowknife", country: "Canada", x: 2462, y: 1162, difficulty: "medium", capital: false}, 
            {city: "Fort Smith", country: "Canada", x: 2556, y: 1288, difficulty: "hard", capital: false}, 
            {city: "Fort McMurray", country: "Canada", x: 2575, y: 1457, difficulty: "hard", capital: false}, 
            {city: "Fort St. John", country: "Canada", x: 2220, y: 1482, difficulty: "hard", capital: false}, 
            {city: "Peace River", country: "Canada", x: 2353, y: 1483, difficulty: "hard", capital: false}, 
            {city: "Edmonton", country: "Canada", x: 2495, y: 1620, difficulty: "medium", capital: false}, 
            {city: "Calgary", country: "Canada", x: 2473, y: 1744, difficulty: "medium", capital: false}, 
            {city: "Saskatoon", country: "Canada", x: 2751, y: 1689, difficulty: "hard", capital: false}, 
            {city: "Regina", country: "Canada", x: 2828, y: 1775, difficulty: "hard", capital: false}, 
            {city: "Winnipeg", country: "Canada", x: 3108, y: 1803, difficulty: "medium", capital: false}, 
            {city: "Thunder Bay", country: "Canada", x: 3404, y: 1873, difficulty: "hard", capital: false}, 
            {city: "Resolute", country: "Canada", x: 3193, y: 560, difficulty: "hard", capital: false}, 
            {city: "Taloyoak", country: "Canada", x: 3244, y: 802, difficulty: "hard", capital: false}, 
            {city: "Arctic Bay", country: "Canada", x: 3558, y: 635, difficulty: "hard", capital: false}, 
            {city: "Pond Inlet", country: "Canada", x: 3827, y: 651, difficulty: "hard", capital: false}, 
            {city: "Igloolik", country: "Canada", x: 3685, y: 815, difficulty: "hard", capital: false}, 
            {city: "Repulse Bay", country: "Canada", x: 3516, y: 951, difficulty: "hard", capital: false}, 
            {city: "Chesterfield Inlet", country: "Canada", x: 3351, y: 1115, difficulty: "hard", capital: false}, 
            {city: "Churchill", country: "Canada", x: 3221, y: 1353, difficulty: "hard", capital: false}, 
            {city: "Fort Severn", country: "Canada", x: 3465, y: 1496, difficulty: "hard", capital: false}, 
            {city: "Alert", country: "Canada", x: 4418, y: 246, difficulty: "hard", capital: false}, 
            {city: "Iqaluit", country: "Canada", x: 4184, y: 1094, difficulty: "hard", capital: false}, 
            {city: "Moosonee", country: "Canada", x: 3727, y: 1733, difficulty: "hard", capital: false}, 
            {city: "Timmins", country: "Canada", x: 3702, y: 1872, difficulty: "hard", capital: false}, 
            {city: "North Bay", country: "Canada", x: 3773, y: 1976, difficulty: "hard", capital: false}, 
            {city: "Toronto", country: "Canada", x: 3774, y: 2098, difficulty: "easy", capital: false}, 
            {city: "Montreal", country: "Canada", x: 3993, y: 2014, difficulty: "easy", capital: false}, 
            {city: "Quebec", country: "Canada", x: 4081, y: 1951, difficulty: "easy", capital: false}, 
            {city: "Charlottetown", country: "Canada", x: 4385, y: 1979, difficulty: "hard", capital: false}, 
            {city: "Halifax", country: "Canada", x: 4368, y: 2054, difficulty: "medium", capital: false}, 
            {city: "Sydney", country: "Canada", x: 4496, y: 1987, difficulty: "hard", capital: false}, 
            {city: "St. John's", country: "Canada", x: 4777, y: 1915, difficulty: "hard", capital: false}, 
            {city: "Happy Valley - Goose Bay", country: "Canada", x: 4491, y: 1633, difficulty: "hard", capital: false}, 
            {city: "Nain", country: "Canada", x: 4439, y: 1467, difficulty: "hard", capital: false}, 
            {city: "Labrador City", country: "Canada", x: 4243, y: 1651, difficulty: "hard", capital: false}, 
            {city: "Kuujjuaq", country: "Canada", x: 4187, y: 1387, difficulty: "hard", capital: false}, 
            {city: "Kuujjuarapik", country: "Canada", x: 3836, y: 1532, difficulty: "hard", capital: false}, 
            {city: "Ottawa", country: "Canada", x: 3913, y: 2019, difficulty: "easy", capital: true}, 
            {city: "Las Palmas", country: "Canary Islands", x: 6175, y: 2766, difficulty: "hard", capital: false}, 
            {city: "Praia", country: "Cape Verde", x: 5872, y: 3281, difficulty: "hard", capital: true}, 
            {city: "N'Dele", country: "Central African Republic", x: 7529, y: 3528, difficulty: "hard", capital: false}, 
            {city: "Obo", country: "Central African Republic", x: 7749, y: 3643, difficulty: "hard", capital: false}, 
            {city: "Bangui", country: "Central African Republic", x: 7450, y: 3683, difficulty: "hard", capital: true}, 
            {city: "Moundou", country: "Chad", x: 7358, y: 3523, difficulty: "hard", capital: false}, 
            {city: "Abeche", country: "Chad", x: 7536, y: 3321, difficulty: "hard", capital: false}, 
            {city: "N'Djamena", country: "Chad", x: 7319, y: 3388, difficulty: "hard", capital: true}, 
            {city: "Iquique", country: "Chile", x: 4123, y: 4622, difficulty: "hard", capital: false}, 
            {city: "Antofagasta", country: "Chile", x: 4113, y: 4755, difficulty: "hard", capital: false}, 
            {city: "Copiapo", country: "Chile", x: 4115, y: 4901, difficulty: "hard", capital: false}, 
            {city: "La Serena", country: "Chile", x: 4081, y: 5003, difficulty: "hard", capital: false}, 
            {city: "Valparaiso", country: "Chile", x: 4067, y: 5132, difficulty: "hard", capital: false}, 
            {city: "Concepcion", country: "Chile", x: 4013, y: 5292, difficulty: "hard", capital: false}, 
            {city: "Los Angeles", country: "Chile", x: 4039, y: 5320, difficulty: "hard", capital: false}, 
            {city: "Valdivia", country: "Chile", x: 4006, y: 5422, difficulty: "hard", capital: false}, 
            {city: "Puerto Montt", country: "Chile", x: 4018, y: 5497, difficulty: "hard", capital: false}, 
            {city: "Coihaique", country: "Chile", x: 4050, y: 5686, difficulty: "hard", capital: false}, 
            {city: "Punta Arenas", country: "Chile", x: 4092, y: 6058, difficulty: "hard", capital: false}, 
            {city: "Santiago", country: "Chile", x: 4102, y: 5150, difficulty: "medium", capital: true}, 
            {city: "Valparaiso", country: "Chile", x: 4066, y: 5132, difficulty: "hard", capital: true}, 
            {city: "Hotan", country: "China", x: 9753, y: 2393, difficulty: "hard", capital: false}, 
            {city: "Shache", country: "China", x: 9653, y: 2335, difficulty: "hard", capital: false}, 
            {city: "Kashi (Kashgar)", country: "China", x: 9605, y: 2289, difficulty: "hard", capital: false}, 
            {city: "Yining", country: "China", x: 9807, y: 2089, difficulty: "hard", capital: false}, 
            {city: "Altay", country: "China", x: 10061, y: 1901, difficulty: "hard", capital: false}, 
            {city: "Urumqi", country: "China", x: 10040, y: 2093, difficulty: "hard", capital: false}, 
            {city: "Turpan", country: "China", x: 10100, y: 2133, difficulty: "hard", capital: false}, 
            {city: "Hami", country: "China", x: 10263, y: 2138, difficulty: "hard", capital: false}, 
            {city: "Xigaze", country: "China", x: 10089, y: 2720, difficulty: "hard", capital: false}, 
            {city: "Lhasa", country: "China", x: 10173, y: 2704, difficulty: "medium", capital: false}, 
            {city: "Golmud", country: "China", x: 10315, y: 2422, difficulty: "hard", capital: false}, 
            {city: "Dunhuang", country: "China", x: 10306, y: 2259, difficulty: "hard", capital: false}, 
            {city: "Jiayuguan", country: "China", x: 10443, y: 2274, difficulty: "hard", capital: false}, 
            {city: "Zhangye", country: "China", x: 10523, y: 2313, difficulty: "hard", capital: false}, 
            {city: "Wuwei", country: "China", x: 10606, y: 2357, difficulty: "hard", capital: false}, 
            {city: "Xining", country: "China", x: 10573, y: 2413, difficulty: "hard", capital: false}, 
            {city: "Lanzhou", country: "China", x: 10649, y: 2438, difficulty: "hard", capital: false}, 
            {city: "Xi'an", country: "China", x: 10840, y: 2513, difficulty: "medium", capital: false}, 
            {city: "Chengdu", country: "China", x: 10659, y: 2662, difficulty: "hard", capital: false}, 
            {city: "Ankang", country: "China", x: 10845, y: 2580, difficulty: "hard", capital: false}, 
            {city: "Nanyang", country: "China", x: 10977, y: 2566, difficulty: "hard", capital: false}, 
            {city: "Suzhou", country: "China", x: 11144, y: 2540, difficulty: "hard", capital: false}, 
            {city: "Linyi", country: "China", x: 11194, y: 2479, difficulty: "hard", capital: false}, 
            {city: "Qingdao", country: "China", x: 11269, y: 2436, difficulty: "hard", capital: false}, 
            {city: "Yantai", country: "China", x: 11309, y: 2374, difficulty: "hard", capital: false}, 
            {city: "Jinan", country: "China", x: 11144, y: 2411, difficulty: "hard", capital: false}, 
            {city: "Zhengzhou", country: "China", x: 11019, y: 2493, difficulty: "hard", capital: false}, 
            {city: "Houma", country: "China", x: 10927, y: 2456, difficulty: "hard", capital: false}, 
            {city: "Yinchuan", country: "China", x: 10742, y: 2333, difficulty: "hard", capital: false}, 
            {city: "Baotou", country: "China", x: 10875, y: 2237, difficulty: "hard", capital: false}, 
            {city: "Yulin", country: "China", x: 10872, y: 2342, difficulty: "hard", capital: false}, 
            {city: "Taiyuan", country: "China", x: 10977, y: 2359, difficulty: "hard", capital: false}, 
            {city: "Shijiazhuang", country: "China", x: 11050, y: 2352, difficulty: "hard", capital: false}, 
            {city: "Tianjin", country: "China", x: 11152, y: 2304, difficulty: "medium", capital: false}, 
            {city: "Datong", country: "China", x: 11005, y: 2262, difficulty: "hard", capital: false}, 
            {city: "Chifeng", country: "China", x: 11217, y: 2164, difficulty: "hard", capital: false}, 
            {city: "Huludao", country: "China", x: 11288, y: 2232, difficulty: "hard", capital: false}, 
            {city: "Dalian", country: "China", x: 11318, y: 2313, difficulty: "medium", capital: false}, 
            {city: "Shenyang", country: "China", x: 11386, y: 2185, difficulty: "hard", capital: false}, 
            {city: "Changchun", country: "China", x: 11457, y: 2090, difficulty: "hard", capital: false}, 
            {city: "Jilin", country: "China", x: 11503, y: 2091, difficulty: "hard", capital: false}, 
            {city: "Jixi", country: "China", x: 11668, y: 2023, difficulty: "hard", capital: false}, 
            {city: "Jiamusi", country: "China", x: 11645, y: 1951, difficulty: "hard", capital: false}, 
            {city: "Harbin", country: "China", x: 11507, y: 2002, difficulty: "hard", capital: false}, 
            {city: "Ulanhot", country: "China", x: 11335, y: 1987, difficulty: "hard", capital: false}, 
            {city: "Qiqihar", country: "China", x: 11407, y: 1926, difficulty: "hard", capital: false}, 
            {city: "Bei'an", country: "China", x: 11500, y: 1883, difficulty: "hard", capital: false}, 
            {city: "Hailar", country: "China", x: 11246, y: 1837, difficulty: "hard", capital: false}, 
            {city: "Nantong", country: "China", x: 11288, y: 2606, difficulty: "hard", capital: false}, 
            {city: "Shanghai", country: "China", x: 11311, y: 2640, difficulty: "easy", capital: false}, 
            {city: "Nanjing", country: "China", x: 11211, y: 2606, difficulty: "medium", capital: false}, 
            {city: "Hefei", country: "China", x: 11155, y: 2614, difficulty: "hard", capital: false}, 
            {city: "Ningbo", country: "China", x: 11315, y: 2695, difficulty: "hard", capital: false}, 
            {city: "Hangzhou", country: "China", x: 11263, y: 2680, difficulty: "hard", capital: false}, 
            {city: "Wuhan", country: "China", x: 11042, y: 2666, difficulty: "medium", capital: false}, 
            {city: "Yueyang", country: "China", x: 10998, y: 2715, difficulty: "hard", capital: false}, 
            {city: "Chongqing", country: "China", x: 10754, y: 2707, difficulty: "medium", capital: false}, 
            {city: "Xichang", country: "China", x: 10593, y: 2775, difficulty: "hard", capital: false}, 
            {city: "Baoshan", country: "China", x: 10475, y: 2885, difficulty: "hard", capital: false}, 
            {city: "Kunming", country: "China", x: 10607, y: 2887, difficulty: "hard", capital: false}, 
            {city: "Gejiu", country: "China", x: 10625, y: 2953, difficulty: "hard", capital: false}, 
            {city: "Guiyang", country: "China", x: 10759, y: 2827, difficulty: "hard", capital: false}, 
            {city: "Nanning", country: "China", x: 10819, y: 2975, difficulty: "hard", capital: false}, 
            {city: "Guilin", country: "China", x: 10892, y: 2879, difficulty: "hard", capital: false}, 
            {city: "Zhanjiang", country: "China", x: 10896, y: 3038, difficulty: "hard", capital: false}, 
            {city: "Guangzhou", country: "China", x: 11006, y: 2962, difficulty: "medium", capital: false}, 
            {city: "Macau", country: "China", x: 11015, y: 3001, difficulty: "medium", capital: false}, 
            {city: "Hong Kong", country: "China", x: 11036, y: 2990, difficulty: "easy", capital: false}, 
            {city: "Shaoguan", country: "China", x: 11016, y: 2897, difficulty: "hard", capital: false}, 
            {city: "Shantou", country: "China", x: 11132, y: 2954, difficulty: "hard", capital: false}, 
            {city: "Xiamen", country: "China", x: 11185, y: 2911, difficulty: "hard", capital: false}, 
            {city: "Fuzhou", country: "China", x: 11231, y: 2847, difficulty: "medium", capital: false}, 
            {city: "Wenzhou", country: "China", x: 11281, y: 2770, difficulty: "hard", capital: false}, 
            {city: "Nanchang", country: "China", x: 11102, y: 2743, difficulty: "hard", capital: false}, 
            {city: "Beijing", country: "China", x: 11121, y: 2270, difficulty: "easy", capital: true}, 
            {city: "Cartagena", country: "Colombia", x: 3920, y: 3452, difficulty: "medium", capital: false}, 
            {city: "Barranquilla", country: "Colombia", x: 3947, y: 3431, difficulty: "hard", capital: false}, 
            {city: "Cucuta", country: "Colombia", x: 4033, y: 3547, difficulty: "hard", capital: false}, 
            {city: "Medellin", country: "Colombia", x: 3918, y: 3610, difficulty: "medium", capital: false}, 
            {city: "Manizales", country: "Colombia", x: 3920, y: 3656, difficulty: "hard", capital: false}, 
            {city: "Cali", country: "Colombia", x: 3883, y: 3719, difficulty: "hard", capital: false}, 
            {city: "Pasto", country: "Colombia", x: 3854, y: 3802, difficulty: "hard", capital: false}, 
            {city: "Leticia", country: "Colombia", x: 4129, y: 4009, difficulty: "hard", capital: false}, 
            {city: "Bogota", country: "Colombia", x: 3974, y: 3675, difficulty: "medium", capital: true}, 
            {city: "Moroni", country: "Comoros", x: 8376, y: 4295, difficulty: "hard", capital: true}, 
            {city: "Pointe-Noire", country: "Congo", x: 7200, y: 4030, difficulty: "hard", capital: false}, 
            {city: "Brazzaville", country: "Congo", x: 7321, y: 4011, difficulty: "hard", capital: true}, 
            {city: "Rarotonga", country: "Cook Islands", x: 760, y: 4661, difficulty: "hard", capital: false}, 
            {city: "Liberia", country: "Costa Rica", x: 3548, y: 3443, difficulty: "hard", capital: false}, 
            {city: "San Jose", country: "Costa Rica", x: 3599, y: 3471, difficulty: "hard", capital: true}, 
            {city: "Zagreb", country: "Croatia", x: 7354, y: 2001, difficulty: "hard", capital: true}, 
            {city: "Santiago de Cuba", country: "Cuba", x: 3909, y: 3084, difficulty: "hard", capital: false}, 
            {city: "Havana", country: "Cuba", x: 3663, y: 2964, difficulty: "medium", capital: true}, 
            {city: "Nicosia", country: "Cyprus", x: 8006, y: 2477, difficulty: "hard", capital: true}, 
            {city: "Prague", country: "Czechia", x: 7297, y: 1794, difficulty: "medium", capital: true}, 
            {city: "Copenhagen", country: "Denmark", x: 7225, y: 1512, difficulty: "medium", capital: true}, 
            {city: "Djibouti", country: "Djibouti", x: 8373, y: 3408, difficulty: "hard", capital: true}, 
            {city: "Roseau", country: "Dominica", x: 4450, y: 3264, difficulty: "hard", capital: true}, 
            {city: "Santiago", country: "Dominican Republic", x: 4102, y: 3104, difficulty: "hard", capital: false}, 
            {city: "Santo Domingo", country: "Dominican Republic", x: 4131, y: 3145, difficulty: "hard", capital: true}, 
            {city: "Kinshasa", country: "DR Congo", x: 7335, y: 4016, difficulty: "medium", capital: true}, 
            {city: "Goma", country: "DR Congo", x: 7851, y: 3912, difficulty: "hard", capital: false}, 
            {city: "Kisangani", country: "DR Congo", x: 7701, y: 3829, difficulty: "hard", capital: false}, 
            {city: "Bumba", country: "DR Congo", x: 7597, y: 3765, difficulty: "hard", capital: false}, 
            {city: "Mbandaka", country: "DR Congo", x: 7439, y: 3847, difficulty: "hard", capital: false}, 
            {city: "Matadi", country: "DR Congo", x: 7259, y: 4070, difficulty: "hard", capital: false}, 
            {city: "Kikwit", country: "DR Congo", x: 7461, y: 4040, difficulty: "hard", capital: false}, 
            {city: "Kananga", country: "DR Congo", x: 7595, y: 4073, difficulty: "hard", capital: false}, 
            {city: "Kasongo", country: "DR Congo", x: 7755, y: 4018, difficulty: "hard", capital: false}, 
            {city: "Mbuji-Mayi", country: "DR Congo", x: 7640, y: 4083, difficulty: "hard", capital: false}, 
            {city: "Kalemie", country: "DR Congo", x: 7850, y: 4074, difficulty: "hard", capital: false}, 
            {city: "Kolwezi", country: "DR Congo", x: 7710, y: 4257, difficulty: "hard", capital: false}, 
            {city: "Lubumbashi", country: "DR Congo", x: 7785, y: 4293, difficulty: "hard", capital: false}, 
            {city: "Dili", country: "East Timor", x: 11466, y: 4175, difficulty: "hard", capital: true}, 
            {city: "Guayaquil", country: "Ecuador", x: 3755, y: 3933, difficulty: "hard", capital: false}, 
            {city: "Cuenca", country: "Ecuador", x: 3790, y: 3959, difficulty: "hard", capital: false}, 
            {city: "Quito", country: "Ecuador", x: 3808, y: 3858, difficulty: "hard", capital: true}, 
            {city: "Suez", country: "Egypt", x: 7975, y: 2689, difficulty: "easy", capital: false}, 
            {city: "Alexandria", country: "Egypt", x: 7878, y: 2641, difficulty: "medium", capital: false}, 
            {city: "Giza", country: "Egypt", x: 7912, y: 2700, difficulty: "easy", capital: false}, 
            {city: "Luxor", country: "Egypt", x: 7979, y: 2862, difficulty: "hard", capital: false}, 
            {city: "Aswan", country: "Egypt", x: 7989, y: 2926, difficulty: "hard", capital: false}, 
            {city: "Cairo", country: "Egypt", x: 7926, y: 2689, difficulty: "easy", capital: true}, 
            {city: "San Salvador", country: "El Salvador", x: 3407, y: 3327, difficulty: "hard", capital: true}, 
            {city: "Malabo", country: "Equatorial Guinea", x: 7084, y: 3707, difficulty: "hard", capital: true}, 
            {city: "Assab", country: "Eritrea", x: 8357, y: 3353, difficulty: "hard", capital: false}, 
            {city: "Asmara", country: "Eritrea", x: 8215, y: 3265, difficulty: "hard", capital: true}, 
            {city: "Tallinn", country: "Estonia", x: 7682, y: 1319, difficulty: "hard", capital: true}, 
            {city: "Lobamba", country: "Eswatini", x: 7924, y: 4865, difficulty: "hard", capital: true}, 
            {city: "Mbabane", country: "Eswatini", x: 7922, y: 4861, difficulty: "hard", capital: true}, 
            {city: "Gonder", country: "Ethiopia", x: 8160, y: 3368, difficulty: "hard", capital: false}, 
            {city: "Bahir Dar", country: "Ethiopia", x: 8157, y: 3407, difficulty: "hard", capital: false}, 
            {city: "Dire Dawa", country: "Ethiopia", x: 8325, y: 3483, difficulty: "hard", capital: false}, 
            {city: "Addis Ababa", country: "Ethiopia", x: 8206, y: 3505, difficulty: "medium", capital: true}, 
            {city: "Stanley", country: "Falkland Islands", x: 4583, y: 5984, difficulty: "hard", capital: false}, 
            {city: "Torshavn", country: "Faroe Islands", x: 6498, y: 1183, difficulty: "hard", capital: false}, 
            {city: "Suva", country: "Fiji", x: 13450, y: 4542, difficulty: "hard", capital: true}, 
            {city: "Helsinki", country: "Finland", x: 7690, y: 1280, difficulty: "medium", capital: true}, 
            {city: "Toulouse", country: "France", x: 6809, y: 2102, difficulty: "hard", capital: false}, 
            {city: "Bordeaux", country: "France", x: 6732, y: 2044, difficulty: "medium", capital: false}, 
            {city: "Marseille", country: "France", x: 6956, y: 2117, difficulty: "medium", capital: false}, 
            {city: "Lyon", country: "France", x: 6935, y: 2001, difficulty: "medium", capital: false}, 
            {city: "Le Havre", country: "France", x: 6758, y: 1822, difficulty: "hard", capital: false}, 
            {city: "Lille", country: "France", x: 6870, y: 1765, difficulty: "hard", capital: false}, 
            {city: "Paris", country: "France", x: 6842, y: 1854, difficulty: "easy", capital: true}, 
            {city: "Port Gentil", country: "Gabon", x: 7084, y: 3876, difficulty: "hard", capital: false}, 
            {city: "Libreville", country: "Gabon", x: 7109, y: 3835, difficulty: "hard", capital: true}, 
            {city: "Tbilisi", country: "Georgia", x: 8435, y: 2190, difficulty: "hard", capital: true}, 
            {city: "Hamburg", country: "Germany", x: 7129, y: 1620, difficulty: "medium", capital: false}, 
            {city: "Cologne", country: "Germany", x: 7015, y: 1751, difficulty: "medium", capital: false}, 
            {city: "Frankfurt", country: "Germany", x: 7080, y: 1792, difficulty: "medium", capital: false}, 
            {city: "Munich", country: "Germany", x: 7188, y: 1889, difficulty: "medium", capital: false}, 
            {city: "Berlin", country: "Germany", x: 7257, y: 1673, difficulty: "easy", capital: true}, 
            {city: "Accra", country: "Ghana", x: 6746, y: 3638, difficulty: "hard", capital: true}, 
            {city: "Thessaloniki", country: "Greece", x: 7613, y: 2235, difficulty: "hard", capital: false}, 
            {city: "Athens", country: "Greece", x: 7645, y: 2356, difficulty: "easy", capital: true}, 
            {city: "Qaanaaq", country: "Greenland", x: 4152, y: 439, difficulty: "hard", capital: false}, 
            {city: "Upernavik", country: "Greenland", x: 4647, y: 650, difficulty: "hard", capital: false}, 
            {city: "Sisimiut", country: "Greenland", x: 4740, y: 930, difficulty: "hard", capital: false}, 
            {city: "Nuuk", country: "Greenland", x: 4814, y: 1071, difficulty: "hard", capital: false}, 
            {city: "Narsarsuaq", country: "Greenland", x: 5050, y: 1228, difficulty: "hard", capital: false}, 
            {city: "St. George's", country: "Grenada", x: 4437, y: 3388, difficulty: "hard", capital: true}, 
            {city: "Hagatna", country: "Guam", x: 12186, y: 3335, difficulty: "hard", capital: false}, 
            {city: "Guatemala City", country: "Guatemala", x: 3357, y: 3292, difficulty: "medium", capital: true}, 
            {city: "Kankan", country: "Guinea", x: 6405, y: 3453, difficulty: "hard", capital: false}, 
            {city: "Conakry", country: "Guinea", x: 6241, y: 3486, difficulty: "hard", capital: true}, 
            {city: "Bissau", country: "Guinea-Bissau", x: 6169, y: 3398, difficulty: "hard", capital: true}, 
            {city: "Georgetown", country: "Guyana", x: 4572, y: 3591, difficulty: "hard", capital: true}, 
            {city: "Port-au-Prince", country: "Haiti", x: 4040, y: 3142, difficulty: "medium", capital: true}, 
            {city: "San Pedro Sula", country: "Honduras", x: 3451, y: 3257, difficulty: "hard", capital: false}, 
            {city: "Tegucigalpa", country: "Honduras", x: 3481, y: 3312, difficulty: "hard", capital: true}, 
            {city: "Budapest", country: "Hungary", x: 7470, y: 1920, difficulty: "medium", capital: true}, 
            {city: "Akureyri", country: "Iceland", x: 6075, y: 996, difficulty: "hard", capital: false}, 
            {city: "Reykjavik", country: "Iceland", x: 5931, y: 1075, difficulty: "medium", capital: true}, 
            {city: "Calcutta (Kolkata)", country: "India", x: 10068, y: 2988, difficulty: "easy", capital: false}, 
            {city: "Bhubaneshwar", country: "India", x: 9975, y: 3074, difficulty: "hard", capital: false}, 
            {city: "Jamshedpur", country: "India", x: 9989, y: 2976, difficulty: "hard", capital: false}, 
            {city: "Patna", country: "India", x: 9949, y: 2865, difficulty: "hard", capital: false}, 
            {city: "Varanasi", country: "India", x: 9869, y: 2877, difficulty: "hard", capital: false}, 
            {city: "Allahabad", country: "India", x: 9825, y: 2872, difficulty: "hard", capital: false}, 
            {city: "Lucknow", country: "India", x: 9790, y: 2816, difficulty: "hard", capital: false}, 
            {city: "Kanpur", country: "India", x: 9768, y: 2832, difficulty: "hard", capital: false}, 
            {city: "Agra", country: "India", x: 9682, y: 2804, difficulty: "hard", capital: false}, 
            {city: "Ludhiana", country: "India", x: 9601, y: 2652, difficulty: "hard", capital: false}, 
            {city: "Jammu", country: "India", x: 9562, y: 2578, difficulty: "medium", capital: false}, 
            {city: "Jaipur", country: "India", x: 9599, y: 2813, difficulty: "medium", capital: false}, 
            {city: "Jodhpur", country: "India", x: 9494, y: 2838, difficulty: "hard", capital: false}, 
            {city: "Kota", country: "India", x: 9600, y: 2882, difficulty: "hard", capital: false}, 
            {city: "Rajkot", country: "India", x: 9411, y: 2995, difficulty: "hard", capital: false}, 
            {city: "Ahmadabad", country: "India", x: 9478, y: 2967, difficulty: "hard", capital: false}, 
            {city: "Surat", country: "India", x: 9487, y: 3038, difficulty: "hard", capital: false}, 
            {city: "Indore", country: "India", x: 9601, y: 2979, difficulty: "hard", capital: false}, 
            {city: "Bhopal", country: "India", x: 9659, y: 2958, difficulty: "hard", capital: false}, 
            {city: "Nagpur", country: "India", x: 9722, y: 3039, difficulty: "hard", capital: false}, 
            {city: "Bhilai", country: "India", x: 9810, y: 3037, difficulty: "hard", capital: false}, 
            {city: "Vishakhapatnam", country: "India", x: 9880, y: 3172, difficulty: "hard", capital: false}, 
            {city: "Vijayawada", country: "India", x: 9780, y: 3219, difficulty: "hard", capital: false}, 
            {city: "Hyderabad", country: "India", x: 9699, y: 3185, difficulty: "medium", capital: false}, 
            {city: "Pune", country: "India", x: 9525, y: 3141, difficulty: "hard", capital: false}, 
            {city: "Mumbai (Bombay)", country: "India", x: 9488, y: 3123, difficulty: "easy", capital: false}, 
            {city: "Kolhapur", country: "India", x: 9539, y: 3212, difficulty: "hard", capital: false}, 
            {city: "Hubli", country: "India", x: 9573, y: 3263, difficulty: "hard", capital: false}, 
            {city: "Mangalore", country: "India", x: 9563, y: 3357, difficulty: "hard", capital: false}, 
            {city: "Bangalore (Bengaluru)", country: "India", x: 9664, y: 3354, difficulty: "medium", capital: false}, 
            {city: "Madras (Chennai)", country: "India", x: 9767, y: 3350, difficulty: "hard", capital: false}, 
            {city: "Kozhikode", country: "India", x: 9597, y: 3420, difficulty: "hard", capital: false}, 
            {city: "Coimbatore", country: "India", x: 9642, y: 3429, difficulty: "hard", capital: false}, 
            {city: "Kochi", country: "India", x: 9614, y: 3467, difficulty: "hard", capital: false}, 
            {city: "Madurai", country: "India", x: 9685, y: 3471, difficulty: "hard", capital: false}, 
            {city: "New Delhi", country: "India", x: 9651, y: 2747, difficulty: "easy", capital: true}, 
            {city: "Jayapura", country: "Indonesia", x: 12034, y: 3945, difficulty: "hard", capital: false}, 
            {city: "Biak", country: "Indonesia", x: 11859, y: 3893, difficulty: "hard", capital: false}, 
            {city: "Ternate", country: "Indonesia", x: 11533, y: 3818, difficulty: "hard", capital: false}, 
            {city: "Gorontalo", country: "Indonesia", x: 11372, y: 3828, difficulty: "hard", capital: false}, 
            {city: "Makassar", country: "Indonesia", x: 11236, y: 4044, difficulty: "hard", capital: false}, 
            {city: "Tarakan", country: "Indonesia", x: 11168, y: 3723, difficulty: "hard", capital: false}, 
            {city: "Pontianak", country: "Indonesia", x: 10856, y: 3850, difficulty: "hard", capital: false}, 
            {city: "Banjarmasin", country: "Indonesia", x: 11054, y: 3975, difficulty: "hard", capital: false}, 
            {city: "Kupang", country: "Indonesia", x: 11391, y: 4236, difficulty: "hard", capital: false}, 
            {city: "Bima", country: "Indonesia", x: 11211, y: 4170, difficulty: "hard", capital: false}, 
            {city: "Denpasar", country: "Indonesia", x: 11078, y: 4178, difficulty: "hard", capital: false}, 
            {city: "Surabaya", country: "Indonesia", x: 10985, y: 4124, difficulty: "hard", capital: false}, 
            {city: "Semarang", country: "Indonesia", x: 10897, y: 4114, difficulty: "hard", capital: false}, 
            {city: "Bandung", country: "Indonesia", x: 10790, y: 4113, difficulty: "hard", capital: false}, 
            {city: "Tanjungkarang-Telukbetung", country: "Indonesia", x: 10704, y: 4055, difficulty: "hard", capital: false}, 
            {city: "Palembang", country: "Indonesia", x: 10685, y: 3962, difficulty: "hard", capital: false}, 
            {city: "Padang", country: "Indonesia", x: 10520, y: 3885, difficulty: "hard", capital: false}, 
            {city: "Pekanbaru", country: "Indonesia", x: 10560, y: 3827, difficulty: "hard", capital: false}, 
            {city: "Medan", country: "Indonesia", x: 10456, y: 3712, difficulty: "hard", capital: false}, 
            {city: "Banda Aceh", country: "Indonesia", x: 10331, y: 3637, difficulty: "hard", capital: false}, 
            {city: "Jakarta", country: "Indonesia", x: 10763, y: 4085, difficulty: "medium", capital: true}, 
            {city: "Mashhad", country: "Iran", x: 8989, y: 2429, difficulty: "hard", capital: false}, 
            {city: "Zahedan", country: "Iran", x: 9037, y: 2710, difficulty: "hard", capital: false}, 
            {city: "Bandar Abbas", country: "Iran", x: 8866, y: 2802, difficulty: "hard", capital: false}, 
            {city: "Shiraz", country: "Iran", x: 8727, y: 2705, difficulty: "hard", capital: false}, 
            {city: "Ahvaz", country: "Iran", x: 8582, y: 2637, difficulty: "hard", capital: false}, 
            {city: "Esfahan", country: "Iran", x: 8694, y: 2579, difficulty: "medium", capital: false}, 
            {city: "Kermanshah", country: "Iran", x: 8520, y: 2509, difficulty: "hard", capital: false}, 
            {city: "Qom", country: "Iran", x: 8666, y: 2498, difficulty: "hard", capital: false}, 
            {city: "Tabriz", country: "Iran", x: 8491, y: 2350, difficulty: "hard", capital: false}, 
            {city: "Tehran", country: "Iran", x: 8684, y: 2455, difficulty: "medium", capital: true}, 
            {city: "Mosul", country: "Iraq", x: 8373, y: 2425, difficulty: "medium", capital: false}, 
            {city: "Erbil", country: "Iraq", x: 8405, y: 2432, difficulty: "hard", capital: false}, 
            {city: "Al Basrah", country: "Iraq", x: 8548, y: 2669, difficulty: "hard", capital: false}, 
            {city: "Baghdad", country: "Iraq", x: 8420, y: 2553, difficulty: "medium", capital: true}, 
            {city: "Dublin", country: "Ireland", x: 6520, y: 1632, difficulty: "easy", capital: true}, 
            {city: "Tel Aviv-Yafo", country: "Israel", x: 8059, y: 2604, difficulty: "easy", capital: false}, 
            {city: "Jerusalem", country: "Israel", x: 8075, y: 2618, difficulty: "easy", capital: true}, 
            {city: "Milan", country: "Italy", x: 7099, y: 2016, difficulty: "medium", capital: false}, 
            {city: "Turin", country: "Italy", x: 7042, y: 2034, difficulty: "hard", capital: false}, 
            {city: "Genoa", country: "Italy", x: 7089, y: 2065, difficulty: "hard", capital: false}, 
            {city: "Naples", country: "Italy", x: 7288, y: 2228, difficulty: "medium", capital: false}, 
            {city: "Palermo", country: "Italy", x: 7255, y: 2348, difficulty: "hard", capital: false}, 
            {city: "Rome", country: "Italy", x: 7223, y: 2182, difficulty: "easy", capital: true}, 
            {city: "Abidjan", country: "Ivory Coast", x: 6602, y: 3645, difficulty: "hard", capital: true}, 
            {city: "Yamoussoukro", country: "Ivory Coast", x: 6556, y: 3590, difficulty: "hard", capital: true}, 
            {city: "Kingston", country: "Jamaica", x: 3874, y: 3164, difficulty: "hard", capital: true}, 
            {city: "Kushiro", country: "Japan", x: 12172, y: 2132, difficulty: "hard", capital: false}, 
            {city: "Sapporo", country: "Japan", x: 12058, y: 2127, difficulty: "medium", capital: false}, 
            {city: "Yokohama", country: "Japan", x: 11992, y: 2469, difficulty: "hard", capital: false}, 
            {city: "Nagoya", country: "Japan", x: 11892, y: 2476, difficulty: "hard", capital: false}, 
            {city: "Osaka", country: "Japan", x: 11837, y: 2493, difficulty: "easy", capital: false}, 
            {city: "Hiroshima", country: "Japan", x: 11724, y: 2508, difficulty: "medium", capital: false}, 
            {city: "Fukuoka", country: "Japan", x: 11647, y: 2542, difficulty: "medium", capital: false}, 
            {city: "Naha", country: "Japan", x: 11545, y: 2842, difficulty: "hard", capital: false}, 
            {city: "Tokyo", country: "Japan", x: 11998, y: 2455, difficulty: "easy", capital: true}, 
            {city: "Amman", country: "Jordan", x: 8102, y: 2611, difficulty: "hard", capital: true}, 
            {city: "Aqtau", country: "Kazakhstan", x: 8677, y: 2102, difficulty: "hard", capital: false}, 
            {city: "Atyrau", country: "Kazakhstan", x: 8702, y: 1938, difficulty: "hard", capital: false}, 
            {city: "Aqtobe", country: "Kazakhstan", x: 8899, y: 1784, difficulty: "hard", capital: false}, 
            {city: "Rudnyy", country: "Kazakhstan", x: 9123, y: 1650, difficulty: "hard", capital: false}, 
            {city: "Pavlodar", country: "Kazakhstan", x: 9642, y: 1683, difficulty: "hard", capital: false}, 
            {city: "Qaraghandy (Karaganda)", country: "Kazakhstan", x: 9498, y: 1803, difficulty: "hard", capital: false}, 
            {city: "Oskemen", country: "Kazakhstan", x: 9854, y: 1798, difficulty: "hard", capital: false}, 
            {city: "Almaty", country: "Kazakhstan", x: 9640, y: 2115, difficulty: "medium", capital: false}, 
            {city: "Taraz", country: "Kazakhstan", x: 9432, y: 2135, difficulty: "hard", capital: false}, 
            {city: "Shymkent", country: "Kazakhstan", x: 9366, y: 2161, difficulty: "hard", capital: false}, 
            {city: "Qyzylorda", country: "Kazakhstan", x: 9211, y: 2047, difficulty: "hard", capital: false}, 
            {city: "Astana", country: "Kazakhstan", x: 9434, y: 1740, difficulty: "hard", capital: true}, 
            {city: "Meru", country: "Kenya", x: 8166, y: 3846, difficulty: "hard", capital: false}, 
            {city: "Mombasa", country: "Kenya", x: 8243, y: 4002, difficulty: "medium", capital: false}, 
            {city: "Nairobi", country: "Kenya", x: 8135, y: 3898, difficulty: "medium", capital: true}, 
            {city: "South Tarawa", country: "Kiribati", x: 13247, y: 3799, difficulty: "hard", capital: true}, 
            {city: "Pristina", country: "Kosovo", x: 7548, y: 2147, difficulty: "hard", capital: true}, 
            {city: "Kuwait City", country: "Kuwait", x: 8554, y: 2716, difficulty: "medium", capital: true}, 
            {city: "Bishkek", country: "Kyrgyzstan", x: 9553, y: 2137, difficulty: "hard", capital: true}, 
            {city: "Vientiane", country: "Laos", x: 10604, y: 3164, difficulty: "hard", capital: true}, 
            {city: "Riga", country: "Latvia", x: 7658, y: 1447, difficulty: "hard", capital: true}, 
            {city: "Beirut", country: "Lebanon", x: 8086, y: 2531, difficulty: "medium", capital: true}, 
            {city: "Maseru", country: "Lesotho", x: 7785, y: 4981, difficulty: "hard", capital: true}, 
            {city: "Monrovia", country: "Liberia", x: 6349, y: 3609, difficulty: "hard", capital: true}, 
            {city: "Benghazi", country: "Libya", x: 7507, y: 2603, difficulty: "medium", capital: false}, 
            {city: "Al Jawf", country: "Libya", x: 7628, y: 2921, difficulty: "hard", capital: false}, 
            {city: "Sabha", country: "Libya", x: 7296, y: 2809, difficulty: "hard", capital: false}, 
            {city: "Tripoli", country: "Libya", x: 7249, y: 2572, difficulty: "hard", capital: true}, 
            {city: "Vaduz", country: "Liechtenstein", x: 7112, y: 1938, difficulty: "hard", capital: true}, 
            {city: "Vilnius", country: "Lithuania", x: 7704, y: 1564, difficulty: "hard", capital: true}, 
            {city: "Luxembourg", country: "Luxembourg", x: 6984, y: 1818, difficulty: "hard", capital: true}, 
            {city: "Antsiranana", country: "Madagascar", x: 8604, y: 4316, difficulty: "hard", capital: false}, 
            {city: "Mahajanga", country: "Madagascar", x: 8493, y: 4446, difficulty: "hard", capital: false}, 
            {city: "Fianarantsoa", country: "Madagascar", x: 8521, y: 4668, difficulty: "hard", capital: false}, 
            {city: "Toliara", country: "Madagascar", x: 8394, y: 4743, difficulty: "hard", capital: false}, 
            {city: "Antananarivo", country: "Madagascar", x: 8537, y: 4572, difficulty: "hard", capital: true}, 
            {city: "Funchal", country: "Madeira Islands", x: 6121, y: 2581, difficulty: "hard", capital: false}, 
            {city: "Blantyre", country: "Malawi", x: 8067, y: 4451, difficulty: "hard", capital: false}, 
            {city: "Lilongwe", country: "Malawi", x: 8022, y: 4383, difficulty: "hard", capital: true}, 
            {city: "George Town", country: "Malaysia", x: 10519, y: 3643, difficulty: "hard", capital: false}, 
            {city: "Kuala Lumpur", country: "Malaysia", x: 10570, y: 3729, difficulty: "medium", capital: true}, 
            {city: "Putrajaya", country: "Malaysia", x: 10572, y: 3743, difficulty: "hard", capital: true}, 
            {city: "Male", country: "Maldives", x: 9512, y: 3691, difficulty: "hard", capital: true}, 
            {city: "Kayes", country: "Mali", x: 6325, y: 3298, difficulty: "hard", capital: false}, 
            {city: "Djenne", country: "Mali", x: 6583, y: 3319, difficulty: "hard", capital: false}, 
            {city: "Timbuktu", country: "Mali", x: 6641, y: 3209, difficulty: "easy", capital: false}, 
            {city: "Gao", country: "Mali", x: 6752, y: 3228, difficulty: "hard", capital: false}, 
            {city: "Bamako", country: "Mali", x: 6454, y: 3368, difficulty: "hard", capital: true}, 
            {city: "Valletta", country: "Malta", x: 7299, y: 2446, difficulty: "hard", capital: true}, 
            {city: "Majuro", country: "Marshall Islands", x: 13185, y: 3579, difficulty: "hard", capital: true}, 
            {city: "Atar", country: "Mauritania", x: 6264, y: 3065, difficulty: "hard", capital: false}, 
            {city: "Nouadhibou", country: "Mauritania", x: 6114, y: 3050, difficulty: "hard", capital: false}, 
            {city: "Kaedi", country: "Mauritania", x: 6248, y: 3233, difficulty: "hard", capital: false}, 
            {city: "Ayoun el Atrous", country: "Mauritania", x: 6393, y: 3213, difficulty: "hard", capital: false}, 
            {city: "Nouakchott", country: "Mauritania", x: 6155, y: 3160, difficulty: "hard", capital: true}, 
            {city: "Port Louis", country: "Mauritius", x: 8912, y: 4620, difficulty: "hard", capital: true}, 
            {city: "Ciudad Juarez", country: "Mexico", x: 2758, y: 2621, difficulty: "medium", capital: false}, 
            {city: "Tijuana", country: "Mexico", x: 2361, y: 2589, difficulty: "easy", capital: false}, 
            {city: "Matamoros", country: "Mexico", x: 3095, y: 2855, difficulty: "hard", capital: false}, 
            {city: "Hermosillo", country: "Mexico", x: 2591, y: 2726, difficulty: "hard", capital: false}, 
            {city: "Chihuahua", country: "Mexico", x: 2773, y: 2745, difficulty: "hard", capital: false}, 
            {city: "La Paz", country: "Mexico", x: 2614, y: 2923, difficulty: "hard", capital: false}, 
            {city: "Torreon", country: "Mexico", x: 2873, y: 2867, difficulty: "hard", capital: false}, 
            {city: "Monterrey", country: "Mexico", x: 2989, y: 2863, difficulty: "hard", capital: false}, 
            {city: "Mazatlan", country: "Mexico", x: 2761, y: 2959, difficulty: "hard", capital: false}, 
            {city: "Guadalajara", country: "Mexico", x: 2877, y: 3059, difficulty: "hard", capital: false}, 
            {city: "Leon", country: "Mexico", x: 2938, y: 3040, difficulty: "hard", capital: false}, 
            {city: "San Luis Potosi", country: "Mexico", x: 2964, y: 3000, difficulty: "hard", capital: false}, 
            {city: "Tampico", country: "Mexico", x: 3082, y: 2996, difficulty: "hard", capital: false}, 
            {city: "Toluca", country: "Mexico", x: 3014, y: 3110, difficulty: "hard", capital: false}, 
            {city: "Acapulco", country: "Mexico", x: 3005, y: 3206, difficulty: "hard", capital: false}, 
            {city: "Puebla", country: "Mexico", x: 3069, y: 3121, difficulty: "hard", capital: false}, 
            {city: "Oaxaca", country: "Mexico", x: 3126, y: 3197, difficulty: "hard", capital: false}, 
            {city: "Tuxtla Gutierrez", country: "Mexico", x: 3259, y: 3210, difficulty: "hard", capital: false}, 
            {city: "Campeche", country: "Mexico", x: 3358, y: 3091, difficulty: "hard", capital: false}, 
            {city: "Merida", country: "Mexico", x: 3391, y: 3047, difficulty: "hard", capital: false}, 
            {city: "Cancun", country: "Mexico", x: 3496, y: 3039, difficulty: "medium", capital: false}, 
            {city: "Mexico City", country: "Mexico", x: 3034, y: 3107, difficulty: "easy", capital: true}, 
            {city: "Palikir", country: "Micronesia", x: 12688, y: 3586, difficulty: "hard", capital: true}, 
            {city: "Chisinau", country: "Moldova", x: 7837, y: 1944, difficulty: "hard", capital: true}, 
            {city: "Monaco", country: "Monaco", x: 7032, y: 2096, difficulty: "medium", capital: true}, 
            {city: "Hovd", country: "Mongolia", x: 10193, y: 1894, difficulty: "hard", capital: false}, 
            {city: "Erdenet", country: "Mongolia", x: 10661, y: 1844, difficulty: "hard", capital: false}, 
            {city: "Dalandzadgad", country: "Mongolia", x: 10673, y: 2104, difficulty: "hard", capital: false}, 
            {city: "Choybalsan", country: "Mongolia", x: 11051, y: 1892, difficulty: "hard", capital: false}, 
            {city: "Ulaanbaatar", country: "Mongolia", x: 10766, y: 1900, difficulty: "hard", capital: true}, 
            {city: "Cetinje", country: "Montenegro", x: 7464, y: 2158, difficulty: "hard", capital: true}, 
            {city: "Podgorica", country: "Montenegro", x: 7477, y: 2156, difficulty: "hard", capital: true}, 
            {city: "Fes", country: "Morocco", x: 6566, y: 2522, difficulty: "medium", capital: false}, 
            {city: "Casablanca", country: "Morocco", x: 6468, y: 2541, difficulty: "medium", capital: false}, 
            {city: "Marrakech", country: "Morocco", x: 6454, y: 2623, difficulty: "easy", capital: false}, 
            {city: "Rabat", country: "Morocco", x: 6498, y: 2525, difficulty: "hard", capital: true}, 
            {city: "Pemba", country: "Mozambique", x: 8275, y: 4343, difficulty: "hard", capital: false}, 
            {city: "Nacala", country: "Mozambique", x: 8282, y: 4402, difficulty: "hard", capital: false}, 
            {city: "Tete", country: "Mozambique", x: 8014, y: 4465, difficulty: "hard", capital: false}, 
            {city: "Beira", country: "Mozambique", x: 8063, y: 4606, difficulty: "hard", capital: false}, 
            {city: "Xai-Xai", country: "Mozambique", x: 8016, y: 4809, difficulty: "hard", capital: false}, 
            {city: "Maputo", country: "Mozambique", x: 7977, y: 4846, difficulty: "hard", capital: true}, 
            {city: "Nay Pyi Taw", country: "Myanmar", x: 10361, y: 3095, difficulty: "hard", capital: true}, 
            {city: "Yangon (Rangoon)", country: "Myanmar (Burma)", x: 10362, y: 3208, difficulty: "medium", capital: false}, 
            {city: "Mandalay", country: "Myanmar (Burma)", x: 10360, y: 3008, difficulty: "medium", capital: false}, 
            {city: "Grootfontein", country: "Namibia", x: 7434, y: 4596, difficulty: "hard", capital: false}, 
            {city: "Walvis Bay", country: "Namibia", x: 7299, y: 4727, difficulty: "hard", capital: false}, 
            {city: "Luderitz", country: "Namibia", x: 7323, y: 4873, difficulty: "hard", capital: false}, 
            {city: "Windhoek", country: "Namibia", x: 7395, y: 4713, difficulty: "hard", capital: true}, 
            {city: "Yaren", country: "Nauru", x: 13018, y: 3870, difficulty: "hard", capital: true}, 
            {city: "Kathmandu", country: "Nepal", x: 9955, y: 2783, difficulty: "medium", capital: true}, 
            {city: "Amsterdam", country: "Netherlands", x: 6938, y: 1682, difficulty: "easy", capital: true}, 
            {city: "The Hague", country: "Netherlands", x: 6916, y: 1697, difficulty: "medium", capital: true}, 
            {city: "Noumea", country: "New Caledonia", x: 13000, y: 4700, difficulty: "hard", capital: false}, 
            {city: "Auckland", country: "New Zealand", x: 13312, y: 5293, difficulty: "easy", capital: false}, 
            {city: "Hamilton", country: "New Zealand", x: 13332, y: 5333, difficulty: "hard", capital: false}, 
            {city: "Christchurch", country: "New Zealand", x: 13232, y: 5591, difficulty: "medium", capital: false}, 
            {city: "Dunedin", country: "New Zealand", x: 13151, y: 5701, difficulty: "hard", capital: false}, 
            {city: "Queenstown", country: "New Zealand", x: 13083, y: 5661, difficulty: "hard", capital: false}, 
            {city: "Wellington", country: "New Zealand", x: 13313, y: 5490, difficulty: "medium", capital: true}, 
            {city: "Managua", country: "Nicaragua", x: 3517, y: 3387, difficulty: "hard", capital: true}, 
            {city: "Tahoua", country: "Niger", x: 6951, y: 3281, difficulty: "hard", capital: false}, 
            {city: "Zinder", country: "Niger", x: 7091, y: 3323, difficulty: "hard", capital: false}, 
            {city: "Niamey", country: "Niger", x: 6833, y: 3334, difficulty: "hard", capital: true}, 
            {city: "Sokoto", country: "Nigeria", x: 6951, y: 3351, difficulty: "hard", capital: false}, 
            {city: "Kano", country: "Nigeria", x: 7074, y: 3391, difficulty: "hard", capital: false}, 
            {city: "Maiduguri", country: "Nigeria", x: 7248, y: 3397, difficulty: "hard", capital: false}, 
            {city: "Ibadan", country: "Nigeria", x: 6902, y: 3567, difficulty: "hard", capital: false}, 
            {city: "Lagos", country: "Nigeria", x: 6881, y: 3603, difficulty: "medium", capital: false}, 
            {city: "Warri", country: "Nigeria", x: 6970, y: 3638, difficulty: "hard", capital: false}, 
            {city: "Enugu", country: "Nigeria", x: 7036, y: 3603, difficulty: "hard", capital: false}, 
            {city: "Abuja", country: "Nigeria", x: 7037, y: 3504, difficulty: "hard", capital: true}, 
            {city: "Alofi", country: "Niue", x: 380, y: 4575, difficulty: "hard", capital: false}, 
            {city: "Pyongyang", country: "North Korea", x: 11473, y: 2310, difficulty: "medium", capital: true}, 
            {city: "Skopje", country: "North Macedonia", x: 7558, y: 2177, difficulty: "hard", capital: true}, 
            {city: "Saipan", country: "Northern Mariana Islands", x: 12223, y: 3269, difficulty: "medium", capital: false}, 
            {city: "Bergen", country: "Norway", x: 6954, y: 1268, difficulty: "hard", capital: false}, 
            {city: "Trondheim", country: "Norway", x: 7145, y: 1111, difficulty: "hard", capital: false}, 
            {city: "Tromso", country: "Norway", x: 7467, y: 797, difficulty: "hard", capital: false}, 
            {city: "Longyearbyen", country: "Norway", x: 7338, y: 409, difficulty: "hard", capital: false}, 
            {city: "Oslo", country: "Norway", x: 7157, y: 1293, difficulty: "medium", capital: true}, 
            {city: "Muscat", country: "Oman", x: 8953, y: 2945, difficulty: "hard", capital: true}, 
            {city: "Karachi", country: "Pakistan", x: 9268, y: 2895, difficulty: "easy", capital: false}, 
            {city: "Hyderabad", country: "Pakistan", x: 9320, y: 2874, difficulty: "medium", capital: false}, 
            {city: "Quetta", country: "Pakistan", x: 9269, y: 2681, difficulty: "hard", capital: false}, 
            {city: "Multan", country: "Pakistan", x: 9435, y: 2682, difficulty: "hard", capital: false}, 
            {city: "Faisalabad", country: "Pakistan", x: 9497, y: 2632, difficulty: "hard", capital: false}, 
            {city: "Lahore", country: "Pakistan", x: 9544, y: 2626, difficulty: "medium", capital: false}, 
            {city: "Peshawar", country: "Pakistan", x: 9438, y: 2524, difficulty: "medium", capital: false}, 
            {city: "Islamabad", country: "Pakistan", x: 9500, y: 2538, difficulty: "medium", capital: true}, 
            {city: "Ngerulmud", country: "Palau", x: 11806, y: 3565, difficulty: "hard", capital: true}, 
            {city: "Jerusalem", country: "Palestine", x: 8075, y: 2618, difficulty: "easy", capital: true}, 
            {city: "Ramallah", country: "Palestine", x: 8075, y: 2610, difficulty: "hard", capital: true}, 
            {city: "David", country: "Panama", x: 3661, y: 3527, difficulty: "hard", capital: false}, 
            {city: "Colon", country: "Panama", x: 3757, y: 3492, difficulty: "hard", capital: false}, 
            {city: "Panama City", country: "Panama", x: 3770, y: 3508, difficulty: "medium", capital: true}, 
            {city: "Rabaul", country: "Papua New Guinea", x: 12436, y: 4009, difficulty: "hard", capital: false}, 
            {city: "Mt. Hagen", country: "Papua New Guinea", x: 12166, y: 4072, difficulty: "hard", capital: false}, 
            {city: "Port Moresby", country: "Papua New Guinea", x: 12277, y: 4210, difficulty: "hard", capital: true}, 
            {city: "Asuncion", country: "Paraguay", x: 4591, y: 4820, difficulty: "hard", capital: true}, 
            {city: "Iquitos", country: "Peru", x: 4005, y: 3991, difficulty: "hard", capital: false}, 
            {city: "Piura", country: "Peru", x: 3729, y: 4047, difficulty: "hard", capital: false}, 
            {city: "Trujillo", country: "Peru", x: 3789, y: 4158, difficulty: "hard", capital: false}, 
            {city: "Chimbote", country: "Peru", x: 3806, y: 4194, difficulty: "hard", capital: false}, 
            {city: "Huancayo", country: "Peru", x: 3932, y: 4309, difficulty: "hard", capital: false}, 
            {city: "Ica", country: "Peru", x: 3913, y: 4385, difficulty: "hard", capital: false}, 
            {city: "Cusco", country: "Peru", x: 4053, y: 4364, difficulty: "medium", capital: false}, 
            {city: "Arequipa", country: "Peru", x: 4070, y: 4475, difficulty: "hard", capital: false}, 
            {city: "Tacna", country: "Peru", x: 4118, y: 4535, difficulty: "hard", capital: false}, 
            {city: "Lima", country: "Peru", x: 3863, y: 4308, difficulty: "medium", capital: true}, 
            {city: "Iloilo", country: "Philippines", x: 11352, y: 3441, difficulty: "hard", capital: false}, 
            {city: "Cebu", country: "Philippines", x: 11403, y: 3455, difficulty: "medium", capital: false}, 
            {city: "Zamboanga", country: "Philippines", x: 11335, y: 3585, difficulty: "hard", capital: false}, 
            {city: "Davao", country: "Philippines", x: 11468, y: 3578, difficulty: "hard", capital: false}, 
            {city: "Manila", country: "Philippines", x: 11294, y: 3293, difficulty: "medium", capital: true}, 
            {city: "Krakow", country: "Poland", x: 7503, y: 1794, difficulty: "medium", capital: false}, 
            {city: "Lodz", country: "Poland", x: 7484, y: 1709, difficulty: "hard", capital: false}, 
            {city: "Gdansk", country: "Poland", x: 7454, y: 1579, difficulty: "hard", capital: false}, 
            {city: "Warsaw", country: "Poland", x: 7542, y: 1686, difficulty: "medium", capital: true}, 
            {city: "Porto ", country: "Portugal", x: 6431, y: 2214, difficulty: "hard", capital: false}, 
            {city: "Lisbon", country: "Portugal", x: 6411, y: 2323, difficulty: "medium", capital: true}, 
            {city: "San Juan", country: "Puerto Rico", x: 4273, y: 3145, difficulty: "hard", capital: false}, 
            {city: "Doha", country: "Qatar", x: 8688, y: 2879, difficulty: "hard", capital: true}, 
            {city: "Saint-Denis", country: "Reunion", x: 8835, y: 4648, difficulty: "hard", capital: false}, 
            {city: "Bucharest", country: "Romania", x: 7733, y: 2065, difficulty: "medium", capital: true}, 
            {city: "Provideniya", country: "Russia", x: 254, y: 1059, difficulty: "hard", capital: false}, 
            {city: "Murmansk", country: "Russia", x: 7996, y: 830, difficulty: "medium", capital: false}, 
            {city: "Saint Petersburg", country: "Russia", x: 7892, y: 1291, difficulty: "easy", capital: false}, 
            {city: "Pskov", country: "Russia", x: 7817, y: 1401, difficulty: "hard", capital: false}, 
            {city: "Smolensk", country: "Russia", x: 7957, y: 1557, difficulty: "medium", capital: false}, 
            {city: "Bryansk", country: "Russia", x: 8046, y: 1635, difficulty: "hard", capital: false}, 
            {city: "Yaroslavl", country: "Russia", x: 8250, y: 1412, difficulty: "hard", capital: false}, 
            {city: "Nizhniy Novgorod", country: "Russia", x: 8405, y: 1478, difficulty: "hard", capital: false}, 
            {city: "Kazan", country: "Russia", x: 8597, y: 1508, difficulty: "hard", capital: false}, 
            {city: "Ul'yanovsk", country: "Russia", x: 8571, y: 1580, difficulty: "hard", capital: false}, 
            {city: "Samara", country: "Russia", x: 8636, y: 1638, difficulty: "hard", capital: false}, 
            {city: "Penza", country: "Russia", x: 8443, y: 1639, difficulty: "hard", capital: false}, 
            {city: "Voronezh", country: "Russia", x: 8228, y: 1711, difficulty: "hard", capital: false}, 
            {city: "Saratov", country: "Russia", x: 8481, y: 1719, difficulty: "hard", capital: false}, 
            {city: "Volgograd", country: "Russia", x: 8424, y: 1860, difficulty: "hard", capital: false}, 
            {city: "Rostov", country: "Russia", x: 8244, y: 1932, difficulty: "hard", capital: false}, 
            {city: "Astrakhan", country: "Russia", x: 8557, y: 1974, difficulty: "hard", capital: false}, 
            {city: "Krasnodar", country: "Russia", x: 8218, y: 2037, difficulty: "hard", capital: false}, 
            {city: "Sochi", country: "Russia", x: 8245, y: 2103, difficulty: "medium", capital: false}, 
            {city: "Stavropol", country: "Russia", x: 8329, y: 2035, difficulty: "hard", capital: false}, 
            {city: "Nal'chik", country: "Russia", x: 8391, y: 2107, difficulty: "hard", capital: false}, 
            {city: "Groznyy", country: "Russia", x: 8469, y: 2116, difficulty: "hard", capital: false}, 
            {city: "Arkhangel'sk", country: "Russia", x: 8276, y: 1051, difficulty: "medium", capital: false}, 
            {city: "Kirov", country: "Russia", x: 8618, y: 1361, difficulty: "hard", capital: false}, 
            {city: "Perm", country: "Russia", x: 8865, y: 1392, difficulty: "hard", capital: false}, 
            {city: "Izhevsk", country: "Russia", x: 8751, y: 1451, difficulty: "hard", capital: false}, 
            {city: "Ufa", country: "Russia", x: 8857, y: 1557, difficulty: "hard", capital: false}, 
            {city: "Orenburg", country: "Russia", x: 8822, y: 1709, difficulty: "hard", capital: false}, 
            {city: "Yekaterinburg", country: "Russia", x: 9028, y: 1451, difficulty: "hard", capital: false}, 
            {city: "Chelyabinsk", country: "Russia", x: 9059, y: 1538, difficulty: "hard", capital: false}, 
            {city: "Tyumen", country: "Russia", x: 9213, y: 1436, difficulty: "hard", capital: false}, 
            {city: "Vorkuta", country: "Russia", x: 9156, y: 903, difficulty: "hard", capital: false}, 
            {city: "Dikson", country: "Russia", x: 9776, y: 613, difficulty: "hard", capital: false}, 
            {city: "Surgut", country: "Russia", x: 9509, y: 1223, difficulty: "hard", capital: false}, 
            {city: "Omsk", country: "Russia", x: 9508, y: 1547, difficulty: "hard", capital: false}, 
            {city: "Noril'sk", country: "Russia", x: 10065, y: 811, difficulty: "hard", capital: false}, 
            {city: "Tomsk", country: "Russia", x: 9943, y: 1469, difficulty: "hard", capital: false}, 
            {city: "Novosibirsk", country: "Russia", x: 9867, y: 1544, difficulty: "hard", capital: false}, 
            {city: "Barnaul", country: "Russia", x: 9897, y: 1630, difficulty: "hard", capital: false}, 
            {city: "Kemerovo", country: "Russia", x: 9985, y: 1529, difficulty: "hard", capital: false}, 
            {city: "Novokuznetsk", country: "Russia", x: 10023, y: 1610, difficulty: "hard", capital: false}, 
            {city: "Krasnoyarsk", country: "Russia", x: 10239, y: 1494, difficulty: "hard", capital: false}, 
            {city: "Abakan", country: "Russia", x: 10186, y: 1612, difficulty: "hard", capital: false}, 
            {city: "Kyzyl", country: "Russia", x: 10296, y: 1713, difficulty: "hard", capital: false}, 
            {city: "Khatanga", country: "Russia", x: 10599, y: 681, difficulty: "hard", capital: false}, 
            {city: "Ust-Ilimsk", country: "Russia", x: 10605, y: 1392, difficulty: "hard", capital: false}, 
            {city: "Bratsk", country: "Russia", x: 10567, y: 1487, difficulty: "hard", capital: false}, 
            {city: "Irkutsk", country: "Russia", x: 10666, y: 1682, difficulty: "hard", capital: false}, 
            {city: "Ulan-Ude", country: "Russia", x: 10793, y: 1707, difficulty: "hard", capital: false}, 
            {city: "Lensk", country: "Russia", x: 11067, y: 1250, difficulty: "hard", capital: false}, 
            {city: "Chita", country: "Russia", x: 11012, y: 1695, difficulty: "hard", capital: false}, 
            {city: "Bukachacha", country: "Russia", x: 11141, y: 1649, difficulty: "hard", capital: false}, 
            {city: "Tiksi", country: "Russia", x: 11588, y: 701, difficulty: "hard", capital: false}, 
            {city: "Zhigansk", country: "Russia", x: 11384, y: 939, difficulty: "hard", capital: false}, 
            {city: "Yakutsk", country: "Russia", x: 11622, y: 1183, difficulty: "hard", capital: false}, 
            {city: "Aldan", country: "Russia", x: 11459, y: 1361, difficulty: "hard", capital: false}, 
            {city: "Blagoveshchensk", country: "Russia", x: 11540, y: 1784, difficulty: "hard", capital: false}, 
            {city: "Vladivostok", country: "Russia", x: 11704, y: 2124, difficulty: "hard", capital: false}, 
            {city: "Dal'negorsk", country: "Russia", x: 11839, y: 2059, difficulty: "hard", capital: false}, 
            {city: "Khabarovsk", country: "Russia", x: 11824, y: 1873, difficulty: "hard", capital: false}, 
            {city: "Yuzhno-Sakhalinsk", country: "Russia", x: 12110, y: 1945, difficulty: "hard", capital: false}, 
            {city: "Okha", country: "Russia", x: 12118, y: 1619, difficulty: "hard", capital: false}, 
            {city: "Okhotsk", country: "Russia", x: 12128, y: 1320, difficulty: "hard", capital: false}, 
            {city: "Oymyakon", country: "Russia", x: 12111, y: 1111, difficulty: "hard", capital: false}, 
            {city: "Verkhoyansk", country: "Russia", x: 11759, y: 901, difficulty: "hard", capital: false}, 
            {city: "Chokurdakh", country: "Russia", x: 12304, y: 749, difficulty: "hard", capital: false}, 
            {city: "Magadan", country: "Russia", x: 12413, y: 1310, difficulty: "hard", capital: false}, 
            {city: "Cherskiy", country: "Russia", x: 12808, y: 840, difficulty: "hard", capital: false}, 
            {city: "Petropavlovsk-Kamchatskiy", country: "Russia", x: 12706, y: 1645, difficulty: "hard", capital: false}, 
            {city: "Anadyr", country: "Russia", x: 13413, y: 1043, difficulty: "hard", capital: false}, 
            {city: "Pevek", country: "Russia", x: 13145, y: 794, difficulty: "hard", capital: false}, 
            {city: "Moscow", country: "Russia", x: 8165, y: 1509, difficulty: "easy", capital: true}, 
            {city: "Kigali", country: "Rwanda", x: 7882, y: 3924, difficulty: "hard", capital: true}, 
            {city: "Basseterre", country: "St. Kitts and Nevis", x: 4401, y: 3190, difficulty: "hard", capital: true}, 
            {city: "Castries", country: "St. Lucia", x: 4466, y: 3315, difficulty: "hard", capital: true}, 
            {city: "Kingstown", country: "St. Vincent and the Grenadines", x: 4456, y: 3347, difficulty: "hard", capital: true}, 
            {city: "Apia", country: "Samoa", x: 310, y: 4377, difficulty: "hard", capital: true}, 
            {city: "San Marino", country: "San Marino", x: 7222, y: 2087, difficulty: "hard", capital: true}, 
            {city: "Sao Tome", country: "Sao Tome and Principe", x: 7007, y: 3837, difficulty: "hard", capital: true}, 
            {city: "Tabuk", country: "Saudi Arabia", x: 8126, y: 2755, difficulty: "hard", capital: false}, 
            {city: "Medina", country: "Saudi Arabia", x: 8239, y: 2909, difficulty: "medium", capital: false}, 
            {city: "Jeddah", country: "Saudi Arabia", x: 8226, y: 3026, difficulty: "hard", capital: false}, 
            {city: "Mecca", country: "Saudi Arabia", x: 8248, y: 3029, difficulty: "easy", capital: false}, 
            {city: "Riyadh", country: "Saudi Arabia", x: 8509, y: 2905, difficulty: "medium", capital: true}, 
            {city: "Dakar", country: "Senegal", x: 6098, y: 3289, difficulty: "hard", capital: true}, 
            {city: "Belgrade", country: "Serbia", x: 7522, y: 2047, difficulty: "hard", capital: true}, 
            {city: "Victoria", country: "Seychelles", x: 8835, y: 4025, difficulty: "hard", capital: true}, 
            {city: "Freetown", country: "Sierra Leone", x: 6260, y: 3529, difficulty: "hard", capital: true}, 
            {city: "Singapore", country: "Singapore", x: 10650, y: 3797, difficulty: "easy", capital: true}, 
            {city: "Bratislava", country: "Slovakia", x: 7396, y: 1889, difficulty: "hard", capital: true}, 
            {city: "Ljubljana", country: "Slovenia", x: 7299, y: 1989, difficulty: "hard", capital: true}, 
            {city: "Honiara", country: "Solomon Islands", x: 12756, y: 4209, difficulty: "hard", capital: true}, 
            {city: "Hargeysa", country: "Somalia", x: 8407, y: 3484, difficulty: "hard", capital: false}, 
            {city: "Mogadishu", country: "Somalia", x: 8456, y: 3771, difficulty: "medium", capital: true}, 
            {city: "Springbok", country: "South Africa", x: 7425, y: 4994, difficulty: "hard", capital: false}, 
            {city: "Worcester", country: "South Africa", x: 7484, y: 5157, difficulty: "hard", capital: false}, 
            {city: "Port Elizabeth", country: "South Africa", x: 7715, y: 5171, difficulty: "hard", capital: false}, 
            {city: "East London", country: "South Africa", x: 7800, y: 5129, difficulty: "hard", capital: false}, 
            {city: "Durban", country: "South Africa", x: 7916, y: 5002, difficulty: "hard", capital: false}, 
            {city: "Upington", country: "South Africa", x: 7551, y: 4945, difficulty: "hard", capital: false}, 
            {city: "Welkom", country: "South Africa", x: 7757, y: 4926, difficulty: "hard", capital: false}, 
            {city: "Bloemfontein", country: "South Africa", x: 7738, y: 4972, difficulty: "hard", capital: true}, 
            {city: "Cape Town", country: "South Africa", x: 7446, y: 5169, difficulty: "medium", capital: true}, 
            {city: "Pretoria", country: "South Africa", x: 7813, y: 4836, difficulty: "hard", capital: true}, 
            {city: "Busan", country: "South Korea", x: 11595, y: 2479, difficulty: "medium", capital: false}, 
            {city: "Seoul ", country: "South Korea", x: 11519, y: 2374, difficulty: "easy", capital: true}, 
            {city: "Sejong City", country: "South Korea", x: 11530, y: 2411, difficulty: "hard", capital: true}, 
            {city: "Wau", country: "South Sudan", x: 7804, y: 3555, difficulty: "hard", capital: false}, 
            {city: "Juba", country: "South Sudan", x: 7939, y: 3666, difficulty: "hard", capital: true}, 
            {city: "Malaga", country: "Spain", x: 6588, y: 2409, difficulty: "hard", capital: false}, 
            {city: "Seville", country: "Spain", x: 6530, y: 2380, difficulty: "medium", capital: false}, 
            {city: "Valencia", country: "Spain", x: 6739, y: 2289, difficulty: "hard", capital: false}, 
            {city: "Barcelona", country: "Spain", x: 6836, y: 2204, difficulty: "easy", capital: false}, 
            {city: "Bilbao", country: "Spain", x: 6644, y: 2119, difficulty: "hard", capital: false}, 
            {city: "Melilla", country: "Spain", x: 6642, y: 2470, difficulty: "hard", capital: false}, 
            {city: "Ceuta", country: "Spain", x: 6554, y: 2448, difficulty: "hard", capital: false}, 
            {city: "Madrid", country: "Spain", x: 6616, y: 2249, difficulty: "easy", capital: true}, 
            {city: "Jaffna", country: "Sri Lanka", x: 9756, y: 3480, difficulty: "hard", capital: false}, 
            {city: "Colombo", country: "Sri Lanka", x: 9751, y: 3586, difficulty: "hard", capital: true}, 
            {city: "Sri Jayawardenepura Kotte", country: "Sri Lanka", x: 9757, y: 3592, difficulty: "hard", capital: true}, 
            {city: "Nyala", country: "Sudan", x: 7688, y: 3389, difficulty: "hard", capital: false}, 
            {city: "El Obeid", country: "Sudan", x: 7888, y: 3346, difficulty: "hard", capital: false}, 
            {city: "Kassala", country: "Sudan", x: 8120, y: 3259, difficulty: "hard", capital: false}, 
            {city: "Dongola", country: "Sudan", x: 7898, y: 3117, difficulty: "hard", capital: false}, 
            {city: "Port Sudan", country: "Sudan", x: 8151, y: 3099, difficulty: "hard", capital: false}, 
            {city: "Khartoum", country: "Sudan", x: 7975, y: 3256, difficulty: "hard", capital: true}, 
            {city: "Paramaribo", country: "Suriname", x: 4684, y: 3628, difficulty: "hard", capital: true}, 
            {city: "Stockholm", country: "Sweden", x: 7433, y: 1324, difficulty: "medium", capital: true}, 
            {city: "Bern", country: "Switzerland", x: 7034, y: 1948, difficulty: "hard", capital: true}, 
            {city: "Aleppo", country: "Syria", x: 8149, y: 2430, difficulty: "medium", capital: false}, 
            {city: "Damascus", country: "Syria", x: 8116, y: 2547, difficulty: "medium", capital: true}, 
            {city: "Papeete", country: "Tahiti", x: 1142, y: 4518, difficulty: "hard", capital: false}, 
            {city: "Kaohsiung", country: "Taiwan", x: 11267, y: 2982, difficulty: "hard", capital: false}, 
            {city: "Taipei", country: "Taiwan", x: 11316, y: 2889, difficulty: "medium", capital: true}, 
            {city: "Dushanbe", country: "Tajikistan", x: 9335, y: 2331, difficulty: "hard", capital: true}, 
            {city: "Arusha", country: "Tanzania", x: 8130, y: 3977, difficulty: "hard", capital: false}, 
            {city: "Dodoma", country: "Tanzania", x: 8095, y: 4084, difficulty: "hard", capital: false}, 
            {city: "Dar es Salaam", country: "Tanzania", x: 8227, y: 4108, difficulty: "hard", capital: true}, 
            {city: "Dodoma", country: "Tanzania", x: 8095, y: 4084, difficulty: "hard", capital: true}, 
            {city: "Chiang Mai", country: "Thailand", x: 10468, y: 3131, difficulty: "medium", capital: false}, 
            {city: "Bangkok", country: "Thailand", x: 10526, y: 3326, difficulty: "easy", capital: true}, 
            {city: "Banjul", country: "The Gambia", x: 6131, y: 3337, difficulty: "hard", capital: true}, 
            {city: "Lome", country: "Togo", x: 6800, y: 3616, difficulty: "hard", capital: true}, 
            {city: "Nuku'alofa", country: "Tonga", x: 179, y: 4658, difficulty: "hard", capital: true}, 
            {city: "Port of Spain", country: "Trinidad and Tobago", x: 4446, y: 3444, difficulty: "hard", capital: true}, 
            {city: "Tunis", country: "Tunisia", x: 7136, y: 2407, difficulty: "hard", capital: true}, 
            {city: "Diyarbakir", country: "Turkey", x: 8264, y: 2357, difficulty: "hard", capital: false}, 
            {city: "Trabzon", country: "Turkey", x: 8245, y: 2222, difficulty: "hard", capital: false}, 
            {city: "Gaziantep", country: "Turkey", x: 8157, y: 2394, difficulty: "hard", capital: false}, 
            {city: "Adana", country: "Turkey", x: 8079, y: 2397, difficulty: "hard", capital: false}, 
            {city: "Konya", country: "Turkey", x: 7973, y: 2359, difficulty: "hard", capital: false}, 
            {city: "Izmir", country: "Turkey", x: 7773, y: 2335, difficulty: "hard", capital: false}, 
            {city: "Bursa", country: "Turkey", x: 7845, y: 2257, difficulty: "hard", capital: false}, 
            {city: "Istanbul", country: "Turkey", x: 7843, y: 2216, difficulty: "easy", capital: false}, 
            {city: "Ankara", country: "Turkey", x: 7987, y: 2270, difficulty: "hard", capital: true}, 
            {city: "Mary", country: "Turkmenistan", x: 9074, y: 2371, difficulty: "hard", capital: false}, 
            {city: "Turkmenbasy", country: "Turkmenistan", x: 8742, y: 2265, difficulty: "hard", capital: false}, 
            {city: "Ashgabat", country: "Turkmenistan", x: 8945, y: 2357, difficulty: "hard", capital: true}, 
            {city: "Funafuti", country: "Tuvalu", x: 13479, y: 4174, difficulty: "hard", capital: true}, 
            {city: "Kampala", country: "Uganda", x: 7977, y: 3837, difficulty: "hard", capital: true}, 
            {city: "L'viv", country: "Ukraine", x: 7656, y: 1805, difficulty: "hard", capital: false}, 
            {city: "Zhytomyr", country: "Ukraine", x: 7830, y: 1785, difficulty: "hard", capital: false}, 
            {city: "Odesa", country: "Ukraine", x: 7906, y: 1967, difficulty: "medium", capital: false}, 
            {city: "Simferopol", country: "Ukraine", x: 8034, y: 2040, difficulty: "hard", capital: false}, 
            {city: "Kharkiv", country: "Ukraine", x: 8114, y: 1797, difficulty: "hard", capital: false}, 
            {city: "Donetsk", country: "Ukraine", x: 8174, y: 1895, difficulty: "hard", capital: false}, 
            {city: "Kyiv", country: "Ukraine", x: 7899, y: 1777, difficulty: "medium", capital: true}, 
            {city: "Abu Dhabi", country: "United Arab Emirates", x: 8794, y: 2912, difficulty: "medium", capital: true}, 
            {city: "Belfast", country: "United Kingdom", x: 6530, y: 1567, difficulty: "medium", capital: false}, 
            {city: "Birmingham", country: "United Kingdom", x: 6682, y: 1674, difficulty: "medium", capital: false}, 
            {city: "Glasgow", country: "United Kingdom", x: 6595, y: 1501, difficulty: "medium", capital: false}, 
            {city: "Gibraltar", country: "United Kingdom", x: 6553, y: 2433, difficulty: "medium", capital: false}, 
            {city: "London", country: "United Kingdom", x: 6750, y: 1724, difficulty: "easy", capital: true}, 
            {city: "Cold Bay", country: "United States", x: 648, y: 1536, difficulty: "hard", capital: false}, 
            {city: "Kodiak", country: "United States", x: 1035, y: 1403, difficulty: "hard", capital: false}, 
            {city: "Valdez", country: "United States", x: 1263, y: 1229, difficulty: "hard", capital: false}, 
            {city: "Anchorage", country: "United States", x: 1129, y: 1225, difficulty: "medium", capital: false}, 
            {city: "Bethel", country: "United States", x: 684, y: 1247, difficulty: "hard", capital: false}, 
            {city: "Nome", country: "United States", x: 547, y: 1055, difficulty: "hard", capital: false}, 
            {city: "Kotzebue", country: "United States", x: 653, y: 933, difficulty: "hard", capital: false}, 
            {city: "Barrow", country: "United States", x: 871, y: 717, difficulty: "hard", capital: false}, 
            {city: "Prudhoe Bay", country: "United States", x: 1175, y: 765, difficulty: "hard", capital: false}, 
            {city: "Fairbanks", country: "United States", x: 1212, y: 1038, difficulty: "medium", capital: false}, 
            {city: "Juneau", country: "United States", x: 1710, y: 1376, difficulty: "medium", capital: false}, 
            {city: "Sault Ste. Marie", country: "United States", x: 3589, y: 1967, difficulty: "hard", capital: false}, 
            {city: "Seattle", country: "United States", x: 2163, y: 1915, difficulty: "medium", capital: false}, 
            {city: "Olympia", country: "United States", x: 2142, y: 1941, difficulty: "hard", capital: false}, 
            {city: "Portland", country: "United States", x: 2151, y: 2013, difficulty: "medium", capital: false}, 
            {city: "Spokane", country: "United States", x: 2348, y: 1911, difficulty: "medium", capital: false}, 
            {city: "Missoula", country: "United States", x: 2477, y: 1949, difficulty: "hard", capital: false}, 
            {city: "Helena", country: "United States", x: 2550, y: 1962, difficulty: "hard", capital: false}, 
            {city: "Billings", country: "United States", x: 2681, y: 2000, difficulty: "hard", capital: false}, 
            {city: "Boise", country: "United States", x: 2393, y: 2102, difficulty: "medium", capital: false}, 
            {city: "Casper", country: "United States", x: 2765, y: 2136, difficulty: "hard", capital: false}, 
            {city: "Cheyenne", country: "United States", x: 2821, y: 2215, difficulty: "medium", capital: false}, 
            {city: "Denver", country: "United States", x: 2815, y: 2277, difficulty: "medium", capital: false}, 
            {city: "Santa Fe", country: "United States", x: 2779, y: 2454, difficulty: "medium", capital: false}, 
            {city: "Albuquerque", country: "United States", x: 2753, y: 2478, difficulty: "medium", capital: false}, 
            {city: "Amarillo", country: "United States", x: 2933, y: 2473, difficulty: "hard", capital: false}, 
            {city: "El Paso", country: "United States", x: 2756, y: 2615, difficulty: "medium", capital: false}, 
            {city: "Salt Lake City", country: "United States", x: 2554, y: 2231, difficulty: "medium", capital: false}, 
            {city: "Flagstaff", country: "United States", x: 2565, y: 2474, difficulty: "hard", capital: false}, 
            {city: "Pheonix", country: "United States", x: 2549, y: 2544, difficulty: "medium", capital: false}, 
            {city: "Tucson", country: "United States", x: 2593, y: 2599, difficulty: "medium", capital: false}, 
            {city: "Nogales", country: "United States", x: 2591, y: 2638, difficulty: "hard", capital: false}, 
            {city: "Elko", country: "United States", x: 2410, y: 2229, difficulty: "hard", capital: false}, 
            {city: "Eureka", country: "United States", x: 2096, y: 2230, difficulty: "hard", capital: false}, 
            {city: "Reno", country: "United States", x: 2258, y: 2287, difficulty: "medium", capital: false}, 
            {city: "Sacramento", country: "United States", x: 2196, y: 2329, difficulty: "medium", capital: false}, 
            {city: "San Francisco", country: "United States", x: 2161, y: 2364, difficulty: "easy", capital: false}, 
            {city: "Fresno", country: "United States", x: 2260, y: 2408, difficulty: "medium", capital: false}, 
            {city: "Las Vegas", country: "United States", x: 2431, y: 2431, difficulty: "medium", capital: false}, 
            {city: "Santa Barbara", country: "United States", x: 2262, y: 2507, difficulty: "medium", capital: false}, 
            {city: "Los Angeles", country: "United States", x: 2319, y: 2525, difficulty: "easy", capital: false}, 
            {city: "San Diego", country: "United States", x: 2357, y: 2574, difficulty: "medium", capital: false}, 
            {city: "Laredo", country: "United States", x: 3020, y: 2790, difficulty: "hard", capital: false}, 
            {city: "San Antonio", country: "United States", x: 3058, y: 2710, difficulty: "medium", capital: false}, 
            {city: "Austin", country: "United States", x: 3086, y: 2679, difficulty: "medium", capital: false}, 
            {city: "Houston", country: "United States", x: 3177, y: 2697, difficulty: "medium", capital: false}, 
            {city: "Shreveport", country: "United States", x: 3236, y: 2588, difficulty: "hard", capital: false}, 
            {city: "Dallas", country: "United States", x: 3120, y: 2574, difficulty: "medium", capital: false}, 
            {city: "Ft. Worth", country: "United States", x: 3102, y: 2577, difficulty: "hard", capital: false}, 
            {city: "Oklahoma City", country: "United States", x: 3095, y: 2463, difficulty: "hard", capital: false}, 
            {city: "Tulsa", country: "United States", x: 3154, y: 2434, difficulty: "hard", capital: false}, 
            {city: "Kansas City", country: "United States", x: 3204, y: 2305, difficulty: "hard", capital: false}, 
            {city: "Omaha", country: "United States", x: 3151, y: 2210, difficulty: "hard", capital: false}, 
            {city: "Sioux Falls", country: "United States", x: 3124, y: 2105, difficulty: "hard", capital: false}, 
            {city: "Pierre", country: "United States", x: 2988, y: 2067, difficulty: "hard", capital: false}, 
            {city: "Bismarck", country: "United States", x: 2972, y: 1952, difficulty: "hard", capital: false}, 
            {city: "Fargo", country: "United States", x: 3122, y: 1949, difficulty: "hard", capital: false}, 
            {city: "Minneapolis", country: "United States", x: 3255, y: 2038, difficulty: "medium", capital: false}, 
            {city: "Des Moines", country: "United States", x: 3241, y: 2195, difficulty: "hard", capital: false}, 
            {city: "Milwaukee", country: "United States", x: 3455, y: 2128, difficulty: "medium", capital: false}, 
            {city: "Chicago", country: "United States", x: 3461, y: 2184, difficulty: "easy", capital: false}, 
            {city: "Indianapolis", country: "United States", x: 3521, y: 2277, difficulty: "medium", capital: false}, 
            {city: "Saint Louis", country: "United States", x: 3368, y: 2326, difficulty: "medium", capital: false}, 
            {city: "Memphis", country: "United States", x: 3377, y: 2478, difficulty: "medium", capital: false}, 
            {city: "Jackson", country: "United States", x: 3370, y: 2596, difficulty: "hard", capital: false}, 
            {city: "New Orleans", country: "United States", x: 3375, y: 2690, difficulty: "medium", capital: false}, 
            {city: "Detroit", country: "United States", x: 3636, y: 2161, difficulty: "medium", capital: false}, 
            {city: "Cleveland", country: "United States", x: 3688, y: 2200, difficulty: "medium", capital: false}, 
            {city: "Cincinnati", country: "United States", x: 3585, y: 2303, difficulty: "medium", capital: false}, 
            {city: "Nashville", country: "United States", x: 3498, y: 2433, difficulty: "medium", capital: false}, 
            {city: "Knoxville", country: "United States", x: 3605, y: 2442, difficulty: "medium", capital: false}, 
            {city: "Atlanta", country: "United States", x: 3587, y: 2532, difficulty: "medium", capital: false}, 
            {city: "Montgomery", country: "United States", x: 3516, y: 2593, difficulty: "hard", capital: false}, 
            {city: "Tampa", country: "United States", x: 3660, y: 2773, difficulty: "medium", capital: false}, 
            {city: "Miami", country: "United States", x: 3744, y: 2858, difficulty: "medium", capital: false}, 
            {city: "Orlando", country: "United States", x: 3700, y: 2750, difficulty: "medium", capital: false}, 
            {city: "Jacksonville", country: "United States", x: 3689, y: 2676, difficulty: "hard", capital: false}, 
            {city: "Savannah", country: "United States", x: 3710, y: 2607, difficulty: "hard", capital: false}, 
            {city: "Wilmington", country: "United States", x: 3829, y: 2515, difficulty: "hard", capital: false}, 
            {city: "Charlotte", country: "United States", x: 3721, y: 2474, difficulty: "hard", capital: false}, 
            {city: "Norfolk", country: "United States", x: 3892, y: 2404, difficulty: "hard", capital: false}, 
            {city: "Richmond", country: "United States", x: 3848, y: 2373, difficulty: "hard", capital: false}, 
            {city: "Baltimore", country: "United States", x: 3879, y: 2297, difficulty: "medium", capital: false}, 
            {city: "Philadelphia", country: "United States", x: 3933, y: 2266, difficulty: "medium", capital: false}, 
            {city: "Charleston", country: "United States", x: 3691, y: 2339, difficulty: "hard", capital: false}, 
            {city: "Pittsburgh", country: "United States", x: 3752, y: 2247, difficulty: "medium", capital: false}, 
            {city: "New York", country: "United States", x: 3978, y: 2232, difficulty: "easy", capital: false}, 
            {city: "Buffalo", country: "United States", x: 3794, y: 2136, difficulty: "medium", capital: false}, 
            {city: "Syracuse", country: "United States", x: 3897, y: 2128, difficulty: "medium", capital: false}, 
            {city: "Providence", country: "United States", x: 4074, y: 2184, difficulty: "hard", capital: false}, 
            {city: "Boston", country: "United States", x: 4087, y: 2161, difficulty: "medium", capital: false}, 
            {city: "Burlington", country: "United States", x: 4007, y: 2062, difficulty: "hard", capital: false}, 
            {city: "Augusta", country: "United States", x: 4136, y: 2070, difficulty: "hard", capital: false}, 
            {city: "Honolulu", country: "United States", x: 831, y: 3034, difficulty: "medium", capital: false}, 
            {city: "Hilo", country: "United States", x: 935, y: 3096, difficulty: "hard", capital: false}, 
            {city: "Washington D.C.", country: "United States", x: 3864, y: 2315, difficulty: "easy", capital: true}, 
            {city: "Montevideo", country: "Uruguay", x: 4646, y: 5209, difficulty: "hard", capital: true}, 
            {city: "Bukhara (Buxoro)", country: "Uzbekistan", x: 9172, y: 2276, difficulty: "medium", capital: false}, 
            {city: "Nukus", country: "Uzbekistan", x: 8991, y: 2155, difficulty: "hard", capital: false}, 
            {city: "Tashkent", country: "Uzbekistan", x: 9354, y: 2208, difficulty: "hard", capital: true}, 
            {city: "Port Vila", country: "Vanuatu", x: 13070, y: 4526, difficulty: "hard", capital: true}, 
            {city: "Vatican City", country: "Vatican City", x: 7222, y: 2182, difficulty: "medium", capital: true}, 
            {city: "Puerto Ayacucho", country: "Venezuela", x: 4217, y: 3633, difficulty: "hard", capital: false}, 
            {city: "Merida", country: "Venezuela", x: 4085, y: 3529, difficulty: "hard", capital: false}, 
            {city: "Maracaibo", country: "Venezuela", x: 4065, y: 3440, difficulty: "hard", capital: false}, 
            {city: "Valencia", country: "Venezuela", x: 4203, y: 3459, difficulty: "hard", capital: false}, 
            {city: "Ciudad Guayana", country: "Venezuela", x: 4404, y: 3530, difficulty: "hard", capital: false}, 
            {city: "Caracas", country: "Venezuela", x: 4243, y: 3450, difficulty: "hard", capital: true}, 
            {city: "Ho Chi Minh City (Saigon)", country: "Vietnam", x: 10758, y: 3438, difficulty: "medium", capital: false}, 
            {city: "Da Nang", country: "Vietnam", x: 10816, y: 3236, difficulty: "medium", capital: false}, 
            {city: "Haiphong", country: "Vietnam", x: 10757, y: 3052, difficulty: "hard", capital: false}, 
            {city: "Hanoi", country: "Vietnam", x: 10726, y: 3046, difficulty: "medium", capital: true}, 
            {city: "Mata-utu", country: "Wallis and Futuna", x: 146, y: 4355, difficulty: "hard", capital: false}, 
            {city: "Laayoune", country: "Western Sahara", x: 6259, y: 2804, difficulty: "hard", capital: false}, 
            {city: "Bir Lehlu", country: "Western Sahara", x: 6392, y: 2846, difficulty: "hard", capital: false}, 
            {city: "Aden", country: "Yemen", x: 8443, y: 3362, difficulty: "hard", capital: false}, 
            {city: "Aden", country: "Yemen", x: 8443, y: 3361, difficulty: "hard", capital: true}, 
            {city: "Sana'a", country: "Yemen", x: 8413, y: 3264, difficulty: "hard", capital: true}, 
            {city: "Ndola", country: "Zambia", x: 7829, y: 4344, difficulty: "hard", capital: false}, 
            {city: "Livingstone", country: "Zambia", x: 7724, y: 4530, difficulty: "hard", capital: false}, 
            {city: "Lusaka", country: "Zambia", x: 7815, y: 4437, difficulty: "hard", capital: true}, 
            {city: "Bulawayo", country: "Zimbabwe", x: 7827, y: 4619, difficulty: "hard", capital: false}, 
            {city: "Harare", country: "Zimbabwe", x: 7919, y: 4529, difficulty: "hard", capital: true},                
        ];
        this.image = new Image();
        this.grabbed = false;
        this.stolen = false;
        this.targetIsFlag = false;
        this.targetIsHealthpack = false;
        this.widthOffset = 0;
        this.heightOffset = 0;
        this.getNewCityChoice = true;
    }

    matchDifficulty(citiesDiff){
        let cityList = {
            isEasy: this.locations.filter(easyCities => easyCities.difficulty === "easy"),
            isMedium: this.locations.filter(mediumCities => mediumCities.capital),
            isHard: this.locations.filter(hardCities => hardCities.difficulty === "medium"),
            isInsane: this.locations.filter(insaneCities => insaneCities.difficulty === "hard"),
        }

        if (this.getNewCityChoice){
            let getCity = {
                easy: citiesDiff === "easy" ? this.cityChoice = this.getRandomNumber(cityList.isEasy.length) : "",
                medium: citiesDiff === "medium" ? this.cityChoice = this.getRandomNumber(cityList.isMedium.length) : "",
                hard: citiesDiff === "hard" ? this.cityChoice = this.getRandomNumber(cityList.isHard.length) : "",
                insane: citiesDiff === "insane" ? this.cityChoice = this.getRandomNumber(cityList.isInsane.length) : "",
            }

            this.getNewCityChoice = false;
        }

        let setTarget = {
            easy: citiesDiff === "easy" ? this.currentTarget = cityList.isEasy[this.cityChoice] : "",
            medium: citiesDiff === "medium" ? this.currentTarget = cityList.isMedium[this.cityChoice] : "",
            hard: citiesDiff === "hard" ? this.currentTarget = cityList.isHard[this.cityChoice] : "",
            insane: citiesDiff === "insane" ? this.currentTarget = cityList.isInsane[this.cityChoice] : "",
        }

        let setXY = {
            x: this.x = this.currentTarget.x,
            y: this.y = this.currentTarget.y,
        }
    }

                                                                                                         // combine detectChange and detectGrab later after you restructure everything in the launcher

    detectChange(currentTarget){
        // if the target changes due to you or someone else, your target also changes
        if (this.previousTarget && currentTarget !== this.previousTarget) this.stolen = true;
        this.previousTarget = currentTarget;
    }
    
    detectGrab(ballX, ballY, ballWidth, ballHeight){
        let ballTouched = {
            afterLeftX: ballX + ballWidth/2 >= this.x,
            beforeRightX: ballX - ballWidth/2 <= this.x + this.width/2,
            afterTopY: ballY + ballHeight/2 >= this.y,
            beforeBottomY: ballY - ballHeight/2 <= this.y + this.height/2,
        }

        // if you take the target, note it as grabbed so it can be updated and scored
        if (this.allTrue(ballTouched)) this.grabbed = true;
        if (this.grabbed || this.stolen) this.getNewCityChoice = true;

    }

    setOffsets(object, heightOffset, widthOffset){
        let setOffsets = {
            normal: object.normal ? (this.heightOffset = heightOffset, this.widthOffset = widthOffset) : "",
            top: object.atTop ? (this.heightOffset = heightOffset, this.widthOffset = widthOffset) : "",
            bottomFlag: object.atBottom ? (this.heightOffset = -heightOffset, this.widthOffset = widthOffset) : ""
        }

        return setOffsets;
    }

    drawTarget(ctx, canvasWidth, canvasHeight, playerX, playerY, playerHeight){
        let playerPos = {
            normal: playerY > canvasHeight/2 && playerY < this.mapHeight - canvasHeight/2,
            atTop: playerY < canvasHeight/2,
            atBottom: playerY > this.mapHeight - canvasHeight/2,
        }

        let screenPosOffsets = {
            flag: this.targetIsFlag ? this.setOffsets(playerPos, -this.height, 0) : "",
            healthpack: this.targetIsHealthpack ? this.setOffsets(playerPos, -this.height, -this.halfWidth) : "",
        }

        let setScreenPos = {
            x: this.screenX = this.x + canvasWidth/2 - playerX + this.widthOffset,
            y: this.screenY = this.y + canvasHeight/2 - playerY + this.heightOffset,
        }

        let yPosOffsets = {
            top: this.y + this.heightOffset,
            bottom: this.y - this.heightOffset + canvasHeight - this.mapHeight,
        }

        let setY = {
            top: playerPos.atTop ? this.screenY = yPosOffsets.top : "",
            bottom : playerPos.atBottom ? this.screenY = yPosOffsets.bottom : "",
        }

        let draw = {
            draw: ctx.drawImage(this.image, this.screenX, this.screenY, this.width, this.height),
        }
    }

    drawDestinations(ctx, difficulty, destImgX, destImgY, destTextX, destTextY, destColor){
        let destInfo = {
            display: `${this.currentTarget.city}, ${this.currentTarget.country}`,
            font: `${document.body.clientHeight * 0.012}px retropixels`,
            alignment: "left",
        }

        let setHardOrInsaneDisplay = {
            hard: difficulty === "hard" ? destInfo.display = `${this.currentTarget.country}` : "",
            insane: difficulty === "insane" ? destInfo.display = `${this.currentTarget.city}` : "",
        }

        let draw = {
            target: ctx.drawImage(this.image, destImgX, destImgY, this.destWidth, this.destHeight), //ohoh
            destination: this.drawText(ctx, destInfo.font, destColor, destInfo.alignment, destInfo.display, destTextX, destTextY),
        }
    }
}

class Map extends Entity {
    constructor(){
        super();
        this.x = 0;
        this.y = 0;
        this.image = this.addImage("img/map.png");
    }

    draw(ctx, canvasWidth, canvasHeight, playerX, playerY){
        let info = {
            x: this.screenX = this.x + canvasWidth/2 - playerX,
            y: this.screenY = this.y + canvasHeight/2 - playerY,
        }

        let pos = {
            isPlayerAtTop: this.screenY >= 0,
            isPlayerAtBottom: this.screenY <= -this.mapHeight + canvasHeight,
            topY: 0,
            bottomY: this.screenY + canvasHeight/2 + playerY - this.mapHeight,
        }

        let setY = {
            atTop: pos.isPlayerAtTop ? this.screenY = pos.topY : "",
            atBottom: pos.isPlayerAtBottom ? this.screenY = pos.bottomY : "",
        }

        let draw = {
            map: ctx.drawImage(this.image, this.screenX, this.screenY, this.mapWidth, this.mapHeight),
        }
    }

    update(ctx, canvasWidth, canvasHeight, playerX, playerY){
        this.draw(ctx, canvasWidth, canvasHeight, playerX, playerY);
    }
};

class Bullet extends Entity {
    constructor(x, y, dx, dy, id){
        super();
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.width = 5;
        this.height = 5;
        this.time = Date.now();
        this.image = this.addImage("img/bullet.png");
        this.speed = 20;
        this.id = id
    }

    drawClippedImageAndClones(ctx, image, clipStartX, clipStartY, clipWidth, clipHeight, translatedX, translatedY, width, height){
        return drawImage(0), drawImage(-this.mapWidth), drawImage(this.mapWidth);

        function drawImage(offset){
            ctx.drawImage(image, clipStartX, clipStartY, clipWidth, clipHeight, translatedX + offset, translatedY, width, height);
        }
    }

    move(){
        let angle = {
            xToDest: this.x += this.dx * this.speed,
            yToDest: this.y += this.dy * this.speed,
        }
    }

    draw(ctx, playerX, playerY, canvasWidth, canvasHeight){
        let pos = {
            playerAtTop: playerY < canvasHeight/2,
            playerAtBottom: playerY > this.mapHeight - canvasHeight/2,
            normalX: this.x + (canvasWidth/2 - this.width/2) - playerX,
            normalY: this.y + (canvasHeight/2 - this.height/2) - playerY,
            topY: this.y,
            bottomY: this.y + (canvasHeight/2 + canvasHeight/2) - this.mapHeight,
        }

        let setXY = {
            x: this.screenX = pos.normalX,
            y: this.screenY = pos.normalY,
        }

        let adjustY = {
            top: pos.playerAtTop ? this.screenY = pos.topY : "",
            bottom: pos.playerAtBottom ? this.screenY = pos.bottomY : "",
        }

        let draw = {
            bullet: 
                this.drawClippedImageAndClones(
                    ctx, this.image, 0, 0, this.width, this.height, this.screenX + this.dx, this.screenY + this.dy, this.width, this.height
                ),
        }
    }

    update(ctx, playerX, playerY, canvasWidth, canvasHeight){
        this.move();
        this.draw(ctx, playerX, playerY, canvasWidth, canvasHeight);
    }
}

class Score {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.scoreboard = {};
    }

    linkPtsToId(id, points){
        this.scoreboard[id] = points;
    }

    removeScoreboard(id){
        delete this.scoreboard[id];
    }

    getTop10(){
        let getScores = {
            fullList: this.scores = Object.entries(this.scoreboard),
        }

        let sortDescending = {
            sortList: this.top10 = this.scores.sort((a, b) => b[1] - a[1]),
        }

        let cropTop10 = {
            cropList: this.top10.splice(10),
        }
    }

    draw(ctx, canvasWidth){
        let getEntryInfo = (item, index) => {
            let entryInfo = {
                id: item[0],
                points: item[1],
                x: canvasWidth - document.body.clientHeight * 0.050,
                y: (document.body.clientHeight * 0.02 * index) + document.body.clientHeight * 0.025,
            }

            let setInfo = {
                listEntry: ctx.fillText(`${entryInfo.id}: ${entryInfo.points}`, entryInfo.x, entryInfo.y),
            }
        }

        let addAllEntriesToScoreboard = {
            font: ctx.font = `${document.body.clientHeight * 0.012}px retropixels`,
            fillColor: ctx.fillStyle = "black",
            alignment: ctx.textAlign = "right",
            applyToEachEntry: this.top10.forEach(getEntryInfo),
        }
    }

    update(id, points){
        this.linkPtsToId(id, points);
        this.getTop10();
    }
}

class Id extends Entity{
    constructor(){
        super();
    }

    create(){
        let words = {
            adjectives: [
                "awesome", "amazing", "arrogant", "awkward", "awful", "absurd", "anxious",
                "baby", "bad", "badass", "blue", "burned", "big", "beefy", "brown", "black", "bent", "bloody", "bored", "broken", "busy",
                "cool", "cute", "calm", "careful", "cheap", "cheeky", "chief", "chilly", "classy", "clever", "cold", "confused", "crazy", "cruel",
                "dark", "dangerous", "dizzy", "dumb", 
                "eager", "easy", "elite", "enormous", "extreme",
                "foolish", "fat", "fabulous", "famous", "fast", "fierce", "friendly", "funny", "fuzzy",
                "giant", "green", "good", "great", "gorgeous", "gross", "gentle", "glorious", "goofy", "gray", "grumpy",
                "hungry", "huge", "hot", "horrible", 
                "ill", "inner", "itty-bitty",
                "jelly", "jealous", "jumpy",
                "king", "kool", "kind", "krazy",
                "loony", "lazy", "little", "lil",
                "mad", "mini", "mint", "marvelous",
                "nice", "nimble", "naughty", "nifty",
                "obnoxious", "orange", "old",
                "pretty", "punk", "pathetic", "precious",
                "quick", "quiet", "quaint",
                "rich", "red", "ready", "rough", "real", 
                "stupid", "silly", "sad", "sour", "soft", "secret", "semi",
                "tall", "teal", "tiny",
                "ugly", "used", "useful", "upset", "underestimated",
                "vain", "viscous",
                "weird", "wild", "wicked", "wonderful",
                "x-", "xtreme",
                "yellow", "young",
                "zippy", "zoomer", "zany",
            ],

            nouns: [
                "aimer", "apple", "axe", "alligator", "arm", "alien", "artist", 
                "burger", "butcher", "bat", "buffalo", "banana", "beefcake", "brownie", "batman", "bro", "booger",
                "czech", "chef", "cheeks", "cop", "cucumber", "california", 
                "dad", "dinner", "dinosaur", "dolphin", "donkey", "drill", "doorknob",
                "eagle", "elephant", "ear", "eye", "egg", "energy", 
                "fire", "fixer", "filipino", "fox", "freshman", "front", 
                "giant", "grape", "gopher", "golfer", "gold", "girl",
                "hater", "hero", "heretic", "hambeast", "hamburger", "hook", "howl", 
                "igloo", "iceman",
                "joker", "jellyfish", "jukebox",
                "king", 
            ],

            names: [
                "alex", "amy", "alan", "adam", "anna", "aiden",
                "brian", "bob", "brianna", "billy",
                "cate", "carl", "cindy",
                "derek", "don", "darla", "doofy", "dan", "dinesh",
                "earl", "erica", "elise", "ellen", "eric"
            ],

            numbers: this.getRandomNumber(100),
        };

        let random = {
            adj: words.adjectives[this.getRandomNumber(words.adjectives.length)],
            noun: words.nouns[this.getRandomNumber(words.nouns.length)],
            num: words.numbers,
        };

        let make = {
            adjNounNum: (`${random.adj}${random.noun}${random.num}`),
        }

        return make.adjNounNum;
    }
}

class Gameover extends Entity{
    constructor(){
        super();
        this.again = false;
        this.id = Math.random();
        this.reset = false;
        this.translucentBg = this.addImage("img/translucentBg.png")
    }

    repeatedInfo(object, property, text, info, listY, margin, marginMult){
        return object[`${property}`] = {
                text: text,
                textY: listY + margin * marginMult,
                score: `${info}`,
                scoreY: listY + margin * (marginMult + 1),
        }
    }

    repeatedLines(object, property, midX, textMeasure){
        return object[`${property}`] = {
            startX: midX - textMeasure,
            endX: midX + textMeasure,
        }
    }

    draw(ctx, score, kills, flags, damage, distance){
        let pos = {
            midX: document.body.clientWidth / 2,
            listMargin: document.body.clientHeight * 0.03,
            infoWidth: document.body.clientHeight * 0.2,
            listStartY: document.body.clientHeight * .38,
        }

        let info = {
            text: {
                color: "black",
                alignment: "center",
                font: `${document.body.clientHeight * 0.012}px retropixels`,
            },

            background: {
                x: pos.midX - pos.infoWidth/2,
                y: pos.listStartY - document.body.clientHeight * 0.025,
                width: document.body.clientHeight * 0.2,
                height: document.body.clientHeight * 0.305,
            },

            gameOver: {
                font: `${document.body.clientHeight * 0.04}px retropixels`,
                text: "Game Over",
                y: pos.listStartY - document.body.clientHeight * 0.05,
            },

            startButton: {
                color: "gray",
                textColor: "white",
                font: `${document.body.clientHeight * 0.017}px retropixels`,
                text: "Play Again?",
                height: document.body.clientHeight * 0.05,
                left: pos.midX - pos.infoWidth/2,
                right: pos.midX - pos.infoWidth/2 + pos.infoWidth,
                top: document.body.clientHeight * 0.68,
                bottom: document.body.clientHeight * 0.73,
                textY: document.body.clientHeight * 0.715,
            },
        }

        let addRepeatedInfo = {
            finalScore: this.repeatedInfo(info, "finalScore", "Final Score", score, pos.listStartY, pos.listMargin, 0),
            kills: this.repeatedInfo(info, "kills", "Kill Count", kills, pos.listStartY, pos.listMargin, 2),
            flags: this.repeatedInfo(info, "flags", "Flags Taken", flags, pos.listStartY, pos.listMargin, 4),
            damage: this.repeatedInfo(info, "damage", "Damage Taken", damage, pos.listStartY, pos.listMargin, 6),
            distance: this.repeatedInfo(info, "distance", "Distance Walked", `${distance}km`, pos.listStartY, pos.listMargin, 8),
        }

        let lines = {
            finalScore: {
                changeFont: (ctx.font = info.text.font),
            },
        }

        let addRepeatedLines = {
            finalScore: this.repeatedLines(lines, "finalScore", pos.midX, ctx.measureText(info.finalScore.text).width/2),
            kills: this.repeatedLines(lines, "kills", pos.midX, ctx.measureText(info.kills.text).width/2),
            flags: this.repeatedLines(lines, "flags", pos.midX, ctx.measureText(info.flags.text).width/2),
            damage: this.repeatedLines(lines, "damage", pos.midX, ctx.measureText(info.damage.text).width/2),
            distance: this.repeatedLines(lines, "distance", pos.midX, ctx.measureText(info.distance.text).width/2),
        }

        let drawLine = (startX, endX, y) => {
            ctx.strokeStyle = "gray",
            ctx.lineWidth = 1,
            ctx.beginPath(),
            ctx.moveTo(startX, y + 1),
            ctx.lineTo(endX, y + 1),
            ctx.stroke();
        }

        let textInfo = (text, y) => {
            return this.drawText(ctx, info.text.font, info.text.color, info.text.alignment, text, pos.midX, y);
        }

        let repeatedLineInfo = (object, property, text, listStartY, startX, endX, textY, score, scoreY) => {
            return object[`${property}`] = {
                text: textInfo(text, listStartY),
                underline: drawLine(startX, endX, textY),
                score: textInfo(score, scoreY),
            }
        }

        let draw = {
            gameOver: this.drawText( ctx, info.gameOver.font, info.text.color, info.text.alignment, info.gameOver.text, pos.midX, info.gameOver.y ),

            background: ( ctx.drawImage(this.translucentBg, info.background.x, info.background.y, info.background.width, info.background.height) ),

            startButton: {
                button: this.drawRect( ctx, info.startButton.color, info.startButton.left, info.startButton.top, pos.infoWidth, info.startButton.height ),
                text: this.drawText( ctx, info.startButton.font, info.startButton.textColor, info.text.alignment, info.startButton.text, pos.midX, info.startButton.textY ),
            },
        }

        let addRepeatedLineInfo = {
            finalScore: 
                repeatedLineInfo(
                    draw, 
                    "finalScore", 
                    info.finalScore.text, 
                    pos.listStartY, 
                    lines.finalScore.startX, 
                    lines.finalScore.endX, 
                    info.finalScore.textY, 
                    info.finalScore.score, 
                    info.finalScore.scoreY
                ),

            kills:
                repeatedLineInfo(
                    draw, 
                    "kills", 
                    info.kills.text, 
                    info.kills.textY, 
                    lines.kills.startX, 
                    lines.kills.endX, 
                    info.kills.textY, 
                    info.kills.score, 
                    info.kills.scoreY
                ),

            flags: 
                repeatedLineInfo(
                    draw, 
                    "flags", 
                    info.flags.text, 
                    info.flags.textY, 
                    lines.flags.startX, 
                    lines.flags.endX, 
                    info.flags.textY, 
                    info.flags.score, 
                    info.flags.scoreY
                ),

            damage:
                repeatedLineInfo(
                    draw, 
                    "damage", 
                    info.damage.text, 
                    info.damage.textY, 
                    lines.damage.startX, 
                    lines.damage.endX, 
                    info.damage.textY, 
                    info.damage.score, 
                    info.damage.scoreY
                ),

            distance: 
                repeatedLineInfo(
                    draw, 
                    "distance", 
                    info.distance.text, 
                    info.distance.textY, 
                    lines.distance.startX, 
                    lines.distance.endX, 
                    info.distance.textY, 
                    info.distance.score, 
                    info.distance.scoreY
                ),
        }

        let reset = {
            getMouseXY: (onclick = (e) => {this.mouseX = e.x, this.mouseY = e.y}),
            clicked: this.clickArea(info.startButton.left, info.startButton.right, info.startButton.top, info.startButton.bottom) ? this.reset = true : "",
        }
    }

    update(ctx, score, kills, flags, damage, distance){
        this.draw(ctx, score, kills, flags, damage, distance);
    }
}

class Loading extends Entity{
    constructor(){
        super();
        this.x = 0;
        this.y = 0;
        this.color = "white";
    }

    draw(ctx, canvasWidth, canvasHeight){
        this.drawRect(ctx, this.color, this.x, this.y, canvasWidth, canvasHeight);
        console.log(document.body.clientWidth, document.body.clientHeight);
        this.drawText(ctx, `${document.body.clientHeight * 0.017}px retropixels`, "black", "center", "Loading...", document.body.clientWidth/2, document.body.clientHeight/2);
    }

    update(ctx, canvasWidth, canvasHeight){
        this.draw(ctx, canvasWidth, canvasHeight);
    }
}

class Startscreen extends Ball{
    constructor(){
        super();
        this.x = 0;
        this.y = 0;
        this.rows = 11;
        this.columns = 6;
        this.randomRow = this.getRandomNumber(this.rows);
        this.randomColumn = this.getRandomNumber(this.columns);
        this.eyes = ["happy", "angry", "worried", "normal"];
        this.eyeChoice = this.getRandomNumber(this.eyes.length);
        this.countryChoice = this.getRandomNumber(Object.keys(this.countryNames).length);
        this.ball = this.addImage(`img/balls/${Object.values(this.countryNames)[this.countryChoice][0]}.png`);
        this.topLeftArrow = this.addImage("img/leftarrow.png");
        this.topRightArrow = this.addImage("img/rightarrow.png");
        this.bottomLeftArrow = this.addImage("img/leftarrow.png");
        this.bottomRightArrow = this.addImage("img/rightarrow.png");
        this.begin = false;
        this.difficulty = "easy";
        this.placeholder = new Id().create();
        this.name = new Id().create();
        this.citiesDiff = "easy";
        this.enemiesDiff = "easy";
        this.directionsDiff = "easy";
    }

    generateMaps(){
        let nextMap = {
            row: this.randomRow + 1,
            column: this.randomColumn + 1,
        }

        let exceedsMapCount = {
            row: nextMap.row === this.rows ? nextMap.row = 0 : "",
            column: nextMap.column == this.columns ? nextMap.column = 0 : "",
        }

        let setImages = {
            topLeft: this.topLeftMap = this.addImage(`img/maps/${this.randomRow}_${this.randomColumn}.png`),
            topRight: this.topRightMap = this.addImage(`img/maps/${nextMap.row}_${this.randomColumn}.png`),
            bottomLeft: this.bottomLeftMap = this.addImage(`img/maps/${this.randomRow}_${nextMap.column}.png`),
            bottomRight: this.bottomRightMap = this.addImage(`img/maps/${nextMap.row}_${nextMap.column}.png`), 
        }
    }
    
    repeatedArrows(object, property, arrow, midX, leftXOffset, width, rightXOffset, row, height){
        return object[`${property}`][`${arrow}`] = {
            leftStartX: midX - leftXOffset,
            leftEndX: midX - leftXOffset + width,
            rightStartX: midX + rightXOffset,
            rightEndX: midX + rightXOffset + width,
            topY: row,
            bottomY: row + height,
        }
    }

    repeatedButtons(object, property, diff, row, height, textY, col2, col3, col4, halfWidth){
        return object[`${property}`][`${diff}`] = {
            bottomY: row + height,
            textY: row + textY,
            citiesStartX: col2 - halfWidth,
            citiesEndX: col2 + halfWidth,
            citiesColor: "#FFE6C2",
            enemiesStartX: col3 - halfWidth,
            enemiesEndX: col3 + halfWidth,
            enemiesColor: "#FFE6C2",
            directionsStartX: col4 - halfWidth,
            directionsEndX: col4 + halfWidth,
            directionsColor: "#FFE6C2",
        }
    }

    repeatedHeadings(object, property, ctx, font, title, y){
        return object[`${property}`] = {
            changeFont: (ctx.font = font),
            width: ctx.measureText(title).width,
            height: ctx.measureText('M').width * 1.25,
            y: y,
        }
    }

    repeatedHeadingBgs(object, property, midX, width, margin, yMargin, y, height, ctx, title){
        return object[`${property}`] = {
            x: midX - width/2 - margin,
            y: y - height + ctx.measureText('M').width/3 - yMargin,
            width: width + margin*2,
            height: height + margin*2,
        }
    }

    draw(ctx, canvasWidth){
        let info = {
            midX: canvasWidth/2,
            columnWidthAndMargin: document.body.clientHeight * 0.104,
            
            font: {
                title: `${document.body.clientHeight * 0.025}px retropixels`,
                big: `${document.body.clientHeight * 0.025}px retropixels`,
                medium: `${document.body.clientHeight * 0.02}px retropixels`,
                small: `${document.body.clientHeight * 0.015}px retropixels`,
                tiny: `${document.body.clientHeight * 0.01}px retropixels`,
                color: "white",
                left: "left",
                center: "center",
                right: "right",
                directions: "black",
            },

            text: {
                title: "   Get the Flag   ",
                chooseChar: "Get Clay",
                chooseDiff: "Settings",
                directions: "How to Play",
                topArrow: "Eyes",
                bottomArrow: "Country",
                userId: "User ID",
                cities: "Cities",
                enemies: "Enemies",
                helper: "Helper",
                directions: "Directions",
                easy: "Easy",
                medium: "Medium",
                hard: "Hard",
                insane: "Insane",
                easyCities: "Famous",
                mediumCities: "Capitals",
                hardCities: "Large",
                insaneCities: "Obscure",
                easyEnemies: "Every 30s",
                mediumEnemies: "Every 20s",
                hardEnemies: "Every 10s",
                insaneEnemies: "Every 5s",
                easyDirections: "Arrows",
                mediumDirections: "Address",
                hardDirections: "Country",
                insaneDirections: "City",
                start: "Start",
                random: "Random",
                rule1: "- Use the WASD keys to move",
                rule2: "- Press left click to shoot",
                rule3: "- Go to the cities in the top left",
                rule4: "- Flags are in the blue cities",
                rule5: "- Healthpacks are in the red cities",
                rule6: "- Kill others before they kill you",
            },

            background: {
                color: "#9592AD",
                margin: document.body.clientHeight * 0.01,
            },

            arrow: {
                width: document.body.clientHeight * 0.02,
                height: document.body.clientHeight * 0.02,
                leftXOffset: document.body.clientHeight * 0.075,
                rightXOffset: document.body.clientHeight * 0.055,
                bottomYOffset: document.body.clientHeight * 0.04,
                textXOffset: document.body.clientHeight * 0.020,
                textYOffset: document.body.clientHeight * 0.02,
            },

            button: {
                width: document.body.clientHeight * 0.1,
                halfWidth: document.body.clientHeight * 0.05,
                height: document.body.clientHeight * 0.04,
                textY: document.body.clientHeight * 0.027,
                startTextY: document.body.clientHeight * 0.031,
                bgColor: "#AFCAE6",
                headingColor: "#707070",
                font: `${document.body.clientHeight * 0.02}px retropixels`,
            },

            eyes: {
                moveRange: document.body.clientHeight * 0.005,
                spaceDistance: document.body.clientHeight * 0.010,
                xCenter: document.body.clientHeight * -0.015,
                yCenter: document.body.clientHeight * -0.015,
            },

            ballSource: this.ball.src = `img/balls/${Object.values(this.countryNames)[this.countryChoice][0]}.png`,
            mood: this.mood = this.eyes[this.eyeChoice],
        }

        let grid = {
            row1: document.body.clientHeight * 0.1,
            row2: document.body.clientHeight * 0.25,
            row3: document.body.clientHeight * 0.43,
            row4: document.body.clientHeight * 0.437,
            row5: document.body.clientHeight * 0.48,
            row6: document.body.clientHeight * 0.522,
            row7: document.body.clientHeight * 0.565,
            row8: document.body.clientHeight * 0.608, 
            row9: document.body.clientHeight * 0.693,  
            row10: document.body.clientHeight * 0.91,  
            col1: info.midX - info.columnWidthAndMargin - info.columnWidthAndMargin/2,
            col2: info.midX - info.columnWidthAndMargin/2,
            col3: info.midX + info.columnWidthAndMargin/2,
            col4: info.midX + info.columnWidthAndMargin + info.columnWidthAndMargin/2,
        }

        let headings = {
            // headings has to be declared so addRepeatedHeadings can be set
        }

        let addRepeatedHeadings = {
            title: 
                this.repeatedHeadings(
                    headings, 
                    "title", 
                    ctx, 
                    info.font.title, 
                    info.text.title, 
                    grid.row1 + (document.body.clientHeight * 0.035)
                ),

            chooseChar: 
                this.repeatedHeadings(
                    headings, 
                    "chooseChar", 
                    ctx, 
                    info.font.medium, 
                    info.text.chooseChar, 
                    grid.row2 - (document.body.clientHeight * 0.065)
                ),

            chooseDiff: 
                this.repeatedHeadings(
                    headings, 
                    "chooseDiff", 
                    ctx, 
                    info.font.medium, 
                    info.text.chooseDiff, 
                    grid.row3
                ),
            
            directions: 
                this.repeatedHeadings(
                    headings, 
                    "directions", 
                    ctx, 
                    info.font.medium, 
                    info.text.chooseDiff, 
                    grid.row9
                ),
        }

        let headingBgs = {
            // headingBgs must be declared so addRepeatedHeadingBgs can be set
        }

        let addRepeatedHeadingBgs = {
            title: 
                this.repeatedHeadingBgs(
                    headingBgs, 
                    "title", 
                    info.midX, 
                    headings.title.width, 
                    info.background.margin, 
                    (document.body.clientHeight * -0.02), 
                    grid.row1, 
                    headings.title.height, 
                    ctx, 
                    info.text.title
                ),
            
            chooseChar: 
                this.repeatedHeadingBgs(
                    headingBgs, 
                    "chooseChar", 
                    info.midX, 
                    headings.title.width, 
                    info.background.margin, 
                    info.background.margin, 
                    headings.chooseChar.y, 
                    headings.chooseChar.height, 
                    ctx, 
                    info.text.chooseChar
                ),

            chooseDiff: 
                this.repeatedHeadingBgs(
                    headingBgs, 
                    "chooseDiff", 
                    info.midX, 
                    headings.title.width + (document.body.clientHeight * 0.002), 
                    info.background.margin, 
                    info.background.margin + (document.body.clientHeight * 0.005), 
                    headings.chooseDiff.y, 
                    headings.chooseDiff.height, 
                    ctx, 
                    info.text.chooseDiff
                ),
            
            directions:
                this.repeatedHeadingBgs(
                    headingBgs, 
                    "directions", 
                    info.midX, 
                    headings.title.width + (document.body.clientHeight * 0.003), 
                    info.background.margin, 
                    info.background.margin + (document.body.clientHeight * 0.005), 
                    headings.directions.y, 
                    headings.directions.height, 
                    ctx, 
                    info.text.directions
                ),        
        }

        let contentBgs = {
            ball: {
                color: "#AFCAE6",
                x: headingBgs.chooseChar.x,
                y: headingBgs.chooseChar.y + headings.chooseChar.height*2 - info.background.margin,
                width: headingBgs.chooseChar.width,
                height: document.body.clientHeight * 0.2,
            },

            diff: {
                color: "#AFCAE6",
                x: headingBgs.chooseDiff.x,
                y: headingBgs.chooseDiff.y + headings.chooseDiff.height*2 - info.background.margin*2 + (document.body.clientHeight * 0.01),
                width: headingBgs.chooseDiff.width,
                height: document.body.clientHeight * 0.3,
            },

            directions: {
                color: "#AFCAE6",
                x: headingBgs.directions.x,
                y: headingBgs.directions.y + headings.directions.height*2 - info.background.margin*2 + (document.body.clientHeight * 0.01),
                width: headingBgs.directions.width,
                height: document.body.clientHeight * 0.2,
            },
        }

        let buttons = {
            arrow: {
                // arrow needs to be defined to addRepeatedButtons below
            },

            diff: {
                startX: grid.col1 - info.button.halfWidth,
                endX: grid.col1 - info.button.halfWidth + info.button.width,
            },

            start: {
                textY: grid.row10 + info.button.startTextY,
                startX: info.midX - info.button.halfWidth - (document.body.clientHeight * 0.01),
                endX: info.midX - info.button.halfWidth + info.button.width,
                bottomY: grid.row10 + info.button.height, 
                width: document.body.clientHeight * 0.12,
                color: "#9592AD",
            },

            random: {
                width: document.body.clientHeight * 0.07,
                height: document.body.clientHeight * 0.02,
                startX: info.midX - document.body.clientHeight * 0.035,
                endX: info.midX - document.body.clientHeight * 0.03 + document.body.clientHeight * 0.065,
                topY: grid.row2 + document.body.clientHeight * 0.12,
                bottomY: grid.row2 + document.body.clientHeight * 0.12 + document.body.clientHeight * 0.02,
                textY: grid.row2 + document.body.clientHeight * 0.135,
                color: "#9592AD",
            },
        }

        let addRepeatedButtons = {
            eyeArrow: 
                this.repeatedArrows(
                    buttons, 
                    "arrow", 
                    "eye", 
                    info.midX, 
                    info.arrow.leftXOffset, 
                    info.arrow.width, 
                    info.arrow.rightXOffset, 
                    grid.row2, 
                    info.arrow.height
                ),

            countryArrow: 
                this.repeatedArrows(
                    buttons, 
                    "arrow", 
                    "country", 
                    info.midX, 
                    info.arrow.leftXOffset, 
                    info.arrow.width, 
                    info.arrow.rightXOffset, 
                    (grid.row2 + info.arrow.bottomYOffset), 
                    info.arrow.height
                ),

            choiceHeadings:
                this.repeatedButtons(
                    buttons, 
                    "diff", 
                    "headings", 
                    grid.row4, 
                    info.button.height, 
                    info.button.textY, 
                    grid.col2, 
                    grid.col3, 
                    grid.col4, 
                    info.button.halfWidth
                ),

            easy: 
                this.repeatedButtons(
                    buttons, 
                    "diff", 
                    "easy", 
                    grid.row5, 
                    info.button.height, 
                    info.button.textY, 
                    grid.col2, 
                    grid.col3, 
                    grid.col4, 
                    info.button.halfWidth
                ),

            medium: 
                this.repeatedButtons(
                    buttons, 
                    "diff", 
                    "medium", 
                    grid.row6, 
                    info.button.height, 
                    info.button.textY, 
                    grid.col2, 
                    grid.col3, 
                    grid.col4, 
                    info.button.halfWidth
                ),

            hard: 
                this.repeatedButtons(
                    buttons, 
                    "diff", 
                    "hard", 
                    grid.row7, 
                    info.button.height, 
                    info.button.textY, 
                    grid.col2, 
                    grid.col3, 
                    grid.col4, 
                    info.button.halfWidth
                ),

            insane: 
                this.repeatedButtons(
                    buttons, 
                    "diff", 
                    "insane", 
                    grid.row8, 
                    info.button.height, 
                    info.button.textY, 
                    grid.col2, 
                    grid.col3, 
                    grid.col4, 
                    info.button.halfWidth
                ),
        }

        let text = {
            arrow: {
                topX: buttons.arrow.eye.leftStartX - info.arrow.textXOffset,
                topY: buttons.arrow.eye.topY + info.arrow.textYOffset,
                bottomX: buttons.arrow.country.leftStartX - info.arrow.textXOffset,
                bottomY: buttons.arrow.country.topY + info.arrow.textYOffset,
            },

            userId: {
                x: buttons.arrow.country.leftStartX - document.body.clientHeight * 0.02,
                y: buttons.arrow.country.bottomY + document.body.clientHeight * 0.04,
            },
        }

        let userIdBox = { // css altered by javascript
            hideUserIdbox: setTimeout(() => {
                document.getElementById('showBox').style.display = "block";
            }, 5000),
            assignAttrs: Object.assign(document.getElementById('username').style, {
                    width: `${document.body.clientHeight * 0.125}px`, 
                    height: `${document.body.clientHeight * 0.02}px`, 
                    top: `${document.body.clientHeight * 0.33}px`,
                    "margin-left": `${document.body.clientHeight * -0.065}px`,
                    "font-size": `${document.body.clientHeight * 0.008}px`,
                    "font-family": 'retropixels',
                }),
            placeholder: (document.getElementById('username').placeholder = this.placeholder),
            value: (document.getElementById('username').value ? this.name = document.getElementById('username').value : this.name = document.getElementById('username').placeholder),
        }

        let ball = {
            x: this.countryChoice == 80 || this.countryChoice == 86 ? info.midX - (document.body.clientHeight * 0.035) : info.midX - (document.body.clientHeight * 0.025),
            country: Object.values(this.countryNames)[this.countryChoice][1],
            countryY: grid.row2 - (document.body.clientHeight * 0.020),
            y: grid.row2 + (document.body.clientHeight * 0.005),
            width: this.countryChoice == 80 || this.countryChoice == 86 ? 70 : 50,
            height: 50,
        }

        let eyes = {
            leftX: info.midX - (document.body.clientHeight * 0.025) + this.eyeCos * info.eyes.moveRange - info.eyes.spaceDistance - info.eyes.xCenter,
            rightX: info.midX - (document.body.clientHeight * 0.025) + this.eyeCos * info.eyes.moveRange + info.eyes.spaceDistance - info.eyes.xCenter,
            y: ball.y + this.eyeSin * info.eyes.moveRange - info.eyes.yCenter,
            mood: this.mood,
            
            rotation: {
                onMouseMove: (onmousemove = (e) => {this.mX = e.x, this.mY = e.y}),
                setDx: this.mX ? this.dx = this.mX - ball.x : this.dx = 0,
                setDy: this.mY ? this.dy = this.mY - ball.y : this.dy = 0,
                eyeAngle: this.eyeAngle = Math.atan2(this.dy, this.dx),
                eyeCosine: this.eyeCos = Math.cos(this.eyeAngle),
                eyeSine: this.eyeSin = Math.sin(this.eyeAngle),
            }
        }

        let clicked = {
            eyesLeft: !this.begin && this.clickArea(buttons.arrow.eye.leftStartX, buttons.arrow.eye.leftEndX, buttons.arrow.eye.topY, buttons.arrow.eye.bottomY),
            eyesRight: !this.begin && this.clickArea(buttons.arrow.eye.rightStartX, buttons.arrow.eye.rightEndX, buttons.arrow.eye.topY, buttons.arrow.eye.bottomY),
            countryLeft: !this.begin && this.clickArea(buttons.arrow.country.leftStartX, buttons.arrow.country.leftEndX, buttons.arrow.country.topY, buttons.arrow.country.bottomY),
            countryRight: !this.begin && this.clickArea(buttons.arrow.country.rightStartX, buttons.arrow.country.rightEndX, buttons.arrow.country.topY, buttons.arrow.country.bottomY),
            random: !this.begin && this.clickArea(buttons.random.startX, buttons.random.endX, buttons.random.topY, buttons.random.bottomY),

            easy: {
                diff: !this.begin && this.clickArea(buttons.diff.startX, buttons.diff.endX, grid.row5, buttons.diff.easy.bottomY),
                cities: !this.begin && this.clickArea(buttons.diff.easy.citiesStartX, buttons.diff.easy.citiesEndX, grid.row5, buttons.diff.easy.bottomY),
                enemies: !this.begin && this.clickArea(buttons.diff.easy.enemiesStartX, buttons.diff.easy.enemiesEndX, grid.row5, buttons.diff.easy.bottomY),
                directions: !this.begin && this.clickArea(buttons.diff.easy.directionsStartX, buttons.diff.easy.directionsEndX, grid.row5, buttons.diff.easy.bottomY),
            },

            medium: {
                diff: !this.begin && this.clickArea(buttons.diff.startX, buttons.diff.endX, grid.row6, buttons.diff.medium.bottomY),
                cities: !this.begin && this.clickArea(buttons.diff.medium.citiesStartX, buttons.diff.medium.citiesEndX, grid.row6, buttons.diff.medium.bottomY),
                enemies: !this.begin && this.clickArea(buttons.diff.medium.enemiesStartX, buttons.diff.medium.enemiesEndX, grid.row6, buttons.diff.medium.bottomY),
                directions: !this.begin && this.clickArea(buttons.diff.medium.directionsStartX, buttons.diff.medium.directionsEndX, grid.row6, buttons.diff.medium.bottomY),
            },

            hard: {
                diff: !this.begin && this.clickArea(buttons.diff.startX, buttons.diff.endX, grid.row7, buttons.diff.hard.bottomY),
                cities: !this.begin && this.clickArea(buttons.diff.hard.citiesStartX, buttons.diff.hard.citiesEndX, grid.row7, buttons.diff.hard.bottomY),
                enemies: !this.begin && this.clickArea(buttons.diff.hard.enemiesStartX, buttons.diff.hard.enemiesEndX, grid.row7, buttons.diff.hard.bottomY),
                directions: !this.begin && this.clickArea(buttons.diff.hard.directionsStartX, buttons.diff.hard.directionsEndX, grid.row7, buttons.diff.hard.bottomY),
            },

            insane: {
                diff: !this.begin && this.clickArea(buttons.diff.startX, buttons.diff.endX, grid.row8, buttons.diff.insane.bottomY),
                cities: !this.begin && this.clickArea(buttons.diff.insane.citiesStartX, buttons.diff.insane.citiesEndX, grid.row8, buttons.diff.insane.bottomY),
                enemies: !this.begin && this.clickArea(buttons.diff.insane.enemiesStartX, buttons.diff.insane.enemiesEndX, grid.row8, buttons.diff.insane.bottomY),
                directions: !this.begin && this.clickArea(buttons.diff.insane.directionsStartX, buttons.diff.insane.directionsEndX, grid.row8, buttons.diff.insane.bottomY),
            },

            start: this.clickArea(buttons.start.startX, buttons.start.endX, grid.row10, buttons.start.bottomY),
        }

        let directions = {
            color: "white",
            x: headingBgs.directions.x + (document.body.clientHeight * 0.01),
            y: headingBgs.directions.y + (document.body.clientHeight * 0.05),
            width: headingBgs.directions.width - (document.body.clientHeight * 0.02),
            height: document.body.clientHeight * 0.18,
            rulesX: headingBgs.directions.x + (document.body.clientHeight * 0.02),
            rule1Y: headingBgs.directions.y + (document.body.clientHeight * 0.07),
            rule2Y: headingBgs.directions.y + (document.body.clientHeight * 0.10),
            rule3Y: headingBgs.directions.y + (document.body.clientHeight * 0.13),
            rule4Y: headingBgs.directions.y + (document.body.clientHeight * 0.16),
            rule5Y: headingBgs.directions.y + (document.body.clientHeight * 0.19),
            rule6Y: headingBgs.directions.y + (document.body.clientHeight * 0.22),
        }

        let setEverything = {
            buttonColors: {
                easy: {
                    cities: this.citiesDiff === "easy" ? buttons.diff.easy.citiesColor = "gold" : "",
                    enemies: this.enemiesDiff === "easy" ? buttons.diff.easy.enemiesColor = "gold" : "",
                    directions: this.directionsDiff === "easy" ? buttons.diff.easy.directionsColor = "gold" : "",
    
                },
    
                medium: {
                    cities: this.citiesDiff === "medium" ? buttons.diff.medium.citiesColor = "gold" : "",
                    enemies: this.enemiesDiff === "medium" ? buttons.diff.medium.enemiesColor = "gold" : "",
                    directions: this.directionsDiff === "medium" ? buttons.diff.medium.directionsColor = "gold" : "",
    
                },
    
                hard: {
                    cities: this.citiesDiff === "hard" ? buttons.diff.hard.citiesColor = "gold" : "",
                    enemies: this.enemiesDiff === "hard" ? buttons.diff.hard.enemiesColor = "gold" : "",
                    directions: this.directionsDiff === "hard" ? buttons.diff.hard.directionsColor = "gold" : "",
    
                },
    
                insane: {
                    cities: this.citiesDiff === "insane" ? buttons.diff.insane.citiesColor = "gold" : "",
                    enemies: this.enemiesDiff === "insane" ? buttons.diff.insane.enemiesColor = "gold" : "",
                    directions: this.directionsDiff === "insane" ? buttons.diff.insane.directionsColor = "gold" : "",
                },
            },

            clickChoices: {
                getMouseXY: (onclick = (e) => {this.mouseX = e.x, this.mouseY = e.y}),

                arrows: {
                    leftEye: clicked.eyesLeft ? this.eyeChoice -= 1 : "",
                    rightEye: clicked.eyesRight ? this.eyeChoice += 1 : "",
                    negativeEyeChoice: this.eyeChoice < 0 ? this.eyeChoice = this.eyes.length - 1 : "",
                    tooMuchEyeChoice: this.eyeChoice > this.eyes.length - 1 ? this.eyeChoice = 0 : "",
                    leftCountry: clicked.countryLeft ? this.countryChoice -= 1 : "",
                    rightCountry: clicked.countryRight ? this.countryChoice += 1 : "",
                    negativeCountryChoice: this.countryChoice < 0 ? this.countryChoice = Object.keys(this.countryNames).length - 1 : "",
                    tooMuchCountryChoice: this.countryChoice > Object.keys(this.countryNames).length - 1 ? this.countryChoice = 0 : "",
                },

                random: clicked.random ? (  
                    this.countryChoice = this.getRandomNumber(Object.keys(this.countryNames).length), 
                    this.eyeChoice = this.getRandomNumber(this.eyes.length), 
                    this.placeholder = new Id().create()
                ) : '',

                easy: {
                    diff: clicked.easy.diff ? (this.difficulty = "easy", this.citiesDiff = "easy", this.enemiesDiff = "easy", this.directionsDiff = "easy") : "",
                    cities: clicked.easy.cities ? this.citiesDiff = "easy" : "",
                    enemies: clicked.easy.enemies ? this.enemiesDiff = "easy" : "",
                    directions: clicked.easy.directions ? this.directionsDiff = "easy" : "",
                },

                medium: {
                    diff: clicked.medium.diff ? (this.difficulty = "medium", this.citiesDiff = "medium", this.enemiesDiff = "medium", this.directionsDiff = "medium") : "",
                    cities: clicked.medium.cities ? this.citiesDiff = "medium" : "",
                    enemies: clicked.medium.enemies ? this.enemiesDiff = "medium" : "",
                    directions: clicked.medium.directions ? this.directionsDiff = "medium" : "",
                },

                hard: {
                    diff: clicked.hard.diff ? (this.difficulty = "hard", this.citiesDiff = "hard", this.enemiesDiff = "hard", this.directionsDiff = "hard") : "",
                    cities: clicked.hard.cities ? this.citiesDiff = "hard" : "",
                    enemies: clicked.hard.enemies ? this.enemiesDiff = "hard" : "",
                    directions: clicked.hard.directions ? this.directionsDiff = "hard" : "",
                },

                insane: {
                    diff: clicked.insane.diff ? (this.difficulty = "insane", this.citiesDiff = "insane", this.enemiesDiff = "insane", this.directionsDiff = "insane") : "",
                    cities: clicked.insane.cities ? this.citiesDiff = "insane" : "",
                    enemies: clicked.insane.enemies ? this.enemiesDiff = "insane" : "",
                    directions: clicked.insane.directions ? this.directionsDiff = "insane" : "",
                },

                start: clicked.start? this.begin = true : "",
                nullMouseX: this.mouseX = null, 
                nullMouseY: this.mouseY = null,
            },
        }
        
        let drawEverything = {
            maps: {
                topLeft: (ctx.drawImage(this.topLeftMap, 0, 0)),
                topRight: (ctx.drawImage(this.topRightMap, this.squareWidth, 0)),
                bottomLeft: (ctx.drawImage(this.bottomLeftMap, 0, this.squareHeight)),
                bottomRight: (ctx.drawImage(this.bottomRightMap, this.squareWidth, this.squareHeight)),
            },

            title: {
                background: this.drawRect(ctx, info.background.color, headingBgs.title.x, headingBgs.title.y, headingBgs.title.width, headingBgs.title.height),
                text: this.drawText(ctx, info.font.title, info.font.color, info.font.center, info.text.title, info.midX, headings.title.y),
            },

            chooseChar: {
                headingBg: this.drawRect(ctx, info.background.color, headingBgs.chooseChar.x, headingBgs.chooseChar.y, headingBgs.chooseChar.width, headingBgs.chooseChar.height),
                heading: this.drawText(ctx, info.font.medium, info.font.color, info.font.center, info.text.chooseChar, info.midX, headings.chooseChar.y),
                ballChoiceBg: this.drawRect(ctx, contentBgs.ball.color, contentBgs.ball.x, contentBgs.ball.y, contentBgs.ball.width, contentBgs.ball.height),
                ball: (ctx.drawImage(this.ball, ball.x, ball.y, (ball.width * (document.body.clientHeight * 0.0011)), (ball.height * (document.body.clientHeight * 0.0011)))),
                eyes: this.drawEyesAndClones(ctx, eyes.leftX, eyes.rightX, eyes.y, eyes.mood, true),
                countryName: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, ball.country, info.midX, ball.countryY),
            },

            arrows : {
                eyeText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.right, info.text.topArrow, text.arrow.topX, text.arrow.topY),
                eyeLeft: (ctx.drawImage(this.topLeftArrow, buttons.arrow.eye.leftStartX, buttons.arrow.eye.topY, (this.topLeftArrow.width * (document.body.clientHeight * 0.0011)), (this.topLeftArrow.width * (document.body.clientHeight * 0.0011)))),
                eyeRight: (ctx.drawImage(this.topRightArrow, buttons.arrow.eye.rightStartX, buttons.arrow.eye.topY, (this.topRightArrow.width * (document.body.clientHeight * 0.0011)), (this.topRightArrow.width * (document.body.clientHeight * 0.0011)))),
                countryText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.right, info.text.bottomArrow, text.arrow.bottomX, text.arrow.bottomY),
                countryLeft: (ctx.drawImage(this.bottomLeftArrow, buttons.arrow.country.leftStartX, buttons.arrow.country.topY, (this.bottomLeftArrow.width * (document.body.clientHeight * 0.0011)), (this.bottomLeftArrow.width * (document.body.clientHeight * 0.0011)))),
                countryRight: (ctx.drawImage(this.bottomRightArrow, buttons.arrow.country.rightStartX, buttons.arrow.country.topY, (this.bottomRightArrow.width * (document.body.clientHeight * 0.0011)), (this.bottomRightArrow.width * (document.body.clientHeight * 0.0011)))),
            },

            userIdText: 
                this.drawText(ctx, info.font.tiny, info.font.color, info.font.right, info.text.userId, text.userId.x, text.userId.y),

            randomButton: {
                background: this.drawRect(ctx, buttons.random.color, buttons.random.startX , buttons.random.topY, buttons.random.width, buttons.random.height),
                text: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.random, info.midX, buttons.random.textY),
            },

            chooseDiff: {
                headingBg: this.drawRect(ctx, info.background.color, headingBgs.chooseDiff.x, headingBgs.chooseDiff.y, headingBgs.chooseDiff.width, headingBgs.chooseDiff.height),
                heading: this.drawText(ctx, info.font.medium, info.font.color, info.font.center, info.text.chooseDiff, info.midX, headings.chooseDiff.y),
                sectionBg: this.drawRect(ctx, contentBgs.diff.color, contentBgs.diff.x, contentBgs.diff.y, contentBgs.diff.width, contentBgs.diff.height),

                choiceHeadings: {
                    citiesBg: this.drawRect(ctx, info.button.bgColor, buttons.diff.easy.citiesStartX, grid.row4, info.button.width, info.button.height),
                    citiesText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.cities, grid.col2, buttons.diff.headings.textY),
                    enemiesBg: this.drawRect(ctx, info.button.bgColor, buttons.diff.easy.enemiesStartX, grid.row4, info.button.width, info.button.height),
                    enemiesText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.enemies, grid.col3, buttons.diff.headings.textY),
                    directionsBg: this.drawRect(ctx, info.button.bgColor, buttons.diff.easy.directionsStartX, grid.row4, info.button.width, info.button.height),
                    directionsText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.helper, grid.col4, buttons.diff.headings.textY),
                },

                easy: {
                    diffBg: this.drawRect(ctx, info.button.bgColor, buttons.diff.startX, grid.row5, info.button.width, info.button.height),
                    diffText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.easy, grid.col1, buttons.diff.easy.textY),
                    citiesBg: this.drawRect(ctx, buttons.diff.easy.citiesColor, buttons.diff.easy.citiesStartX, grid.row5, info.button.width, info.button.height),
                    citiesText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.easyCities, grid.col2, buttons.diff.easy.textY),
                    enemiesBg: this.drawRect(ctx, buttons.diff.easy.enemiesColor, buttons.diff.easy.enemiesStartX, grid.row5, info.button.width, info.button.height),
                    enemiesText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.easyEnemies, grid.col3, buttons.diff.easy.textY),
                    directionsBg: this.drawRect(ctx, buttons.diff.easy.directionsColor, buttons.diff.easy.directionsStartX, grid.row5, info.button.width, info.button.height),
                    directionsText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.easyDirections, grid.col4, buttons.diff.easy.textY),
                },

                medium: {
                    diffBg: this.drawRect(ctx, info.button.bgColor, buttons.diff.startX, grid.row6, info.button.width, info.button.height),
                    diffText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.medium, grid.col1, buttons.diff.medium.textY),
                    citiesBg: this.drawRect(ctx, buttons.diff.medium.citiesColor, buttons.diff.medium.citiesStartX, grid.row6, info.button.width, info.button.height),
                    citiesText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.mediumCities, grid.col2, buttons.diff.medium.textY),
                    enemiesBg: this.drawRect(ctx, buttons.diff.medium.enemiesColor, buttons.diff.medium.enemiesStartX, grid.row6, info.button.width, info.button.height),
                    enemiesText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.mediumEnemies, grid.col3, buttons.diff.medium.textY),
                    directionsBg: this.drawRect(ctx, buttons.diff.medium.directionsColor, buttons.diff.medium.directionsStartX, grid.row6, info.button.width, info.button.height),
                    directionsText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.mediumDirections, grid.col4, buttons.diff.medium.textY),
                },

                hard: {
                    diffBg: this.drawRect(ctx, info.button.bgColor, buttons.diff.startX, grid.row7, info.button.width, info.button.height),
                    diffText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.hard, grid.col1, buttons.diff.hard.textY),
                    citiesBg: this.drawRect(ctx, buttons.diff.hard.citiesColor, buttons.diff.hard.citiesStartX, grid.row7, info.button.width, info.button.height),
                    citiesText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.hardCities, grid.col2, buttons.diff.hard.textY),
                    enemiesBg: this.drawRect(ctx, buttons.diff.hard.enemiesColor, buttons.diff.hard.enemiesStartX, grid.row7, info.button.width, info.button.height),
                    enemiesText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.hardEnemies, grid.col3, buttons.diff.hard.textY),
                    directionsBg: this.drawRect(ctx, buttons.diff.hard.directionsColor, buttons.diff.hard.directionsStartX, grid.row7, info.button.width, info.button.height),
                    directionsText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.hardDirections, grid.col4, buttons.diff.hard.textY),
                },

                insane: {
                    diffBg: this.drawRect(ctx, info.button.bgColor, buttons.diff.startX, grid.row8, info.button.width, info.button.height),
                    diffText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.insane, grid.col1, buttons.diff.insane.textY),
                    citiesBg: this.drawRect(ctx, buttons.diff.insane.citiesColor, buttons.diff.insane.citiesStartX, grid.row8, info.button.width, info.button.height),
                    citiesText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.insaneCities, grid.col2, buttons.diff.insane.textY),
                    enemiesBg: this.drawRect(ctx, buttons.diff.insane.enemiesColor, buttons.diff.insane.enemiesStartX, grid.row8, info.button.width, info.button.height),
                    enemiesText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.insaneEnemies, grid.col3, buttons.diff.insane.textY),
                    directionsBg: this.drawRect(ctx, buttons.diff.insane.directionsColor, buttons.diff.insane.directionsStartX, grid.row8, info.button.width, info.button.height),
                    directionsText: this.drawText(ctx, info.font.tiny, info.font.color, info.font.center, info.text.insaneDirections, grid.col4, buttons.diff.insane.textY),
                },
            },

            directions: {
                headingBackground: this.drawRect(ctx, info.background.color, headingBgs.directions.x, headingBgs.directions.y, headingBgs.directions.width, headingBgs.directions.height),
                headingText: this.drawText(ctx, info.font.medium, info.font.color, info.font.center, info.text.directions, info.midX, headings.directions.y),
                paperBackground: this.drawRect(ctx, contentBgs.directions.color, contentBgs.directions.x, contentBgs.directions.y, contentBgs.directions.width, contentBgs.directions.height),
                paper: this.drawRect(ctx, directions.color, directions.x, directions.y, directions.width, directions.height),
                rule1: this.drawText(ctx, info.font.tiny, info.font.directions, info.font.left, info.text.rule1, directions.rulesX, directions.rule1Y),
                rule2: this.drawText(ctx, info.font.tiny, info.font.directions, info.font.left, info.text.rule2, directions.rulesX, directions.rule2Y),
                rule3: this.drawText(ctx, info.font.tiny, info.font.directions, info.font.left, info.text.rule3, directions.rulesX, directions.rule3Y),
                rule4: this.drawText(ctx, info.font.tiny, info.font.directions, info.font.left, info.text.rule4, directions.rulesX, directions.rule4Y),
                rule5: this.drawText(ctx, info.font.tiny, info.font.directions, info.font.left, info.text.rule5, directions.rulesX, directions.rule5Y),
                rule6: this.drawText(ctx, info.font.tiny, info.font.directions, info.font.left, info.text.rule6, directions.rulesX, directions.rule6Y),

            },

            start: {
                background: this.drawRect(ctx, buttons.start.color, buttons.start.startX, grid.row10, buttons.start.width, info.button.height), // as of 3/8/2023 firefox doesnt have roundrect, should change very soon
                text: this.drawText(ctx, info.button.font, info.font.color, info.font.center, info.text.start, info.midX, buttons.start.textY),
            },
        }
    }

    update(ctx, canvasWidth){
        this.generateMaps();
        this.draw(ctx, canvasWidth);
    }
}

class Player extends Ball{
    constructor(){
        super();
        this.goUp = false;
        this.goDown = false;
        this.goLeft = false;
        this.goRight = false;
        this.angle = 0;
        this.id = "";
        this.distanceTraveled = 0;
        this.mouseX = 0;
        this.mouseY = 0;
    };
    
    move(){
        let setActions = {
            goUp: this.goUp ? (this.y -= this.moveSpeed, this.distanceTraveled += 5) : "",
            goDown: this.goDown ? (this.y += this.moveSpeed, this.distanceTraveled += 5) : "",
            goLeft: this.goLeft ? (this.x -= this.moveSpeed, this.distanceTraveled += 3) : "",
            goRight: this.goRight? (this.x += this.moveSpeed, this.distanceTraveled += 3) : "",
            pastLeftMapEdge: this.x < 0 ? this.x += this.mapWidth : "",
            pastRightMapEdge: this.x >= this.mapWidth? this.x -= this.mapWidth : "",
        }
    };

    adjustHeight(canvasWidth, canvasHeight){
        let setPlayerPos = {
            x: this.screenX = this.x + (canvasWidth/2 - this.width/2) - this.x,
            y: this.screenY = this.y + (canvasHeight/2 - this.height/2) - this.y,
            atVeryBottomY: this.screenY + (canvasHeight/2 + this.y - this.mapHeight),
        }
        
        let setScreenPos = {
            playerAtVeryTopY: this.y <= canvasHeight/2 ? this.screenY = this.y + (0 - this.height/2) - 0 : "",
            playerPastTopY: this.y <= 0 ? this.y = 0 : "",
            playerAtVeryBottomY: this.y >= this.mapHeight - canvasHeight/2 ? this.screenY = setPlayerPos.atVeryBottomY : "",
            playerPastBottomY: this.y >= this.mapHeight ? this.y = this.mapHeight : "",
        }
    };

    aim(flagX, flagY, healthpackX, healthpackY){
        let offsets = {
            flag: 0,
            healthpack: 0,
        }

        let gunAim = {
            mouseXY: onmousemove = (e) => {this.mouseX = e.x, this.mouseY = e.y;},
            dx: this.gunDx = this.mouseX - this.screenX,
            dy: this.gunDy = this.mouseY - this.screenY,
            angle: this.gunAngle = Math.atan2(this.gunDy, this.gunDx),
            gunX: this.gunX = Math.cos(this.gunAngle),
            gunY: this.gunY = Math.sin(this.gunAngle),
        }

        let flagArrowAim = {
            leftIsCloser: Math.abs(flagX - this.x + this.mapWidth) < Math.abs(flagX - this.x) ? offsets.flag = this.mapWidth : "",
            rightIscloser: Math.abs(flagX - this.x - this.mapWidth) < Math.abs(flagX - this.x) ? offsets.flag = -this.mapWidth : "",
            dx: this.flagArrowDx = flagX - this.x + offsets.flag,
            dy: this.flagArrowDy = flagY - this.y,
            angle: this.flagArrowAngle = Math.atan2(this.flagArrowDy, this.flagArrowDx),
            arrowX: this.flagArrowX = Math.cos(this.flagArrowAngle),
            arrowY: this.flagArrowY = Math.sin(this.flagArrowAngle),
        }

        let healthpackArrowAim = {
            leftIsCloser: Math.abs(healthpackX - this.x + this.mapWidth) < Math.abs(healthpackX - this.x) ? offsets.healthpack = this.mapWidth : "",
            rightIsCloser: Math.abs(healthpackX - this.x - this.mapWidth) < Math.abs(healthpackX - this.x) ? offsets.healthpack = -this.mapWidth : "",
            dx: this.healthArrowDx = healthpackX - this.x + offsets.healthpack,
            dy: this.healthArrowDy = healthpackY - this.y,
            angle: this.healthArrowAngle = Math.atan2(this.healthArrowDy, this.healthArrowDx),
            arrowX: this.healthArrowX = Math.cos(this.healthArrowAngle),
            arrowY: this.healthArrowY = Math.sin(this.healthArrowAngle),
        }
    };

    update(ctx, canvasWidth, canvasHeight, flagX, flagY, healthpackX, healthpackY, directionsDiff){
        this.maxHealth();
        this.move();
        this.adjustHeight(canvasWidth, canvasHeight);
        this.aim(flagX, flagY, healthpackX, healthpackY);
        this.draw(ctx, directionsDiff);
    };
};

class Enemy extends Ball{
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
        this.bullets = [];
        this.hit = false;
        this.shoot = false;
        this.lastShot = Date.now();
        this.target = {x:0, y:0};
        this.radar = 800;
        this.aimAtLeftClone = false;
        this.aimAtRightClone = false;
        this.aimAtBall = false;
        this.time = Date.now();
        this.firerate = 300;
        this.knowChance = Math.random();
        this.knowsCity = false;
        this.wrongCityChoice = Math.floor(this.knowChance * 10)
    };
    
    aim(){
        let aimAtBall = {
            aim: this.aimAtLeftClone 
                    ? this.dx = this.target.x - this.x - this.mapWidth 
                    : this.aimAtRightClone
                        ? this.dx = this.target.x - this.x + this.mapWidth
                        : this.aimAtBall
                            ? this.dx = this.target.x - this.x
                            : this.dx = 0,
            leftOffset: this.dx < -13000 ? this.dx += this.mapWidth : "",
            rightOffset: this.dx > 13000 ? this.dx -= this.mapWidth : "",
            dy: this.dy = this.target.y - this.y,
            arctangent: this.gunAngle = Math.atan2(this.dy, this.dx),
            cosine: this.gunX = Math.cos(this.gunAngle),
            sine: this.gunY = Math.sin(this.gunAngle),
        }
    };

    getMood(){
        let setMood = {
            mood:   this.mood = this.eyes[this.eyeChoice],
        }
    }

    pullTrigger(target){
        let setTarget = {
            target: this.target = target,
        }

        let closeTo = (offset) => {
            let xDest = Math.abs(this.x - offset - this.target.x);
            let yDest = Math.abs(this.y - this.target.y);
            let hasntShot = Date.now() - this.lastShot > this.firerate;
            let notSelf = xDest > 0 && yDest > 0;
            let withinRadar = xDest <= this.radar && yDest <= this.radar;

            return notSelf && withinRadar && hasntShot;
        }

        let checks = {
            ifAlreadyShot: this.shoot && Date.now() - this.lastShot < this.firerate,
            ifCloseToNormalBall: closeTo(0),
            ifCloseToLeftBall: closeTo(-this.mapWidth),
            ifCloseToRightBall: closeTo(this.mapWidth),
        }

        let setAim = {
            alreadyShot: checks.ifAlreadyShot ? this.shoot = false : "",
            closeToNormalBall: checks.ifCloseToNormalBall ? (this.aimAtBall = true, this.aimAtRightClone = false, this.aimAtLeftClone = false, this.shoot = true) : "",
            closeToLeftBall: checks.ifCloseToLeftBall ? (this.aimAtBall = false, this.aimAtLeftClone = true, this.aimAtRightClone = false, this.shoot = true) : "",
            closeToRightBall: checks.ifCloseToRightBall ? (this.aimAtBall = false, this.aimAtLeftClone = false, this.aimAtRightClone = true, this.shoot = true) : "",
            shotYet: this.shoot ? this.lastShot = Date.now() : "",
        }
    }

    sketch(canvasWidth, canvasHeight, playerX, playerY, flagX, flagY, healthpackX, healthpackY, wrongCity0X, wrongCity0Y, wrongCity1X, wrongCity1Y, 
        wrongCity2X, wrongCity2Y, wrongCity3X, wrongCity3Y, wrongCity4X, wrongCity4Y, wrongCity5X, wrongCity5Y, wrongCity6X, wrongCity6Y, 
        wrongCity7X, wrongCity7Y, wrongCity8X, wrongCity8Y, wrongCity9X, wrongCity9Y, difficulty){

        let info = {
            tarX: flagX,
            tarY: flagY,
            setWrongCityX: this.wrongCityX = wrongCity0X,
            setWrongCityY: this.wrongCityY = wrongCity0Y,
            knowsCity: difficulty === "easy" && this.knowChance >= 0.3 
                        ? this.knowsCity = true 
                        : difficulty === "medium" && this.knowChance >= 0.5 
                            ? this.knowsCity = true 
                            : difficulty === "hard" && this.knowChance >= 0.7 
                                ? this.knowsCity = true 
                                : difficulty === "insane" && this.knowChance >= 0.9 
                                    ? this.knowsCity = true 
                                    : this.knowsCity = false,
            getWrongCityXY: this.wrongCityChoice === 0 
                                ? (this.wrongCityX = wrongCity0X, this.wrongCityY = wrongCity0Y) 
                                : this.wrongCityChoice === 1 
                                    ? (this.wrongCityX = wrongCity1X, this.wrongCityY = wrongCity1Y) 
                                    : this.wrongCityChoice === 2 
                                        ? (this.wrongCityX = wrongCity2X, this.wrongCityY = wrongCity2Y) 
                                        : this.wrongCityChoice === 3 
                                            ? (this.wrongCityX = wrongCity3X, this.wrongCityY = wrongCity3Y) 
                                            : this.wrongCityChoice === 4 
                                                ? (this.wrongCityX = wrongCity4X, this.wrongCityY = wrongCity4Y) 
                                                : this.wrongCityChoice === 5 
                                                    ? (this.wrongCityX = wrongCity5X, this.wrongCityY = wrongCity5Y) 
                                                    : this.wrongCityChoice === 6 
                                                        ? (this.wrongCityX = wrongCity6X, this.wrongCityY = wrongCity6Y) 
                                                        : this.wrongCityChoice === 7 
                                                            ? (this.wrongCityX = wrongCity7X, this.wrongCityY = wrongCity7Y) 
                                                            : this.wrongCityChoice === 8 
                                                                ? (this.wrongCityX = wrongCity8X, this.wrongCityY = wrongCity8Y) 
                                                                : (this.wrongCityX = wrongCity9X, this.wrongCityY = wrongCity9Y),
        }

        let chooseTarget = {
            getFlagOrHealthpack: this.health < 100
                                    ? this.knowsCity
                                        ? (info.tarX = healthpackX, info.tarY = healthpackY)
                                        : (info.tarX = this.wrongCityX, info.tarY = this.wrongCityY)
                                    : this.health === 100
                                        ? this.knowsCity
                                            ? (info.tarX = flagX, info.tarY = flagY)
                                            : (info.tarX = this.wrongCityX, info.tarY = this.wrongCityY)
                                        : (info.tarX = this.wrongCityX, info.tarY = this.wrongCityY),
        }

        let getTargetDx = {
            left: info.tarX - this.x - this.mapWidth,
            right: info.tarX - this.x + this.mapWidth,
            normal: info.tarX - this.x,
        }

        let closestTarget = {
            left: Math.abs(getTargetDx.left) < Math.abs(getTargetDx.right) && Math.abs(getTargetDx.left) < Math.abs(getTargetDx.normal),
            right: Math.abs(getTargetDx.right) < Math.abs(getTargetDx.left) && Math.abs(getTargetDx.right) < Math.abs(getTargetDx.normal),
            normal: Math.abs(getTargetDx.normal) < Math.abs(getTargetDx.left) && Math.abs(getTargetDx.normal) < Math.abs(getTargetDx.right),
        }

        let setTarget = {
            leftDx: closestTarget.left ? this.tarDx = getTargetDx.left : "",
            rightDx: closestTarget.right ? this.tarDx = getTargetDx.right : "",
            normalDx: closestTarget.normal ? this.tarDx = getTargetDx.normal : "",
            dy: this.fdy = info.tarY - this.y,
            arctangent: this.fa = Math.atan2(this.fdy, this.tarDx),
            cosine: this.fx = Math.cos(this.fa),
            sine: this.fy = Math.sin(this.fa),
        }

        let setXY = {
            x: this.x += this.fx * this.moveSpeed,
            y: this.y += this.fy * this.moveSpeed,
            pastLeftEdge: this.x < 0 ? this.x += this.mapWidth : "",
            pastRightEdge: this.x >= this.mapWidth ? this.x -= this.mapWidth : "",
            pastTopEdge: this.y <= 0 ? this.y = 0 : "",
            nearTopEdge: this.y <= canvasHeight/2 ?  this.screenY = this.y + (0 - this.height/2) - playerY : "",
            nearBottomEdge: this.y >= this.mapHeight - canvasHeight/2 ? this.screenY = this.y + (canvasHeight/2 - this.height/2) - playerY + (canvasHeight/2 + (this.y - this.mapHeight)) : "",
            pastBottomEdge: this.y >= this.mapHeight ? this.y = this.mapHeight : "",
        }

        let adjustMap = {
            screenX: this.screenX = this.x + (canvasWidth/2 - this.width/2) - playerX,
            screenY: this.screenY = this.y + (canvasHeight/2 - this.height/2) - playerY,
            nearTopEdge: playerY < canvasHeight/2 ? this.screenY = this.y + (canvasHeight/2 - this.height/2) - playerY - (canvasHeight/2 - playerY) : "",
            nearBottomEdge: playerY > this.mapHeight - canvasHeight/2 ? this.screenY = this.y + (canvasHeight/2 - this.height/2) - playerY + (playerY-this.mapHeight + canvasHeight/2) : "",
        }
    };

    update(ctx, canvasWidth, canvasHeight, playerX, playerY, target, flagX, flagY, healthpackX, healthpackY, wrongCity0X, wrongCity0Y, wrongCity1X, wrongCity1Y, 
        wrongCity2X, wrongCity2Y, wrongCity3X, wrongCity3Y, wrongCity4X, wrongCity4Y, wrongCity5X, wrongCity5Y, wrongCity6X, wrongCity6Y, 
        wrongCity7X, wrongCity7Y, wrongCity8X, wrongCity8Y, wrongCity9X, wrongCity9Y, difficulty){
        this.getMood();
        this.maxHealth();
        this.aim();
        this.pullTrigger(target);
        this.sketch(canvasWidth, canvasHeight, playerX, playerY, flagX, flagY, healthpackX, healthpackY, wrongCity0X, wrongCity0Y, wrongCity1X, wrongCity1Y, 
            wrongCity2X, wrongCity2Y, wrongCity3X, wrongCity3Y, wrongCity4X, wrongCity4Y, wrongCity5X, wrongCity5Y, wrongCity6X, wrongCity6Y, 
            wrongCity7X, wrongCity7Y, wrongCity8X, wrongCity8Y, wrongCity9X, wrongCity9Y, difficulty);
        this.draw(ctx);
    }
}

class Flag extends Target{
    constructor(){
        super();
        this.width = 10;
        this.halfWidth = this.width/2;
        this.height = 30;
        this.halfHeight = this.height/2;
        this.image.src = "img/flag.png";
        this.targetIsFlag = true;
    }

    getSizes(){
        this.destWidth = document.body.clientHeight * 0.010;
        this.destHeight = document.body.clientHeight * 0.030;
        this.destImgX = document.body.clientHeight * 0.025;
        this.destImgY = document.body.clientHeight * 0.010;
        this.destTextX = document.body.clientHeight * 0.050;
        this.destTextY = document.body.clientHeight * 0.035;
    }

    update(ctx, canvasWidth, canvasHeight, playerX, playerY, playerHeight, citiesDiff){
        this.getSizes();
        this.matchDifficulty(citiesDiff);
        this.drawTarget(ctx, canvasWidth, canvasHeight, playerX, playerY, playerHeight);
    }
}

class Healthpack extends Target{
    constructor (){
        super();
        this.width = 30;
        this.halfWidth = this.width/2;
        this.height = 30;
        this.halfHeight = this.height/2;
        this.image.src = "img/healthpack.png";
        this.targetIsHealthpack = true;
    }

    getSizes(){
        this.destWidth = document.body.clientHeight * 0.030;
        this.destHeight = document.body.clientHeight * 0.030;
        this.destImgX = document.body.clientHeight * 0.010;
        this.destImgY = document.body.clientHeight * 0.050;
        this.destTextX = document.body.clientHeight * 0.050;
        this.destTextY = document.body.clientHeight * 0.075;
    }

    update(ctx, canvasWidth, canvasHeight, playerX, playerY, playerHeight, citiesDiff){
        this.getSizes();
        this.matchDifficulty(citiesDiff);
        this.drawTarget(ctx, canvasWidth, canvasHeight, playerX, playerY, playerHeight);
    }
}

class WrongCity extends Target{
    constructor (){
        super();
        this.width = 30;
        this.height = 30;
        this.image.src = "img/nothing.png";
        this.targetIsWrongCity = true;
    }

    getSizes(){
        this.destWidth = document.body.clientHeight * 0.030;
        this.destHeight = document.body.clientHeight * 0.030;
        this.destImgX = document.body.clientHeight * 0.010;
        this.destImgY = document.body.clientHeight * 0.050;
        this.destTextX = document.body.clientHeight * 0.050;
        this.destTextY = document.body.clientHeight * 0.075;
    }

    update(ctx, canvasWidth, canvasHeight, playerX, playerY, playerHeight, difficulty){
        this.getSizes();
        this.matchDifficulty(difficulty);
        this.drawTarget(ctx, canvasWidth, canvasHeight, playerX, playerY, playerHeight);
    }
}

class Launcher extends Entity {
    constructor(){
        super();
        this.x = this.getRandomNumber(this.mapWidth);
        this.y = this.getRandomNumber(this.mapHeight);
        this.isMap = false;
        this.isPlayer = false;
        this.isFlag = false;
        this.isScore = false;
        this.isHealthpack = false;
        this.isGameover = false;
        this.isWrongCity0 = false;
        this.isWrongCity1 = false;
        this.isWrongCity2 = false;
        this.isWrongCity3 = false;
        this.isWrongCity4 = false;
        this.isWrongCity5 = false;
        this.isWrongCity6 = false;
        this.isWrongCity7 = false;
        this.isWrongCity8 = false;
        this.isWrongCity9 = false;
        this.time = Date.now();
        this.balls = [];
        this.bullets = [];
        this.isLoading = true;
        this.isStartscreen = true;
        this.begin = false;
        this.finalScore = 0;
        this.scoreTally = {};
        this.killTally = {};
        this.enemiesDiff = "easy";
        this.enemySpawnrate = 30000;
        this.citiesDiff = "easy";
        this.directionsDiff = "easy";
        this.userId = "test";
        this.go = this.fps();
    }

    fps(){
        this.then = performance.now();
        this.now;

        function animate() {

            this.now = performance.now();
            this.then = this.now;

        }

        setInterval(animate, 1000/60);
    }

    getSpawnrate(){
        let setSpawnrate = {
            easy: this.enemiesDiff === "easy" ? this.enemySpawnrate = 30000 : "",
            medium: this.enemiesDiff === "medium" ? this.enemySpawnrate = 20000 : "",
            hard: this.enemiesDiff === "hard" ? this.enemySpawnrate = 10000 : "",
            insane: this.enemiesDiff === "insane" ? this.enemySpawnrate = 5000 : "",
        }
    }

    launch(ctx, canvasWidth, canvasHeight){
        let createNewObject = {
            map: new Map,
            player: new Player,
            flag: new Flag,
            enemy: new Enemy(this.x, this.y),
            score: new Score,
            healthpack: new Healthpack,
            wrongCity0: new WrongCity,
            wrongCity1: new WrongCity,
            wrongCity2: new WrongCity,
            wrongCity3: new WrongCity,
            wrongCity4: new WrongCity,
            wrongCity5: new WrongCity,
            wrongCity6: new WrongCity,
            wrongCity7: new WrongCity,
            wrongCity8: new WrongCity,
            wrongCity9: new WrongCity,
            gameover: new Gameover(ctx, canvasWidth, canvasHeight),
            getSpawnrate: this.getSpawnrate(),
        }

        let setObjects = {
            map: !this.isMap ? (this.map = createNewObject.map, this.isMap = true) : "",
            player: !this.isPlayer ?  (this.player = createNewObject.player, this.balls.push(this.player), this.isPlayer = true) : "",    
            flag: !this.isFlag ? (this.flag = createNewObject.flag, this.isFlag = true) : "",    
            enemy: this.begin && Date.now() - this.enemySpawnrate > this.time ? (this.balls.push(createNewObject.enemy), this.time = Date.now()) : "",
            score: !this.isScore ? (this.score = createNewObject.score, this.isScore = true) : "",
            healthpack: !this.isHealthpack ? (this.healthpack = createNewObject.healthpack, this.isHealthpack = true) : "", 
            wrongCity0: !this.isWrongCity0 ? (this.wrongCity0 = createNewObject.wrongCity0, this.isWrongCity0 = true) : "",
            wrongCity1: !this.isWrongCity1 ? (this.wrongCity1 = createNewObject.wrongCity1, this.isWrongCity1 = true) : "",
            wrongCity2: !this.isWrongCity2 ? (this.wrongCity2 = createNewObject.wrongCity2, this.isWrongCity2 = true) : "",
            wrongCity3: !this.isWrongCity3 ? (this.wrongCity3 = createNewObject.wrongCity3, this.isWrongCity3 = true) : "",
            wrongCity4: !this.isWrongCity4 ? (this.wrongCity4 = createNewObject.wrongCity4, this.isWrongCity4 = true) : "",
            wrongCity5: !this.isWrongCity5 ? (this.wrongCity5 = createNewObject.wrongCity5, this.isWrongCity5 = true) : "",
            wrongCity6: !this.isWrongCity6 ? (this.wrongCity6 = createNewObject.wrongCity6, this.isWrongCity6 = true) : "",
            wrongCity7: !this.isWrongCity7 ? (this.wrongCity7 = createNewObject.wrongCity7, this.isWrongCity7 = true) : "",
            wrongCity8: !this.isWrongCity8 ? (this.wrongCity8 = createNewObject.wrongCity8, this.isWrongCity8 = true) : "",
            wrongCity9: !this.isWrongCity9 ? (this.wrongCity9 = createNewObject.wrongCity9, this.isWrongCity9 = true) : "",
            gameover: !this.balls.includes(this.player) && !this.isGameover ? this.gameover = createNewObject.gameover : "",
        }

        let gameover = {
            playerDead: !this.balls.includes(this.player) ? this.isGameover = true : "",
        }
    }

    fire(data){
        let info = {
            xDistance: this.xDistance = data.destX + data.destXOffset - data.shooterX,
            yDistance: this.yDistance = data.destY - data.shooterY,
            bulletAngle: this.bulletArctangent = Math.atan2(this.yDistance, this.xDistance),
            bulletXDistance: Math.cos(this.bulletArctangent),
            bulletYDistance: Math.sin(this.bulletArctangent),
        }

        let create = {
            bullet: new Bullet(data.bulletStartX, data.bulletStartY, info.bulletXDistance, info.bulletYDistance, data.shooterId),
        }

        let loadBullet = {
            load: data.shooterHealth > 0 ? this.bullets.push(create.bullet) : "",
        }
    }

    start(ctx, canvasWidth, canvasHeight){
        let createStartscreen = {
            loading: new Loading(),
            startscreen: new Startscreen(),
        }

        let launchStartscreen = {
            turnCreateLoadingScreenOff: this.isLoading ? (this.loading = createStartscreen.loading, this.isLoading = false) : "",
            turnCreateStartscreenOff: this.isStartscreen ? (this.startscreen = createStartscreen.startscreen, this.isStartscreen = false) : "",
            launchStartScreen: this.launch(ctx, canvasWidth, canvasHeight),
        }

        let startscreenSettings = {
            setEverything: this.startscreen 
                            ? (
                                this.startscreen.update(ctx, canvasWidth, canvasHeight),
                                this.player.id = this.startscreen.name,
                                this.countryChoice = this.startscreen.countryChoice,
                                this.player.image.src = `img/balls/${Object.values(this.countryNames)[this.countryChoice][0]}.png`,
                                this.player.width = this.startscreen.countryChoice == 86 || this.startscreen.countryChoice == 80 ? 70 : 50,
                                this.player.mood = this.startscreen.mood,
                                this.enemiesDiff = this.startscreen.enemiesDiff,
                                this.citiesDiff = this.startscreen.citiesDiff,
                                this.directionsDiff = this.startscreen.directionsDiff
                            ): "",
            setLoading: this.loading ? this.loading.update(ctx, canvasWidth, canvasHeight) : "",
            deleteLoading: setTimeout(() => {
                this.loading = ""
            }, 5000)
        }

        let begin = {
            begin: this.startscreen && this.startscreen.begin ? this.begin = true : "",
        }

        let deleteStartscreen = {
            delete: this.begin && this.startscreen ? delete this.startscreen : "",
        }

        let launchGame = {
            launch: this.begin ? (document.getElementById("username").style.display = "none", this.progress(ctx, canvasWidth, canvasHeight)) : "",   
        }
    }

    progress(ctx, canvasWidth, canvasHeight){
        let updateClones = (data) => {
            let baseFunction = (offset) => {
                data.object.update(ctx, canvasWidth, canvasHeight, this.player.x + offset, this.player.y);
            }
            return  baseFunction(0), baseFunction(-this.mapWidth), baseFunction(this.mapWidth);
        }

        let updateTargetClones = (data) => {
            let baseFunction = (offset) => {
                data.object.update(ctx, canvasWidth, canvasHeight, this.player.x + offset, this.player.y, this.player.height, data.citiesDiff);
            }
            return  baseFunction(0), baseFunction(-this.mapWidth), baseFunction(this.mapWidth);
        }

        let resetEverything = () => {
            return  this.isMap = false, 
                    this.isPlayer = false, 
                    this.isFlag = false, 
                    this.isScore = false, 
                    this.isHealthpack = false, 
                    this.isWrongCity0 = false, 
                    this.isWrongCity1 = false, 
                    this.isWrongCity2 = false, 
                    this.isWrongCity3 = false, 
                    this.isWrongCity4 = false, 
                    this.isWrongCity5 = false, 
                    this.isWrongCity6 = false, 
                    this.isWrongCity7 = false, 
                    this.isWrongCity8 = false, 
                    this.isWrongCity9 = false, 
                    this.isGameover = false,
                    delete this.gameover,
                    delete this.startscreen, 
                    this.finalScore = 0,
                    this.time = Date.now(), 
                    this.balls = [], 
                    this.bullets = [],
                    this.begin = false,
                    document.getElementById("username").style.removeProperty( 'display' ),
                    this.isStartscreen = true;
        }

        let restart = {
            timeToReset: this.gameover && this.gameover.reset,
            updateTime: !this.begin ? this.time = Date.now() : "",
        }

        let updateEverything = {
            map: updateClones({object: this.map}),
            flag: updateTargetClones({object: this.flag, citiesDiff: this.citiesDiff}),
            healthpack: updateTargetClones({object: this.healthpack, citiesDiff: this.citiesDiff}),
            wrongCity0: updateTargetClones({object: this.wrongCity0, citiesDiff: this.citiesDiff}),
            wrongCity1: updateTargetClones({object: this.wrongCity1, citiesDiff: this.citiesDiff}),
            wrongCity2: updateTargetClones({object: this.wrongCity2, citiesDiff: this.citiesDiff}),
            wrongCity3: updateTargetClones({object: this.wrongCity3, citiesDiff: this.citiesDiff}),
            wrongCity4: updateTargetClones({object: this.wrongCity4, citiesDiff: this.citiesDiff}),
            wrongCity5: updateTargetClones({object: this.wrongCity5, citiesDiff: this.citiesDiff}),
            wrongCity6: updateTargetClones({object: this.wrongCity6, citiesDiff: this.citiesDiff}),
            wrongCity7: updateTargetClones({object: this.wrongCity7, citiesDiff: this.citiesDiff}),
            wrongCity8: updateTargetClones({object: this.wrongCity8, citiesDiff: this.citiesDiff}),
            wrongCity9: updateTargetClones({object: this.wrongCity9, citiesDiff: this.citiesDiff}),
        }

        for (let ball = 0; ball < this.balls.length; ball++){
            let info = {
                enemyShot: this.balls[ball].shoot && this.balls[ball].aimAtBall,
                leftEnemyCloneShot: this.balls[ball].shoot && this.balls[ball].aimAtLeftClone,
                rightEnemyCloneShot: this.balls[ball].shoot && this.balls[ball].aimAtRightClone,
                ballX: this.balls[ball].x,
                ballY: this.balls[ball].y,
                ballW: this.balls[ball].width,
                ballH: this.balls[ball].height,
                gunX: this.balls[ball].gunX,
                gunY: this.balls[ball].gunY,
            }

            let detect = {
                flag: {
                    grab: this.flag.detectGrab(info.ballX, info.ballY, info.ballW, info.ballH),
                    change: this.flag.detectChange(`${this.flag.locations[this.flag.cityChoice].city}, ${this.flag.locations[this.flag.cityChoice].country}`),
                },

                healthpack: {
                    grab: this.healthpack.detectGrab(info.ballX, info.ballY, info.ballW, info.ballH),
                    change: this.healthpack.detectChange(`${this.healthpack.locations[this.healthpack.cityChoice].city}, ${this.healthpack.locations[this.healthpack.cityChoice].country}`),
                },

                wrongCity0: {
                    grab: this.wrongCity0.detectGrab(info.ballX, info.ballY, info.ballW, info.ballH),
                    change: this.wrongCity0.detectChange(`${this.wrongCity0.locations[this.wrongCity0.cityChoice].city}, ${this.wrongCity0.locations[this.wrongCity0.cityChoice].country}`),
                },

                wrongCity1: {
                    grab: this.wrongCity1.detectGrab(info.ballX, info.ballY, info.ballW, info.ballH),
                    change: this.wrongCity1.detectChange(`${this.wrongCity1.locations[this.wrongCity1.cityChoice].city}, ${this.wrongCity1.locations[this.wrongCity1.cityChoice].country}`),
                },

                wrongCity2: {
                    grab: this.wrongCity2.detectGrab(info.ballX, info.ballY, info.ballW, info.ballH),
                    change: this.wrongCity2.detectChange(`${this.wrongCity2.locations[this.wrongCity2.cityChoice].city}, ${this.wrongCity2.locations[this.wrongCity2.cityChoice].country}`),
                },

                wrongCity3: {
                    grab: this.wrongCity3.detectGrab(info.ballX, info.ballY, info.ballW, info.ballH),
                    change: this.wrongCity3.detectChange(`${this.wrongCity3.locations[this.wrongCity3.cityChoice].city}, ${this.wrongCity3.locations[this.wrongCity3.cityChoice].country}`),
                },

                wrongCity4: {
                    grab: this.wrongCity4.detectGrab(info.ballX, info.ballY, info.ballW, info.ballH),
                    change: this.wrongCity4.detectChange(`${this.wrongCity4.locations[this.wrongCity4.cityChoice].city}, ${this.wrongCity4.locations[this.wrongCity4.cityChoice].country}`),
                },

                wrongCity5: {
                    grab: this.wrongCity5.detectGrab(info.ballX, info.ballY, info.ballW, info.ballH),
                    change: this.wrongCity5.detectChange(`${this.wrongCity5.locations[this.wrongCity5.cityChoice].city}, ${this.wrongCity5.locations[this.wrongCity5.cityChoice].country}`),
                },

                wrongCity6: {
                    grab: this.wrongCity6.detectGrab(info.ballX, info.ballY, info.ballW, info.ballH),
                    change: this.wrongCity6.detectChange(`${this.wrongCity6.locations[this.wrongCity6.cityChoice].city}, ${this.wrongCity6.locations[this.wrongCity6.cityChoice].country}`),
                },

                wrongCity7: {
                    grab: this.wrongCity7.detectGrab(info.ballX, info.ballY, info.ballW, info.ballH),
                    change: this.wrongCity7.detectChange(`${this.wrongCity7.locations[this.wrongCity7.cityChoice].city}, ${this.wrongCity7.locations[this.wrongCity7.cityChoice].country}`),
                },

                wrongCity8: {
                    grab: this.wrongCity8.detectGrab(info.ballX, info.ballY, info.ballW, info.ballH),
                    change: this.wrongCity8.detectChange(`${this.wrongCity8.locations[this.wrongCity8.cityChoice].city}, ${this.wrongCity8.locations[this.wrongCity8.cityChoice].country}`),
                },

                wrongCity9: {
                    grab: this.wrongCity9.detectGrab(info.ballX, info.ballY, info.ballW, info.ballH),
                    change: this.wrongCity9.detectChange(`${this.wrongCity9.locations[this.wrongCity9.cityChoice].city}, ${this.wrongCity9.locations[this.wrongCity9.cityChoice].country}`),
                },
            }

            let changes = {
                flag: {
                    grabbed: this.flag.grabbed
                                ? (
                                    this.balls[ball].score += 10, 
                                    this.balls[ball].flags += 1, 
                                    this.finalScore += 10, 
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10), 
                                    this.flag.grabbed = false
                                ) : "",

                    aware: this.flag.stolen && this.balls[ball].aware
                                ? (
                                    this.balls[ball].aware = false,
                                    this.flag.stolen = false
                                ) : "",

                    unaware: this.flag.stolen && !this.balls[ball].aware 
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10),
                                    this.balls[ball].aware = true
                                ) : "",
                },

                healthpack: {
                    grabbed: this.healthpack.grabbed
                                ? (
                                    this.balls[ball].health += 50, 
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10), 
                                    this.healthpack.grabbed = false
                                ) : "",    

                    aware: this.healthpack.stolen && this.balls[ball].aware
                                ? (
                                    this.balls[ball].aware = false,
                                    this.healthpack.stolen = false
                                ) : "",

                    unaware: this.healthpack.stolen && !this.balls[ball].aware
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10),
                                    this.balls[ball].aware = true
                                ) : "",
                },

                wrongCity0: {
                    grabbed: this.wrongCity0.grabbed
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10), 
                                    this.wrongCity0.grabbed = false
                                ) : "",

                    aware: this.wrongCity0.stolen && this.balls[ball].aware
                                ? (
                                    this.balls[ball].aware = false,
                                    this.wrongCity0.stolen = false
                                ) : "",
                    
                    unaware: this.wrongCity0.stolen && !this.balls[ball].aware
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10),
                                    this.balls[ball].aware = true
                                ) : "",
                },

                wrongCity1: {
                    grabbed: this.wrongCity1.grabbed
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10), 
                                    this.wrongCity1.grabbed = false
                                ) : "",

                    aware: this.wrongCity1.stolen && this.balls[ball].aware
                                ? (
                                    this.balls[ball].aware = false,
                                    this.wrongCity1.stolen = false
                                ) : "",
                    
                    unaware: this.wrongCity1.stolen && !this.balls[ball].aware
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10),
                                    this.balls[ball].aware = true
                                ) : "",
                },

                wrongCity2: {
                    grabbed: this.wrongCity2.grabbed
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10), 
                                    this.wrongCity2.grabbed = false
                                ) : "",

                    aware: this.wrongCity2.stolen && this.balls[ball].aware
                                ? (
                                    this.balls[ball].aware = false,
                                    this.wrongCity2.stolen = false
                                ) : "",
                    
                    unaware: this.wrongCity2.stolen && !this.balls[ball].aware
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10),
                                    this.balls[ball].aware = true
                                ) : "",
                },

                wrongCity3: {
                    grabbed: this.wrongCity3.grabbed
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10), 
                                    this.wrongCity3.grabbed = false
                                ) : "",

                    aware: this.wrongCity3.stolen && this.balls[ball].aware
                                ? (
                                    this.balls[ball].aware = false,
                                    this.wrongCity3.stolen = false
                                ) : "",
                    
                    unaware: this.wrongCity3.stolen && !this.balls[ball].aware
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10),
                                    this.balls[ball].aware = true
                                ) : "",
                },

                wrongCity4: {
                    grabbed: this.wrongCity4.grabbed
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10), 
                                    this.wrongCity4.grabbed = false
                                ) : "",

                    aware: this.wrongCity4.stolen && this.balls[ball].aware
                                ? (
                                    this.balls[ball].aware = false,
                                    this.wrongCity4.stolen = false
                                ) : "",
                    
                    unaware: this.wrongCity4.stolen && !this.balls[ball].aware
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10),
                                    this.balls[ball].aware = true
                                ) : "",
                },

                wrongCity5: {
                    grabbed: this.wrongCity5.grabbed
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10), 
                                    this.wrongCity5.grabbed = false
                                ) : "",

                    aware: this.wrongCity5.stolen && this.balls[ball].aware
                                ? (
                                    this.balls[ball].aware = false,
                                    this.wrongCity5.stolen = false
                                ) : "",
                    
                    unaware: this.wrongCity5.stolen && !this.balls[ball].aware
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10),
                                    this.balls[ball].aware = true
                                ) : "",
                },

                wrongCity6: {
                    grabbed: this.wrongCity6.grabbed
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10), 
                                    this.wrongCity6.grabbed = false
                                ) : "",

                    aware: this.wrongCity6.stolen && this.balls[ball].aware
                                ? (
                                    this.balls[ball].aware = false,
                                    this.wrongCity6.stolen = false
                                ) : "",
                    
                    unaware: this.wrongCity6.stolen && !this.balls[ball].aware
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10),
                                    this.balls[ball].aware = true
                                ) : "",
                },

                wrongCity7: {
                    grabbed: this.wrongCity7.grabbed
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10), 
                                    this.wrongCity7.grabbed = false
                                ) : "",

                    aware: this.wrongCity7.stolen && this.balls[ball].aware
                                ? (
                                    this.balls[ball].aware = false,
                                    this.wrongCity7.stolen = false
                                ) : "",
                    
                    unaware: this.wrongCity7.stolen && !this.balls[ball].aware
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10),
                                    this.balls[ball].aware = true
                                ) : "",
                },

                wrongCity8: {
                    grabbed: this.wrongCity8.grabbed
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10), 
                                    this.wrongCity8.grabbed = false
                                ) : "",

                    aware: this.wrongCity8.stolen && this.balls[ball].aware
                                ? (
                                    this.balls[ball].aware = false,
                                    this.wrongCity8.stolen = false
                                ) : "",
                    
                    unaware: this.wrongCity8.stolen && !this.balls[ball].aware
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10),
                                    this.balls[ball].aware = true
                                ) : "",
                },

                wrongCity9: {
                    grabbed: this.wrongCity9.grabbed
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10), 
                                    this.wrongCity9.grabbed = false
                                ) : "",

                    aware: this.wrongCity9.stolen && this.balls[ball].aware
                                ? (
                                    this.balls[ball].aware = false,
                                    this.wrongCity9.stolen = false
                                ) : "",
                    
                    unaware: this.wrongCity9.stolen && !this.balls[ball].aware
                                ? (
                                    this.balls[ball].knowChance = Math.random(), 
                                    this.balls[ball].wrongCityChoice = Math.floor(this.balls[ball].knowChance * 10),
                                    this.balls[ball].aware = true
                                ) : "",
                },
            }

            let radar = {
                filter: this.balls.filter(t => t !== this.balls[ball] && Math.abs(t.x - info.ballX) < 500 && Math.abs(t.y - info.ballY) < 500),
            }

            let filter = {
                xSorter: radar.filter.sort((a,b) => parseFloat(a.x) - parseFloat(b.x)),
                ySorter: radar.filter.sort((a,b) => parseFloat(a.y) - parseFloat(b.y)),
            }

            let aimAtFilterTarget = {
                aim: filter.xSorter.length > 0 || filter.ySorter.length > 0 
                        ? filter.xSorter[0] < filter.ySorter[0] 
                            ? this.target = filter.xSorter[0] 
                            : this.target = filter.ySorter[0] 
                        : this.target = this.player,
            }

            let bulletData = {
                destX : this.target.x,
                destY : this.target.y, 
                shooterX : info.ballX + info.ballW/2, 
                shooterY : info.ballY + info.ballH/2,
                bulletStartX : info.ballX + info.ballW/50 + info.gunX*50, 
                bulletStartY : info.ballY + info.ballH/50 + info.gunY*50,
                shooterId : this.balls[ball].id,
                shooterHealth : this.balls[ball].health
            }

            let fireBullet = {
                normal: info.enemyShot ? (bulletData.destXOffset = 0, this.fire(bulletData)) : "",
                left: info.leftEnemyCloneShot ? (bulletData.destXOffset = -this.mapWidth, this.fire(bulletData)) : "",
                right: info.rightEnemyCloneShot ? (bulletData.destXOffset = this.mapWidth, this.fire(bulletData)) : "",
            }

            let isAlive = {
                yes: this.balls[ball] && this.balls[ball].health > 0,
                no: this.balls[ball] && this.balls[ball].health <= 0,
            }

            let tally = {
                scoreUpdate: isAlive.yes ? this.score.update(this.balls[ball].id, this.balls[ball].score) : this.score.removeScoreboard(this.balls[ball].id),
                scoreTally: {
                    existsAlready: isAlive.no && this.scoreTally[this.balls[ball].killedBy] ? this.scoreTally[this.balls[ball].killedBy] += 5 : "",
                    doesntExist: isAlive.no && !this.scoreTally[this.balls[ball].killedBy] ? this.scoreTally[this.balls[ball].killedBy] = 5 : "",
                },

                killTally: {
                    existsAlready: isAlive.no && this.killTally[this.balls[ball].killedBy] ? this.killTally[this.balls[ball].killedBy] += 1 : "",
                    doesntExist: isAlive.no && !this.killTally[this.balls[ball].killedBy] ?  this.killTally[this.balls[ball].killedBy] = 1 : "",
                },

                ballUpdate: {
                    deleteOrUpdate: isAlive.no 
                                        ? this.balls.splice(ball, 1) 
                                        : this.balls[ball].id !== this.player.id 
                                            ? this.balls[ball].update(
                                                ctx, canvasWidth, canvasHeight, this.player.x, this.player.y, this.target, 
                                                this.flag.x, this.flag.y, this.healthpack.x, this.healthpack.y, 
                                                this.wrongCity0.x, this.wrongCity0.y, this.wrongCity1.x, this.wrongCity1.y, 
                                                this.wrongCity2.x, this.wrongCity2.y, this.wrongCity3.x, this.wrongCity3.y, 
                                                this.wrongCity4.x, this.wrongCity4.y, this.wrongCity5.x, this.wrongCity5.y, 
                                                this.wrongCity6.x, this.wrongCity6.y, this.wrongCity7.x, this.wrongCity7.y, 
                                                this.wrongCity8.x, this.wrongCity8.y, this.wrongCity9.x, this.wrongCity9.y, 
                                                this.citiesDiff
                                            ) : this.balls[ball].update(
                                                    ctx, canvasWidth, canvasHeight, this.flag.x, this.flag.y, this.healthpack.x, this.healthpack.y, this.directionsDiff
                                            ),
                },
            }

            for (let bullet = 0; bullet < this.bullets.length; bullet++){
                let shotHit = (offset) => {
                    let bulletLeft = this.bullets[bullet].x + offset;
                    let bulletRight = this.bullets[bullet].x + offset + this.bullets[bullet].width;
                    let bulletTop = this.bullets[bullet].y;
                    let bulletBottom = this.bullets[bullet].y + this.bullets[bullet].height;
                    let ballLeft = info.ballX;
                    let ballRight = info.ballX + info.ballW;
                    let ballTop = info.ballY;
                    let ballBottom = info.ballY + info.ballH;
                    let afterLeftX = bulletRight >= ballLeft - info.ballW/2;
                    let beforeRightX = bulletLeft <= ballRight - info.ballW/2;
                    let afterTopY = bulletBottom >= ballTop - info.ballH/2;
                    let beforeBottomY = bulletTop <= ballBottom - info.ballH/2;
                    let notSelfHit = this.bullets[bullet].id !== this.balls[ball].id;
                    let bulletHit = afterLeftX && beforeRightX && afterTopY && beforeBottomY && notSelfHit;

                    return bulletHit;
                }

                try {
                    let ballHit = {
                        hit: shotHit(0) || shotHit(-this.mapWidth) || shotHit(this.mapWidth) ? this.balls[ball].hit = true : "",
                        tally: {
                            existsAlready: this.balls[ball].hit && this.scoreTally[this.bullets[bullet].id] ? this.scoreTally[this.bullets[bullet].id] += 1 : "",
                            doesntExist: this.balls[ball].hit && !this.scoreTally[this.bullets[bullet].id] ? this.scoreTally[this.bullets[bullet].id] = 1 : "",
                        },
                    }

                    let updateStats = {
                        update: this.balls[ball].hit 
                                    ? (
                                        this.balls[ball].health -= 10, 
                                        this.balls[ball].damageTaken += 10, 
                                        this.balls[ball].killedBy = this.bullets[bullet].id, 
                                        this.bullets.splice(bullet, 1), 
                                        this.balls[ball].hit = false
                                    ) : "",
                    }
                }
                catch{
                    let dontDoAnything = {
                        intentionallyBlank: '',
                    }
                }
            }

            try {
                let updateTallies = {
                    score: this.scoreTally[this.balls[ball].id] ? (this.balls[ball].score += this.scoreTally[this.balls[ball].id], delete this.scoreTally[this.balls[ball].id]) : "",
                    kills: this.killTally[this.balls[ball].id] ? (this.balls[ball].kills += this.killTally[this.balls[ball].id], delete this.killTally[this.balls[ball].id]) : "",
                }
            }
            catch{
                let dontDoAnything = {
                    intentionallyBlank: '',
                }
            }
        }

        for (let bullet = 0; bullet < this.bullets.length; bullet++){
            let enoughTimePassed = {
                yes: Date.now() - this.bullets[bullet].time > 1000
            }

            let updateBullets = {
                update: enoughTimePassed.yes ? this.bullets.splice(bullet, 1) : this.bullets[bullet].update(ctx, this.player.x, this.player.y, canvasWidth, canvasHeight, this.mapHeight),
            }
        } 

        let screenScore = {
            flagDestination: this.flag.drawDestinations(ctx, this.directionsDiff, this.flag.destImgX, this.flag.destImgY, this.flag.destTextX, this.flag.destTextY, "blue"),
            healthpackDestination: this.healthpack.drawDestinations(ctx, this.directionsDiff, this.healthpack.destImgX, this.healthpack.destImgY, this.healthpack.destTextX, this.healthpack.destTextY, "red"),
            score: this.score.draw(ctx, canvasWidth),
        }

        let gameover = {
            update: this.gameover ? this.gameover.update(ctx, this.player.score, this.player.kills, this.player.flags, this.player.damageTaken, this.player.distanceTraveled) : "",
            restart: restart.timeToReset ? resetEverything() : "",
        }

    }

    update(ctx, canvasWidth, canvasHeight){
        this.start(ctx, canvasWidth, canvasHeight);
    }
}

(() => {

    let canvas = document.getElementById("canvas1");
    let ctx = canvas.getContext("2d");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    let launcher = new Launcher();

    let animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        launcher.update(ctx, canvas.width, canvas.height);

        requestAnimationFrame(animate);
    };

    const onKeyDown = (pressedKey) => {
        if (pressedKey.code === "KeyW") launcher.player.goUp = true;
        if (pressedKey.code === "KeyS") launcher.player.goDown = true;
        if (pressedKey.code === "KeyA") launcher.player.goLeft = true;
        if (pressedKey.code === "KeyD") launcher.player.goRight = true;
        if (pressedKey.ctrlKey === true && (pressedKey.key == '-' || pressedKey.key == '=')) pressedKey.preventDefault();
    };

    const onKeyUp = (pressedKey) => {
        if (pressedKey.code === "KeyW") launcher.player.goUp = false;
        if (pressedKey.code === "KeyS") launcher.player.goDown = false;
        if (pressedKey.code === "KeyA") launcher.player.goLeft = false;
        if (pressedKey.code === "KeyD") launcher.player.goRight = false;
    };

    const onMouseDown = (click) => {
        if(click.which == 1){
            launcher.fire({
                destX : click.x, 
                destXOffset : 0,
                destY : click.y, 
                shooterX : launcher.player.screenX + launcher.player.width/2, 
                shooterY : launcher.player.screenY + launcher.player.height/2, 
                bulletStartX : launcher.player.x + launcher.player.width/50 + launcher.player.gunX * 50, 
                bulletStartY : launcher.player.y + launcher.player.height/50 + launcher.player.gunY * 50, 
                shooterId : launcher.player.id,
                shooterHealth : launcher.player.health
                });
        }
    };

    const onResize = () => {
        canvas = document.getElementById("canvas1");
        ctx = canvas.getContext("2d");
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
    };

    const onRightClick = (click) => {
        click.preventDefault();
    }

    const onScroll = (scroll) => {
        if(scroll.ctrlKey){
            scroll.preventDefault();
        }
    }

    animate();

    addEventListener("resize", onResize);
    addEventListener("keydown", onKeyDown);
    addEventListener("keyup", onKeyUp);
    addEventListener("mousedown", onMouseDown);
    addEventListener("contextmenu", onRightClick, false);
    document.getElementById('root').addEventListener("wheel", onScroll, true);
    document.getElementById('root').addEventListener("keypress", onKeyDown, true);
})();

