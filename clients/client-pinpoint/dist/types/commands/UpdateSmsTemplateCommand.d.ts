import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateSmsTemplateRequest, UpdateSmsTemplateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSmsTemplateCommandInput extends UpdateSmsTemplateRequest {
}
export interface UpdateSmsTemplateCommandOutput extends UpdateSmsTemplateResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing message template for messages that are sent through the SMS channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateSmsTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateSmsTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSmsTemplateCommand extends $Command<UpdateSmsTemplateCommandInput, UpdateSmsTemplateCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateSmsTemplateCommandInput;
    constructor(input: UpdateSmsTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSmsTemplateCommandInput, UpdateSmsTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
