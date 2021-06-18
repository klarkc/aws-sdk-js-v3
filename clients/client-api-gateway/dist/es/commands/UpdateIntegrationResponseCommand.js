import { __extends } from "tslib";
import { IntegrationResponse, UpdateIntegrationResponseRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateIntegrationResponseCommand,
  serializeAws_restJson1UpdateIntegrationResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Represents an update integration response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateIntegrationResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateIntegrationResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateIntegrationResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIntegrationResponseCommand = /** @class */ (function (_super) {
  __extends(UpdateIntegrationResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateIntegrationResponseCommand(input) {
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
  UpdateIntegrationResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateIntegrationResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateIntegrationResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: IntegrationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateIntegrationResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateIntegrationResponseCommand(input, context);
  };
  UpdateIntegrationResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateIntegrationResponseCommand(output, context);
  };
  return UpdateIntegrationResponseCommand;
})($Command);
export { UpdateIntegrationResponseCommand };
//# sourceMappingURL=UpdateIntegrationResponseCommand.js.map
