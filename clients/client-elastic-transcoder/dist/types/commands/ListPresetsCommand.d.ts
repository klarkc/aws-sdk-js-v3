import { ElasticTranscoderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticTranscoderClient";
import { ListPresetsRequest, ListPresetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPresetsCommandInput extends ListPresetsRequest {
}
export interface ListPresetsCommandOutput extends ListPresetsResponse, __MetadataBearer {
}
/**
 * <p>The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that
 *             you've added in an AWS region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ListPresetsCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ListPresetsCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ListPresetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPresetsCommandInput} for command's `input` shape.
 * @see {@link ListPresetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPresetsCommand extends $Command<ListPresetsCommandInput, ListPresetsCommandOutput, ElasticTranscoderClientResolvedConfig> {
    readonly input: ListPresetsCommandInput;
    constructor(input: ListPresetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticTranscoderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPresetsCommandInput, ListPresetsCommandOutput>;
    private serialize;
    private deserialize;
}
