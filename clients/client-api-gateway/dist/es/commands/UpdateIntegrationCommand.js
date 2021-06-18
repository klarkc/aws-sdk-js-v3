import { __extends } from "tslib";
import { Integration, UpdateIntegrationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateIntegrationCommand,
  serializeAws_restJson1UpdateIntegrationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Represents an update integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateIntegrationCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateIntegrationCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateIntegrationCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIntegrationCommand = /** @class */ (function (_super) {
  __extends(UpdateIntegrationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateIntegrationCommand(input) {
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
  UpdateIntegrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateIntegrationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Integration.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateIntegrationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateIntegrationCommand(input, context);
  };
  UpdateIntegrationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateIntegrationCommand(output, context);
  };
  return UpdateIntegrationCommand;
})($Command);
export { UpdateIntegrationCommand };
//# sourceMappingURL=UpdateIntegrationCommand.js.map
