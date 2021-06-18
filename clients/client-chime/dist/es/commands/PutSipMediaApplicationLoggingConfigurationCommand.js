import { __extends } from "tslib";
import {
  PutSipMediaApplicationLoggingConfigurationRequest,
  PutSipMediaApplicationLoggingConfigurationResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand,
  serializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the logging configuration for the specified SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutSipMediaApplicationLoggingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutSipMediaApplicationLoggingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutSipMediaApplicationLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSipMediaApplicationLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutSipMediaApplicationLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutSipMediaApplicationLoggingConfigurationCommand = /** @class */ (function (_super) {
  __extends(PutSipMediaApplicationLoggingConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutSipMediaApplicationLoggingConfigurationCommand(input) {
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
  PutSipMediaApplicationLoggingConfigurationCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "PutSipMediaApplicationLoggingConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutSipMediaApplicationLoggingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutSipMediaApplicationLoggingConfigurationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutSipMediaApplicationLoggingConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand(input, context);
  };
  PutSipMediaApplicationLoggingConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand(output, context);
  };
  return PutSipMediaApplicationLoggingConfigurationCommand;
})($Command);
export { PutSipMediaApplicationLoggingConfigurationCommand };
//# sourceMappingURL=PutSipMediaApplicationLoggingConfigurationCommand.js.map
