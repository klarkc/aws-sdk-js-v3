import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateMitigationActionRequest, UpdateMitigationActionResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMitigationActionCommandInput extends UpdateMitigationActionRequest {
}
export interface UpdateMitigationActionCommandOutput extends UpdateMitigationActionResponse, __MetadataBearer {
}
/**
 * <p>Updates the definition for the specified mitigation action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateMitigationActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMitigationActionCommandInput} for command's `input` shape.
 * @see {@link UpdateMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMitigationActionCommand extends $Command<UpdateMitigationActionCommandInput, UpdateMitigationActionCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateMitigationActionCommandInput;
    constructor(input: UpdateMitigationActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMitigationActionCommandInput, UpdateMitigationActionCommandOutput>;
    private serialize;
    private deserialize;
}
