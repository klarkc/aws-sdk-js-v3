import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeMaintenanceStartTimeInput, DescribeMaintenanceStartTimeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMaintenanceStartTimeCommandInput extends DescribeMaintenanceStartTimeInput {
}
export interface DescribeMaintenanceStartTimeCommandOutput extends DescribeMaintenanceStartTimeOutput, __MetadataBearer {
}
/**
 * <p>Returns your gateway's weekly maintenance start time including the day and time of
 *          the week. Note that values are in terms of the gateway's time zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeMaintenanceStartTimeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeMaintenanceStartTimeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMaintenanceStartTimeCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceStartTimeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMaintenanceStartTimeCommand extends $Command<DescribeMaintenanceStartTimeCommandInput, DescribeMaintenanceStartTimeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeMaintenanceStartTimeCommandInput;
    constructor(input: DescribeMaintenanceStartTimeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceStartTimeCommandInput, DescribeMaintenanceStartTimeCommandOutput>;
    private serialize;
    private deserialize;
}
