import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetUsersQuery } from '../../../shared/api/api';
import { UserCard } from '../../../entities/user/ui/UserCard';
import { useDebounce } from '../../../shared/lib/hooks/useDebounce';
import type { RootState } from '../../../app/store';

export const UserSearchList = () => {
    const { data: users, isLoading, isError } = useGetUsersQuery();
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 300);

    const favoriteIds = useSelector((state: RootState) => state.favorites.ids);
    
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

    const filteredUsers = useMemo(() => {
        if (!users) return [];

        return users.filter(user => {
            const matchesSearch = user.name.toLowerCase().includes(debouncedSearch.toLowerCase());
            
            const matchesFavorite = showOnlyFavorites ? favoriteIds.includes(user.id) : true;

            return matchesSearch && matchesFavorite;
        });
    }, [users, debouncedSearch, showOnlyFavorites, favoriteIds]); // Не забываем добавить зависимости!

    if (isLoading) return <h2>Загрузка пользователей...</h2>;
    if (isError) return <h2 style={{ color: 'red' }}>Ошибка загрузки данных!</h2>;

    return (
        <div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', alignItems: 'center' }}>
                <input 
                    type="text" 
                    placeholder="Поиск по имени..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: '10px', width: '100%', maxWidth: '400px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                
                <button 
                    onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                    style={{ 
                        padding: '10px 15px', 
                        cursor: 'pointer',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        backgroundColor: showOnlyFavorites ? '#ffeaa7' : '#fff',
                        fontWeight: showOnlyFavorites ? 'bold' : 'normal'
                    }}
                >
                    {showOnlyFavorites ? '★ Показать всех' : '☆ Только избранные'}
                </button>
            </div>

            <div>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))
                ) : (
                    <p>Никого не нашли по заданным критериям</p>
                )}
            </div>
        </div>
    );
};