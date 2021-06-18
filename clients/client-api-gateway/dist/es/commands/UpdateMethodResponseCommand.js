import { __extends } from "tslib";
import { MethodResponse, UpdateMethodResponseRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateMethodResponseCommand,
  serializeAws_restJson1UpdateMethodResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing <a>MethodResponse</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateMethodResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateMethodResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateMethodResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMethodResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateMethodResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMethodResponseCommand = /** @class */ (function (_super) {
  __extends(UpdateMethodResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateMethodResponseCommand(input) {
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
  UpdateMethodResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateMethodResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateMethodResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: MethodResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateMethodResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateMethodResponseCommand(input, context);
  };
  UpdateMethodResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateMethodResponseCommand(output, context);
  };
  return UpdateMethodResponseCommand;
})($Command);
export { UpdateMethodResponseCommand };
//# sourceMappingURL=UpdateMethodResponseCommand.js.map
