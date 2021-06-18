import { __extends } from "tslib";
import { UpdateConferenceProviderRequest, UpdateConferenceProviderResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateConferenceProviderCommand,
  serializeAws_json1_1UpdateConferenceProviderCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing conference provider's settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateConferenceProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConferenceProviderCommand = /** @class */ (function (_super) {
  __extends(UpdateConferenceProviderCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateConferenceProviderCommand(input) {
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
  UpdateConferenceProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "UpdateConferenceProviderCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateConferenceProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateConferenceProviderResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateConferenceProviderCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateConferenceProviderCommand(input, context);
  };
  UpdateConferenceProviderCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateConferenceProviderCommand(output, context);
  };
  return UpdateConferenceProviderCommand;
})($Command);
export { UpdateConferenceProviderCommand };
//# sourceMappingURL=UpdateConferenceProviderCommand.js.map
