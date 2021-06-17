import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateScheduledAuditRequest, CreateScheduledAuditResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateScheduledAuditCommandInput extends CreateScheduledAuditRequest {
}
export interface CreateScheduledAuditCommandOutput extends CreateScheduledAuditResponse, __MetadataBearer {
}
/**
 * <p>Creates a scheduled audit that is run at a specified
 *           time interval.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateScheduledAuditCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateScheduledAuditCommand extends $Command<CreateScheduledAuditCommandInput, CreateScheduledAuditCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateScheduledAuditCommandInput;
    constructor(input: CreateScheduledAuditCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateScheduledAuditCommandInput, CreateScheduledAuditCommandOutput>;
    private serialize;
    private deserialize;
}
