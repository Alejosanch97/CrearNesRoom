import React from "react";
import "../../styles/home.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

// Define la data de tus artículos aquí
// Esta data es la misma que ya tenías, pero es importante que esté presente en el componente
// si no estás pasando los artículos como props desde un componente superior como App.js o Layout.js
const articles = [
    {
        id: '1',
        title: 'Why Homework and Study Matter: Keys to Academic Success',
        subtitle: 'Discover how doing homework and studying regularly can improve school performance and build lifelong skills.',
        author: 'CREAR News Team',
        category: 'Announcements',
        tags: ['homework', 'studying', 'academic habits', 'student life', 'learning'],
        slug: 'why-homework-and-study-matter',
        imageUrl: 'https://i.pinimg.com/originals/4e/9d/87/4e9d87f8022d47f7cae6012efc96bb82.gif',
        date: 'June 19, 2025',
        fullArticleHtml: `<h1 class="article-full-title">Why Homework and Study Matter: Keys to Academic Success</h1><p class="article-full-meta"><strong>By CREAR News Team</strong> | <em>June 2025</em></p><p class="article-full-paragraph">Homework and studying are essential parts of student life. While some students may not always enjoy them, they play a big role in helping learners understand new topics, prepare for tests, and become responsible individuals. Doing homework and reviewing lessons at home is more than just a task—it’s an important habit that leads to better academic results and a deeper understanding of subjects.</p><p class="article-full-paragraph">From elementary school to high school, students are expected to practice what they learn in class. Homework reinforces learning and gives students time to think about what they studied during the day. It helps them discover their doubts, practice key concepts, and develop skills like time management, independence, and responsibility.</p><h3 class="article-full-heading">📚 Reinforcing Knowledge Outside the Classroom</h3><p class="article-full-paragraph">Learning doesn’t end when the school bell rings. Homework allows students to continue the learning process at home. By solving problems, reading, or writing at home, students can strengthen what they learned in class and improve their memory. When students review lessons regularly, they are more likely to retain information and feel confident during exams.</p><p class="article-full-paragraph">For example, practicing math problems at home can help students better understand formulas. Reading stories or articles improves vocabulary and reading comprehension. Writing essays allows them to express their thoughts more clearly and develop writing skills.</p><h3 class="article-full-heading">📝 Studying Smart: Preparing for Exams</h3><p class="article-full-paragraph">Exams are a part of every student’s academic journey. Studying helps students prepare and feel ready for these challenges. Without proper study habits, even intelligent students can struggle in tests. Studying regularly reduces stress, improves focus, and leads to higher scores.</p><p class="article-full-paragraph">Students who study a little bit every day often perform better than those who try to memorize everything the night before. This method, called "spaced repetition," helps the brain absorb and store information more effectively. Creating flashcards, reviewing class notes, and testing oneself are great techniques to study smarter, not harder.</p><img src="https://i.pinimg.com/736x/ba/6a/2a/ba6a2a493f3d0ccac63c36572cfdbb76.jpg" alt="Student studying with books" class="article-full-image" loading="lazy" data-ai-hint="student doing homework and studying for exam" /><h3 class="article-full-heading">⏳ Building Discipline and Responsibility</h3><p class="article-full-paragraph">Doing homework regularly also helps students develop important life skills. Time management is one of them. Knowing how to plan time between school, homework, and personal activities is a valuable skill for the future. Completing homework on time teaches responsibility and builds confidence in students’ abilities.</p><p class="article-full-paragraph">Additionally, when students complete their tasks without being reminded, they feel proud of their work. It teaches them the value of consistency and discipline. These are skills that not only help in school but also in future jobs and everyday life.</p><h3 class="article-full-heading">🎯 Conclusion: Strong Habits Lead to Strong Results</h3><p class="article-full-paragraph">Homework and studying are not just tasks from teachers—they are tools for success. When students make these practices part of their routine, they gain more than good grades. They become more organized, confident, and prepared for the future.</p><p class="article-full-paragraph">So remember, even a few minutes of homework or review each day can make a big difference. Good habits today build great achievements tomorrow!</p><hr class="article-full-divider" /><div class="article-full-footer">
  <p><strong>Author:</strong> CREAR News Team</p>
  <p><strong>Category:</strong> Announcements</p>
  <p><strong>Published:</strong> June 2025</p>
  <p class="Tags">homework, studying, academic habits, student life, learning</p>
  <p class="article-full-summary">
    <strong>AI Generated Summary:</strong> Homework and studying are crucial for academic success, reinforcing knowledge, preparing for exams, and building essential life skills like time management and responsibility. Consistent effort in these areas leads to better understanding, improved performance, and increased confidence, ultimately preparing students for future success.
  </p></div>`
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
        date: 'June 18, 2025',
        fullArticleHtml: `<h1 class="article-full-title">The Importance of Rest: Why Students Need Vacation Time</h1><p class="article-full-meta"><strong>By CREAR News Team</strong> | <em>June 2025</em></p><p class="article-full-paragraph">Vacations are more than just free time. For students, they provide a much-needed break from academic pressure and allow time to recharge mentally, emotionally, and physically. Rest is a vital part of the learning process, and taking time off can actually improve focus, motivation, and performance once school resumes.</p><p class="article-full-paragraph">In our busy academic routines, students often feel overwhelmed by homework, projects, and exams. This constant pressure can lead to stress and even burnout. Vacations offer the opportunity to relax, explore new interests, and spend quality time with family and friends—activities that contribute to a balanced and healthy lifestyle.</p><p class="article-full-heading">🌞 Mental and Emotional Recharge</p><p class="article-full-paragraph">Resting the brain is as important as exercising it. Vacations give students time to step away from responsibilities and allow the brain to process information learned during the semester. Breaks help reduce anxiety, improve mood, and refresh energy levels. A well-rested student is more likely to return to school with better attention and a positive attitude.</p><p class="article-full-paragraph">Taking time off also strengthens emotional health. Being free from deadlines and performance pressure allows students to enjoy the present moment, reflect on their experiences, and set new personal goals.</p><img src="https://i.pinimg.com/736x/04/35/63/043563457f23c269ca898ccee677fa27.jpg" alt="Students relaxing on vacation" class="article-full-image" loading="lazy" data-ai-hint="students relaxing on vacation" /><h3 class="article-full-heading">🏕️ Building Life Skills Through Free Time</h3><p class="article-full-paragraph">Vacations aren’t just about doing nothing—they’re a chance to grow in different ways. Students can take up hobbies, travel, read, or even help at home. These experiences build creativity, responsibility, and confidence.</p><p class="article-full-paragraph">Learning outside the classroom is just as valuable. For example, helping plan a family trip can teach organization and budgeting. Reading for fun improves language skills. Playing sports or music develops discipline and perseverance.</p><h3 class="article-full-heading">💡 A Balanced Life = Better Learning</h3><p class="article-full-paragraph">Rest and learning go hand in hand. When students return to school after a vacation, they tend to be more focused, motivated, and enthusiastic. Their minds are clearer, and they are better prepared to absorb new knowledge.</p><p class="article-full-paragraph">By recognizing the value of rest, schools and families can support students in building healthy habits that will benefit them throughout their lives. Encouraging rest and recreation is not a waste of time—it’s a wise investment in well-being and future success.</p><p class="article-full-paragraph">So, take that break, enjoy your time, and come back stronger. Because rest is not just a pause—it's part of the process.</p><hr class="article-full-divider" /><div class="article-full-footer">
  <p><strong>Author:</strong> CREAR News Team</p>
  <p><strong>Category:</strong> Lifestyle</p>
  <p class="Published">June 2025</p>
  <p class="Tags">vacation, student life, rest, productivity, wellbeing</p>
  <p class="article-full-summary">
    <strong>AI Generated Summary:</strong> Taking breaks is essential for students. Vacations help recharge the brain, reduce stress, and allow space for personal growth. With balanced rest and recreation, students return to school more focused, motivated, and ready to succeed.
  </p></div>`
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
        fullArticleHtml: `<h1 class="article-full-title">The Rise of AI in Education: Opportunities and Challenges</h1><p class="article-full-meta"><strong>By Tech Innovators Group</strong> | <em>June 2025</em></p><p class="article-full-paragraph">Artificial intelligence is rapidly changing many aspects of our lives, and education is no exception. From personalized learning platforms to automated grading, AI offers exciting opportunities to enhance the learning experience.</p><p class="article-full-paragraph">However, with these opportunities come challenges. Ensuring equitable access to AI tools, maintaining human connection in the classroom, and addressing ethical concerns are crucial as we integrate AI into educational settings.</p><img src="https://i.pinimg.com/736x/8e/71/61/8e71618a8d16719e78262a4d93f77341.jpg" alt="AI in education" class="article-full-image" loading="lazy" /><p class="article-full-paragraph">AI can help teachers identify student learning gaps, provide immediate feedback, and even create custom learning paths. For students, it can offer 24/7 tutoring, access to vast amounts of information, and tools for creative expression.</p><p class="article-full-paragraph">As we move forward, a balanced approach is necessary. AI should be seen as a tool to assist and augment, not replace, human teachers. The goal is to leverage AI's power to create more effective, engaging, and accessible educational environments for everyone.</p><div class="article-full-footer">
  <p><strong>Author:</strong> Tech Innovators Group</p>
  <p><strong>Category:</strong> Technology</p>
  <p class="Published">June 2025</p>
  <p class="Tags">AI, education, technology, future of learning</p>
</div>`
    }
];

