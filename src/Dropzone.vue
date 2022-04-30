<template>
    <div
        class="dropzone"
        :class="{'is-dragging': isDragging}"
        @drop.prevent="onDrop"
        @dragover.prevent="onDragover"
        @dragenter.prevent="onDragenter"
        @dragleave.prevent="onDragleave">
        <slot name="placeholder" :is-dragging="isDragging">
            <div class="dropzone-placeholder text-center">
                <slot name="content" :is-dragging="isDragging">
                    <div class="dropzone-placeholder-content">
                        <slot name="icon" :is-dragging="isDragging">
                            <svg
                                v-if="icon" 
                                class="dropzone-placeholder-icon"
                                fill="none"
                                height="56"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                width="56"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none" stroke="none" /><rect height="12" rx="2" width="12" x="8" y="8" />
                                <line x1="4" x2="4" y1="4" y2="4.01" /><line x1="8" x2="8" y1="4" y2="4.01" /><line x1="12" x2="12" y1="4" y2="4.01" />
                                <line x1="16" x2="16" y1="4" y2="4.01" /><line x1="4" x2="4" y1="8" y2="8.01" /><line x1="4" x2="4" y1="12" y2="12.01" />
                                <line x1="4" x2="4" y1="16" y2="16.01" />
                            </svg>
                        </slot>

                        <slot name="text" :is-dragging="isDragging">
                            <div>
                                <h2 class="dropzone-title">
                                    Drag & Drop
                                </h2>
                                <p class="dropzone-text">
                                    Drag and drop your files here to upload them!
                                </p>
                            </div>
                        </slot>
                    </div>
                </slot>
            </div>
        </slot>
        <div>
            <slot />
        </div>
    </div>
</template>

<script>
export default {

    name: 'Dropzone',

    props: {
        icon: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            isDragging: false
        };
    },

    methods: {

        onDrop(event) {
            this.isDragging = false;
            this.$emit('drop', event);
        },

        onDragover(event) {
            this.isDragging = true;
            this.$emit('dragover', event);
        },

        onDragenter(event) {
            this.isDragging = true;
            this.$emit('dragenter', event);
            this.onDragover(event);
        },

        onDragleave(event) {
            this.isDragging = false;
            this.$emit('dragleave', event);
        }

    }

};
</script>

<style>
.dropzone {
    display: flex;
    position: relative;
}

.dropzone.is-dragging .dropzone-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
}

.dropzone .dropzone-title {
    font-size: 24px;
    font-weight: bold;
}

.dropzone .dropzone-text {
    font-size: 18px;
}

.dropzone .dropzone-placeholder {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .75);
    pointer-events: none;
}

.dropzone-placeholder-content {
    display: flex;
}

.dropzone-placeholder-icon {
    margin-right: 1em;
}
</style>
