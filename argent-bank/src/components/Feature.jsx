export default function Feature({ img, alt, title, description }) {
    return (
        <div class="feature-item">
            <img src={img} alt={alt} class="feature-icon" />
            <h3 class="feature-item-title">{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}