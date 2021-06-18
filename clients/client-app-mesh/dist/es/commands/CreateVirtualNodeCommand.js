import { __extends } from "tslib";
import { CreateVirtualNodeInput, CreateVirtualNodeOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateVirtualNodeCommand,
  serializeAws_restJson1CreateVirtualNodeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a virtual node within a service mesh.</p>
 *          <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS
 *          service or a Kubernetes deployment. When you create a virtual node, you can specify the
 *          service discovery information for your task group, and whether the proxy running in a task
 *          group will communicate with other proxies using Transport Layer Security (TLS).</p>
 *          <p>You define a <code>listener</code> for any inbound traffic that your virtual node
 *          expects. Any virtual service that your virtual node expects to communicate to is specified
 *          as a <code>backend</code>.</p>
 *          <p>The response metadata for your new virtual node contains the <code>arn</code> that is
 *          associated with the virtual node. Set this value to the full ARN; for example,
 *             <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>)
 *          as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy
 *          proxy container in your task definition or pod spec. This is then mapped to the
 *             <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
 *          <note>
 *             <p>By default, App Mesh uses the name of the resource you specified in
 *                <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and
 *             traces. You can override this behavior by setting the
 *                <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p>
 *             <p>AWS Cloud Map is not available in the eu-south-1 Region.</p>
 *          </note>
 *          <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when
 *          setting these variables. For more information about App Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in
 *          the AWS App Mesh User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualNodeCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateVirtualNodeCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateVirtualNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualNodeCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualNodeCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVirtualNodeCommand = /** @class */ (function (_super) {
  __extends(CreateVirtualNodeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateVirtualNodeCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  CreateVirtualNodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "CreateVirtualNodeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateVirtualNodeInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualNodeOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateVirtualNodeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateVirtualNodeCommand(input, context);
  };
  CreateVirtualNodeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateVirtualNodeCommand(output, context);
  };
  return CreateVirtualNodeCommand;
})($Command);
export { CreateVirtualNodeCommand };
//# sourceMappingURL=CreateVirtualNodeCommand.js.map
