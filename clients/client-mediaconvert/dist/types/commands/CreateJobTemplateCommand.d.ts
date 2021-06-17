import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { CreateJobTemplateRequest, CreateJobTemplateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateJobTemplateCommandInput extends CreateJobTemplateRequest {
}
export interface CreateJobTemplateCommandOutput extends CreateJobTemplateResponse, __MetadataBearer {
}
/**
 * Create a new job template. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, CreateJobTemplateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, CreateJobTemplateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new CreateJobTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateJobTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateJobTemplateCommand extends $Command<CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: CreateJobTemplateCommandInput;
    constructor(input: CreateJobTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
