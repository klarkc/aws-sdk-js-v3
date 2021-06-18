import { __extends } from "tslib";
import { UpdateGatewayRouteInput, UpdateGatewayRouteOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateGatewayRouteCommand,
  serializeAws_restJson1UpdateGatewayRouteCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing gateway route that is associated to a specified virtual gateway in a
 *          service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateGatewayRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateGatewayRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new UpdateGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGatewayRouteCommand = /** @class */ (function (_super) {
  __extends(UpdateGatewayRouteCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateGatewayRouteCommand(input) {
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
  UpdateGatewayRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "UpdateGatewayRouteCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateGatewayRouteInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGatewayRouteOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateGatewayRouteCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateGatewayRouteCommand(input, context);
  };
  UpdateGatewayRouteCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateGatewayRouteCommand(output, context);
  };
  return UpdateGatewayRouteCommand;
})($Command);
export { UpdateGatewayRouteCommand };
//# sourceMappingURL=UpdateGatewayRouteCommand.js.map
