import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { DeletePresetRequest, DeletePresetResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePresetCommandInput extends DeletePresetRequest {
}
export interface DeletePresetCommandOutput extends DeletePresetResponse, __MetadataBearer {
}
/**
 * Permanently delete a preset you have created.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DeletePresetCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DeletePresetCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new DeletePresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePresetCommandInput} for command's `input` shape.
 * @see {@link DeletePresetCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePresetCommand extends $Command<DeletePresetCommandInput, DeletePresetCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: DeletePresetCommandInput;
    constructor(input: DeletePresetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePresetCommandInput, DeletePresetCommandOutput>;
    private serialize;
    private deserialize;
}
