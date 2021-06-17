import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { DeleteJobTemplateRequest, DeleteJobTemplateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteJobTemplateCommandInput extends DeleteJobTemplateRequest {
}
export interface DeleteJobTemplateCommandOutput extends DeleteJobTemplateResponse, __MetadataBearer {
}
/**
 * Permanently delete a job template you have created.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DeleteJobTemplateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DeleteJobTemplateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new DeleteJobTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteJobTemplateCommand extends $Command<DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: DeleteJobTemplateCommandInput;
    constructor(input: DeleteJobTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
