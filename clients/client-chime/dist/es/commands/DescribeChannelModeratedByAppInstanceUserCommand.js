import { __extends } from "tslib";
import {
  DescribeChannelModeratedByAppInstanceUserRequest,
  DescribeChannelModeratedByAppInstanceUserResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand,
  serializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the full details of a channel moderated by the specified <code>AppInstanceUser</code>.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DescribeChannelModeratedByAppInstanceUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DescribeChannelModeratedByAppInstanceUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DescribeChannelModeratedByAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChannelModeratedByAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelModeratedByAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeChannelModeratedByAppInstanceUserCommand = /** @class */ (function (_super) {
  __extends(DescribeChannelModeratedByAppInstanceUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeChannelModeratedByAppInstanceUserCommand(input) {
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
  DescribeChannelModeratedByAppInstanceUserCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DescribeChannelModeratedByAppInstanceUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeChannelModeratedByAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeChannelModeratedByAppInstanceUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeChannelModeratedByAppInstanceUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand(input, context);
  };
  DescribeChannelModeratedByAppInstanceUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand(output, context);
  };
  return DescribeChannelModeratedByAppInstanceUserCommand;
})($Command);
export { DescribeChannelModeratedByAppInstanceUserCommand };
//# sourceMappingURL=DescribeChannelModeratedByAppInstanceUserCommand.js.map
