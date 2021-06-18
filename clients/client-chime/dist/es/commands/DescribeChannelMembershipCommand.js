import { __extends } from "tslib";
import { DescribeChannelMembershipRequest, DescribeChannelMembershipResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeChannelMembershipCommand,
  serializeAws_restJson1DescribeChannelMembershipCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the full details of a user's channel membership.</p>
 *
 *          <note>
 *
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DescribeChannelMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DescribeChannelMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DescribeChannelMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChannelMembershipCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeChannelMembershipCommand = /** @class */ (function (_super) {
  __extends(DescribeChannelMembershipCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeChannelMembershipCommand(input) {
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
  DescribeChannelMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DescribeChannelMembershipCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeChannelMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeChannelMembershipResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeChannelMembershipCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeChannelMembershipCommand(input, context);
  };
  DescribeChannelMembershipCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeChannelMembershipCommand(output, context);
  };
  return DescribeChannelMembershipCommand;
})($Command);
export { DescribeChannelMembershipCommand };
//# sourceMappingURL=DescribeChannelMembershipCommand.js.map
