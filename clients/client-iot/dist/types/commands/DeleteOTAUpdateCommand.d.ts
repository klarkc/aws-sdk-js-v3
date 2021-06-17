import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteOTAUpdateRequest, DeleteOTAUpdateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteOTAUpdateCommandInput extends DeleteOTAUpdateRequest {
}
export interface DeleteOTAUpdateCommandOutput extends DeleteOTAUpdateResponse, __MetadataBearer {
}
/**
 * <p>Delete an OTA update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteOTAUpdateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteOTAUpdateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteOTAUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOTAUpdateCommandInput} for command's `input` shape.
 * @see {@link DeleteOTAUpdateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteOTAUpdateCommand extends $Command<DeleteOTAUpdateCommandInput, DeleteOTAUpdateCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteOTAUpdateCommandInput;
    constructor(input: DeleteOTAUpdateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOTAUpdateCommandInput, DeleteOTAUpdateCommandOutput>;
    private serialize;
    private deserialize;
}
