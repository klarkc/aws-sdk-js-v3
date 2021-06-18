import { __extends } from "tslib";
import { GetStagesRequest, Stages } from "../models/models_0";
import {
  deserializeAws_restJson1GetStagesCommand,
  serializeAws_restJson1GetStagesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more <a>Stage</a> resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetStagesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetStagesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetStagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStagesCommandInput} for command's `input` shape.
 * @see {@link GetStagesCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStagesCommand = /** @class */ (function (_super) {
  __extends(GetStagesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetStagesCommand(input) {
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
  GetStagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetStagesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetStagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Stages.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetStagesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetStagesCommand(input, context);
  };
  GetStagesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetStagesCommand(output, context);
  };
  return GetStagesCommand;
})($Command);
export { GetStagesCommand };
//# sourceMappingURL=GetStagesCommand.js.map
