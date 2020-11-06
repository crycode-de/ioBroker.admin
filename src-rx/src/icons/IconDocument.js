// Icon copied from https://github.com/FortAwesome/Font-Awesome/blob/0d1f27efb836eb2ab994ba37221849ed64a73e5c/svgs/regular/
const IconDocument = props => {
    return (
        <svg onClick={e => props.onClick && props.onClick(e)} viewBox="0 0 512 512" width={props.width || 20} height={props.width || 20} xmlns="http://www.w3.org/2000/svg" className={ props.className }>
            <path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"/>
        </svg>
    );
}

export default IconDocument;