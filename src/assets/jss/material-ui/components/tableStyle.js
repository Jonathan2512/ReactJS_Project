import {
  dangerColor,
  warningColor,
  primaryColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont
} from "./../material-dashboard-react";

const tableStyle = theme => ({
  warningTableHeader: {
    color: warningColor[0]
  },
  primaryTableHeader: {
    color: primaryColor[0]
  },
  dangerTableHeader: {
    color: dangerColor[0]
  },
  successTableHeader: {
    color: successColor[0]
  },
  infoTableHeader: {
    color: infoColor[0]
  },
  roseTableHeader: {
    color: roseColor[0]
  },
  grayTableHeader: {
    color: grayColor[0]
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tableHeadCell: {
    color: "inherit",
    fontWeight: "bold !important",
    fontSize: "24px !important",
  },
  tableCell: {
    ...defaultFont,
    lineHeight: "1.42857143",
    padding: "12px 8px",
    verticalAlign: "middle",
    fontSize: "14px"
  },
  tableResponsive: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  tableHeadRow: {
    height: "56px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle"
  },
  tableBodyRow: {
    height: "48px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle"
  },
  linkAcc: {
    color: '#000',
    "&:hover, &:focus": {
      textDecoration: "none"
    }
  },
  fab: {
    "&:focus": {
      outline: "none",
    }
  },
  add: {
    margin: "0 5% 0 20%",
    backgroundColor: successColor[3],
    "&:hover, &:focus": {
      backgroundColor: successColor[0],
    }
  },
  edit: {
    margin: "0 5% 0 20%",
    backgroundColor: warningColor[3],
    "&:hover, &:focus": {
      backgroundColor: warningColor[0],
    }
  },
  delete: {
    backgroundColor: dangerColor[3],
    "&:hover, &:focus": {
      backgroundColor: dangerColor[0],
    }
  },
});

export default tableStyle;
