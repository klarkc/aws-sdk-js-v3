"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateRecoveryPointCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DisassociateRecoveryPointCommand extends smithy_client_1.Command {
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
    const commandName = "DisassociateRecoveryPointCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DisassociateRecoveryPointInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1DisassociateRecoveryPointCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1DisassociateRecoveryPointCommand(output, context);
  }
}
exports.DisassociateRecoveryPointCommand = DisassociateRecoveryPointCommand;
//# sourceMappingURL=DisassociateRecoveryPointCommand.js.map
