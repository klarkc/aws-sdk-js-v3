import { __extends } from "tslib";
import { DisassociateRecoveryPointInput } from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateRecoveryPointCommand,
  serializeAws_restJson1DisassociateRecoveryPointCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified continuous backup recovery point from AWS Backup and releases
 *          control of that continuous backup to the source service, such as Amazon RDS. The source
 *          service will continue to create and retain continuous backups using the lifecycle that you
 *          specified in your original backup plan.</p>
 *          <p>Does not support snapshot backup recovery points.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DisassociateRecoveryPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DisassociateRecoveryPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DisassociateRecoveryPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link DisassociateRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateRecoveryPointCommand = /** @class */ (function (_super) {
  __extends(DisassociateRecoveryPointCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisassociateRecoveryPointCommand(input) {
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
  DisassociateRecoveryPointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DisassociateRecoveryPointCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisassociateRecoveryPointInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisassociateRecoveryPointCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DisassociateRecoveryPointCommand(input, context);
  };
  DisassociateRecoveryPointCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DisassociateRecoveryPointCommand(output, context);
  };
  return DisassociateRecoveryPointCommand;
})($Command);
export { DisassociateRecoveryPointCommand };
//# sourceMappingURL=DisassociateRecoveryPointCommand.js.map
