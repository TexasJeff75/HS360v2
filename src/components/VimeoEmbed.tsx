import React from 'react';
import { motion } from 'framer-motion';

interface VimeoEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({
  videoId,
  title = 'Vimeo video player',
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative w-full ${className}`}
      style={{ paddingBottom: '56.25%' }}
    >
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
        className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title={title}
        loading="lazy"
      ></iframe>
    </motion.div>
  );
};

export default VimeoEmbed;
