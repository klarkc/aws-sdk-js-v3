import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetVoiceTemplateRequest, GetVoiceTemplateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetVoiceTemplateCommandInput extends GetVoiceTemplateRequest {
}
export interface GetVoiceTemplateCommandOutput extends GetVoiceTemplateResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the content and settings of a message template for messages that are sent through the voice channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetVoiceTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetVoiceTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetVoiceTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceTemplateCommandInput} for command's `input` shape.
 * @see {@link GetVoiceTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetVoiceTemplateCommand extends $Command<GetVoiceTemplateCommandInput, GetVoiceTemplateCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetVoiceTemplateCommandInput;
    constructor(input: GetVoiceTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetVoiceTemplateCommandInput, GetVoiceTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