export const Home = () => {
    // Ordena los artículos por fecha para que el más reciente aparezca primero
    const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

    // El primer artículo será el destacado
    const featuredArticle = sortedArticles[0];
    // El resto irá en la cuadrícula
    const otherArticles = sortedArticles.slice(1);

    // Obtén la función de navegación de react-router-dom
    const navigate = useNavigate();

    // Función para manejar el clic en el botón "Read More"
    const handleReadMore = (articleSlug) => {
        // Navega a la ruta /details/:articleSlug
        navigate(`/details/${articleSlug}`);
    };

    return (
        <div className="home-container">
            {/* Sección de Artículo Destacado */}
            {featuredArticle && (
                <section className="featured-article">
                    <div className="featured-image-wrapper">
                        <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="featured-image" />
                    </div>
                    <div className="featured-content">
                        <span className="article-category">{featuredArticle.category}</span>
                        <h2 className="article-title">{featuredArticle.title}</h2>
                        <p className="article-subtitle">{featuredArticle.subtitle}</p>
                        <p className="article-meta">By {featuredArticle.author} | {featuredArticle.date}</p>
                        {/* Usa la función handleReadMore para navegar */}
                        <button onClick={() => handleReadMore(featuredArticle.slug)} className="read-more-button">
                            Read More
                        </button>
                    </div>
                </section>
            )}

            {/* Cuadrícula de Otros Artículos */}
            <section className="other-articles-grid">
                {otherArticles.map(article => (
                    <article key={article.id} className="news-card">
                        <div className="news-card-image-wrapper">
                            <img src={article.imageUrl} alt={article.title} className="news-card-image" />
                        </div>
                        <div className="news-card-content">
                            <span className="article-category">{article.category}</span>
                            <h3 className="news-card-title">{article.title}</h3>
                            <p className="news-card-subtitle">{article.subtitle}</p>
                            <p className="news-card-meta">By {article.author} | {article.date}</p>
                            {/* Usa la función handleReadMore para navegar */}
                            <button onClick={() => handleReadMore(article.slug)} className="read-more-button">
                                Read More
                            </button>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};
