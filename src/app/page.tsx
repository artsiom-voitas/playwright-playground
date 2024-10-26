import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function Home() {
    return (
        <main>
            <ThemeSwitcher />
            <div className="flex h-full flex-col items-center justify-center text-4xl font-bold">
                Next.js 15 playground.
            </div>
        </main>
    );
}
