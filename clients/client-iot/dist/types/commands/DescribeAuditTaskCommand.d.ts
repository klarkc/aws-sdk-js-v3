import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeAuditTaskRequest, DescribeAuditTaskResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAuditTaskCommandInput extends DescribeAuditTaskRequest {
}
export interface DescribeAuditTaskCommandOutput extends DescribeAuditTaskResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a Device Defender audit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAuditTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuditTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAuditTaskCommand extends $Command<DescribeAuditTaskCommandInput, DescribeAuditTaskCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeAuditTaskCommandInput;
    constructor(input: DescribeAuditTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAuditTaskCommandInput, DescribeAuditTaskCommandOutput>;
    private serialize;
    private deserialize;
}
