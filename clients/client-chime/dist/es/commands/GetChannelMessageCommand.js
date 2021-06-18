import { __extends } from "tslib";
import { GetChannelMessageRequest, GetChannelMessageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetChannelMessageCommand,
  serializeAws_restJson1GetChannelMessageCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the full details of a channel message.</p>
 *
 *          <note>
 *             <p>The x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the
 *         value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetChannelMessageCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetChannelMessageCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetChannelMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChannelMessageCommandInput} for command's `input` shape.
 * @see {@link GetChannelMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetChannelMessageCommand = /** @class */ (function (_super) {
  __extends(GetChannelMessageCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetChannelMessageCommand(input) {
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
  GetChannelMessageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetChannelMessageCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetChannelMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetChannelMessageResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetChannelMessageCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetChannelMessageCommand(input, context);
  };
  GetChannelMessageCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetChannelMessageCommand(output, context);
  };
  return GetChannelMessageCommand;
})($Command);
export { GetChannelMessageCommand };
//# sourceMappingURL=GetChannelMessageCommand.js.map
