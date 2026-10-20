import { useParams, Link } from 'react-router-dom';
import { useGetUserByIdQuery } from '../../../shared/api/api';

export const UserDetailsPage = () => {
    const { id } = useParams();
    const { data: user, isLoading } = useGetUserByIdQuery(Number(id));

    if (isLoading) return <h2>Загрузка профиля...</h2>;
    if (!user) return <h2>Пользователь не найден</h2>;

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <Link to="/">← Назад к списку</Link>
            <h1 style={{ marginTop: '20px' }}>Профиль: {user.name}</h1>
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: '#fff' }}>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Телефон:</strong> {user.phone}</p>
                <p><strong>Сайт:</strong> {user.name.toLowerCase().replace(' ', '')}.com</p>
            </div>
        </div>
    );
};