import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import { GetShardIteratorInput, GetShardIteratorOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetShardIteratorCommandInput extends GetShardIteratorInput {
}
export interface GetShardIteratorCommandOutput extends GetShardIteratorOutput, __MetadataBearer {
}
/**
 * <p>Returns a shard iterator. A shard iterator provides information
 *       about how to retrieve the stream records from within a shard.  Use
 *       the shard iterator in a subsequent
 *       <code>GetRecords</code> request to read the stream records
 *       from the shard.</p>
 *          <note>
 *             <p>A shard iterator expires 15 minutes after it is returned to the requester.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBStreamsClient, GetShardIteratorCommand } from "@aws-sdk/client-dynamodb-streams"; // ES Modules import
 * // const { DynamoDBStreamsClient, GetShardIteratorCommand } = require("@aws-sdk/client-dynamodb-streams"); // CommonJS import
 * const client = new DynamoDBStreamsClient(config);
 * const command = new GetShardIteratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetShardIteratorCommandInput} for command's `input` shape.
 * @see {@link GetShardIteratorCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBStreamsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetShardIteratorCommand extends $Command<GetShardIteratorCommandInput, GetShardIteratorCommandOutput, DynamoDBStreamsClientResolvedConfig> {
    readonly input: GetShardIteratorCommandInput;
    constructor(input: GetShardIteratorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBStreamsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetShardIteratorCommandInput, GetShardIteratorCommandOutput>;
    private serialize;
    private deserialize;
}
