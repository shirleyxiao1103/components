// @flow
import React, { forwardRef } from 'react';
import { Button } from '@chakra-ui/react';
import './button.style.scss';

const BaselaneButton: any = forwardRef(function BaselaneButtonElement(
    {
        styles,
        type,
        size,
        leftIcon,
        rightIcon,
        isDisabled,
        children,
        onChange,
        onClick,
        onBlur,
        buttonType,
        isLoading,
    }: {
        styles: Object,
        type: String,
        size: String,
        buttonType: String,
        leftIcon: any,
        rightIcon: any,
        isDisabled: Boolean,
        children: any,
        onChange: Function,
        onClick: Function,
        onBlur: Function,
        isLoading?: boolean,
    },
    ref: any
): any {
    return (
        // NOTE: Refer to theme.js on options for variant and size props
        <Button
            {...styles}
            _focus={{ boxShadow: '0' }}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            isDisabled={isDisabled}
            size={size}
            variant={type}
            ref={ref}
            onChange={onChange}
            onClick={onClick}
            onBlur={onBlur}
            type={buttonType}
            isLoading={isLoading}
        >
            {children}
        </Button>
    );
});

BaselaneButton.defaultProps = {
    isLoading: false,
};

export default BaselaneButton;
