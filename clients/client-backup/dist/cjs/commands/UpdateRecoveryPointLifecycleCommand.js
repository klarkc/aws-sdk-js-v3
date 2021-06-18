"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRecoveryPointLifecycleCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Sets the transition lifecycle of a recovery point.</p>
 *          <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
 *          it expires. AWS Backup transitions and expires backups automatically according to the
 *          lifecycle that you define.</p>
 *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 *          days. Therefore, the “expire after days” setting must be 90 days greater than the
 *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
 *          be changed after a backup has been transitioned to cold.</p>
 *          <p>Only Amazon EFS file system backups can be transitioned to cold storage.</p>
 *          <p>Does not support continuous backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRecoveryPointLifecycleCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRecoveryPointLifecycleCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new UpdateRecoveryPointLifecycleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRecoveryPointLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateRecoveryPointLifecycleCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateRecoveryPointLifecycleCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateRecoveryPointLifecycleCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.UpdateRecoveryPointLifecycleInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.UpdateRecoveryPointLifecycleOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1UpdateRecoveryPointLifecycleCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand(output, context);
  }
}
exports.UpdateRecoveryPointLifecycleCommand = UpdateRecoveryPointLifecycleCommand;
//# sourceMappingURL=UpdateRecoveryPointLifecycleCommand.js.map
