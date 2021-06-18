"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBackupPlanFromTemplateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the template specified by its <code>templateId</code> as a backup plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupPlanFromTemplateCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupPlanFromTemplateCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetBackupPlanFromTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackupPlanFromTemplateCommandInput} for command's `input` shape.
 * @see {@link GetBackupPlanFromTemplateCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetBackupPlanFromTemplateCommand extends smithy_client_1.Command {
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
    const commandName = "GetBackupPlanFromTemplateCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.GetBackupPlanFromTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.GetBackupPlanFromTemplateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1GetBackupPlanFromTemplateCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1GetBackupPlanFromTemplateCommand(output, context);
  }
}
exports.GetBackupPlanFromTemplateCommand = GetBackupPlanFromTemplateCommand;
//# sourceMappingURL=GetBackupPlanFromTemplateCommand.js.map
