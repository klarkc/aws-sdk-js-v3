import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetPushTemplateRequest, GetPushTemplateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPushTemplateCommandInput extends GetPushTemplateRequest {
}
export interface GetPushTemplateCommandOutput extends GetPushTemplateResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the content and settings of a message template for messages that are sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetPushTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetPushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetPushTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPushTemplateCommandInput} for command's `input` shape.
 * @see {@link GetPushTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPushTemplateCommand extends $Command<GetPushTemplateCommandInput, GetPushTemplateCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetPushTemplateCommandInput;
    constructor(input: GetPushTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPushTemplateCommandInput, GetPushTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
