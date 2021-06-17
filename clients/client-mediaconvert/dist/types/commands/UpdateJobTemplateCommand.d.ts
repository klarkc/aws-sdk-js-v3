import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { UpdateJobTemplateRequest, UpdateJobTemplateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateJobTemplateCommandInput extends UpdateJobTemplateRequest {
}
export interface UpdateJobTemplateCommandOutput extends UpdateJobTemplateResponse, __MetadataBearer {
}
/**
 * Modify one of your existing job templates.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, UpdateJobTemplateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, UpdateJobTemplateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new UpdateJobTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateJobTemplateCommand extends $Command<UpdateJobTemplateCommandInput, UpdateJobTemplateCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: UpdateJobTemplateCommandInput;
    constructor(input: UpdateJobTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateJobTemplateCommandInput, UpdateJobTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
