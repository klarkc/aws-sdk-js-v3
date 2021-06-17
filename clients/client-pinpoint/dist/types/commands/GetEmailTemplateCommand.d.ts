import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetEmailTemplateRequest, GetEmailTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEmailTemplateCommandInput extends GetEmailTemplateRequest {
}
export interface GetEmailTemplateCommandOutput extends GetEmailTemplateResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the content and settings of a message template for messages that are sent through the email channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetEmailTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetEmailTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetEmailTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link GetEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEmailTemplateCommand extends $Command<GetEmailTemplateCommandInput, GetEmailTemplateCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetEmailTemplateCommandInput;
    constructor(input: GetEmailTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEmailTemplateCommandInput, GetEmailTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
