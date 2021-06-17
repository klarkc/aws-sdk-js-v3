import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { UpdatePresetRequest, UpdatePresetResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePresetCommandInput extends UpdatePresetRequest {
}
export interface UpdatePresetCommandOutput extends UpdatePresetResponse, __MetadataBearer {
}
/**
 * Modify one of your existing presets.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, UpdatePresetCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, UpdatePresetCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new UpdatePresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePresetCommandInput} for command's `input` shape.
 * @see {@link UpdatePresetCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePresetCommand extends $Command<UpdatePresetCommandInput, UpdatePresetCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: UpdatePresetCommandInput;
    constructor(input: UpdatePresetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePresetCommandInput, UpdatePresetCommandOutput>;
    private serialize;
    private deserialize;
}
