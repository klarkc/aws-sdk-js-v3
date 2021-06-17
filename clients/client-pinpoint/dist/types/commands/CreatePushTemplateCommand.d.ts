import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreatePushTemplateRequest, CreatePushTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePushTemplateCommandInput extends CreatePushTemplateRequest {
}
export interface CreatePushTemplateCommandOutput extends CreatePushTemplateResponse, __MetadataBearer {
}
/**
 * <p>Creates a message template for messages that are sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreatePushTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreatePushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreatePushTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePushTemplateCommandInput} for command's `input` shape.
 * @see {@link CreatePushTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePushTemplateCommand extends $Command<CreatePushTemplateCommandInput, CreatePushTemplateCommandOutput, PinpointClientResolvedConfig> {
    readonly input: CreatePushTemplateCommandInput;
    constructor(input: CreatePushTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePushTemplateCommandInput, CreatePushTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
