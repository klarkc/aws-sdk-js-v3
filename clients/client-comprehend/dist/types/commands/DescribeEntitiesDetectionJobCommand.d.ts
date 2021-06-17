import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeEntitiesDetectionJobRequest, DescribeEntitiesDetectionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEntitiesDetectionJobCommandInput extends DescribeEntitiesDetectionJobRequest {
}
export interface DescribeEntitiesDetectionJobCommandOutput extends DescribeEntitiesDetectionJobResponse, __MetadataBearer {
}
/**
 * <p>Gets the properties associated with an entities detection job. Use this operation to get
 *       the status of a detection job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeEntitiesDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeEntitiesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DescribeEntitiesDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEntitiesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link DescribeEntitiesDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEntitiesDetectionJobCommand extends $Command<DescribeEntitiesDetectionJobCommandInput, DescribeEntitiesDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DescribeEntitiesDetectionJobCommandInput;
    constructor(input: DescribeEntitiesDetectionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEntitiesDetectionJobCommandInput, DescribeEntitiesDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
