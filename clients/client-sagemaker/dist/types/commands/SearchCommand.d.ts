import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { SearchResponse } from "../models/models_2";
import { SearchRequest } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchCommandInput extends SearchRequest {
}
export interface SearchCommandOutput extends SearchResponse, __MetadataBearer {
}
/**
 * <p>Finds Amazon SageMaker resources that match a search query. Matching resources are returned
 *       as a list of <code>SearchRecord</code> objects in the response. You can sort the search
 *       results by any resource property in a ascending or descending order.</p>
 *          <p>You can query against the following value types: numeric, text, Boolean, and
 *       timestamp.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, SearchCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, SearchCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new SearchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchCommandInput} for command's `input` shape.
 * @see {@link SearchCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchCommand extends $Command<SearchCommandInput, SearchCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: SearchCommandInput;
    constructor(input: SearchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchCommandInput, SearchCommandOutput>;
    private serialize;
    private deserialize;
}
