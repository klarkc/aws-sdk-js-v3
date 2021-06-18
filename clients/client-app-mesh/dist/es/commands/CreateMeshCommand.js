import { __extends } from "tslib";
import { CreateMeshInput, CreateMeshOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateMeshCommand,
  serializeAws_restJson1CreateMeshCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a service mesh.</p>
 *          <p> A service mesh is a logical boundary for network traffic between services that are
 *          represented by resources within the mesh. After you create your service mesh, you can
 *          create virtual services, virtual nodes, virtual routers, and routes to distribute traffic
 *          between the applications in your mesh.</p>
 *          <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateMeshCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateMeshCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateMeshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMeshCommandInput} for command's `input` shape.
 * @see {@link CreateMeshCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMeshCommand = /** @class */ (function (_super) {
  __extends(CreateMeshCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateMeshCommand(input) {
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
  CreateMeshCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "CreateMeshCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateMeshInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMeshOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateMeshCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateMeshCommand(input, context);
  };
  CreateMeshCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateMeshCommand(output, context);
  };
  return CreateMeshCommand;
})($Command);
export { CreateMeshCommand };
//# sourceMappingURL=CreateMeshCommand.js.map
