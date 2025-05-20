const courseDictUS = {
    'business-101': {
        title: 'Business 101',
        description: 'Business 101 is an introductory course designed to provide students with a foundational understanding of the world of business, with a special emphasis on financial literacy and decision-making. The course explores key concepts in economics, entrepreneurship, marketing, management, and accounting, while equipping students with the tools to analyze financial statements, understand the role of money and markets, and make informed personal and professional financial decisions.'
    },
    'finance-101': {
        title: 'Finance 101',
        description: 'Finance 101 introduces students to the fundamental principles of finance and the role it plays in both personal and business contexts. The course provides a comprehensive overview of financial concepts such as time value of money, risk and return, interest rates, investment analysis, and the basics of corporate and personal finance.'
    },
    'personal-finance-101': {
        title: 'Personal Finance 101',
        description: 'Personal Finance 101 is a practical, hands-on course designed to equip students with the knowledge and skills needed to make smart, confident financial decisions throughout life. This course covers essential topics like budgeting, saving, managing debt, understanding credit, and planning for major life expenses such as college, a car, or retirement.'
    },
}

const courseDictIndia = {
    'business-101': {
        title: 'Business 101',
        description: 'Business 101 is an introductory course designed to provide students with a foundational understanding of the world of business, with a special emphasis on financial literacy and decision-making. The course explores key concepts in economics, entrepreneurship, marketing, management, and accounting, while equipping students with the tools to analyze financial statements, understand the role of money and markets, and make informed personal and professional financial decisions.'
    },
    'finance-101': {
        title: 'Finance 101',
        description: 'Finance 101 introduces students to the fundamental principles of finance and the role it plays in both personal and business contexts. The course provides a comprehensive overview of financial concepts such as time value of money, risk and return, interest rates, investment analysis, and the basics of corporate and personal finance.'
    },
    'personal-finance-101': {
        title: 'Personal Finance 101',
        description: 'Personal Finance 101 is a practical, hands-on course designed to equip students with the knowledge and skills needed to make smart, confident financial decisions throughout life. This course covers essential topics like budgeting, saving, managing debt, understanding credit, and planning for major life expenses such as college, a car, or retirement.'
    },
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const clickedCourse = urlParams.get('course');
    const country = urlParams.get('country');
    
    if (country === 'us' && courseDictUS[clickedCourse]) {
        console.log('US course:', courseDictUS[clickedCourse]);
        document.getElementById('country').innerText = 'United States';
        document.getElementById('course-title').innerText = courseDictUS[clickedCourse].title;
        document.getElementById('course-description').innerText = courseDictUS[clickedCourse].description;
    } else if (country === 'india' && courseDictIndia[clickedCourse]) {
        console.log('India course:', courseDictIndia[clickedCourse]);
        document.getElementById('country').innerText = 'India';
        document.getElementById('course-title').innerText = courseDictUS[clickedCourse].title;
        document.getElementById('course-description').innerText = courseDictUS[clickedCourse].description;
    } else {
        console.log('Course not found or country not supported');
    }
});