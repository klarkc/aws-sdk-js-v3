import { __extends } from "tslib";
import { BatchCreateChannelMembershipRequest, BatchCreateChannelMembershipResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchCreateChannelMembershipCommand,
  serializeAws_restJson1BatchCreateChannelMembershipCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a specified number of users to a channel. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchCreateChannelMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchCreateChannelMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchCreateChannelMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateChannelMembershipCommandInput} for command's `input` shape.
 * @see {@link BatchCreateChannelMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchCreateChannelMembershipCommand = /** @class */ (function (_super) {
  __extends(BatchCreateChannelMembershipCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchCreateChannelMembershipCommand(input) {
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
  BatchCreateChannelMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "BatchCreateChannelMembershipCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchCreateChannelMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchCreateChannelMembershipResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchCreateChannelMembershipCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchCreateChannelMembershipCommand(input, context);
  };
  BatchCreateChannelMembershipCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchCreateChannelMembershipCommand(output, context);
  };
  return BatchCreateChannelMembershipCommand;
})($Command);
export { BatchCreateChannelMembershipCommand };
//# sourceMappingURL=BatchCreateChannelMembershipCommand.js.map
