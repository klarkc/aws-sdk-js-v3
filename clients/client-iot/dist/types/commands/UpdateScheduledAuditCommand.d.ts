import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateScheduledAuditRequest, UpdateScheduledAuditResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateScheduledAuditCommandInput extends UpdateScheduledAuditRequest {
}
export interface UpdateScheduledAuditCommandOutput extends UpdateScheduledAuditResponse, __MetadataBearer {
}
/**
 * <p>Updates a scheduled audit, including which checks are performed and
 *           how often the audit takes place.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateScheduledAuditCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateScheduledAuditCommand extends $Command<UpdateScheduledAuditCommandInput, UpdateScheduledAuditCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateScheduledAuditCommandInput;
    constructor(input: UpdateScheduledAuditCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateScheduledAuditCommandInput, UpdateScheduledAuditCommandOutput>;
    private serialize;
    private deserialize;
}
