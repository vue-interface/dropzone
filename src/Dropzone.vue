<template>
    <div
        class="dropzone"
        :class="{'is-dragging': isDragging}"
        @drop.prevent="onDrop"
        @dragover.prevent="onDragover"
        @dragenter.prevent="onDragenter"
        @dragleave.prevent="onDragleave">
        <slot name="placeholder">
            <div class="dropzone-placeholder text-center">
                <h2>Drag & Drop</h2>
                <p class="dropzone-text">
                    Drag and drop your files here to upload them!
                </p>
            </div>
        </slot>
        <slot />
    </div>
</template>

<script>
export default {

    name: 'Dropzone',

    data() {
        return {
            files: null,
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
    position: relative;
}

.dropzone.is-dragging .dropzone-placeholder {
    display: block;
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
    background: white;
    pointer-events: none;
}
</style>
