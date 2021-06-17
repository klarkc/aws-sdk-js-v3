import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { GetJobTemplateRequest, GetJobTemplateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJobTemplateCommandInput extends GetJobTemplateRequest {
}
export interface GetJobTemplateCommandOutput extends GetJobTemplateResponse, __MetadataBearer {
}
/**
 * Retrieve the JSON for a specific job template.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, GetJobTemplateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, GetJobTemplateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new GetJobTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobTemplateCommandInput} for command's `input` shape.
 * @see {@link GetJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJobTemplateCommand extends $Command<GetJobTemplateCommandInput, GetJobTemplateCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: GetJobTemplateCommandInput;
    constructor(input: GetJobTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobTemplateCommandInput, GetJobTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
