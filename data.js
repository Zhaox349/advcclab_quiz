// 题库
var QUESTION_LIST = [
  {
    id: 1,
    questionText: "Do you have a lot of energy?",
    is_decrease: false,
    type: [1],
    value: 0,
  },
  {
    id: 2,
    questionText: "Is your voice weak or feeble when you speak?",
    is_decrease: true,
    type: [1, 2],
    value: 0,
  },
  {
    id: 3,
    questionText: "Do you feel depressed and low in spirits?",
    is_decrease: true,
    type: [1, 8],
    value: 0,
  },
  {
    id: 4,
    questionText:
      "Do you have less tolerance to cold (in winter) or air conditioning/fans (in summer) than the average person?",
    is_decrease: true,
    type: [1, 3],
    value: 0,
  },
  // {
  //   id: 5,
  //   questionText: "您能适应外界自然和社会环境的变化吗？",
  //   is_decrease: false,
  //   type: [1],
  //   value: 0,
  // },
  // {
  //   id: 6,
  //   questionText: "您容易失眠吗？",
  //   is_decrease: true,
  //   type: [1],
  //   value: 0,
  // },
  // {
  //   id: 7,
  //   questionText: "您容易疲乏吗？",
  //   is_decrease: true,
  //   type: [1, 2],
  //   value: 0,
  // },
  // {
  //   id: 8,
  //   questionText: "您容易气短(呼吸短促，接不上气)吗？",
  //   is_decrease: false,
  //   type: [2],
  //   value: 0,
  // },
  // {
  //   id: 9,
  //   questionText: "您容易心慌吗？",
  //   is_decrease: false,
  //   type: [2],
  //   value: 0,
  // },
  // {
  //   id: 10,
  //   questionText: "您容易头晕或站起时晕眩吗？",
  //   is_decrease: false,
  //   type: [2],
  //   value: 0,
  // },
  // {
  //   id: 11,
  //   questionText: "您喜欢安静、懒得说话吗？",
  //   is_decrease: false,
  //   type: [2],
  //   value: 0,
  // },
  // {
  //   id: 12,
  //   questionText: "您活动量稍大就容易出虚汗吗？",
  //   is_decrease: false,
  //   type: [2],
  //   value: 0,
  // },
  {
    id: 13,
    questionText: "Do you have cold hands and feet?",
    is_decrease: false,
    type: [3],
    value: 0,
  },
  // {
  //   id: 14,
  //   questionText: "您胃脘部、背部或腰膝部怕冷吗？",
  //   is_decrease: false,
  //   type: [3],
  //   value: 0,
  // },
  // {
  //   id: 15,
  //   questionText: "您感到怕冷、衣服比别人穿得多吗？",
  //   is_decrease: false,
  //   type: [3],
  //   value: 0,
  // },
  {
    id: 16,
    questionText:
      "Does your skin turn red and show scratch marks easily when you scratch it? ",
    is_decrease: false,
    type: [9],
    value: 0,
  },
  {
    id: 17,
    questionText: "Do you get colds more easily than other people?",
    is_decrease: false,
    type: [2, 3],
    value: 0,
  },
  // {
  //   id: 18,
  //   questionText: "您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西吗？",
  //   is_decrease: false,
  //   type: [3],
  //   value: 0,
  // },
  // {
  //   id: 19,
  //   questionText: "您受凉或吃(喝)凉的东西后，容易腹泻(拉肚子)吗？",
  //   is_decrease: false,
  //   type: [3],
  //   value: 0,
  // },
  {
    id: 20,
    questionText:
      "Do you feel hot in the palms of your hands and soles of your feet?",
    is_decrease: false,
    type: [4],
    value: 0,
  },
  {
    id: 21,
    questionText: "Do you feel heat in your body or face?",
    is_decrease: false,
    type: [4],
    value: 0,
  },
  // {
  //   id: 22,
  //   questionText: "您皮肤或口唇干吗？",
  //   is_decrease: false,
  //   type: [4],
  //   value: 0,
  // },
  // {
  //   id: 23,
  //   questionText: "您口唇的颜色比一般人红吗？",
  //   is_decrease: false,
  //   type: [4],
  //   value: 0,
  // },
  // {
  //   id: 24,
  //   questionText: "您容易便秘或大便干燥吗？",
  //   is_decrease: false,
  //   type: [4],
  //   value: 0,
  // },
  // {
  //   id: 25,
  //   questionText: "您面部两颧潮红或偏红吗？",
  //   is_decrease: false,
  //   type: [4],
  //   value: 0,
  // },
  // {
  //   id: 26,
  //   questionText: "您感到眼睛干涩吗？",
  //   is_decrease: false,
  //   type: [4],
  //   value: 0,
  // },
  // {
  //   id: 27,
  //   questionText: "您感到口干咽燥、总想喝水吗？",
  //   is_decrease: false,
  //   type: [4],
  //   value: 0,
  // },
  {
    id: 28,
    questionText: "Do you feel chest tightness or abdominal bloating?",
    is_decrease: false,
    type: [5],
    value: 0,
  },
  {
    id: 29,
    questionText: "Do you feel physically heavy or uncomfortable?",
    is_decrease: false,
    type: [5],
    value: 0,
  },
  // {
  //   id: 30,
  //   questionText: "您腹部肥满松软吗？",
  //   is_decrease: false,
  //   type: [5],
  //   value: 0,
  // },
  // {
  //   id: 31,
  //   questionText: "您有额部油脂分泌多的现象吗？",
  //   is_decrease: false,
  //   type: [5],
  //   value: 0,
  // },
  // {
  //   id: 32,
  //   questionText: "您上眼睑比别人肿（上眼睑有轻微隆起的现象）吗？",
  //   is_decrease: false,
  //   type: [5],
  //   value: 0,
  // },
  // {
  //   id: 33,
  //   questionText: "您嘴里有黏黏的感觉吗？",
  //   is_decrease: false,
  //   type: [5],
  //   value: 0,
  // },
  // {
  //   id: 34,
  //   questionText: "您平时痰多，特别是咽喉部总感到有痰堵着吗？",
  //   is_decrease: false,
  //   type: [5],
  //   value: 0,
  // },
  // {
  //   id: 35,
  //   questionText: "您舌苔厚腻或有舌苔厚厚的感觉吗？",
  //   is_decrease: false,
  //   type: [5],
  //   value: 0,
  // },
  {
    id: 36,
    questionText:
      "Do you feel greasy or have shiny/oily skin on your face or nose?",
    is_decrease: false,
    type: [6],
    value: 0,
  },
  {
    id: 37,
    questionText: "Do you easily get acne or boils?",
    is_decrease: false,
    type: [6],
    value: 0,
  },
  // {
  //   id: 38,
  //   questionText: "您感到口苦或嘴里有异味吗？",
  //   is_decrease: false,
  //   type: [6],
  //   value: 0,
  // },
  // {
  //   id: 39,
  //   questionText: "您大便黏滞不爽、有解不尽的感觉吗？",
  //   is_decrease: false,
  //   type: [6],
  //   value: 0,
  // },
  // {
  //   id: 40,
  //   questionText: "您小便时尿道有发热感、尿色浓(深)吗？",
  //   is_decrease: false,
  //   type: [6],
  //   value: 0,
  // },
  // {
  //   id: 41,
  //   questionText: "您带下色黄(白带颜色发黄)吗？",
  //   is_decrease: false,
  //   type: [6],
  //   gender: 1,
  //   value: 0,
  // },
  // {
  //   id: 42,
  //   questionText: "您的阴囊部位潮湿吗？",
  //   is_decrease: false,
  //   type: [6],
  //   gender: 0,
  //   value: 0,
  // },
  {
    id: 43,
    questionText:
      "Do you get bruises or purple spots (subcutaneous bleeding) on your skin without knowing the cause?",
    is_decrease: false,
    type: [7],
    value: 0,
  },
  {
    id: 44,
    questionText: "Do you have tiny broken blood vessels on your cheeks?",
    is_decrease: false,
    type: [7],
    value: 0,
  },
  // {
  //   id: 45,
  //   questionText: "您身体上有哪里疼痛吗？",
  //   is_decrease: false,
  //   type: [7],
  //   value: 0,
  // },
  // {
  //   id: 46,
  //   questionText: "您面色晦黯、或容易出现褐斑吗？",
  //   is_decrease: false,
  //   type: [7],
  //   value: 0,
  // },
  // {
  //   id: 47,
  //   questionText: "您容易有黑眼圈吗？",
  //   is_decrease: false,
  //   type: [7],
  //   value: 0,
  // },
  // {
  //   id: 48,
  //   questionText: "您容易忘事（健忘）吗？",
  //   is_decrease: true,
  //   type: [1, 7],
  //   value: 0,
  // },
  // {
  //   id: 49,
  //   questionText: "您口唇颜色偏黯吗？",
  //   is_decrease: false,
  //   type: [7],
  //   value: 0,
  // },
  {
    id: 50,
    questionText:
      "Have you experienced purpura (purple/red bruises) on your skin due to allergies？",
    is_decrease: false,
    type: [9],
    value: 0,
  },
  {
    id: 51,
    questionText: "Do you easily feel mentally stressed, anxious, or uneasy?",
    is_decrease: false,
    type: [8],
    value: 0,
  },
  {
    id: 52,
    questionText:
      "Are you easily affected emotionally and have a fragile emotional state?",
    is_decrease: false,
    type: [8],
    value: 0,
  },
  // {
  //   id: 53,
  //   questionText: "您容易感到害怕或受到惊吓吗？",
  //   is_decrease: false,
  //   type: [8],
  //   value: 0,
  // },
  // {
  //   id: 54,
  //   questionText: "您胁肋部或乳房胀痛吗？",
  //   is_decrease: false,
  //   type: [8],
  //   value: 0,
  // },
  // {
  //   id: 55,
  //   questionText: "您无缘无故叹气吗？",
  //   is_decrease: false,
  //   type: [8],
  //   value: 0,
  // },
  // {
  //   id: 56,
  //   questionText: "您咽喉部有异物感，且吐之不出、咽之不下吗？",
  //   is_decrease: false,
  //   type: [8],
  //   value: 0,
  // },
  {
    id: 57,
    questionText: "Do you sneeze even when you don't have a cold?",
    is_decrease: false,
    type: [9],
    value: 0,
  },
  {
    id: 58,
    questionText:
      "Do you have a stuffy or runny nose even when you don't have a cold?",
    is_decrease: false,
    type: [9],
    value: 0,
  },
  // {
  //   id: 59,
  //   questionText: "您有因季节变化、温度变化或异味等原因而咳喘的现象吗？",
  //   is_decrease: false,
  //   type: [9],
  //   value: 0,
  // },
  // {
  //   id: 60,
  //   questionText:
  //     "您容易过敏(对药物、食物、气味、花粉或在季节交替、气候变化时)吗？",
  //   is_decrease: false,
  //   type: [9],
  //   value: 0,
  // },
  // {
  //   id: 61,
  //   questionText: "您的皮肤容易起荨麻疹(风团、风疹块、风疙瘩)吗？",
  //   is_decrease: false,
  //   type: [9],
  //   value: 0,
  // },
];

