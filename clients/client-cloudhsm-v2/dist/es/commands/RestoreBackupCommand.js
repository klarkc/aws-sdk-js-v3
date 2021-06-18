import { __extends } from "tslib";
import { RestoreBackupRequest, RestoreBackupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RestoreBackupCommand,
  serializeAws_json1_1RestoreBackupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restores a specified AWS CloudHSM backup that is in the
 *                 <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see
 *                 <a>DeleteBackup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, RestoreBackupCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, RestoreBackupCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new RestoreBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreBackupCommandInput} for command's `input` shape.
 * @see {@link RestoreBackupCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreBackupCommand = /** @class */ (function (_super) {
  __extends(RestoreBackupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RestoreBackupCommand(input) {
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
  RestoreBackupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudHSMV2Client";
    var commandName = "RestoreBackupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RestoreBackupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreBackupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RestoreBackupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1RestoreBackupCommand(input, context);
  };
  RestoreBackupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1RestoreBackupCommand(output, context);
  };
  return RestoreBackupCommand;
})($Command);
export { RestoreBackupCommand };
//# sourceMappingURL=RestoreBackupCommand.js.map
