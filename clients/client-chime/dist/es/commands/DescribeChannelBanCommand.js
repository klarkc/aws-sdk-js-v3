import { __extends } from "tslib";
import { DescribeChannelBanRequest, DescribeChannelBanResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeChannelBanCommand,
  serializeAws_restJson1DescribeChannelBanCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the full details of a channel ban.</p>
 *
 *          <note>
 *
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DescribeChannelBanCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DescribeChannelBanCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DescribeChannelBanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChannelBanCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelBanCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeChannelBanCommand = /** @class */ (function (_super) {
  __extends(DescribeChannelBanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeChannelBanCommand(input) {
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
  DescribeChannelBanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DescribeChannelBanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeChannelBanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeChannelBanResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeChannelBanCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeChannelBanCommand(input, context);
  };
  DescribeChannelBanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeChannelBanCommand(output, context);
  };
  return DescribeChannelBanCommand;
})($Command);
export { DescribeChannelBanCommand };
//# sourceMappingURL=DescribeChannelBanCommand.js.map
