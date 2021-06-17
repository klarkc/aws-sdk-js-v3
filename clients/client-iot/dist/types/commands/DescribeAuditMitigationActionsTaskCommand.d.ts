import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeAuditMitigationActionsTaskRequest, DescribeAuditMitigationActionsTaskResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAuditMitigationActionsTaskCommandInput extends DescribeAuditMitigationActionsTaskRequest {
}
export interface DescribeAuditMitigationActionsTaskCommandOutput extends DescribeAuditMitigationActionsTaskResponse, __MetadataBearer {
}
/**
 * <p>Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAuditMitigationActionsTaskCommand extends $Command<DescribeAuditMitigationActionsTaskCommandInput, DescribeAuditMitigationActionsTaskCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeAuditMitigationActionsTaskCommandInput;
    constructor(input: DescribeAuditMitigationActionsTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAuditMitigationActionsTaskCommandInput, DescribeAuditMitigationActionsTaskCommandOutput>;
    private serialize;
    private deserialize;
}
