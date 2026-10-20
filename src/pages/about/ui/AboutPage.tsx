import { Link } from 'react-router-dom';
import penguinGif from '../../../assets/penguin.gif';

export const AboutPage = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#3498db' }}>← Назад на главную</Link>
            
            <h1 style={{ marginTop: '20px', color: '#2c3e50' }}>О проекте</h1>
            
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ccc' }}>
                <p style={{ fontSize: '18px' }}>
                    Это пет-проект для собеседований на позицию Frontend-разработчика.
                </p>
                
                <p style={{ fontSize: '18px', marginTop: '20px' }}>
                    <strong>Использованы следующие фишки:</strong>
                </p>
                <ul style={{ fontSize: '16px', color: '#555' }}>
                    <li><strong>React + TypeScript + Vite</strong> - современный стек.</li>
                    <li><strong>Архитектура FSD (Feature-Sliced Design)</strong> - правильное разделение кода на слои (app, pages, features, entities, shared).</li>
                    <li><strong>Redux Toolkit + RTK Query</strong> - для глобального стейта (избранное) и работы с API (кэширование, автоматические статусы загрузки).</li>
                    <li><strong>React Router DOM</strong> - роутинг между страницами (список и профиль пользователя).</li>
                    <li><strong>Оптимизация</strong> - использование <code>React.memo</code>, <code>useMemo</code> и кастомного хука <code>useDebounce</code> для поиска.</li>
                </ul>

                <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee', textAlign: 'center' }}>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#2c3e50' }}>
                        Разработал Денисов Михаил Юрьевич :)
                    </p>
                    <img 
                        src={penguinGif} 
                        alt="Пингвин" 
                        style={{ width: '200px', borderRadius: '10px' }} 
                    />                    
                </div>
            </div>
        </div>
    );
};