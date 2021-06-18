"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBackupSelectionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a JSON document that specifies a set of resources to assign to a backup plan.
 *          Resources can be included by specifying patterns for a <code>ListOfTags</code> and selected
 *             <code>Resources</code>. </p>
 *          <p>For example, consider the following patterns:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Resources: "arn:aws:ec2:region:account-id:volume/volume-id"</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ConditionKey:"department"</code>
 *                </p>
 *                <p>
 *                   <code>ConditionValue:"finance"</code>
 *                </p>
 *                <p>
 *                   <code>ConditionType:"StringEquals"</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ConditionKey:"importance"</code>
 *                </p>
 *                <p>
 *                   <code>ConditionValue:"critical"</code>
 *                </p>
 *                <p>
 *                   <code>ConditionType:"StringEquals"</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Using these patterns would back up all Amazon Elastic Block Store (Amazon EBS) volumes
 *          that are tagged as <code>"department=finance"</code>, <code>"importance=critical"</code>,
 *          in addition to an EBS volume with the specified volume ID.</p>
 *          <p>Resources and conditions are additive in that all resources that match the pattern are
 *          selected. This shouldn't be confused with a logical AND, where all conditions must match.
 *          The matching patterns are logically put together using the OR operator.
 *          In other words, all patterns that match are selected for backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateBackupSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateBackupSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new CreateBackupSelectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackupSelectionCommandInput} for command's `input` shape.
 * @see {@link CreateBackupSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateBackupSelectionCommand extends smithy_client_1.Command {
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
    const commandName = "CreateBackupSelectionCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.CreateBackupSelectionInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.CreateBackupSelectionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1CreateBackupSelectionCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1CreateBackupSelectionCommand(output, context);
  }
}
exports.CreateBackupSelectionCommand = CreateBackupSelectionCommand;
//# sourceMappingURL=CreateBackupSelectionCommand.js.map
