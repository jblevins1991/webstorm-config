import * as React from 'react';
import PropTypes from 'prop-types';

export interface ${NAME}Props {};

const ${NAME} = React.forwardRef<
    HTMLDivElement,
    ${NAME}Props
>((props) => {
    return <div></div>;
});

${NAME}.displayName = '${NAME}';

${NAME}.propTypes = {};

export default ${NAME};