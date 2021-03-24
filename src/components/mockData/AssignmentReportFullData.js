import { v4 } from 'node-uuid';

export const mockDataAssignReportFull = {
    "id": v4(),
    "assignmentId": 1,
    "name": "Qeography",
    "student": {
        "id": 2,
        "name": "Maria",
        "email": "maria@gmail.com",
        "role": {
            "id": 2,
            "name": "TEACHER"
        }
    },
    "teacher": {
        "id": 2,
        "name": "Maria",
        "email": "maria@gmail.com",
        "role": {
            "id": 2,
            "name": "TEACHER"
        }
    },
    "answeredQuestions": [
        {
            "id": 1,
            "question": {
                "id": 909,
                "question": " Red Square is in ... \n\n",
                "a": " Paris\n",
                "b": " Moscow \n",
                "c": " Roma \n",
                "d": " Berlin \n\n",
                "rightAn": "b",
                "tags": null
            },
            "answer": "d"
        },
        {
            "id": 2,
            "question": {
                "id": 910,
                "question": " Berlin is a capital of ... \n\n",
                "a": " Russia\n",
                "b": " France \n",
                "c": " Italy \n",
                "d": " Germany \n\n",
                "rightAn": "d",
                "tags": null
            },
            "answer": "a"
        },
        {
            "id": 3,
            "question": {
                "id": 911,
                "question": " The longest river in the world. \n\n",
                "a": " Thames\n",
                "b": " Amazon \n",
                "c": " Nile \n",
                "d": " Mississipi \n\n",
                "rightAn": "c",
                "tags": null
            },
            "answer": "b"
        },
        {
            "id": 4,
            "question": {
                "id": 912,
                "question": " The smallest continent in the world. \n\n",
                "a": " Africa\n",
                "b": " Asia \n",
                "c": " North America \n",
                "d": " Australia \n\n",
                "rightAn": "d",
                "tags": null
            },
            "answer": "c"
        },
        {
            "id": 5,
            "question": {
                "id": 913,
                "question": " The highest lake is the world.\n\n",
                "a": " Titicaca\n",
                "b": " Victoria \n",
                "c": " Baikal \n",
                "d": " Dead Sea\n\n\n",
                "rightAn": "a",
                "tags": null
            },
            "answer": "c"
        }
    ],
    "correctAnswers": 1,
    "totalAnswers": 5
};