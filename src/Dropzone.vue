<template>
    <div
        class="dropzone"
        :class="{'is-dragging': isDragging}"
        @drop.prevent="onDrop"
        @dragover.prevent="onDragover"
        @dragenter.prevent="onDragenter"
        @dragleave.prevent="onDragleave">
        <div class="dropzone-placeholder">
            <div class="dropzone-placeholder-content">
                <slot name="placeholder">
                    <h2>Drag & Drop</h2>
                    <p class="dropzone-text">
                        Drag and drop your files here to upload them!
                    </p>
                </slot>
            </div>
        </div>
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

.dropzone:not(.is-dragging) .dropzone-placeholder {
    display: none;
}

.dropzone .dropzone-text {
    font-size: 18px;
}

.dropzone .dropzone-placeholder {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: .25rem;
    pointer-events: none;
    border: 1px solid #ced4da;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.dropzone .dropzone-placeholder-content {
    width: 100%;
}

.dropzone .dropzone-placeholder > div {
    width: 100%;
}
</style>
