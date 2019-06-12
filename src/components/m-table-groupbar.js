/* eslint-disable no-unused-vars */
import { Icon, Toolbar, Chip, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import * as React from "react";
import { propTypes } from "../prop-types";
/* eslint-enable no-unused-vars */

class MTableGroupbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    // padding: '8px 16px',
    margin: `0 ${8}px 0 0`,

    // change background colour if dragging
    // background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
  });

  getListStyle = isDraggingOver => ({
    // background: isDraggingOver ? 'lightblue' : '#0000000a',
    background: "#0000000a",
    display: "flex",
    width: "100%",
    padding: 8,
    overflow: "auto",
    border: "1px solid #ccc",
    borderStyle: "dashed"
  });

  render() {
    return (
      <Toolbar style={{ padding: 0, minHeight: "unset" }}>
        {this.props.groupColumns.length > 0 && (
          <Typography variant="caption" style={{ padding: 8 }}>
            {this.props.localization.groupedBy}
          </Typography>
        )}
        {this.props.groupColumns.map((columnDef, index) => {
          return (
            <Chip
              key={columnDef.tableData.id}
              onClick={() => this.props.onSortChanged(columnDef)}
              label={
                <div>
                  <div style={{ float: "left" }}>{columnDef.title}</div>
                  {columnDef.tableData.groupSort && (
                    <this.props.icons.SortArrow
                      style={{
                        transition: "300ms ease all",
                        transform:
                          columnDef.tableData.groupSort === "desc"
                            ? "rotate(-180deg)"
                            : "none",
                        fontSize: 18
                      }}
                    />
                  )}
                </div>
              }
              style={{ boxShadow: "none", textTransform: "none" }}
              onDelete={() => this.props.onGroupRemoved(columnDef, index)}
            />
          );
        })}
        {this.props.groupColumns.length === 0 && (
          <Typography variant="caption" style={{ padding: 8 }}>
            {this.props.localization.placeholder}
          </Typography>
        )}
      </Toolbar>
    );
  }
}

MTableGroupbar.defaultProps = {};

MTableGroupbar.propTypes = {
  groupColumns: propTypes.columns,
  localization: propTypes.localization,
  onSortChanged: PropTypes.func,
  onGroupRemoved: PropTypes.func
};

export default MTableGroupbar;
