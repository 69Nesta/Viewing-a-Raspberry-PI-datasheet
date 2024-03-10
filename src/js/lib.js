export const composent = {
    DrawingGroup_2: {
        title: '',
        content: ''
    },
    DrawingGroup_3: {
        title: 'CPU / GPU',
        content: 'This is where all the calculations are made !'
    },
    DrawingGroup_4: {
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna et elementum bibendum, orci purus commodo metus, ut molestie erat tortor vitae neque. Suspendisse pellentesque ipsum eget ante lobortis dignissim. Etiam bibendum libero in libero pellentesque ornare. Maecenas nisi nibh, ullamcorper non malesuada eu, vulputate vel dui. Ut egestas nunc eget fermentum porttitor. Morbi eros odio, ultricies non feugiat in, molestie pharetra magna. In vitae posuere nunc. Sed quis risus malesuada nibh cursus euismod.'
    },
    DrawingGroup_5: {
        title: '',
        content: ''
    },
    DrawingGroup_6: {
        title: '',
        content: ''
    },
    DrawingGroup_7: {
        title: '',
        content: ''
    },
    DrawingGroup_9: {
        title: '',
        content: ''
    },
    DrawingGroup_11: {
        title: '',
        content: ''
    },
    DrawingGroup_12: {
        title: '',
        content: ''
    },
    DrawingGroup_13: {
        title: '',
        content: ''
    },
    DrawingGroup_14: {
        title: '',
        content: ''
    },
    DrawingGroup_17: {
        title: '',
        content: ''
    },
    DrawingGroup_21: {
        title: '',
        content: ''
    },
    DrawingGroup_23: {
        title: '',
        content: ''
    },
    DrawingGroup_26: {
        title: '',
        content: ''
    },
    DrawingGroup_34: {
        title: '',
        content: ''
    },
    DrawingGroup_35: {
        title: '',
        content: ''
    },
    DrawingGroup_36: {
        title: '',
        content: ''
    },
    DrawingGroup_41: {
        title: '',
        content: ''
    },
    DrawingGroup_42: {
        title: '',
        content: ''
    },
    DrawingGroup_45: {
        title: '',
        content: ''
    },
    DrawingGroup_46: {
        title: '',
        content: ''
    }
}

export const getParents = el => {
    for (var parents = []; el; el = el.parentNode) {
        parents.push(el.id);
    }

    return parents;
};