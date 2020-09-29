import * as React from "react";
import { RouteComponentProps } from "react-router";
import { observer } from "mobx-react";
import ProductEdit from "./ProductEdit";
import ProductList from "./ProductList";

type Props = RouteComponentProps<{ entityId?: string }>;

@observer
export class ProductManagement extends React.Component<Props> {
  static PATH = "/productManagement";
  static NEW_SUBPATH = "new";

  render() {
    const { entityId } = this.props.match.params;
    return (
      <>{entityId ? <ProductEdit entityId={entityId} /> : <ProductList />}</>
    );
  }
}
