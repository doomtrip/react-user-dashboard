import { UserSearchList } from '../../../features/user-search/ui/UserSearchList';

export const DashboardPage = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Дашборд управления пользователями</h1>
            <UserSearchList />
        </div>
    );
};