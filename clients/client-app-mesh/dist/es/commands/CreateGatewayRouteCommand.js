import { __extends } from "tslib";
import { CreateGatewayRouteInput, CreateGatewayRouteOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateGatewayRouteCommand,
  serializeAws_restJson1CreateGatewayRouteCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a gateway route.</p>
 *          <p>A gateway route is attached to a virtual gateway and routes traffic to an existing
 *          virtual service. If a route matches a request, it can distribute traffic to a target
 *          virtual service.</p>
 *          <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateGatewayRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateGatewayRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGatewayRouteCommand = /** @class */ (function (_super) {
  __extends(CreateGatewayRouteCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateGatewayRouteCommand(input) {
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
  CreateGatewayRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "CreateGatewayRouteCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateGatewayRouteInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGatewayRouteOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateGatewayRouteCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateGatewayRouteCommand(input, context);
  };
  CreateGatewayRouteCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateGatewayRouteCommand(output, context);
  };
  return CreateGatewayRouteCommand;
})($Command);
export { CreateGatewayRouteCommand };
//# sourceMappingURL=CreateGatewayRouteCommand.js.map
