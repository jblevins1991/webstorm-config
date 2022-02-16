import * as React from 'react';
import PropTypes from 'prop-types';

export interface ${NAME}Type {
    // context interface properties
};

export const ${NAME} = React.createContext<${NAME}Type>({
    // default values go here
});

export interface ${NAME}ProviderProps {
    children: React.ReactNode;
    // context provider props
};

const ${NAME}Provider: FC<${NAME}ProviderProps> = (props) => {
    return <${NAME}.Provider>
        { props.children }
    </${NAME}.Provider>;
};

${NAME}Provider.displayName = '${NAME}Provider';

${NAME}Provider.propTypes = {
    // prop types for our vanilla js brotheren
};

export default ${NAME}Provider;