import { __extends } from "tslib";
import { PutConferencePreferenceRequest, PutConferencePreferenceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutConferencePreferenceCommand,
  serializeAws_json1_1PutConferencePreferenceCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the conference preferences on a specific conference provider at the account
 *          level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutConferencePreferenceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutConferencePreferenceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new PutConferencePreferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConferencePreferenceCommandInput} for command's `input` shape.
 * @see {@link PutConferencePreferenceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutConferencePreferenceCommand = /** @class */ (function (_super) {
  __extends(PutConferencePreferenceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutConferencePreferenceCommand(input) {
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
  PutConferencePreferenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "PutConferencePreferenceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutConferencePreferenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutConferencePreferenceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutConferencePreferenceCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1PutConferencePreferenceCommand(input, context);
  };
  PutConferencePreferenceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1PutConferencePreferenceCommand(output, context);
  };
  return PutConferencePreferenceCommand;
})($Command);
export { PutConferencePreferenceCommand };
//# sourceMappingURL=PutConferencePreferenceCommand.js.map
