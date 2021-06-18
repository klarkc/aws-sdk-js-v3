import { __extends } from "tslib";
import { Account, UpdateAccountRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAccountCommand,
  serializeAws_restJson1UpdateAccountCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes information about the current <a>Account</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateAccountCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateAccountCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccountCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAccountCommand = /** @class */ (function (_super) {
  __extends(UpdateAccountCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateAccountCommand(input) {
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
  UpdateAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateAccountCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Account.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateAccountCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateAccountCommand(input, context);
  };
  UpdateAccountCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateAccountCommand(output, context);
  };
  return UpdateAccountCommand;
})($Command);
export { UpdateAccountCommand };
//# sourceMappingURL=UpdateAccountCommand.js.map
