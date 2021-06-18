import { __extends } from "tslib";
import { GetRequestValidatorRequest, RequestValidator } from "../models/models_0";
import {
  deserializeAws_restJson1GetRequestValidatorCommand,
  serializeAws_restJson1GetRequestValidatorCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetRequestValidatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link GetRequestValidatorCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRequestValidatorCommand = /** @class */ (function (_super) {
  __extends(GetRequestValidatorCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRequestValidatorCommand(input) {
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
  GetRequestValidatorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetRequestValidatorCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRequestValidatorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RequestValidator.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRequestValidatorCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetRequestValidatorCommand(input, context);
  };
  GetRequestValidatorCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetRequestValidatorCommand(output, context);
  };
  return GetRequestValidatorCommand;
})($Command);
export { GetRequestValidatorCommand };
//# sourceMappingURL=GetRequestValidatorCommand.js.map
