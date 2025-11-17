import React from 'react';

const SketchfabEmbed = ({ modelId = "ff2baf0f98944765a6b9937fa5d0850e", autoStart = 1, title = "3D Model" }) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <iframe
        title={title}
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        src={`https://sketchfab.com/models/${modelId}/embed?autostart=${autoStart}&ui_theme=dark&ui_hint=0&ui_controls=0&ui_stop=0&preload=1`}
        className="w-full h-full"
      />
    </div>
  );
};

export default SketchfabEmbed;

