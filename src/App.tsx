import Header from './components/Header';
import GoalsContainer from './components/GoalsContainer';

function App() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 sm:p-8">
            <Header />
            <GoalsContainer />
        </div>
    );
}

export default App;
