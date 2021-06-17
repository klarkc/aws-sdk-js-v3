import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateSmsTemplateRequest, CreateSmsTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSmsTemplateCommandInput extends CreateSmsTemplateRequest {
}
export interface CreateSmsTemplateCommandOutput extends CreateSmsTemplateResponse, __MetadataBearer {
}
/**
 * <p>Creates a message template for messages that are sent through the SMS channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateSmsTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateSmsTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSmsTemplateCommand extends $Command<CreateSmsTemplateCommandInput, CreateSmsTemplateCommandOutput, PinpointClientResolvedConfig> {
    readonly input: CreateSmsTemplateCommandInput;
    constructor(input: CreateSmsTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSmsTemplateCommandInput, CreateSmsTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
