<script setup>
import { computed } from 'vue'
import { useSiteText } from '../composables/useSiteText'

const props = defineProps({
  topic: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  }
})

const { pickSiteText } = useSiteText()

const YOUTUBE_WATCH_ID_PATTERN = /[?&]v=([A-Za-z0-9_-]+)/
const YOUTUBE_SHORT_ID_PATTERN = /youtu\.be\/([A-Za-z0-9_-]+)/

function findYouTubeVideoId(videoLink) {
  const watchMatch = videoLink.match(YOUTUBE_WATCH_ID_PATTERN)
  const shortMatch = videoLink.match(YOUTUBE_SHORT_ID_PATTERN)
  const videoId = watchMatch !== null ? watchMatch[1] : shortMatch !== null ? shortMatch[1] : ''
  return videoId
}

const embedUrl = computed(() => {
  if (props.link === '') {
    return ''
  }
  const videoId = findYouTubeVideoId(props.link)
  const embedPath = videoId === '' ? '' : `https://www.youtube.com/embed/${videoId}`
  return embedPath
})

const watchLabel = computed(() => pickSiteText('Watch the video', 'Video dekho'))
const placeholderText = computed(() =>
  pickSiteText(
    'Video slot — the captain pastes the YouTube link here.',
    'Video slot — captain yahan YouTube link paste karenge.'
  )
)
</script>

<template>
  <div class="video-slot">
    <iframe
      v-if="embedUrl !== ''"
      class="video-slot-frame"
      :src="embedUrl"
      :title="topic"
      allowfullscreen
    ></iframe>
    <a v-else-if="link !== ''" class="video-slot-link" :href="link" target="_blank" rel="noopener">
      ▶ {{ watchLabel }}<template v-if="topic !== ''"> — {{ topic }}</template>
    </a>
    <div v-else class="video-slot-placeholder">
      <span class="video-slot-icon">📹</span>
      <span>{{ placeholderText }}</span>
      <span v-if="topic !== ''" class="video-slot-topic">{{ topic }}</span>
    </div>
  </div>
</template>

<style scoped>
.video-slot {
  margin: 16px 0;
}

.video-slot-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.video-slot-link {
  display: inline-block;
  padding: 12px 16px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 12px;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
}

.video-slot-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 16px;
  border: 2px dashed var(--vp-c-border);
  border-radius: 12px;
  color: var(--vp-c-text-2);
  text-align: center;
}

.video-slot-icon {
  font-size: 24px;
}

.video-slot-topic {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
</style>
