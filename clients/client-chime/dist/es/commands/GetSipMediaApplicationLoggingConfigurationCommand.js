import { __extends } from "tslib";
import {
  GetSipMediaApplicationLoggingConfigurationRequest,
  GetSipMediaApplicationLoggingConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand,
  serializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the logging configuration for the specified SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetSipMediaApplicationLoggingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetSipMediaApplicationLoggingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetSipMediaApplicationLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSipMediaApplicationLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSipMediaApplicationLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSipMediaApplicationLoggingConfigurationCommand = /** @class */ (function (_super) {
  __extends(GetSipMediaApplicationLoggingConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetSipMediaApplicationLoggingConfigurationCommand(input) {
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
  GetSipMediaApplicationLoggingConfigurationCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetSipMediaApplicationLoggingConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetSipMediaApplicationLoggingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSipMediaApplicationLoggingConfigurationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetSipMediaApplicationLoggingConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand(input, context);
  };
  GetSipMediaApplicationLoggingConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand(output, context);
  };
  return GetSipMediaApplicationLoggingConfigurationCommand;
})($Command);
export { GetSipMediaApplicationLoggingConfigurationCommand };
//# sourceMappingURL=GetSipMediaApplicationLoggingConfigurationCommand.js.map
