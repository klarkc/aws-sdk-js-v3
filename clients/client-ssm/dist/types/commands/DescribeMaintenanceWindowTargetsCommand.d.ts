import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeMaintenanceWindowTargetsRequest, DescribeMaintenanceWindowTargetsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMaintenanceWindowTargetsCommandInput extends DescribeMaintenanceWindowTargetsRequest {
}
export interface DescribeMaintenanceWindowTargetsCommandOutput extends DescribeMaintenanceWindowTargetsResult, __MetadataBearer {
}
/**
 * <p>Lists the targets registered with the maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowTargetsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowTargetsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeMaintenanceWindowTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMaintenanceWindowTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowTargetsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMaintenanceWindowTargetsCommand extends $Command<DescribeMaintenanceWindowTargetsCommandInput, DescribeMaintenanceWindowTargetsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowTargetsCommandInput;
    constructor(input: DescribeMaintenanceWindowTargetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowTargetsCommandInput, DescribeMaintenanceWindowTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
