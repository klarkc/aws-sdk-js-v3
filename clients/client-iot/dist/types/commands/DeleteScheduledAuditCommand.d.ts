import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteScheduledAuditRequest, DeleteScheduledAuditResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteScheduledAuditCommandInput extends DeleteScheduledAuditRequest {
}
export interface DeleteScheduledAuditCommandOutput extends DeleteScheduledAuditResponse, __MetadataBearer {
}
/**
 * <p>Deletes a scheduled audit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteScheduledAuditCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteScheduledAuditCommand extends $Command<DeleteScheduledAuditCommandInput, DeleteScheduledAuditCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteScheduledAuditCommandInput;
    constructor(input: DeleteScheduledAuditCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteScheduledAuditCommandInput, DeleteScheduledAuditCommandOutput>;
    private serialize;
    private deserialize;
}
