export const QUESTIONS = [
    // 1번 질문
    {
        "question": "당신은 비트코인으로 대박이 나서 홍대에 가게를 하나 차리게 되었다. 사람들이 많이 다니는 길거리에서 모퉁이를 돌아 골목에 들어가면 당신의 가게가 있다. 당신의 가게는 어떤 모습일까?",
        "options": [
            {
                "option": "활기차고 신 나는 분위기를 좋아하는 당신! EDM이 흘러나오는 클럽을 운영한다.",
                "operation": "sub+"
            },
            {
                "option": "재즈와 클래식이 흘러나오고 술잔에 술 따르는 소리까지 모두 들리는 단골들이 많은 바를 운영한다.",
                "operation": "sub-"
            },
            {
                "option": "둘 다 좋은데… 고르기 어려워요...",
                "operation": "dep+"
            }
        ],
        "image": {
            "url": "https://www.m-i.kr/news/photo/202004/704632_488544_519.jpg",
            "reference": "매일일보"
        }
    },
    // 2번 질문
    {
        "question": "학교가 끝나고 친구들과 열심히 축구를 한 당신! 어느새 해가 땅 아래로 넘어가고 있다. 시간이 늦었다는 것을 깨닫고 아차 하고 폰을 확인하는데 부재중 전화가 와 있다. 누구에게 온 전화일까?",
        "options": [
            {
                "option": "밥은 먹고 다니니…. 저녁을 먹을 때까지 집에 도착하지 않아서 어머니께서 전화하셨다.",
                "operation": "main-"
            },
            {
                "option": "오늘 학원인데…. 학원 선생님께 전화가 왔다. 축구했다고 말하면 혼날 것 같다…",
                "operation": "main-"
            },
            {
                "option": "전화가 올 사람이 많다. 사실 누구에게 왔는지 잘 모르겠다.",
                "operation": "dep+"
            }
        ],
        "image": {
            "url": "https://img.hankyung.com/photo/202208/p1065576149924516_187_thum-1200x.jpg",
            "reference": "한국경제"
        }
    },
    // 3번 질문
    {
        "question": "불금을 보내고 다음날 아침에 일어난 당신! 일어나서 밖을 보니 창문에 부딪히는 빗소리와 함께 비가 내리고 있다. 당신이 먹을 아침은?",
        "options": [
            {
                "option": "냉장고를 뒤져보니 빵 몇조각과 잼이 있었다. 늘 먹던대로 빵에 잼을 발라 커피와 함께 아침을 해결한다.",
                "operation": "sub-"
            },
            {
                "option": "비도 오고 그래서.. 새로운 것에 도전해보고 싶다. 아침부터 있는 재료, 없는 재료 모아 바지락 칼국수에 도전한다.",
                "operation": "sub+"
            },
            {
                "option": "아침에 일어나서 입맛이 없다. 아침은 그냥 넘어가기로 한다. 이따가 이른 점심을 먹으면 된다.",
                "operation": "main-"
            }
        ],
        "image": {
            "url": "https://www.onday.or.kr/wp/wp-content/uploads/2014/07/0717_3.jpg",
            "reference": "따뜻한하루"
        }
    },
    // 4번 질문
    {
        "question": "당신은 갑자기 감성적인 느낌이 들어 비가 오는 날에 노래를 듣기로 했다. 당신이 듣는 노래 제목은?",
        "options": [
            {
                "option": "헤이즈 - 비가 오는 날엔, 갑자기 그리웠던 얼굴이 눈 앞에 아른거린다….",
                "operation": "main+"
            },
            {
                "option": "Walking in the rain - 윤하, 챈슬러 - 비가 오는 날에는 미친 척하고 밖에서 비를 맞으며 뛰어노는 게 최고다.",
                "operation": "sub+"
            },
            {
                "option": "노래도 좋지만 주말은 짧다! 친구들과 노는 게 우선이다. 무수한 DM을 보내기 시작한다.",
                "operation": "sub+"
            }
        ],
        "image": {
            "url": "https://img.lovepik.com/photo/50054/0427.jpg_wh860.jpg",
            "reference": "LovePik"
        }
    },
    // 5번 질문
    {
        "question": "평화로운 토요일 아침, 짝사랑했던 고등학교 동창이 청첩장을 보내왔다. 당신은 그녀에게 차였던 기억에 갑자기 마음이 아려왔지만 결혼식장에 가서 친구를 축하해주기로 했다. 이 때 당신이 입을 복장은?",
        "options": [
            {
                "option": "한 편의 복수극을 찍고 싶다. 옷장에 있는 가장 비싼 옷을 입고 왁스로 머리를 올리고 결혼식장에 간다.",
                "operation": "main-"
            },
            {
                "option": "나의 감정은 나의 감정일 뿐 친구에게는 행복한 순간일 것이다. 튀지 않지만 정중한 스타일로 가서 친구의 행복한 순간을 기념해주고 싶다.",
                "operation": "main+"
            },
            {
                "option": "옷장 앞에 섰더니 뭘 입어야 될지 모르겠다. 결혼식 때는 너무 화려한 옷은 입으면 안된다고 했던 것 같은데… 모르겠네.",
                "operation": "dep+"
            }
        ],
        "image": {
            "url": "https://img.freepik.com/premium-vector/wedding-invitation-design_154104-52.jpg",
            "reference": "Freepik"
        }
    },
    // 6번 질문
    {
        "question": "전생에 마을의 시시비비를 가리던 사또였던 당신. 어느날 마을에 떠돌아다니던 한 여자가 수박을 훔치다 걸려서 잡혀왔다. 당신은 그녀가 배고픔을 참지 못해서 훔쳤다는 것을 알고 있다. 당신의 결정은?",
        "options": [
            {
               "option": "원칙이 있으니 원칙대로 해야하는 법. 안타깝다고 죄를 눈감아줄 수는 없다. 도와주더라도 죄를 달게 받은 다음에 도와주어야 한다.",
                "operation": "main+"
            },
            {
                "option": "수박을 훔친 것 정도는 무거운 죄도 아니고 저 수박을 훔치지 않았으면 굶어서 죽었을 수도 있다. 수박 주인에게는 적절한 보상을 해주고 여자에게 다시는 훔치지 말라고 훈계하고 먹을 것을 조금 주어서 보낸다.",
                "operation": "main-"
            },
            {
                "option": "벌을 내려야할까 말아야 할까 머리 속에서 계속 고민이 된다. 일단 하루 가둬놓고 그동안 생각해보자.",
                "operation": "dep+"
            }
        ],
        "image": {
            "url": "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/04/urbanbrush-20220429092252662917.jpg",
            "reference": "어반브러시"
        }
    },
    // 7번 질문
    {
        "question": "당신의 최애 ○○○의 팬미팅에 당첨된 당신! 팬미팅에 입고갈 옷은?",
        "options": [
            {
              "option": "너무 가벼워 보이면 안돼... 코트를 입는다.",
              "operation": "main+"
            },
            {
               "option": "편한 게 최고지! 평소 친구 만날 때 입던 옷을 입는다.",
                "operation": "main-"
            },
            {
                "option": "우리 ○○이 너무 예쁘겠다... 떨려...",
                "operation": "dep+"
            }
        ],
        "image": {
            "url": "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/07/31/f82d1c90-2b1b-45fe-bf75-ccf97433d08b.jpg",
            "reference": "iMBC 연예"
        }
    },
    // 8번 질문
    {
        "question": "크리스마스에 짝사랑하는 그녀에게 고백하려는 당신, 무엇을 입을 것인가?",
        "options": [
            {
                "option": "일단 추우니까... 롱패딩 입어야지",
                "operation": "sub-"
            },
            {
                "option": "겨울엔 코트지.",
                "operation": "sub+"
            },
            {
                "option": "잘 모르겠는데...",
                "operation": "dep+"
            }
        ],
        "image": {
            "url": "https://i.namu.wiki/i/EbBJQCwXxYWNbFnzMdIhErbA_GtVxUHQDKfzOrj29L7TtuZtCYQcw7n8JgdWoWn4BBravOlA6SL3HBo1w_DnCw.webp",
            "reference": "나무위키"
        }
    },
    // 9번 질문
    {
        "question": "새벽에 출출한 당신, 편의점에 가려한다. 입을 옷은?",
        "options": [
            {
                "option": "후드 하나 입으면 문제 없지.",
                "operation": "sub-"
            },
            {
                "option": "흐트러진 모습으로 나갈 수 없어, 먼저 씻고 준비해야겠다.",
                "operation": "main+"
            },
            {
                "option": "잡히는 옷 아무거나 입어야지. 목폴라에 반바지를 입는다.",
                "operation": "main-"
            }
        ],
        "image": {
            "url": "https://cphoto.asiae.co.kr/listimglink/1/2020123110390994147_1609378748.jpg",
            "reference": "아시아경제"
        }
    },
    // 10번 질문
    {
        "question": "옷 매장에 도착한 당신. 직원과 눈이 마주쳤다. 이때 다가오는 직원. \"필요한 거 있으세요?\" 당신의 다음 행동은?",
        "options": [
            {
                "option": "\"ㅇㅇ 옷을 찾고 있는데요\"라고 당당하게 대답한다.",
                "operation": "sub+"
            },
            {
                "option": "눈을 피하고 주춤거린다.",
                "operation": "sub-"
            },
            {
                "option": "못 들은 척 무시하고 옷을 찾는다.",
                "operation": "main-"
            }
        ],
        "image": {
            "url": "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-the-main-area-of-a-men-s-clothing-store-image_2536090.jpg",
            "reference": "Pngtree"
        }
    },
    // 11번 질문
    {
        "question": "오늘 아침, 당신은 주말임에도 잠을 몰아내고 일찍 일어났다! 조별과제를 하러 집 앞 카페에 8시에 모이기로 했다. 샤워를 하고 머리를 말린 다음 옷장 앞에 서서 옷을 고른다. 빨간색 반팔 티, 청반바지, 갈색 코트가 있다. 그 중 하나만 입고 갈 수 있다고 했을 때 당신이 선택할 옷은? (단 나머지 부분은 아무 것도 입지 않음)",
        "options": [
            {
                "option": "당연히 평소에 좋아하는 빨간색 반팔 티를 입고 당당히 거리를 활보한다. 경찰의 사이렌 소리가 들리는 것 같다. ",
                "operation": "sub+"
            },
            {
                "option": "그래도 가릴 곳은 가려야지. 청바지를 입고 나간다. 어째서인지 수군거리는 소리와 눈총이 따갑다.",
                "operation": "main+"
            },
            {
                "option": "고전적인 방법인 (바바리) 코트를 입을 것이다. 카페에도 도착하기 전 차가운 금속이 손목을 휘감는 것 같다.",
                "operation": "main+"
            }
        ],
        "image": {
            "url": "https://www.ikea.com/kr/ko/images/products/pax-wardrobe-white__0855930_pe557276_s5.jpg?f=s",
            "reference": "IKEA"
        }
    }
]

