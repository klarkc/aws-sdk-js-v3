import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeEventsDetectionJobRequest, DescribeEventsDetectionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEventsDetectionJobCommandInput extends DescribeEventsDetectionJobRequest {
}
export interface DescribeEventsDetectionJobCommandOutput extends DescribeEventsDetectionJobResponse, __MetadataBearer {
}
/**
 * <p>Gets the status and details of an events detection job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeEventsDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeEventsDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DescribeEventsDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventsDetectionJobCommandInput} for command's `input` shape.
 * @see {@link DescribeEventsDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEventsDetectionJobCommand extends $Command<DescribeEventsDetectionJobCommandInput, DescribeEventsDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DescribeEventsDetectionJobCommandInput;
    constructor(input: DescribeEventsDetectionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventsDetectionJobCommandInput, DescribeEventsDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
