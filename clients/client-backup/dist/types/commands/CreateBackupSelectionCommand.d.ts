import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { CreateBackupSelectionInput, CreateBackupSelectionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateBackupSelectionCommandInput extends CreateBackupSelectionInput {}
export interface CreateBackupSelectionCommandOutput extends CreateBackupSelectionOutput, __MetadataBearer {}
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
export declare class CreateBackupSelectionCommand extends $Command<
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: CreateBackupSelectionCommandInput;
  constructor(input: CreateBackupSelectionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBackupSelectionCommandInput, CreateBackupSelectionCommandOutput>;
  private serialize;
  private deserialize;
}
