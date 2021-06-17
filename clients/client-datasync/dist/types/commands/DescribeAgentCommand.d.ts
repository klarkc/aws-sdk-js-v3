import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeAgentRequest, DescribeAgentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAgentCommandInput extends DescribeAgentRequest {
}
export interface DescribeAgentCommandOutput extends DescribeAgentResponse, __MetadataBearer {
}
/**
 * <p>Returns metadata such as the name, the network interfaces, and the status (that is,
 *       whether the agent is running or not) for an agent. To specify which agent to describe, use the
 *       Amazon Resource Name (ARN) of the agent in your request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeAgentCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAgentCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAgentCommand extends $Command<DescribeAgentCommandInput, DescribeAgentCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeAgentCommandInput;
    constructor(input: DescribeAgentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAgentCommandInput, DescribeAgentCommandOutput>;
    private serialize;
    private deserialize;
}
