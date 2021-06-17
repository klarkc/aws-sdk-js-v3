import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DescribeClusterOperationRequest, DescribeClusterOperationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClusterOperationCommandInput extends DescribeClusterOperationRequest {
}
export interface DescribeClusterOperationCommandOutput extends DescribeClusterOperationResponse, __MetadataBearer {
}
/**
 * <p>Returns a description of the cluster operation specified by the ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeClusterOperationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeClusterOperationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new DescribeClusterOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterOperationCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClusterOperationCommand extends $Command<DescribeClusterOperationCommandInput, DescribeClusterOperationCommandOutput, KafkaClientResolvedConfig> {
    readonly input: DescribeClusterOperationCommandInput;
    constructor(input: DescribeClusterOperationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterOperationCommandInput, DescribeClusterOperationCommandOutput>;
    private serialize;
    private deserialize;
}
