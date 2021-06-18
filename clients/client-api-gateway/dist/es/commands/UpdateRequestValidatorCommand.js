import { __extends } from "tslib";
import { RequestValidator, UpdateRequestValidatorRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRequestValidatorCommand,
  serializeAws_restJson1UpdateRequestValidatorCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateRequestValidatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link UpdateRequestValidatorCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRequestValidatorCommand = /** @class */ (function (_super) {
  __extends(UpdateRequestValidatorCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateRequestValidatorCommand(input) {
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
  UpdateRequestValidatorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateRequestValidatorCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateRequestValidatorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RequestValidator.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateRequestValidatorCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateRequestValidatorCommand(input, context);
  };
  UpdateRequestValidatorCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateRequestValidatorCommand(output, context);
  };
  return UpdateRequestValidatorCommand;
})($Command);
export { UpdateRequestValidatorCommand };
//# sourceMappingURL=UpdateRequestValidatorCommand.js.map
