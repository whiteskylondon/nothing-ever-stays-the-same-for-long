import siteMeta from '@/data/site-meta.json'

export const metadata = {
  title: 'About | nothing ever stays the same for long',
  description: 'About Daniel Roy and the photography and video project.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-light mb-6">
            About
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="commentary-text space-y-6">
            <p>
              This project began as an exploration of the spaces we inhabit and the ways they change over time. 
              Each image and video represents a moment of observation, a pause in the constant flux of urban and natural landscapes.
            </p>
            
            <p>
              The title &ldquo;nothing ever stays the same for long&rdquo; reflects both the subject matter and the process of creation. 
              Cities evolve, landscapes shift, and our understanding of these spaces changes with each encounter.
            </p>
            
            <p>
              Through photography and video, I seek to capture not just what these places look like, but how they feel—the textures, 
              the light, the movement, and the quiet moments of transformation that define our relationship with the world around us.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-xl font-serif font-medium mb-4">Contact</h2>
            <div className="space-y-2">
              <p>
                <a 
                  href="mailto:hello@danielroy.com" 
                  className="underline hover:no-underline transition-all"
                >
                  hello@danielroy.com
                </a>
              </p>
              {siteMeta.social.instagram && (
                <p>
                  <a 
                    href={siteMeta.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:no-underline transition-all"
                  >
                    Instagram
                  </a>
                </p>
              )}
              {siteMeta.social.youtube && (
                <p>
                  <a 
                    href={siteMeta.social.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:no-underline transition-all"
                  >
                    YouTube
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
