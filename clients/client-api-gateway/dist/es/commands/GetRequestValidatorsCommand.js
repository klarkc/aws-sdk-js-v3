import { __extends } from "tslib";
import { GetRequestValidatorsRequest, RequestValidators } from "../models/models_0";
import {
  deserializeAws_restJson1GetRequestValidatorsCommand,
  serializeAws_restJson1GetRequestValidatorsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRequestValidatorsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRequestValidatorsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetRequestValidatorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRequestValidatorsCommandInput} for command's `input` shape.
 * @see {@link GetRequestValidatorsCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRequestValidatorsCommand = /** @class */ (function (_super) {
  __extends(GetRequestValidatorsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRequestValidatorsCommand(input) {
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
  GetRequestValidatorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetRequestValidatorsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRequestValidatorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RequestValidators.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRequestValidatorsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetRequestValidatorsCommand(input, context);
  };
  GetRequestValidatorsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetRequestValidatorsCommand(output, context);
  };
  return GetRequestValidatorsCommand;
})($Command);
export { GetRequestValidatorsCommand };
//# sourceMappingURL=GetRequestValidatorsCommand.js.map
