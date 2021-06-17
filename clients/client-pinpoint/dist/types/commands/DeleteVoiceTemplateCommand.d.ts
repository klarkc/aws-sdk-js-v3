import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteVoiceTemplateRequest, DeleteVoiceTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVoiceTemplateCommandInput extends DeleteVoiceTemplateRequest {
}
export interface DeleteVoiceTemplateCommandOutput extends DeleteVoiceTemplateResponse, __MetadataBearer {
}
/**
 * <p>Deletes a message template for messages that were sent through the voice channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteVoiceTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteVoiceTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteVoiceTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVoiceTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVoiceTemplateCommand extends $Command<DeleteVoiceTemplateCommandInput, DeleteVoiceTemplateCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteVoiceTemplateCommandInput;
    constructor(input: DeleteVoiceTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVoiceTemplateCommandInput, DeleteVoiceTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
