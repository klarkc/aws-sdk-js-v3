import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeletePushTemplateRequest, DeletePushTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePushTemplateCommandInput extends DeletePushTemplateRequest {
}
export interface DeletePushTemplateCommandOutput extends DeletePushTemplateResponse, __MetadataBearer {
}
/**
 * <p>Deletes a message template for messages that were sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeletePushTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeletePushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeletePushTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePushTemplateCommandInput} for command's `input` shape.
 * @see {@link DeletePushTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePushTemplateCommand extends $Command<DeletePushTemplateCommandInput, DeletePushTemplateCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeletePushTemplateCommandInput;
    constructor(input: DeletePushTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePushTemplateCommandInput, DeletePushTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
