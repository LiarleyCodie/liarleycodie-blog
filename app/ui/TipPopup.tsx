const TipPopup: React.FC<{ title: string; className?: string }> = ({
    title,
    className,
}) => {
    return (
        <span
            className={`z-50 absolute text-xs pointer-events-none select-none duration-200 py-1 px-3 rounded-md border border-gray-400 ${className}`}
        >
            {title}
        </span>
    )
}

export default TipPopup