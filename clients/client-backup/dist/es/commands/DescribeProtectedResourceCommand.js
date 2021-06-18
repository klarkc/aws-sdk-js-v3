import { __extends } from "tslib";
import { DescribeProtectedResourceInput, DescribeProtectedResourceOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeProtectedResourceCommand,
  serializeAws_restJson1DescribeProtectedResourceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a saved resource, including the last time it was backed up,
 *          its Amazon Resource Name (ARN), and the AWS service type of the saved resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeProtectedResourceCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeProtectedResourceCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeProtectedResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProtectedResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectedResourceCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProtectedResourceCommand = /** @class */ (function (_super) {
  __extends(DescribeProtectedResourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeProtectedResourceCommand(input) {
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
  DescribeProtectedResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DescribeProtectedResourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeProtectedResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProtectedResourceOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeProtectedResourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeProtectedResourceCommand(input, context);
  };
  DescribeProtectedResourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeProtectedResourceCommand(output, context);
  };
  return DescribeProtectedResourceCommand;
})($Command);
export { DescribeProtectedResourceCommand };
//# sourceMappingURL=DescribeProtectedResourceCommand.js.map
