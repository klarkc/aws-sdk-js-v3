import { __extends } from "tslib";
import { GetUsageRequest, Usage } from "../models/models_0";
import {
  deserializeAws_restJson1GetUsageCommand,
  serializeAws_restJson1GetUsageCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the usage data of a usage plan in a specified time interval.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsageCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsageCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsageCommandInput} for command's `input` shape.
 * @see {@link GetUsageCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUsageCommand = /** @class */ (function (_super) {
  __extends(GetUsageCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetUsageCommand(input) {
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
  GetUsageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetUsageCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Usage.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetUsageCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetUsageCommand(input, context);
  };
  GetUsageCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetUsageCommand(output, context);
  };
  return GetUsageCommand;
})($Command);
export { GetUsageCommand };
//# sourceMappingURL=GetUsageCommand.js.map
