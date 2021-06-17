import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateVoiceTemplateRequest, UpdateVoiceTemplateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateVoiceTemplateCommandInput extends UpdateVoiceTemplateRequest {
}
export interface UpdateVoiceTemplateCommandOutput extends UpdateVoiceTemplateResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing message template for messages that are sent through the voice channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateVoiceTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateVoiceTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateVoiceTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVoiceTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateVoiceTemplateCommand extends $Command<UpdateVoiceTemplateCommandInput, UpdateVoiceTemplateCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateVoiceTemplateCommandInput;
    constructor(input: UpdateVoiceTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVoiceTemplateCommandInput, UpdateVoiceTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
