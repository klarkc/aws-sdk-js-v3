import { __extends } from "tslib";
import { AppMeshClient } from "./AppMeshClient";
import { CreateGatewayRouteCommand } from "./commands/CreateGatewayRouteCommand";
import { CreateMeshCommand } from "./commands/CreateMeshCommand";
import { CreateRouteCommand } from "./commands/CreateRouteCommand";
import { CreateVirtualGatewayCommand } from "./commands/CreateVirtualGatewayCommand";
import { CreateVirtualNodeCommand } from "./commands/CreateVirtualNodeCommand";
import { CreateVirtualRouterCommand } from "./commands/CreateVirtualRouterCommand";
import { CreateVirtualServiceCommand } from "./commands/CreateVirtualServiceCommand";
import { DeleteGatewayRouteCommand } from "./commands/DeleteGatewayRouteCommand";
import { DeleteMeshCommand } from "./commands/DeleteMeshCommand";
import { DeleteRouteCommand } from "./commands/DeleteRouteCommand";
import { DeleteVirtualGatewayCommand } from "./commands/DeleteVirtualGatewayCommand";
import { DeleteVirtualNodeCommand } from "./commands/DeleteVirtualNodeCommand";
import { DeleteVirtualRouterCommand } from "./commands/DeleteVirtualRouterCommand";
import { DeleteVirtualServiceCommand } from "./commands/DeleteVirtualServiceCommand";
import { DescribeGatewayRouteCommand } from "./commands/DescribeGatewayRouteCommand";
import { DescribeMeshCommand } from "./commands/DescribeMeshCommand";
import { DescribeRouteCommand } from "./commands/DescribeRouteCommand";
import { DescribeVirtualGatewayCommand } from "./commands/DescribeVirtualGatewayCommand";
import { DescribeVirtualNodeCommand } from "./commands/DescribeVirtualNodeCommand";
import { DescribeVirtualRouterCommand } from "./commands/DescribeVirtualRouterCommand";
import { DescribeVirtualServiceCommand } from "./commands/DescribeVirtualServiceCommand";
import { ListGatewayRoutesCommand } from "./commands/ListGatewayRoutesCommand";
import { ListMeshesCommand } from "./commands/ListMeshesCommand";
import { ListRoutesCommand } from "./commands/ListRoutesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListVirtualGatewaysCommand } from "./commands/ListVirtualGatewaysCommand";
import { ListVirtualNodesCommand } from "./commands/ListVirtualNodesCommand";
import { ListVirtualRoutersCommand } from "./commands/ListVirtualRoutersCommand";
import { ListVirtualServicesCommand } from "./commands/ListVirtualServicesCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateGatewayRouteCommand } from "./commands/UpdateGatewayRouteCommand";
import { UpdateMeshCommand } from "./commands/UpdateMeshCommand";
import { UpdateRouteCommand } from "./commands/UpdateRouteCommand";
import { UpdateVirtualGatewayCommand } from "./commands/UpdateVirtualGatewayCommand";
import { UpdateVirtualNodeCommand } from "./commands/UpdateVirtualNodeCommand";
import { UpdateVirtualRouterCommand } from "./commands/UpdateVirtualRouterCommand";
import { UpdateVirtualServiceCommand } from "./commands/UpdateVirtualServiceCommand";
/**
 * <p>AWS App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and
 *          control microservices. App Mesh standardizes how your microservices communicate, giving you
 *          end-to-end visibility and helping to ensure high availability for your applications.</p>
 *          <p>App Mesh gives you consistent visibility and network traffic controls for every
 *          microservice in an application. You can use App Mesh with AWS Fargate, Amazon ECS, Amazon EKS,
 *          Kubernetes on AWS, and Amazon EC2.</p>
 *          <note>
 *             <p>App Mesh supports microservice applications that use service discovery naming for their
 *             components. For more information about service discovery on Amazon ECS, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes
 *                <code>kube-dns</code> and <code>coredns</code> are supported. For more information,
 *             see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS
 *                for Services and Pods</a> in the Kubernetes documentation.</p>
 *          </note>
 */
