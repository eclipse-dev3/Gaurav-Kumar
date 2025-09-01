// components/BlurBlob.jsx
import PropTypes from 'prop-types';

const Blur = ({ position, size }) => {
    // Destructure position and size with default values
    const { top, left } = position
    const { width, height } = size

    return (
        <div
            className="absolute"
            style={{
                top: top,
                left: left,
                width: width,
                height: height,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div className="w-full h-full bg-purple-500 rounded-full opacity-25 blur-3xl animate-blob">
                
            </div>

        </div>
    );
};

// Define prop types
Blur.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }),
};

export default Blur;