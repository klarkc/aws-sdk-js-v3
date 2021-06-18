import { __extends } from "tslib";
import { GetUsagePlanKeyRequest, UsagePlanKey } from "../models/models_0";
import {
  deserializeAws_restJson1GetUsagePlanKeyCommand,
  serializeAws_restJson1GetUsagePlanKeyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a usage plan key of a given key identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsagePlanKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetUsagePlanKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsagePlanKeyCommandInput} for command's `input` shape.
 * @see {@link GetUsagePlanKeyCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUsagePlanKeyCommand = /** @class */ (function (_super) {
  __extends(GetUsagePlanKeyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetUsagePlanKeyCommand(input) {
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
  GetUsagePlanKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetUsagePlanKeyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetUsagePlanKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UsagePlanKey.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetUsagePlanKeyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetUsagePlanKeyCommand(input, context);
  };
  GetUsagePlanKeyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetUsagePlanKeyCommand(output, context);
  };
  return GetUsagePlanKeyCommand;
})($Command);
export { GetUsagePlanKeyCommand };
//# sourceMappingURL=GetUsagePlanKeyCommand.js.map
