import Image from '../model/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${imaage.path}`,
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};