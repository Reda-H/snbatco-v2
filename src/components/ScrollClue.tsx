import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollClue: React.FC = () => {
    const [showScroll, setShowScroll] = useState(true);

    useEffect(() => {
        const checkScrollTop = () => {
            const isTop = window.scrollY <= 150;
            setShowScroll(isTop);
        };

        // Check initial position
        checkScrollTop();

        // Add scroll event listener
        window.addEventListener('scroll', checkScrollTop);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, []);

    if (!showScroll) return null;

    return (
        <div
            className="fixed bottom-8 left-0 right-0 w-fit mx-auto transform -translate-x-1/2 animate-bounce cursor-pointer z-50"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
            <div className="p-3 bg-white/80 rounded-full shadow-md backdrop-blur-sm">
                <ChevronDown className="text-3xl text-gray-600 hover:text-gray-800 transition-colors duration-300" />
            </div>
        </div>
    );
};

export default ScrollClue;
