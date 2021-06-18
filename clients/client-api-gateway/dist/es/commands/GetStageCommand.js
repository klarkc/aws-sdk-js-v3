import { __extends } from "tslib";
import { GetStageRequest, Stage } from "../models/models_0";
import {
  deserializeAws_restJson1GetStageCommand,
  serializeAws_restJson1GetStageCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a <a>Stage</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetStageCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetStageCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetStageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStageCommandInput} for command's `input` shape.
 * @see {@link GetStageCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStageCommand = /** @class */ (function (_super) {
  __extends(GetStageCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetStageCommand(input) {
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
  GetStageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetStageCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetStageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Stage.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetStageCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetStageCommand(input, context);
  };
  GetStageCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetStageCommand(output, context);
  };
  return GetStageCommand;
})($Command);
export { GetStageCommand };
//# sourceMappingURL=GetStageCommand.js.map
