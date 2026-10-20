import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { User } from '../model/types';
import { toggleFavorite } from '../../../features/favorites/model/favoritesSlice';
import type { RootState } from '../../../app/store';

interface UserCardProps {
    user: User;
}

export const UserCard = React.memo(({ user }: UserCardProps) => {
    console.log(`Рендер карточки: ${user.name}`);

    const dispatch = useDispatch();
    const isFavorite = useSelector((state: RootState) => state.favorites.ids.includes(user.id));

    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '8px', backgroundColor: '#fff' }}>
            <Link to={`/user/${user.id}`} style={{ textDecoration: 'none', color: '#3498db' }}>
                <h3 style={{ marginTop: 0, marginBottom: '10px' }}>{user.name}</h3>
            </Link>
            
            <p style={{ margin: '5px 0' }}><strong>Email:</strong> {user.email}</p>
            <p style={{ margin: '5px 0' }}><strong>Телефон:</strong> {user.phone}</p>
            
            <button 
                onClick={() => dispatch(toggleFavorite(user.id))}
                style={{ 
                    marginTop: '10px', 
                    cursor: 'pointer', 
                    padding: '8px 12px', 
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    backgroundColor: isFavorite ? '#ffeaa7' : '#f1f2f6',
                    transition: '0.2s'
                }}
            >
                {isFavorite ? '★ Убрать из избранного' : '☆ В избранное'}
            </button>
        </div>
    );
});