import videos from '@/data/videos.json'
import { Video } from '@/types'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import CommentaryBlock from '@/components/CommentaryBlock'

export const metadata = {
  title: 'Videos | nothing ever stays the same for long',
  description: 'A collection of video works exploring movement, time, and transformation.',
}

export default function VideosPage() {
  const videosData = videos as Video[]

  return (
    <div className="container mx-auto px-4 pt-32 pb-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-light mb-4">
          Videos
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Moving images that capture the fluid nature of time and space.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {videosData.map((video) => (
          <article key={video.id} className="space-y-4">
            <div className="relative">
              <YouTubeEmbed
                videoId={video.youtubeId}
                title={video.title}
              />
            </div>
            
            <h2 className="text-xl font-serif font-medium">
              {video.title}
            </h2>

            <CommentaryBlock commentary={video.commentary} />
          </article>
        ))}
      </div>
    </div>
  )
}
