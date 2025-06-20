import React from 'react';
import "../../styles/details.css"; // Asegúrate de que esta ruta sea correcta para tu archivo CSS
import { useParams, useNavigate } from "react-router-dom"; // Importa useParams para leer la URL y useNavigate para redirigir

// Define la data de tus artículos directamente en este componente.
// En una aplicación más grande, esta data probablemente vendría de un contexto compartido, Redux,
// o se obtendría de una API basada en el articleSlug.
const articlesData = [
    {
        id: '1',
        title: 'Why Homework and Study Matter: Keys to Academic Success',
        subtitle: 'Discover how doing homework and studying regularly can improve school performance and build lifelong skills.',
        author: 'CREAR News Team',
        category: 'Announcements',
        tags: ['homework', 'studying', 'academic habits', 'student life', 'learning'],
        slug: 'why-homework-and-study-matter',
        imageUrl: 'https://i.pinimg.com/originals/4e/9d/87/4e9d87f8022d47f7cae6012efc96bb82.gif',
        inArticleImageUrl: 'https://i.pinimg.com/736x/52/1e/13/521e13d1d80787d1105eb6004e7e9f7b.jpg', // Second image
        date: 'June 19, 2025',
        fullArticleText: `
            <p class="details-page-paragraph">Homework and studying are essential parts of student life. While some students may not always enjoy them, they play a big role in helping learners understand new topics, prepare for tests, and become responsible individuals. Doing homework and reviewing lessons at home is more than just a task—it’s an important habit that leads to better academic results and a deeper understanding of subjects.</p>
            <p class="details-page-paragraph">From elementary school to high school, students are expected to practice what they learn in class. Homework reinforces learning and gives students time to think about what they studied during the day. It helps them discover their doubts, practice key concepts, and develop skills like time management, independence, and responsibility.</p>
            <h3 class="details-page-heading">📚 Reinforcing Knowledge Outside the Classroom</h3>
            <p class="details-page-paragraph">Learning doesn’t end when the school bell rings. Homework allows students to continue the learning process at home. By solving problems, reading, or writing at home, students can strengthen what they learned in class and improve their memory. When students review lessons regularly, they are more likely to retain information and feel confident during exams.</p>
            <p class="details-page-paragraph">For example, practicing math problems at home can help students better understand formulas. Reading stories or articles improves vocabulary and reading comprehension. Writing essays allows them to express their thoughts more clearly and develop writing skills.</p>
            <h3 class="details-page-heading">📝 Studying Smart: Preparing for Exams</h3>
            <p class="details-page-paragraph">Exams are a part of every student’s academic journey. Studying helps students prepare and feel ready for these challenges. Without proper study habits, even intelligent students can struggle in tests. Studying regularly reduces stress, improves focus, and leads to higher scores.</p>
            <p class="details-page-paragraph">Students who study a little bit every day often perform better than those who try to memorize everything the night before. This method, called "spaced repetition," helps the brain absorb and store information more effectively. Creating flashcards, reviewing class notes, and testing oneself are great techniques to study smarter, not harder.</p>
            <img src="https://i.pinimg.com/736x/52/1e/13/521e13d1d80787d1105eb6004e7e9f7b.jpg" alt="Student studying with books" class="details-page-in-article-image" loading="lazy" />
            <h3 class="details-page-heading">⏳ Building Discipline and Responsibility</h3>
            <p class="details-page-paragraph">Doing homework regularly also helps students develop important life skills. Time management is one of them. Knowing how to plan time between school, homework, and personal activities is a valuable skill for the future. Completing homework on time teaches responsibility and builds confidence in students’ abilities.</p>
            <p class="details-page-paragraph">Additionally, when students complete their tasks without being reminded, they feel proud of their work. It teaches them the value of consistency and discipline. These are skills that not only help in school but also in future jobs and everyday life.</p>
            <h3 class="details-page-heading">🎯 Conclusion: Strong Habits Lead to Strong Results</h3>
            <p class="details-page-paragraph">Homework and studying are not just tasks from teachers—they are tools for success. When students make these practices part of their routine, they gain more than good grades. They become more organized, confident, and prepared for the future.</p>
            <p class="details-page-paragraph">So remember, even a few minutes of homework or review each day can make a big difference. Good habits today build great achievements tomorrow!</p>
            <hr class="details-page-hr"/>
        `,
        // Summary for footer
        summary: `Homework and studying are crucial for academic success, reinforcing knowledge, preparing for exams, and building essential life skills like time management and responsibility. Consistent effort in these areas leads to better understanding, improved performance, and increased confidence, ultimately preparing students for future success.`
    },
    {
        id: '2',
        title: 'The Importance of Rest: Why Students Need Vacation Time',
        subtitle: 'Vacations aren\'t just breaks—they are essential for mental health, personal growth, and better academic performance.',
        author: 'CREAR News Team',
        category: 'Lifestyle',
        tags: ['vacation', 'student life', 'rest', 'productivity', 'wellbeing'],
        slug: 'why-students-need-vacation-time',
        imageUrl: 'https://i.pinimg.com/originals/a4/b0/fd/a4b0fd45c9210a9ed78f7b034159c0ea.gif',
        inArticleImageUrl: 'https://i.pinimg.com/736x/81/a1/99/81a1997dbb1ff7ecbfcf2e6aced0295f.jpg', // Second image
        date: 'June 18, 2025',
        fullArticleText: `
            <p class="details-page-paragraph">Vacations are more than just free time. For students, they provide a much-needed break from academic pressure and allow time to recharge mentally, emotionally, and physically. Rest is a vital part of the learning process, and taking time off can actually improve focus, motivation, and performance once school resumes.</p>
            <p class="details-page-paragraph">In our busy academic routines, students often feel overwhelmed by homework, projects, and exams. This constant pressure can lead to stress and even burnout. Vacations offer the opportunity to relax, explore new interests, and spend quality time with family and friends—activities that contribute to a balanced and healthy lifestyle.</p>
            <h3 class="details-page-heading">🌞 Mental and Emotional Recharge</h3>
            <p class="details-page-paragraph">Resting the brain is as important as exercising it. Vacations give students time to step away from responsibilities and allow the brain to process information learned during the semester. Breaks help reduce anxiety, improve mood, and refresh energy levels. A well-rested student is more likely to return to school with better attention and a positive attitude.</p>
            <p class="details-page-paragraph">Taking time off also strengthens emotional health. Being free from deadlines and performance pressure allows students to enjoy the present moment, reflect on their experiences, and set new personal goals.</p>
            <img src="https://i.pinimg.com/736x/81/a1/99/81a1997dbb1ff7ecbfcf2e6aced0295f.jpg" alt="Students relaxing on vacation" class="details-page-in-article-image" loading="lazy" />
            <h3 class="details-page-heading">🏕️ Building Life Skills Through Free Time</h3>
            <p class="details-page-paragraph">Vacations aren’t just about doing nothing—they’re a chance to grow in different ways. Students can take up hobbies, travel, read, or even help at home. These experiences build creativity, responsibility, and confidence.</p>
            <p class="details-page-paragraph">Learning outside the classroom is just as valuable. For example, helping plan a family trip can teach organization and budgeting. Reading for fun improves language skills. Playing sports or music develops discipline and perseverance.</p>
            <h3 class="details-page-heading">💡 A Balanced Life = Better Learning</h3>
            <p class="details-page-paragraph">Rest and learning go hand in hand. When students return to school after a vacation, they tend to be more focused, motivated, and enthusiastic. Their minds are clearer, and they are better prepared to absorb new knowledge.</p>
            <p class="details-page-paragraph">By recognizing the value of rest, schools and families can support students in building healthy habits that will benefit them throughout their lives. Encouraging rest and recreation is not a waste of time—it’s a wise investment in well-being and future success.</p>
            <p class="details-page-paragraph">So, take that break, enjoy your time, and come back stronger. Because rest is not just a pause—it's part of the process.</p>
            <hr class="details-page-hr"/>
        `,
        summary: `Taking breaks is essential for students. Vacations help recharge the brain, reduce stress, and allow space for personal growth. With balanced rest and recreation, students return to school more focused, motivated, and ready to succeed.`
    },
    {
        id: '3',
        title: 'The Rise of AI in Education: Opportunities and Challenges',
        subtitle: 'How artificial artificial intelligence is transforming learning and what it means for students and teachers.',
        author: 'Tech Innovators Group',
        category: 'Technology',
        tags: ['AI', 'education', 'technology', 'future of learning'],
        slug: 'ai-in-education',
        imageUrl: 'https://i.pinimg.com/originals/59/34/6b/59346b4b5c80cc5cf0c483a27dfdcb36.gif',
        date: 'June 17, 2025',
        fullArticleText: `
            <p class="details-page-paragraph">Artificial intelligence is rapidly changing many aspects of our lives, and education is no exception. From personalized learning platforms to automated grading, AI offers exciting opportunities to enhance the learning experience.</p>
            <p class="details-page-paragraph">However, with these opportunities come challenges. Ensuring equitable access to AI tools, maintaining human connection in the classroom, and addressing ethical concerns are crucial as we integrate AI into educational settings.</p>
            <img src="https://i.pinimg.com/736x/8e/71/61/8e71618a8d16719e78262a4d93f77341.jpg" alt="AI in education" class="details-page-in-article-image" loading="lazy" />
            <p class="details-page-paragraph">AI can help teachers identify student learning gaps, provide immediate feedback, and even create custom learning paths. For students, it can offer 24/7 tutoring, access to vast amounts of information, and tools for creative expression.</p>
            <p class="details-page-paragraph">As we move forward, a balanced approach is necessary. AI should be seen as a tool to assist and augment, not replace, human teachers. The goal is to leverage AI's power to create more effective, engaging, and accessible educational environments for everyone.</p>
            <div class="details-page-footer-content">
                <p><strong>Author:</strong> Tech Innovators Group</p>
                <p><strong>Category:</strong> Technology</p>
                <p><strong>Published:</strong> June 2025</p>
                <p class="details-page-tags"><strong>Tags:</strong> AI, education, technology, future of learning</p>
            </div>
        `,
        summary: `Artificial intelligence is rapidly changing many aspects of our lives, and education is no exception. From personalized learning platforms to automated grading, AI offers exciting opportunities to enhance the learning experience.`
    }
];


