import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateMitigationActionRequest, CreateMitigationActionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateMitigationActionCommandInput extends CreateMitigationActionRequest {
}
export interface CreateMitigationActionCommandOutput extends CreateMitigationActionResponse, __MetadataBearer {
}
/**
 * <p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateMitigationActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMitigationActionCommandInput} for command's `input` shape.
 * @see {@link CreateMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateMitigationActionCommand extends $Command<CreateMitigationActionCommandInput, CreateMitigationActionCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateMitigationActionCommandInput;
    constructor(input: CreateMitigationActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMitigationActionCommandInput, CreateMitigationActionCommandOutput>;
    private serialize;
    private deserialize;
}
