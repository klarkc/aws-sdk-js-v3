import { __extends } from "tslib";
import { DescribeBackupsRequest, DescribeBackupsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBackupsCommand,
  serializeAws_json1_1DescribeBackupsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about backups of AWS CloudHSM clusters.</p>
 *          <p>This is a paginated operation, which means that each response might contain only a
 *       subset of all the backups. When the response contains only a subset of backups, it includes a
 *         <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code>
 *       request to get more backups. When you receive a response with no <code>NextToken</code> (or an
 *       empty or null value), that means there are no more backups to get.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, DescribeBackupsCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, DescribeBackupsCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new DescribeBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupsCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBackupsCommand = /** @class */ (function (_super) {
  __extends(DescribeBackupsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeBackupsCommand(input) {
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
  DescribeBackupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudHSMV2Client";
    var commandName = "DescribeBackupsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeBackupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBackupsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeBackupsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeBackupsCommand(input, context);
  };
  DescribeBackupsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeBackupsCommand(output, context);
  };
  return DescribeBackupsCommand;
})($Command);
export { DescribeBackupsCommand };
//# sourceMappingURL=DescribeBackupsCommand.js.map
