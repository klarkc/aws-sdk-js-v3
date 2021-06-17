import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { TransactWriteItemsInput, TransactWriteItemsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TransactWriteItemsCommandInput extends TransactWriteItemsInput {
}
export interface TransactWriteItemsCommandOutput extends TransactWriteItemsOutput, __MetadataBearer {
}
/**
 * <p>
 *             <code>TransactWriteItems</code> is a synchronous write operation that groups up to 25
 *             action requests. These actions can target items in different tables, but not in
 *             different AWS accounts or Regions, and no two actions can target the same item. For
 *             example, you cannot both <code>ConditionCheck</code> and <code>Update</code> the same
 *             item. The aggregate size of the items in the transaction cannot exceed 4 MB.</p>
 *
 *          <p>The actions are completed atomically so that either all of
 *         them succeed, or all of them fail. They are defined by the following objects:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Put</code>     Initiates a <code>PutItem</code> operation to write a new
 *                     item. This structure specifies the primary key of the item to be written, the
 *                     name of the table to write it in, an optional condition expression that must be
 *                     satisfied for the write to succeed, a list of the item's attributes, and a field
 *                     indicating whether to retrieve the item's attributes if the condition is not
 *                     met.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Update</code>     Initiates an <code>UpdateItem</code> operation to
 *                     update an existing item. This structure specifies the primary key of the item to
 *                     be updated, the name of the table where it resides, an optional condition
 *                     expression that must be satisfied for the update to succeed, an expression that
 *                     defines one or more attributes to be updated, and a field indicating whether to
 *                     retrieve the item's attributes if the condition is not met.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Delete</code>     Initiates a <code>DeleteItem</code> operation to
 *                     delete an existing item. This structure specifies the primary key of the item to
 *                     be deleted, the name of the table where it resides, an optional condition
 *                     expression that must be satisfied for the deletion to succeed, and a field
 *                     indicating whether to retrieve the item's attributes if the condition is not
 *                     met.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ConditionCheck</code>     Applies a condition to an item that is not
 *                     being modified by the transaction. This structure specifies the primary key of
 *                     the item to be checked, the name of the table where it resides, a condition
 *                     expression that must be satisfied for the transaction to succeed, and a field
 *                     indicating whether to retrieve the item's attributes if the condition is not
 *                     met.</p>
 *             </li>
 *          </ul>
 *
 *          <p>DynamoDB rejects the entire <code>TransactWriteItems</code> request if any of the following is true:</p>
 *          <ul>
 *             <li>
 *                <p>A condition in one of the condition expressions is not met.</p>
 *             </li>
 *             <li>
 *                <p>An ongoing operation is in the process of updating the same
 *           item.</p>
 *             </li>
 *             <li>
 *                <p>There is insufficient provisioned capacity for the transaction
 *           to be completed.</p>
 *             </li>
 *             <li>
 *                <p>An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too
 *                     large, or a similar validation error occurs because of changes made by the
 *                     transaction.</p>
 *             </li>
 *             <li>
 *                <p>The aggregate size of the items in the transaction exceeds 4 MB.</p>
 *             </li>
 *             <li>
 *                <p>There  is a user error, such as an invalid data format.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, TransactWriteItemsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, TransactWriteItemsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new TransactWriteItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransactWriteItemsCommandInput} for command's `input` shape.
 * @see {@link TransactWriteItemsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TransactWriteItemsCommand extends $Command<TransactWriteItemsCommandInput, TransactWriteItemsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: TransactWriteItemsCommandInput;
    constructor(input: TransactWriteItemsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TransactWriteItemsCommandInput, TransactWriteItemsCommandOutput>;
    private serialize;
    private deserialize;
}
