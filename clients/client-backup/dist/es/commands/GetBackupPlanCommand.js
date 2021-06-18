import { __extends } from "tslib";
import { GetBackupPlanInput, GetBackupPlanOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackupPlanCommand,
  serializeAws_restJson1GetBackupPlanCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns <code>BackupPlan</code> details for the specified <code>BackupPlanId</code>. The
 *          details are the body of a backup plan in JSON format, in addition to plan metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetBackupPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackupPlanCommandInput} for command's `input` shape.
 * @see {@link GetBackupPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBackupPlanCommand = /** @class */ (function (_super) {
  __extends(GetBackupPlanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBackupPlanCommand(input) {
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
  GetBackupPlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "GetBackupPlanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBackupPlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackupPlanOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBackupPlanCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBackupPlanCommand(input, context);
  };
  GetBackupPlanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBackupPlanCommand(output, context);
  };
  return GetBackupPlanCommand;
})($Command);
export { GetBackupPlanCommand };
//# sourceMappingURL=GetBackupPlanCommand.js.map
