export default {
    "type": "landing-page",
    "data": {
        "success_message_sections": {
            "type": "ediwheel-session-message",
            "array_data": "success_messages",
            "data": {
                "content": "++success_messages"
            }
        },
        "error_message_sections": {
            "type": "ediwheel-session-message",
            "array_data": "error_messages",
            "data": {
                "content": "++error_messages"
            }
        },
        "info_message_sections": {
            "type": "ediwheel-session-message",
            "array_data": "info_messages",
            "data": {
                "content": "++info_messages"
            }
        },
        "navbar_section": {
            "template_path": "navbar"
        },
        "header_section": "++header_section",
        "content_sections": "++content_sections",
        "footer_section": {
            "template_path": "footer"
        }
    }
}
