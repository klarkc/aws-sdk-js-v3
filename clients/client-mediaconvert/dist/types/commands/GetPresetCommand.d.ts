import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { GetPresetRequest, GetPresetResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPresetCommandInput extends GetPresetRequest {
}
export interface GetPresetCommandOutput extends GetPresetResponse, __MetadataBearer {
}
/**
 * Retrieve the JSON for a specific preset.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, GetPresetCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, GetPresetCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new GetPresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPresetCommandInput} for command's `input` shape.
 * @see {@link GetPresetCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPresetCommand extends $Command<GetPresetCommandInput, GetPresetCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: GetPresetCommandInput;
    constructor(input: GetPresetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPresetCommandInput, GetPresetCommandOutput>;
    private serialize;
    private deserialize;
}
