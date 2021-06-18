import { __extends } from "tslib";
import { GetEventsConfigurationRequest, GetEventsConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetEventsConfigurationCommand,
  serializeAws_restJson1GetEventsConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetEventsConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetEventsConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetEventsConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventsConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetEventsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEventsConfigurationCommand = /** @class */ (function (_super) {
  __extends(GetEventsConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetEventsConfigurationCommand(input) {
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
  GetEventsConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetEventsConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetEventsConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEventsConfigurationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetEventsConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetEventsConfigurationCommand(input, context);
  };
  GetEventsConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetEventsConfigurationCommand(output, context);
  };
  return GetEventsConfigurationCommand;
})($Command);
export { GetEventsConfigurationCommand };
//# sourceMappingURL=GetEventsConfigurationCommand.js.map
