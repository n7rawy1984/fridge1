import React from 'react';
import videoPoster from '@/assets/video-poster.jpg';
import videoFile from '@/assets/demo-video.mp4'; // استبدل بالفيديو بتاعك

interface VideoSectionProps {
  isArabic: boolean;
}

const VideoSection = ({ isArabic }: VideoSectionProps) => {
  const content = {
    ar: {
      title: 'شاهد كيف تعمل ثلاجة Hit&Get',
      subtitle: 'تجربة مرئية كاملة لكيفية عمل الثلاجة وجميع مميزاتها',
    },
    en: {
      title: 'See How Hit&Get Cooler Works',
      subtitle: 'Complete visual experience of how the cooler works and all its features',
    }
  };

  const text = content[isArabic ? 'ar' : 'en'];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30" id="video">
      <div className="container mx-auto px-4">

        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            {text.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* الفيديو */}
        <div className="flex justify-center">
  <div className="rounded-2xl overflow-hidden shadow-2xl">
    <video 
      src={videoFile}
      poster={videoPoster}
      controls
      width="500"
      height="383"
      className="rounded-2xl"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default VideoSection;
