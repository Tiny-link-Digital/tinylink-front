import styled from "styled-components";

export const Container = styled.table`
  border: 0;
  border-spacing: 0 10px;
  table-layout: auto;
  width: 100%;

  tr {
    margin-bottom: 5px;

    td {
      font-size: 12px;
      line-height: 14px;
      padding: 13px 15px;

      &:nth-child(2) {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }

      &:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }
    }
  }

  thead {
    tr {
      td {
        background: ${props => props.theme.primary};
        color: ${props => props.theme.white};
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }

  tbody {
    tr {
      td {
        background: #f5f5f5;
      }
    }
  }

  .url {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 175px;
  }

  .created_at {
    display: none;
  }

  @media screen and (min-width: 476px) {
    .created_at {
      display: table-cell;
    }

    tr {
      td {
        &:nth-child(2) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }

        &:nth-child(1) {
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }

        &:last-child {
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    tr {
      margin-bottom: 5px;

      td {
        font-size: 14px !important;
        line-height: 16px !important;
        padding: 15px 15px !important;
        width: 100px;

        &:first-child {
          width: 10%;
        }

        &:last-child {
          width: 10%;
        }
      }
    }
  }
`;
