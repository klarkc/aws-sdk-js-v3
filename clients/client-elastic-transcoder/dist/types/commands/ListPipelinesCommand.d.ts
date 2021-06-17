import { ElasticTranscoderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticTranscoderClient";
import { ListPipelinesRequest, ListPipelinesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPipelinesCommandInput extends ListPipelinesRequest {
}
export interface ListPipelinesCommandOutput extends ListPipelinesResponse, __MetadataBearer {
}
/**
 * <p>The ListPipelines operation gets a list of the pipelines associated with the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ListPipelinesCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ListPipelinesCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPipelinesCommand extends $Command<ListPipelinesCommandInput, ListPipelinesCommandOutput, ElasticTranscoderClientResolvedConfig> {
    readonly input: ListPipelinesCommandInput;
    constructor(input: ListPipelinesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticTranscoderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPipelinesCommandInput, ListPipelinesCommandOutput>;
    private serialize;
    private deserialize;
}
