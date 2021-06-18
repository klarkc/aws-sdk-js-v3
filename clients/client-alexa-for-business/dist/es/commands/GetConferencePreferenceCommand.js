import { __extends } from "tslib";
import { GetConferencePreferenceRequest, GetConferencePreferenceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetConferencePreferenceCommand,
  serializeAws_json1_1GetConferencePreferenceCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the existing conference preferences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetConferencePreferenceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetConferencePreferenceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new GetConferencePreferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConferencePreferenceCommandInput} for command's `input` shape.
 * @see {@link GetConferencePreferenceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConferencePreferenceCommand = /** @class */ (function (_super) {
  __extends(GetConferencePreferenceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetConferencePreferenceCommand(input) {
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
  GetConferencePreferenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "GetConferencePreferenceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetConferencePreferenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetConferencePreferenceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetConferencePreferenceCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetConferencePreferenceCommand(input, context);
  };
  GetConferencePreferenceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetConferencePreferenceCommand(output, context);
  };
  return GetConferencePreferenceCommand;
})($Command);
export { GetConferencePreferenceCommand };
//# sourceMappingURL=GetConferencePreferenceCommand.js.map
