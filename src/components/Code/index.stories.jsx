import React from 'react';

import Component from './component';
import { getDescriptionForClass, getPropertiesForClass } from '../../../.storybook/utils/docscript';

var name = 'Code';
var config = {
    title: `Text/${name}`,
    description: getDescriptionForClass(name),
    args: getPropertiesForClass(name),
};

export default {
    title: config.title,
    component: Component,
    parameters: {
        docs: {
            storyDescription: config.description
        }
    },
    argTypes: config.args
};

export const Main = (args) => <Component {...args} />;
