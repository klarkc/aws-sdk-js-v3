import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { BuildSuggestersRequest, BuildSuggestersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BuildSuggestersCommandInput extends BuildSuggestersRequest {
}
export interface BuildSuggestersCommandOutput extends BuildSuggestersResponse, __MetadataBearer {
}
/**
 * <p>Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, BuildSuggestersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, BuildSuggestersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new BuildSuggestersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BuildSuggestersCommandInput} for command's `input` shape.
 * @see {@link BuildSuggestersCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BuildSuggestersCommand extends $Command<BuildSuggestersCommandInput, BuildSuggestersCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: BuildSuggestersCommandInput;
    constructor(input: BuildSuggestersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BuildSuggestersCommandInput, BuildSuggestersCommandOutput>;
    private serialize;
    private deserialize;
}
