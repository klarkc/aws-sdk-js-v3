import { __extends } from "tslib";
import { Method, UpdateMethodRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateMethodCommand,
  serializeAws_restJson1UpdateMethodCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing <a>Method</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateMethodCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateMethodCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMethodCommandInput} for command's `input` shape.
 * @see {@link UpdateMethodCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMethodCommand = /** @class */ (function (_super) {
  __extends(UpdateMethodCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateMethodCommand(input) {
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
  UpdateMethodCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateMethodCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateMethodRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Method.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateMethodCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateMethodCommand(input, context);
  };
  UpdateMethodCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateMethodCommand(output, context);
  };
  return UpdateMethodCommand;
})($Command);
export { UpdateMethodCommand };
//# sourceMappingURL=UpdateMethodCommand.js.map
