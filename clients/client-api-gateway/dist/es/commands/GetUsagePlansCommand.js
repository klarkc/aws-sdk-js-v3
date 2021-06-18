import { __extends } from "tslib";
import { GetUsagePlansRequest, UsagePlans } from "../models/models_0";
import {
  deserializeAws_restJson1GetUsagePlansCommand,
  serializeAws_restJson1GetUsagePlansCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets all the usage plans of the caller's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsagePlansCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsagePlansCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetUsagePlansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsagePlansCommandInput} for command's `input` shape.
 * @see {@link GetUsagePlansCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUsagePlansCommand = /** @class */ (function (_super) {
  __extends(GetUsagePlansCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetUsagePlansCommand(input) {
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
  GetUsagePlansCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetUsagePlansCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetUsagePlansRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UsagePlans.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetUsagePlansCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetUsagePlansCommand(input, context);
  };
  GetUsagePlansCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetUsagePlansCommand(output, context);
  };
  return GetUsagePlansCommand;
})($Command);
export { GetUsagePlansCommand };
//# sourceMappingURL=GetUsagePlansCommand.js.map
