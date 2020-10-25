import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { theme1 } from '../styles/global'

import { AuthProvider } from './useAuth';
import { PostProvider } from './usePost';
import { ActionsProvider } from './useActions';
import { DeleteProvider } from './useDelete';

const AppProvider: React.FC = ({children}) => {
    return(
        <ThemeProvider theme={theme1}>
            <PostProvider>
                <AuthProvider>
                    <ActionsProvider>
                        <DeleteProvider>
                            {children}
                        </DeleteProvider>
                    </ActionsProvider>
                </AuthProvider>
            </PostProvider>
        </ThemeProvider>
    )
} 

export default AppProvider;