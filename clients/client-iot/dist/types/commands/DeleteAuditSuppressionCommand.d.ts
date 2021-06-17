import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteAuditSuppressionRequest, DeleteAuditSuppressionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAuditSuppressionCommandInput extends DeleteAuditSuppressionRequest {
}
export interface DeleteAuditSuppressionCommandOutput extends DeleteAuditSuppressionResponse, __MetadataBearer {
}
/**
 * <p>
 *       Deletes a Device Defender audit suppression.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link DeleteAuditSuppressionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAuditSuppressionCommand extends $Command<DeleteAuditSuppressionCommandInput, DeleteAuditSuppressionCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteAuditSuppressionCommandInput;
    constructor(input: DeleteAuditSuppressionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAuditSuppressionCommandInput, DeleteAuditSuppressionCommandOutput>;
    private serialize;
    private deserialize;
}
