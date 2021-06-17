import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateVoiceTemplateRequest, CreateVoiceTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVoiceTemplateCommandInput extends CreateVoiceTemplateRequest {
}
export interface CreateVoiceTemplateCommandOutput extends CreateVoiceTemplateResponse, __MetadataBearer {
}
/**
 * <p>Creates a message template for messages that are sent through the voice channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateVoiceTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateVoiceTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateVoiceTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVoiceTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVoiceTemplateCommand extends $Command<CreateVoiceTemplateCommandInput, CreateVoiceTemplateCommandOutput, PinpointClientResolvedConfig> {
    readonly input: CreateVoiceTemplateCommandInput;
    constructor(input: CreateVoiceTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVoiceTemplateCommandInput, CreateVoiceTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
