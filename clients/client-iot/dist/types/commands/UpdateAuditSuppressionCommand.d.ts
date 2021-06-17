import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateAuditSuppressionRequest, UpdateAuditSuppressionResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAuditSuppressionCommandInput extends UpdateAuditSuppressionRequest {
}
export interface UpdateAuditSuppressionCommandOutput extends UpdateAuditSuppressionResponse, __MetadataBearer {
}
/**
 * <p>
 *       Updates a Device Defender audit suppression.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link UpdateAuditSuppressionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAuditSuppressionCommand extends $Command<UpdateAuditSuppressionCommandInput, UpdateAuditSuppressionCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateAuditSuppressionCommandInput;
    constructor(input: UpdateAuditSuppressionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAuditSuppressionCommandInput, UpdateAuditSuppressionCommandOutput>;
    private serialize;
    private deserialize;
}
