import { ElasticTranscoderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticTranscoderClient";
import { DeletePresetRequest, DeletePresetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePresetCommandInput extends DeletePresetRequest {
}
export interface DeletePresetCommandOutput extends DeletePresetResponse, __MetadataBearer {
}
/**
 * <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p>
 *         <note>
 *             <p>You can't delete the default presets that are included with Elastic Transcoder.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, DeletePresetCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, DeletePresetCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new DeletePresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePresetCommandInput} for command's `input` shape.
 * @see {@link DeletePresetCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePresetCommand extends $Command<DeletePresetCommandInput, DeletePresetCommandOutput, ElasticTranscoderClientResolvedConfig> {
    readonly input: DeletePresetCommandInput;
    constructor(input: DeletePresetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticTranscoderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePresetCommandInput, DeletePresetCommandOutput>;
    private serialize;
    private deserialize;
}
