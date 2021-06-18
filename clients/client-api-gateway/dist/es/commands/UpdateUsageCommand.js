import { __extends } from "tslib";
import { UpdateUsageRequest, Usage } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateUsageCommand,
  serializeAws_restJson1UpdateUsageCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateUsageCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateUsageCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUsageCommandInput} for command's `input` shape.
 * @see {@link UpdateUsageCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUsageCommand = /** @class */ (function (_super) {
  __extends(UpdateUsageCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateUsageCommand(input) {
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
  UpdateUsageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateUsageCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Usage.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateUsageCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateUsageCommand(input, context);
  };
  UpdateUsageCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateUsageCommand(output, context);
  };
  return UpdateUsageCommand;
})($Command);
export { UpdateUsageCommand };
//# sourceMappingURL=UpdateUsageCommand.js.map
