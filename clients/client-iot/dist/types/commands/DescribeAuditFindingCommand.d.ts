import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeAuditFindingRequest, DescribeAuditFindingResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAuditFindingCommandInput extends DescribeAuditFindingRequest {
}
export interface DescribeAuditFindingCommandOutput extends DescribeAuditFindingResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a single audit finding. Properties include the reason for
 *       noncompliance, the severity of the issue,
 *       and the start time
 *       when the audit that returned the
 *       finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditFindingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditFindingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAuditFindingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuditFindingCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditFindingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAuditFindingCommand extends $Command<DescribeAuditFindingCommandInput, DescribeAuditFindingCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeAuditFindingCommandInput;
    constructor(input: DescribeAuditFindingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAuditFindingCommandInput, DescribeAuditFindingCommandOutput>;
    private serialize;
    private deserialize;
}
