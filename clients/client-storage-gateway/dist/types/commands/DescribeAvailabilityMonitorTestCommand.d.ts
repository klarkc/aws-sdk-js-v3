import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeAvailabilityMonitorTestInput, DescribeAvailabilityMonitorTestOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAvailabilityMonitorTestCommandInput extends DescribeAvailabilityMonitorTestInput {
}
export interface DescribeAvailabilityMonitorTestCommandOutput extends DescribeAvailabilityMonitorTestOutput, __MetadataBearer {
}
/**
 * <p>Returns information about the most recent high availability monitoring test that was
 *          performed on the host in a cluster. If a test isn't performed, the status and start
 *          time in the response would be null.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeAvailabilityMonitorTestCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeAvailabilityMonitorTestCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeAvailabilityMonitorTestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAvailabilityMonitorTestCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailabilityMonitorTestCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAvailabilityMonitorTestCommand extends $Command<DescribeAvailabilityMonitorTestCommandInput, DescribeAvailabilityMonitorTestCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeAvailabilityMonitorTestCommandInput;
    constructor(input: DescribeAvailabilityMonitorTestCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAvailabilityMonitorTestCommandInput, DescribeAvailabilityMonitorTestCommandOutput>;
    private serialize;
    private deserialize;
}
