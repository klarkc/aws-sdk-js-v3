import { __extends } from "tslib";
import { CreateBackupPlanInput, CreateBackupPlanOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackupPlanCommand,
  serializeAws_restJson1CreateBackupPlanCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a backup plan using a backup plan name and backup rules. A backup plan is a
 *          document that contains information that AWS Backup uses to schedule tasks that create
 *          recovery points for resources.</p>
 *          <p>If you call <code>CreateBackupPlan</code> with a plan that already exists, an
 *             <code>AlreadyExistsException</code> is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateBackupPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateBackupPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new CreateBackupPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackupPlanCommandInput} for command's `input` shape.
 * @see {@link CreateBackupPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBackupPlanCommand = /** @class */ (function (_super) {
  __extends(CreateBackupPlanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateBackupPlanCommand(input) {
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
  CreateBackupPlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "CreateBackupPlanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateBackupPlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackupPlanOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateBackupPlanCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateBackupPlanCommand(input, context);
  };
  CreateBackupPlanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateBackupPlanCommand(output, context);
  };
  return CreateBackupPlanCommand;
})($Command);
export { CreateBackupPlanCommand };
//# sourceMappingURL=CreateBackupPlanCommand.js.map
