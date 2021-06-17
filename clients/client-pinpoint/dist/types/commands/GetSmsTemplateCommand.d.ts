import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetSmsTemplateRequest, GetSmsTemplateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSmsTemplateCommandInput extends GetSmsTemplateRequest {
}
export interface GetSmsTemplateCommandOutput extends GetSmsTemplateResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the content and settings of a message template for messages that are sent through the SMS channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSmsTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link GetSmsTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSmsTemplateCommand extends $Command<GetSmsTemplateCommandInput, GetSmsTemplateCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetSmsTemplateCommandInput;
    constructor(input: GetSmsTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSmsTemplateCommandInput, GetSmsTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
