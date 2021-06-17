import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeScheduledAuditRequest, DescribeScheduledAuditResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeScheduledAuditCommandInput extends DescribeScheduledAuditRequest {
}
export interface DescribeScheduledAuditCommandOutput extends DescribeScheduledAuditResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a scheduled audit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeScheduledAuditCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeScheduledAuditCommand extends $Command<DescribeScheduledAuditCommandInput, DescribeScheduledAuditCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeScheduledAuditCommandInput;
    constructor(input: DescribeScheduledAuditCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScheduledAuditCommandInput, DescribeScheduledAuditCommandOutput>;
    private serialize;
    private deserialize;
}
