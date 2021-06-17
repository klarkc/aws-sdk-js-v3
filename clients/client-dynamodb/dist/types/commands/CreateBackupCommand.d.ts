import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { CreateBackupInput, CreateBackupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateBackupCommandInput extends CreateBackupInput {
}
export interface CreateBackupCommandOutput extends CreateBackupOutput, __MetadataBearer {
}
/**
 * <p>Creates a backup for an existing table.</p>
 *          <p> Each time you create an on-demand backup, the entire table data is backed up. There
 *             is no limit to the number of on-demand backups that can be taken. </p>
 *          <p> When you create an on-demand backup, a time marker of the request is cataloged, and
 *             the backup is created asynchronously, by applying all changes until the time of the
 *             request to the last full table snapshot. Backup requests are processed instantaneously
 *             and become available for restore within minutes. </p>
 *          <p>You can call <code>CreateBackup</code> at a maximum rate of 50 times per second.</p>
 *          <p>All backups in DynamoDB work without consuming any provisioned throughput on the table.</p>
 *          <p> If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed
 *             to contain all data committed to the table up to 14:24:00, and data committed after
 *             14:26:00 will not be. The backup might contain data modifications made between 14:24:00
 *             and 14:26:00. On-demand backup does not support causal consistency. </p>
 *          <p>
 *              Along with data, the following are also included on the backups:
 *          </p>
 *            <ul>
 *             <li>
 *                   <p>Global secondary indexes (GSIs)</p>
 *               </li>
 *             <li>
 *                   <p>Local secondary indexes (LSIs)</p>
 *               </li>
 *             <li>
 *                   <p>Streams</p>
 *               </li>
 *             <li>
 *                   <p>Provisioned read and write capacity</p>
 *               </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, CreateBackupCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, CreateBackupCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new CreateBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackupCommandInput} for command's `input` shape.
 * @see {@link CreateBackupCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBackupCommand extends $Command<CreateBackupCommandInput, CreateBackupCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: CreateBackupCommandInput;
    constructor(input: CreateBackupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBackupCommandInput, CreateBackupCommandOutput>;
    private serialize;
    private deserialize;
}
