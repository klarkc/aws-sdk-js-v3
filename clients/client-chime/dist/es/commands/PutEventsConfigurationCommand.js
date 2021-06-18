import { __extends } from "tslib";
import { PutEventsConfigurationRequest, PutEventsConfigurationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1PutEventsConfigurationCommand,
  serializeAws_restJson1PutEventsConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an events configuration that allows a bot to receive outgoing events sent by Amazon
 *             Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information,
 *             see <a>Bot</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutEventsConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutEventsConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutEventsConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEventsConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutEventsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutEventsConfigurationCommand = /** @class */ (function (_super) {
  __extends(PutEventsConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutEventsConfigurationCommand(input) {
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
  PutEventsConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "PutEventsConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutEventsConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutEventsConfigurationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutEventsConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutEventsConfigurationCommand(input, context);
  };
  PutEventsConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutEventsConfigurationCommand(output, context);
  };
  return PutEventsConfigurationCommand;
})($Command);
export { PutEventsConfigurationCommand };
//# sourceMappingURL=PutEventsConfigurationCommand.js.map
