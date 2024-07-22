const chatItems = [
    { id: '103', profile: './profile_images/young_male_20.png', username: 'Martin Nemis', lastMessage: 'By the way, have you seen the latest developments in autonomous vehicles? AI is really pushing the boundaries.', lastMessageTime: '12:15' },
    { id: '100', profile: './profile_images/old_40_male.png', username: 'John Doe', lastMessage: 'Hey, how are you doing? Just wanted to check in with you.', lastMessageTime: '10:30' },
    { id: '101', profile: './profile_images/old_female_60.png', username: 'Mary White', lastMessage: 'Did you get my email? Please let me know if you have any questions.', lastMessageTime: '11:45' },
    { id: '102', profile: './profile_images/young_female_20.png', username: 'Elisa Grey', lastMessage: 'Looking forward to our meeting tomorrow. Let\'s catch up then.', lastMessageTime: '09:15' },
    { id: '104', profile: './profile_images/old_40_male.png', username: 'Tom Clark', lastMessage: 'Great job on the presentation! The client was really impressed.', lastMessageTime: '15:45' },
    { id: '105', profile: './profile_images/young_female_20.png', username: 'Emily Davis', lastMessage: 'Are you available for a call this afternoon? Need to discuss the project.', lastMessageTime: '14:00' },
    { id: '106', profile: './profile_images/young_male_20.png', username: 'Michael Jones', lastMessage: 'Happy to help with the new assignment. Let me know what you need.', lastMessageTime: '16:15' },
    { id: '107', profile: './profile_images/old_40_male.png', username: 'Amar Antony', lastMessage: 'Can we reschedule our meeting to next week? Something urgent came up.', lastMessageTime: '17:30' },
    { id: '108', profile: './profile_images/young_female_20.png', username: 'Rossie Rail', lastMessage: 'Thanks for the update. I will review the document and get back to you.', lastMessageTime: '18:45' },
    { id: '109', profile: './profile_images/old_female_60.png', username: 'Sarah Johnson', lastMessage: 'I really enjoyed our discussion today. Let\'s continue our conversation soon.', lastMessageTime: '19:00' }
];

const conversationItems = [
    {
      "id": 1,
      "message": "Have you checked out the latest AI advancements in natural language processing?",
      "user": "self",
      "profile": "./profile_images/user_20_male.png",
      "username": "Navaneeth",
      "type": "message",
      "filename": null,
      "sent_time": "2024-07-21 09:00"
    },
    {
      "id": 2,
      "message": "Yes, I recently read about GPT-4 and its impressive capabilities. What do you think about its potential applications?",
      "user": "other",
      "profile": "./profile_images/young_male_20.png",
      "username": "Martin Nemis",
      "type": "message",
      "filename": null,
      "sent_time": "2024-07-21 09:15"
    },
    {
      "id": 3,
      "message": "GPT-4 is fascinating! I'm particularly excited about its use in creating more interactive and intuitive chatbots.",
      "user": "self",
      "profile": "./profile_images/user_20_male.png",
      "username": "Navaneeth",
      "type": "message",
      "filename": null,
      "sent_time": "2024-07-21 09:30"
    },
    {
      "id": 4,
      "message": null,
      "user": "other",
      "profile": "./profile_images/young_male_20.png",
      "username": "Martin Nemis",
      "type": "file",
      "filename": "ai_healthcare.pdf",
      "filesize": "150kb",
      "sent_time": "2024-07-21 09:45"
    },
    {
      "id": 5,
      "message": "Yes, AI diagnostics are revolutionizing healthcare. Early detection of diseases using AI can save countless lives.",
      "user": "self",
      "profile": "./profile_images/user_20_male.png",
      "username": "Navaneeth",
      "type": "message",
      "filename": null,
      "sent_time": "2024-07-21 10:00"
    },
    {
      "id": 6,
      "message": "Indeed. The future of personalized medicine looks promising with AI. What about AI in the finance sector?",
      "user": "other",
      "profile": "./profile_images/young_male_20.png",
      "username": "Martin Nemis",
      "type": "message",
      "filename": null,
      "sent_time": "2024-07-21 10:15"
    },
    {
      "id": 7,
      "message": "AI in finance is making trading and risk assessment more efficient. Robo-advisors are also gaining popularity for personalized investment advice.",
      "user": "self",
      "profile": "./profile_images/user_20_male.png",
      "username": "Navaneeth",
      "type": "message",
      "filename": null,
      "sent_time": "2024-07-21 10:30"
    },
    {
      "id": 8,
      "message": null,
      "user": "other",
      "profile": "./profile_images/young_male_20.png",
      "username": "Martin Nemis",
      "type": "file",
      "filename": "ai_finance_overview.pptx",
      "filesize": "250kb",
      "sent_time": "2024-07-21 10:45"
    },
    {
      "id": 9,
      "message": "Yes, I'm working on an AI model to predict stock market trends. It's still in the early stages, but the results are promising.",
      "user": "self",
      "profile": "./profile_images/user_20_male.png",
      "username": "Navaneeth",
      "type": "message",
      "filename": null,
      "sent_time": "2024-07-21 11:00"
    },
    {
      "id": 10,
      "message": "That sounds exciting! I would love to see the results once it's ready. Keep me posted!",
      "user": "other",
      "profile": "./profile_images/young_male_20.png",
      "username": "Martin Nemis",
      "type": "message",
      "filename": null,
      "sent_time": "2024-07-21 11:15"
    },
    {
      "id": 11,
      "message": null,
      "user": "self",
      "profile": "./profile_images/user_20_male.png",
      "username": "Navaneeth",
      "type": "file",
      "filename": "ai_stock_model_results.xlsx",
      "filesize": "50kb",
      "sent_time": "2024-07-21 11:30"
    },
    {
      "id": 12,
      "message": "Thanks for sharing the file. I believe integrating AI into stock trading can minimize human error.",
      "user": "other",
      "profile": "./profile_images/young_male_20.png",
      "username": "Martin Nemis",
      "type": "message",
      "filename": null,
      "sent_time": "2024-07-21 11:45"
    },
    {
      "id": 13,
      "message": "Exactly. Automation in trading can lead to more consistent and unbiased decisions.",
      "user": "self",
      "profile": "./profile_images/user_20_male.png",
      "username": "Navaneeth",
      "type": "message",
      "filename": null,
      "sent_time": "2024-07-21 12:00"
    },
    {
      "id": 14,
      "message": "By the way, have you seen the latest developments in autonomous vehicles? AI is really pushing the boundaries.",
      "user": "other",
      "profile": "./profile_images/young_male_20.png",
      "username": "Martin Nemis",
      "type": "message",
      "filename": null,
      "sent_time": "2024-07-21 12:15"
    },
    {
      "id": 15,
      "message": null,
      "user": "self",
      "profile": "./profile_images/user_20_male.png",
      "username": "Navaneeth",
      "type": "file",
      "filename": "ai_autonomous_vehicles.pdf",
      "filesize": "1MB",
      "sent_time": "2024-07-21 12:30"
    }
  ]
  
  export {chatItems,conversationItems};