export const KEYWORDS_MAIN = ['어디로 튈지 모르고' ,'개성 있고', '자유분방하며', '편안하며', '꾸밈없고', '자연스러우면서', '패션 감각 있고', '트렌디하고', '품격있고', '우아하고', '멋쟁이이면서', '스타일리쉬하고', '디자이너가 꿈이며', '존경스럽고']
export const KEYWORDS_SUB = ['부끄러운', '조용한', '내성적인', '순수한', '따뜻한', '친절한', '유머러스한', '긍정적인', '열정적인', '도전적인', '독특한', '개성 있는']
export const KEYWORDS_DEP = ['독수리', '코끼리', '호랑이', '사자', '토끼', '거북이', '고슴도치']

export const CLOTHES_OUTER = [['롱패딩', '후드 집업'], ['재킷', '트러커 재킷'], ['숏패딩'], ['코트']]
export const CLOTHES_INNER = [['후드'], ['맨투맨', '니트'], ['화이트 셔츠', '니트'], ['화이트 셔츠', '목폴라']]
export const CLOTHES_UNDER = [['데님 팬츠', '슈트 팬츠'], ['데님 팬츠', '조거 팬츠'], ['데님 팬츠', '코튼 팬츠'], ['데님 팬츠']]

export const ANIMAL_EMOJIS = {
    '독수리': '🦅',
    '코끼리': '🐘',
    '호랑이': '🐯',
    '사자': '🦁',
    '토끼': '🐰',
    '거북이': '🐢',
    '고슴도치': '🦔',
}