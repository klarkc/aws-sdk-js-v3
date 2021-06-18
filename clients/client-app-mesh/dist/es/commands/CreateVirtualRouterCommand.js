import { __extends } from "tslib";
import { CreateVirtualRouterInput, CreateVirtualRouterOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateVirtualRouterCommand,
  serializeAws_restJson1CreateVirtualRouterCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a virtual router within a service mesh.</p>
 *          <p>Specify a <code>listener</code> for any inbound traffic that your virtual router
 *          receives. Create a virtual router for each protocol and port that you need to route.
 *          Virtual routers handle traffic for one or more virtual services within your mesh. After you
 *          create your virtual router, create and associate routes for your virtual router that direct
 *          incoming requests to different virtual nodes.</p>
 *          <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualRouterCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateVirtualRouterCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateVirtualRouterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualRouterCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualRouterCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVirtualRouterCommand = /** @class */ (function (_super) {
  __extends(CreateVirtualRouterCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateVirtualRouterCommand(input) {
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
  CreateVirtualRouterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "CreateVirtualRouterCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateVirtualRouterInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualRouterOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateVirtualRouterCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateVirtualRouterCommand(input, context);
  };
  CreateVirtualRouterCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateVirtualRouterCommand(output, context);
  };
  return CreateVirtualRouterCommand;
})($Command);
export { CreateVirtualRouterCommand };
//# sourceMappingURL=CreateVirtualRouterCommand.js.map
