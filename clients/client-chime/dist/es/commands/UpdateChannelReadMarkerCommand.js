import { __extends } from "tslib";
import { UpdateChannelReadMarkerRequest, UpdateChannelReadMarkerResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateChannelReadMarkerCommand,
  serializeAws_restJson1UpdateChannelReadMarkerCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The details of the time when a user last read messages in a channel.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateChannelReadMarkerCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateChannelReadMarkerCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateChannelReadMarkerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateChannelReadMarkerCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelReadMarkerCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateChannelReadMarkerCommand = /** @class */ (function (_super) {
  __extends(UpdateChannelReadMarkerCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateChannelReadMarkerCommand(input) {
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
  UpdateChannelReadMarkerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdateChannelReadMarkerCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateChannelReadMarkerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateChannelReadMarkerResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateChannelReadMarkerCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateChannelReadMarkerCommand(input, context);
  };
  UpdateChannelReadMarkerCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateChannelReadMarkerCommand(output, context);
  };
  return UpdateChannelReadMarkerCommand;
})($Command);
export { UpdateChannelReadMarkerCommand };
//# sourceMappingURL=UpdateChannelReadMarkerCommand.js.map