var AppMesh = /** @class */ (function (_super) {
  __extends(AppMesh, _super);
  function AppMesh() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AppMesh.prototype.createGatewayRoute = function (args, optionsOrCb, cb) {
    var command = new CreateGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.createMesh = function (args, optionsOrCb, cb) {
    var command = new CreateMeshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.createRoute = function (args, optionsOrCb, cb) {
    var command = new CreateRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.createVirtualGateway = function (args, optionsOrCb, cb) {
    var command = new CreateVirtualGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.createVirtualNode = function (args, optionsOrCb, cb) {
    var command = new CreateVirtualNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.createVirtualRouter = function (args, optionsOrCb, cb) {
    var command = new CreateVirtualRouterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.createVirtualService = function (args, optionsOrCb, cb) {
    var command = new CreateVirtualServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.deleteGatewayRoute = function (args, optionsOrCb, cb) {
    var command = new DeleteGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.deleteMesh = function (args, optionsOrCb, cb) {
    var command = new DeleteMeshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.deleteRoute = function (args, optionsOrCb, cb) {
    var command = new DeleteRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.deleteVirtualGateway = function (args, optionsOrCb, cb) {
    var command = new DeleteVirtualGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.deleteVirtualNode = function (args, optionsOrCb, cb) {
    var command = new DeleteVirtualNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.deleteVirtualRouter = function (args, optionsOrCb, cb) {
    var command = new DeleteVirtualRouterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.deleteVirtualService = function (args, optionsOrCb, cb) {
    var command = new DeleteVirtualServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.describeGatewayRoute = function (args, optionsOrCb, cb) {
    var command = new DescribeGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.describeMesh = function (args, optionsOrCb, cb) {
    var command = new DescribeMeshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.describeRoute = function (args, optionsOrCb, cb) {
    var command = new DescribeRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.describeVirtualGateway = function (args, optionsOrCb, cb) {
    var command = new DescribeVirtualGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.describeVirtualNode = function (args, optionsOrCb, cb) {
    var command = new DescribeVirtualNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.describeVirtualRouter = function (args, optionsOrCb, cb) {
    var command = new DescribeVirtualRouterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.describeVirtualService = function (args, optionsOrCb, cb) {
    var command = new DescribeVirtualServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.listGatewayRoutes = function (args, optionsOrCb, cb) {
    var command = new ListGatewayRoutesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.listMeshes = function (args, optionsOrCb, cb) {
    var command = new ListMeshesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.listRoutes = function (args, optionsOrCb, cb) {
    var command = new ListRoutesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
    var command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.listVirtualGateways = function (args, optionsOrCb, cb) {
    var command = new ListVirtualGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.listVirtualNodes = function (args, optionsOrCb, cb) {
    var command = new ListVirtualNodesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.listVirtualRouters = function (args, optionsOrCb, cb) {
    var command = new ListVirtualRoutersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.listVirtualServices = function (args, optionsOrCb, cb) {
    var command = new ListVirtualServicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.tagResource = function (args, optionsOrCb, cb) {
    var command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.untagResource = function (args, optionsOrCb, cb) {
    var command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.updateGatewayRoute = function (args, optionsOrCb, cb) {
    var command = new UpdateGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.updateMesh = function (args, optionsOrCb, cb) {
    var command = new UpdateMeshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.updateRoute = function (args, optionsOrCb, cb) {
    var command = new UpdateRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.updateVirtualGateway = function (args, optionsOrCb, cb) {
    var command = new UpdateVirtualGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.updateVirtualNode = function (args, optionsOrCb, cb) {
    var command = new UpdateVirtualNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.updateVirtualRouter = function (args, optionsOrCb, cb) {
    var command = new UpdateVirtualRouterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppMesh.prototype.updateVirtualService = function (args, optionsOrCb, cb) {
    var command = new UpdateVirtualServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return AppMesh;
})(AppMeshClient);
export { AppMesh };
//# sourceMappingURL=AppMesh.js.map
