"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMesh = void 0;
const AppMeshClient_1 = require("./AppMeshClient");
const CreateGatewayRouteCommand_1 = require("./commands/CreateGatewayRouteCommand");
const CreateMeshCommand_1 = require("./commands/CreateMeshCommand");
const CreateRouteCommand_1 = require("./commands/CreateRouteCommand");
const CreateVirtualGatewayCommand_1 = require("./commands/CreateVirtualGatewayCommand");
const CreateVirtualNodeCommand_1 = require("./commands/CreateVirtualNodeCommand");
const CreateVirtualRouterCommand_1 = require("./commands/CreateVirtualRouterCommand");
const CreateVirtualServiceCommand_1 = require("./commands/CreateVirtualServiceCommand");
const DeleteGatewayRouteCommand_1 = require("./commands/DeleteGatewayRouteCommand");
const DeleteMeshCommand_1 = require("./commands/DeleteMeshCommand");
const DeleteRouteCommand_1 = require("./commands/DeleteRouteCommand");
const DeleteVirtualGatewayCommand_1 = require("./commands/DeleteVirtualGatewayCommand");
const DeleteVirtualNodeCommand_1 = require("./commands/DeleteVirtualNodeCommand");
const DeleteVirtualRouterCommand_1 = require("./commands/DeleteVirtualRouterCommand");
const DeleteVirtualServiceCommand_1 = require("./commands/DeleteVirtualServiceCommand");
const DescribeGatewayRouteCommand_1 = require("./commands/DescribeGatewayRouteCommand");
const DescribeMeshCommand_1 = require("./commands/DescribeMeshCommand");
const DescribeRouteCommand_1 = require("./commands/DescribeRouteCommand");
const DescribeVirtualGatewayCommand_1 = require("./commands/DescribeVirtualGatewayCommand");
const DescribeVirtualNodeCommand_1 = require("./commands/DescribeVirtualNodeCommand");
const DescribeVirtualRouterCommand_1 = require("./commands/DescribeVirtualRouterCommand");
const DescribeVirtualServiceCommand_1 = require("./commands/DescribeVirtualServiceCommand");
const ListGatewayRoutesCommand_1 = require("./commands/ListGatewayRoutesCommand");
const ListMeshesCommand_1 = require("./commands/ListMeshesCommand");
const ListRoutesCommand_1 = require("./commands/ListRoutesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListVirtualGatewaysCommand_1 = require("./commands/ListVirtualGatewaysCommand");
const ListVirtualNodesCommand_1 = require("./commands/ListVirtualNodesCommand");
const ListVirtualRoutersCommand_1 = require("./commands/ListVirtualRoutersCommand");
const ListVirtualServicesCommand_1 = require("./commands/ListVirtualServicesCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateGatewayRouteCommand_1 = require("./commands/UpdateGatewayRouteCommand");
const UpdateMeshCommand_1 = require("./commands/UpdateMeshCommand");
const UpdateRouteCommand_1 = require("./commands/UpdateRouteCommand");
const UpdateVirtualGatewayCommand_1 = require("./commands/UpdateVirtualGatewayCommand");
const UpdateVirtualNodeCommand_1 = require("./commands/UpdateVirtualNodeCommand");
const UpdateVirtualRouterCommand_1 = require("./commands/UpdateVirtualRouterCommand");
const UpdateVirtualServiceCommand_1 = require("./commands/UpdateVirtualServiceCommand");
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
class AppMesh extends AppMeshClient_1.AppMeshClient {
  createGatewayRoute(args, optionsOrCb, cb) {
    const command = new CreateGatewayRouteCommand_1.CreateGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createMesh(args, optionsOrCb, cb) {
    const command = new CreateMeshCommand_1.CreateMeshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createRoute(args, optionsOrCb, cb) {
    const command = new CreateRouteCommand_1.CreateRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createVirtualGateway(args, optionsOrCb, cb) {
    const command = new CreateVirtualGatewayCommand_1.CreateVirtualGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createVirtualNode(args, optionsOrCb, cb) {
    const command = new CreateVirtualNodeCommand_1.CreateVirtualNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createVirtualRouter(args, optionsOrCb, cb) {
    const command = new CreateVirtualRouterCommand_1.CreateVirtualRouterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createVirtualService(args, optionsOrCb, cb) {
    const command = new CreateVirtualServiceCommand_1.CreateVirtualServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteGatewayRoute(args, optionsOrCb, cb) {
    const command = new DeleteGatewayRouteCommand_1.DeleteGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteMesh(args, optionsOrCb, cb) {
    const command = new DeleteMeshCommand_1.DeleteMeshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteRoute(args, optionsOrCb, cb) {
    const command = new DeleteRouteCommand_1.DeleteRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVirtualGateway(args, optionsOrCb, cb) {
    const command = new DeleteVirtualGatewayCommand_1.DeleteVirtualGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVirtualNode(args, optionsOrCb, cb) {
    const command = new DeleteVirtualNodeCommand_1.DeleteVirtualNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVirtualRouter(args, optionsOrCb, cb) {
    const command = new DeleteVirtualRouterCommand_1.DeleteVirtualRouterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVirtualService(args, optionsOrCb, cb) {
    const command = new DeleteVirtualServiceCommand_1.DeleteVirtualServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeGatewayRoute(args, optionsOrCb, cb) {
    const command = new DescribeGatewayRouteCommand_1.DescribeGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeMesh(args, optionsOrCb, cb) {
    const command = new DescribeMeshCommand_1.DescribeMeshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeRoute(args, optionsOrCb, cb) {
    const command = new DescribeRouteCommand_1.DescribeRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeVirtualGateway(args, optionsOrCb, cb) {
    const command = new DescribeVirtualGatewayCommand_1.DescribeVirtualGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeVirtualNode(args, optionsOrCb, cb) {
    const command = new DescribeVirtualNodeCommand_1.DescribeVirtualNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeVirtualRouter(args, optionsOrCb, cb) {
    const command = new DescribeVirtualRouterCommand_1.DescribeVirtualRouterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeVirtualService(args, optionsOrCb, cb) {
    const command = new DescribeVirtualServiceCommand_1.DescribeVirtualServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listGatewayRoutes(args, optionsOrCb, cb) {
    const command = new ListGatewayRoutesCommand_1.ListGatewayRoutesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listMeshes(args, optionsOrCb, cb) {
    const command = new ListMeshesCommand_1.ListMeshesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listRoutes(args, optionsOrCb, cb) {
    const command = new ListRoutesCommand_1.ListRoutesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listTagsForResource(args, optionsOrCb, cb) {
    const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listVirtualGateways(args, optionsOrCb, cb) {
    const command = new ListVirtualGatewaysCommand_1.ListVirtualGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listVirtualNodes(args, optionsOrCb, cb) {
    const command = new ListVirtualNodesCommand_1.ListVirtualNodesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listVirtualRouters(args, optionsOrCb, cb) {
    const command = new ListVirtualRoutersCommand_1.ListVirtualRoutersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listVirtualServices(args, optionsOrCb, cb) {
    const command = new ListVirtualServicesCommand_1.ListVirtualServicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  tagResource(args, optionsOrCb, cb) {
    const command = new TagResourceCommand_1.TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  untagResource(args, optionsOrCb, cb) {
    const command = new UntagResourceCommand_1.UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateGatewayRoute(args, optionsOrCb, cb) {
    const command = new UpdateGatewayRouteCommand_1.UpdateGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateMesh(args, optionsOrCb, cb) {
    const command = new UpdateMeshCommand_1.UpdateMeshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateRoute(args, optionsOrCb, cb) {
    const command = new UpdateRouteCommand_1.UpdateRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateVirtualGateway(args, optionsOrCb, cb) {
    const command = new UpdateVirtualGatewayCommand_1.UpdateVirtualGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateVirtualNode(args, optionsOrCb, cb) {
    const command = new UpdateVirtualNodeCommand_1.UpdateVirtualNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateVirtualRouter(args, optionsOrCb, cb) {
    const command = new UpdateVirtualRouterCommand_1.UpdateVirtualRouterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateVirtualService(args, optionsOrCb, cb) {
    const command = new UpdateVirtualServiceCommand_1.UpdateVirtualServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
exports.AppMesh = AppMesh;
//# sourceMappingURL=AppMesh.js.map
