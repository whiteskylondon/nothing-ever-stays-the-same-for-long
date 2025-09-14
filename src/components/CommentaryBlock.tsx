interface CommentaryBlockProps {
  commentary: string;
  className?: string;
}

export default function CommentaryBlock({ commentary, className = "" }: CommentaryBlockProps) {
  return (
    <div className={`mt-6 mb-8 ${className}`}>
      <div 
        className={`commentary-text ${className.includes('text-white') ? 'text-white' : ''}`}
        dangerouslySetInnerHTML={{ 
          __html: commentary.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>').replace(/^/, '<p>').replace(/$/, '</p>')
        }}
      />
    </div>
  )
}
