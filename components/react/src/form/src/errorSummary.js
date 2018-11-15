import styled from 'styled-components';

import { Heading } from '../../heading';
import { Paragraph } from '../../paragraph';
import { Link } from '../../link';
import { List } from '../../list';

const ErrorSummary = styled.div`
    ${({ theme }) => theme.spacing.property('padding', 4)}
    ${({ theme }) => theme.spacing.property('margin-bottom', 8)}
    color: ${({ theme }) => theme.palette.common.text};
    ${({ theme }) => theme.helpers.focus()}
    border-width: ${({ theme }) => theme.spacing.page.border.mobile}px;
    border-style: solid;
    border-color: ${({ theme }) => theme.palette.common.error};

    ${({ theme }) => theme.media.query('tablet', theme)`
        border-width: ${({ spacing }) => spacing.page.border.desktop}px;
    `}

    ${Heading.XL}, ${Heading.L}, ${Heading.M}, ${Heading.S},
    ${Paragraph.L}, ${Paragraph.M}, ${Paragraph.S}, ${Paragraph.XS} {
        margin-top: 0;
        ${({ theme }) => theme.spacing.property('margin-bottom', 4)}
    }

    ${List.List} {
        margin-bottom: 0;
    }

    ${Link} {
        &:link,
        &:visited,
        &:hover,
        &:active {
            color: ${({ theme }) => theme.palette.common.error}
        }

        &:focus {
            color: ${({ theme }) => theme.palette.common.focusText}
        }
    }
`;

export default ErrorSummary;
