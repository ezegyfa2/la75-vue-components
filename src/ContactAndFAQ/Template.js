export default {
    "template_type_name": "la75_layout_with_header",
    "params": {
        "content_sections": [
            {
                "template_type_name": "la75_faq",
                "params": {
                    "questions": {
                        "array_data": "questions",
                        "question": "++questions.question",
                        "answer": "++questions.answer"
                    }
                }
            },
            {
                "template_type_name": "la75_contact_form"
            }
        ]
    }
}
