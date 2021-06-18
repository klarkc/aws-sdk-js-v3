import { __extends } from "tslib";
import { GetMeetingRequest, GetMeetingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetMeetingCommand,
  serializeAws_restJson1GetMeetingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see
 * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 * in the
 * <i>Amazon Chime Developer Guide</i>
 * .
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetMeetingCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetMeetingCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetMeetingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMeetingCommandInput} for command's `input` shape.
 * @see {@link GetMeetingCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMeetingCommand = /** @class */ (function (_super) {
  __extends(GetMeetingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetMeetingCommand(input) {
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
  GetMeetingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetMeetingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetMeetingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMeetingResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetMeetingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetMeetingCommand(input, context);
  };
  GetMeetingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetMeetingCommand(output, context);
  };
  return GetMeetingCommand;
})($Command);
export { GetMeetingCommand };
//# sourceMappingURL=GetMeetingCommand.js.map
