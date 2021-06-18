import { __extends } from "tslib";
import { DescribeAppInstanceUserRequest, DescribeAppInstanceUserResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAppInstanceUserCommand,
  serializeAws_restJson1DescribeAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Returns the full details of an
 * <code>AppInstanceUser</code>
 * .
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DescribeAppInstanceUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DescribeAppInstanceUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DescribeAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAppInstanceUserCommand = /** @class */ (function (_super) {
  __extends(DescribeAppInstanceUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeAppInstanceUserCommand(input) {
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
  DescribeAppInstanceUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DescribeAppInstanceUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAppInstanceUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeAppInstanceUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeAppInstanceUserCommand(input, context);
  };
  DescribeAppInstanceUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeAppInstanceUserCommand(output, context);
  };
  return DescribeAppInstanceUserCommand;
})($Command);
export { DescribeAppInstanceUserCommand };
//# sourceMappingURL=DescribeAppInstanceUserCommand.js.map
