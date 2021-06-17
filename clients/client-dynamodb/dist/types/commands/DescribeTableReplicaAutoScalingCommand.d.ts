import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeTableReplicaAutoScalingInput, DescribeTableReplicaAutoScalingOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTableReplicaAutoScalingCommandInput extends DescribeTableReplicaAutoScalingInput {
}
export interface DescribeTableReplicaAutoScalingCommandOutput extends DescribeTableReplicaAutoScalingOutput, __MetadataBearer {
}
/**
 * <p>Describes auto scaling settings across replicas of the global table at once.</p>
 *          <note>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> of global tables.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeTableReplicaAutoScalingCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeTableReplicaAutoScalingCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeTableReplicaAutoScalingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableReplicaAutoScalingCommandInput} for command's `input` shape.
 * @see {@link DescribeTableReplicaAutoScalingCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTableReplicaAutoScalingCommand extends $Command<DescribeTableReplicaAutoScalingCommandInput, DescribeTableReplicaAutoScalingCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeTableReplicaAutoScalingCommandInput;
    constructor(input: DescribeTableReplicaAutoScalingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTableReplicaAutoScalingCommandInput, DescribeTableReplicaAutoScalingCommandOutput>;
    private serialize;
    private deserialize;
}