export const Details = () => {
    const { articleSlug } = useParams(); // Obtiene el slug de la URL
    const navigate = useNavigate(); // Obtiene la función de navegación

    // Busca el artículo basado en el slug de la URL
    const article = articlesData.find(art => art.slug === articleSlug);

    // Función para volver a la página de inicio
    const handleGoBack = () => {
        navigate("/");
    };

    if (!article) {
        return (
            <div className="details-page-container">
                <p className="not-found-message">Article not found.</p>
                <button onClick={handleGoBack} className="back-button">
                    &larr; Back to Home
                </button>
            </div>
        );
    }

    return (
        // Wrapper div for the back button and the main article container
        <div className="details-page-wrapper">
            {/* Botón para volver al inicio */}
            <button onClick={handleGoBack} className="back-button-top">
                &larr; Volver a Inicio
            </button>

            <div className="details-page-container">
                <header className="details-page-header">
                    <img src={article.imageUrl} alt={article.title} className="details-page-hero-image" />
                    <div className="details-page-header-content">
                        <span className="details-page-category">{article.category}</span>
                        <h1 className="details-page-title">{article.title}</h1>
                        <p className="details-page-subtitle">{article.subtitle}</p>
                        <p className="details-page-meta">By {article.author} | {article.date}</p>
                    </div>
                </header>

                <section
                    className="details-page-body"
                    // dangerouslySetInnerHTML es usado para renderizar HTML crudo
                    dangerouslySetInnerHTML={{ __html: article.fullArticleText }}
                />

                <footer className="details-page-footer">
                    <div className="footer-info-grid">
                        <p><strong>Autor:</strong> {article.author}</p>
                        <p><strong>Categoría:</strong> {article.category}</p>
                        <p><strong>Publicado:</strong> {article.date}</p>
                        <p><strong>Etiquetas:</strong> {article.tags.join(', ')}</p>
                    </div>
                    <p className="details-page-summary">
                        <strong>Resumen generado por IA:</strong> {article.summary}
                    </p>
                </footer>
            </div>
        </div>
    );
};
