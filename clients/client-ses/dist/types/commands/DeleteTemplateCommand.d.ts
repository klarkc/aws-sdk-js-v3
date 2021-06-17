import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteTemplateRequest, DeleteTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTemplateCommandInput extends DeleteTemplateRequest {
}
export interface DeleteTemplateCommandOutput extends DeleteTemplateResponse, __MetadataBearer {
}
/**
 * <p>Deletes an email template.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new DeleteTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTemplateCommand extends $Command<DeleteTemplateCommandInput, DeleteTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteTemplateCommandInput;
    constructor(input: DeleteTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTemplateCommandInput, DeleteTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
