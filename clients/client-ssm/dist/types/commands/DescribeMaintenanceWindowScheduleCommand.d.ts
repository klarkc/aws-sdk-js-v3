import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeMaintenanceWindowScheduleRequest, DescribeMaintenanceWindowScheduleResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMaintenanceWindowScheduleCommandInput extends DescribeMaintenanceWindowScheduleRequest {
}
export interface DescribeMaintenanceWindowScheduleCommandOutput extends DescribeMaintenanceWindowScheduleResult, __MetadataBearer {
}
/**
 * <p>Retrieves information about upcoming executions of a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowScheduleCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowScheduleCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeMaintenanceWindowScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMaintenanceWindowScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowScheduleCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMaintenanceWindowScheduleCommand extends $Command<DescribeMaintenanceWindowScheduleCommandInput, DescribeMaintenanceWindowScheduleCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowScheduleCommandInput;
    constructor(input: DescribeMaintenanceWindowScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowScheduleCommandInput, DescribeMaintenanceWindowScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
