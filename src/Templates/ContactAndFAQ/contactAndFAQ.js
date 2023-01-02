export default {
    "template_path": "layoutWithHeader",
    "params": {
        "content_sections": [
            {
                "template_path": "faq",
                "params": {
                    "questions": {
                        "array_data": "questions",
                        "question": "++questions.question",
                        "answer": "++questions.answer"
                    }
                }
            },
            {
                "template_path": "contactForm"
            }
        ]
    }
}
