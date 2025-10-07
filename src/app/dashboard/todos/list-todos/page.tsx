import { GetAllTodos } from '@/lib/API/Database/todos/queries';
import TodosList from '../_PageSections/TodosList';

export const dynamic = 'force-dynamic';

export default async function ListTodos() {
  const todos = await GetAllTodos();

  return (
    <div>
      <TodosList todos={todos} />
    </div>
  );
}
