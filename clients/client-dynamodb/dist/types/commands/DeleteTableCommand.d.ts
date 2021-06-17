import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DeleteTableInput, DeleteTableOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTableCommandInput extends DeleteTableInput {
}
export interface DeleteTableCommandOutput extends DeleteTableOutput, __MetadataBearer {
}
/**
 * <p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a
 *         <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until
 *       DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete
 *       it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns
 *       a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a
 *         <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no
 *       error is returned. </p>
 *          <note>
 *             <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and
 *           <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is
 *         complete.</p>
 *          </note>
 *          <p>When you delete a table, any indexes on that table are also deleted.</p>
 *          <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes
 *       into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p>
 *
 *          <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DeleteTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DeleteTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DeleteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTableCommand extends $Command<DeleteTableCommandInput, DeleteTableCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DeleteTableCommandInput;
    constructor(input: DeleteTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTableCommandInput, DeleteTableCommandOutput>;
    private serialize;
    private deserialize;
}
