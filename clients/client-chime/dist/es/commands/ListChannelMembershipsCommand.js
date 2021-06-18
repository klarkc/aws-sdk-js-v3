import { __extends } from "tslib";
import { ListChannelMembershipsRequest, ListChannelMembershipsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListChannelMembershipsCommand,
  serializeAws_restJson1ListChannelMembershipsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all channel memberships in a channel.</p>
 *
 *          <note>
 *
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListChannelMembershipsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListChannelMembershipsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListChannelMembershipsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListChannelMembershipsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListChannelMembershipsCommand = /** @class */ (function (_super) {
  __extends(ListChannelMembershipsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListChannelMembershipsCommand(input) {
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
  ListChannelMembershipsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListChannelMembershipsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListChannelMembershipsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChannelMembershipsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListChannelMembershipsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListChannelMembershipsCommand(input, context);
  };
  ListChannelMembershipsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListChannelMembershipsCommand(output, context);
  };
  return ListChannelMembershipsCommand;
})($Command);
export { ListChannelMembershipsCommand };
//# sourceMappingURL=ListChannelMembershipsCommand.js.map