// 养生方案
var RESULT_LIST = [
  {
    type: 1,
    name: "平和质 Yin-Yang Balanced Constitution ",
    changjianbiaoxian:
      "The complexion and skin are lustrous, hair is thick and shiny, eyes are bright and clear, the nose is moist, sense of smell is keen, and lips are rosy. There is no easy fatigue, ample energy, tolerance to cold and heat, good sleep, good appetite, and normal bowel movements, and the tongue appears pale red with a thin white coating. The pulse is moderate, smooth, and strong.",
    xingtitezheng:
      "The balanced constitution is a normal constitution with a well-proportioned and robust physique.",
    jingshentezheng: "Active and optimistic with abundant energy.",
    xinlitezheng:
      "Good psychological qualities, easy-going and cheerful, emotionally stable, rational in thinking, and not biased.",
    tiaoyangfangshi: [
      "Do not overeat or feel hungry, avoid consuming excessively cold or hot food. ",
      "Have a healthy diet and avoid greasy or spicy food. ",
      "Exercise regularly. ",
    ],
    value: 0,
  },
  {
    type: 2,
    name: "气虚质 Qi deficiency Constitution ",
    changjianbiaoxian:
      "The Qi-deficiency constitution is characterized by weak voice, lack of energy, fatigue, and sweating easily. People with this constitution tend to speak softly and use few words, and may have a pale tongue with teeth marks at the edges and a weak pulse.",
    xingtitezheng: "The muscles are soft and not firm. ",
    jingshentezheng: "Unstable emotions and easily frightened. ",
    xinlitezheng: "Introverted personality, and afraid of taking risks. ",
    tiaoyangfangshi: [
      "Environmental Adjustments: Avoid the heat in summer and the cold in winter. Avoid overwork. ",
      "Physical Exercise: gentle exercises such as walking, jogging, and practicing Tai Chi are recommended. Vigorous exercise should be avoided. ",
      "Mental Adjustment: Cultivate inner peace, eliminate distracting thoughts, avoid restlessness and overthinking. Enhance self-confidence and vitality. ",
      "Dietary Adjustment: It is recommended to eat foods that nourish Qi and strengthen the spleen, such as white kidney beans, Chinese yam, jujubes, longan, etc. Consuming fewer foods that can deplete Qi, such as raw radish and hollow-stemmed vegetables is advised. ",
    ],
    value: 0,
  },
  {
    type: 3,
    name: "阳虚质 Yang deficiency Constitution ",
    changjianbiaoxian:
      "A tendency to feel cold, with cold hands and feet, and prefers hot food and drinks. They may feel lethargic and have a pale, swollen tongue and a slow pulse.",
    xingtitezheng: "The muscles are soft and not firm.",
    jingshentezheng: "Feel mentally sluggish and lack energy to speak.",
    xinlitezheng: "Calm and introverted personality. ",
    tiaoyangfangshi: [
      "Environmental Adjustments: Keep warm and cool in winter, nourish yang in spring and summer, and expose yourself to more sunlight. Pay attention to keeping your feet, back, and dantian warm. ",
      "Physical Exercise: It is advisable to choose gentle and relaxed exercise, and exercise for 1 to 2 times a day. ",
      "Mental Adjustment: Maintain a calm and introverted state of mind, eliminate negative emotions. ",
      "Dietary Adjustment: It is recommended to consume more warm and yang foods such as beef and mutton, and avoid or consume less cold and cool foods such as pear, watermelon, and water chestnut. It is also advisable to reduce the intake of green tea.",
    ],
    value: 0,
  },
  {
    type: 4,
    name: "阴虚质 Yin deficiency Constitution ",
    changjianbiaoxian:
      "The hands, feet, and heart feel hot, and the mouth and throat are dry. There is a constant desire for drinking water, and the nose may feel dry. The person may prefer cold drinks. Bowel movements are dry, and the person may have trouble sleeping. The tongue is red with little coating, and the pulse is thin and rapid. ",
    xingtitezheng: "The body is thin and the skin is dry. ",
    jingshentezheng:
      "The spirit is sometimes uplifted, and the personality is lively but difficult to maintain. ",
    xinlitezheng:
      "The personality is extroverted and active, and tends to be impatient and easily angered.",
    tiaoyangfangshi: [
      "Environmental adjustments: Avoid heat in summer and nourish yin in autumn and winter. ",
      "Physical Exercise: Avoid strenuous exercise and choose activities that combine gentle movements with stillness, such as tai chi. ",
      "Mental Adjustment: Develop the habit of being calm and composed to adjust the mental state.",
      "Dietary Adjustment: It is recommended to consume more foods that nourish yin and moisten dryness, such as pears, lilies, and tremella, which have a sweet, cool, and light nature. Avoid consuming warm and dry foods like lamb, leek, chili, sunflower seeds, etc. ",
    ],
    value: 0,
  },
  {
    type: 5,
    name: "痰湿质 Phlegm-dampness Constitution",
    changjianbiaoxian:
      "The facial skin has more oil, and there is a tendency to sweat excessively and feel sticky. There may be chest tightness, phlegm accumulation, and a sticky or sweet sensation in the mouth. The person tends to prefer fatty, sweet, and sticky foods. The tongue coating is greasy, and the pulse is slippery.",
    xingtitezheng: "The body shape is obese with a soft and full abdomen. ",
    jingshentezheng: "Calm and peaceful, but feeling lethargic after meals. ",
    xinlitezheng:
      "Personality is mild and steady, being respectful and humble, open-minded and optimistic, and good at endurance. ",
    tiaoyangfangshi: [
      "Environmental Adjustment: Stay away from dampness; engage in outdoor activities more; wear breathable and moisture-wicking cotton clothing; get plenty of sunlight regularly. ",
      "Physical Exercise: Long-term and consistent exercise are recommended, gradually increasing the intensity of the activity to help tighten loose skin and muscles. ",
      "Mental Adjustments: Prone to fatigue and lethargy, so participate in various activities and listen to relaxing music to refresh the mind.",
      "Dietary Adjustment: Eat more light food that can invigorate the spleen and eliminate dampness, and can transform and remove phlegm, such as mung beans, coix seeds, and red beans. Eat less sweet, sticky, oily, and greasy food, drink less alcohol, and avoid overeating. ",
    ],
    value: 0,
  },
  {
    type: 6,
    name: "湿热质 Damp-heat Constitution ",
    changjianbiaoxian:
      "Oily skin, acne, itching, bitter taste in the mouth, fatigue, constipation or dry stools, scanty dark urine, and dampness in the scrotum for males or increased vaginal discharge for females. ",
    xingtitezheng: "The body shape is average or slightly thin. ",
    jingshentezheng: "Mentally hyperactive. ",
    xinlitezheng:
      "Easily irritable and prone to anger, as well as being careless and prone to negligence. ",
    tiaoyangfangshi: [
      "Environmental Adjustment: Avoid humid and hot environments, and maintain dry and ventilated conditions. In summer, avoid being invaded by dampness and heat. ",
      "Physical Exercise: Suitable for high-intensity exercise, such as long-distance running, swimming, mountain climbing, ball games, martial arts, etc., to dispel dampness and dissipate heat. ",
      "Mental Adjustment: Participate in relaxed and cheerful activities to relax the mind and body. ",
      "Dietary Adjustment: A light diet is recommended, with more consumption of sweet and cold foods such as adzuki beans, mung beans, celery, cucumbers, lotus root, etc. ",
    ],
    value: 0,
  },
  {
    type: 7,
    name: "血瘀质 Blood stasis Constitution",
    changjianbiaoxian:
      "The complexion appears dull with pigmentation marks and a tendency to bruising. The eyes often have many bloodshot veins, and the gums bleed easily. The lips appear dark, and the tongue may be dark or have blood spots. The sublingual veins may appear purple and enlarged. ",
    xingtitezheng: "Both fat and thin body types are observed. ",
    jingshentezheng: "Depressed and lack of vitality in spirit. ",
    xinlitezheng:
      "Personality introverted, easily irritable, impatient, forgetful. ",
    tiaoyangfangshi: [
      "Environmental Adjustment: Keep warm and avoid cold environments. In winter, pay attention to keeping warm and maintaining regular work and rest schedules. ",
      "Physical Exercise: Engage in activities that benefit the heart and blood vessels, and exercise all parts of the body to help the circulation of qi and blood. ",
      "Mental Adjustment: Cultivate an optimistic mood, as depression and anxiety can aggravate blood stasis.",
      "Dietary Adjustments: Consume foods such as peach kernel, rapeseed, black soybeans, roses, and roses that promote blood circulation and alleviate blood stasis. Drink alcohol in moderation and consider consuming foods such as vinegar, hawthorn porridge, and peanut porridge. ",
    ],
    value: 0,
  },
  {
    type: 8,
    name: "气郁质 Qi stagnation Constitution ",
    changjianbiaoxian:
      "Depressed, emotionally fragile, unhappy, pale red tongue, thin white fur, stringy pulse. ",
    xingtitezheng: "Most people are thinner. ",
    jingshentezheng: "Mental depression, boredom. ",
    xinlitezheng:
      "Introverted and unstable, depressed and fragile, sensitive and suspicious. ",
    tiaoyangfangshi: [
      "Environmental Adjustment: avoid heat in summer, avoid cold in winter, and prevent overwork. ",
      "Physical Exercise: Gentle and slow, not strenuous exercise, walking, jogging, Tai Chi, etc. ",
      "Mental Adjustment: Improve self-confidence and energy. ",
      "Dietary Adjustments: Avoid drinking tea, coffee, and other refreshing beverages before going to bed. Eat more daylily, kelp, hawthorn, roses, and other foods that have the functions of promoting Qi, relieving depression, digesting food, and refreshing the mind. ",
    ],
    value: 0,
  },
  {
    type: 9,
    name: "特禀质 Allergic Constitution ",
    changjianbiaoxian:
      "People with allergies often suffer from asthma, wheal, itchy throat, nasal congestion, sneezing, etc. ",
    xingtitezheng:
      "People with allergies are generally not special; those with abnormal congenital endowments may have deformities or physiological defects. ",
    jingshentezheng: "Varies according to the endowment. ",
    xinlitezheng: "Hypersensitivity, or no special performance. ",
    tiaoyangfangshi: [
      "Environmental Adjustment: The room should be well ventilated, keep the room clean, and the bedding and bed sheets should be washed frequently to prevent allergies to dust mites. ",
      "Physical Exercise: Strengthen physical exercise in life, adapt to the changes of the four seasons, and adapt to the cold and temperature. ",
      "Mental Adjustment: Only by adjusting the physique and adapting to the environment can the occurrence of allergic diseases be completely prevented. ",
      "Dietary Adjustments: a light, balanced diet, with appropriate thickness and thickness, and a reasonable combination of meat and vegetables. Eat less spicy products such as buckwheat, broad beans, white lentils, beef, goose, eggplant, strong tea, fishy hair, and foods containing allergens. ",
    ],
    value: 0,
  },
];

// 类型 体质 关系
var TYPE_PHYSIQUE_MAP = {
  1: "平和质 Yin-Yang Balanced Constitution",
  2: "气虚质 Qi deficiency Constitution",
  3: "阳虚质 Yang deficiency Constitution",
  4: "阴虚质 Yin deficiency Constitution",
  5: "痰湿质 Phlegm-dampness Constitution",
  6: "湿热质 Damp-heat Constitution",
  7: "血瘀质 Blood stasis Constitution",
  8: "气郁质 Qi stagnation Constitution",
  9: "特禀质 Allergic Constitution",
};
