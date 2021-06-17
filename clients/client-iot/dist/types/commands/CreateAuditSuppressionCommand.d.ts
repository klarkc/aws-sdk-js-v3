import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateAuditSuppressionRequest, CreateAuditSuppressionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAuditSuppressionCommandInput extends CreateAuditSuppressionRequest {
}
export interface CreateAuditSuppressionCommandOutput extends CreateAuditSuppressionResponse, __MetadataBearer {
}
/**
 * <p>
 *       Creates a Device Defender audit suppression.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link CreateAuditSuppressionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAuditSuppressionCommand extends $Command<CreateAuditSuppressionCommandInput, CreateAuditSuppressionCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateAuditSuppressionCommandInput;
    constructor(input: CreateAuditSuppressionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAuditSuppressionCommandInput, CreateAuditSuppressionCommandOutput>;
    private serialize;
    private deserialize;
}
