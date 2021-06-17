import { ElasticTranscoderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticTranscoderClient";
import { ListJobsByStatusRequest, ListJobsByStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListJobsByStatusCommandInput extends ListJobsByStatusRequest {
}
export interface ListJobsByStatusCommandOutput extends ListJobsByStatusResponse, __MetadataBearer {
}
/**
 * <p>The ListJobsByStatus operation gets a list of jobs that have a specified status. The response
 *             body contains one element for each job that satisfies the search criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ListJobsByStatusCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ListJobsByStatusCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ListJobsByStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobsByStatusCommandInput} for command's `input` shape.
 * @see {@link ListJobsByStatusCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListJobsByStatusCommand extends $Command<ListJobsByStatusCommandInput, ListJobsByStatusCommandOutput, ElasticTranscoderClientResolvedConfig> {
    readonly input: ListJobsByStatusCommandInput;
    constructor(input: ListJobsByStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticTranscoderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListJobsByStatusCommandInput, ListJobsByStatusCommandOutput>;
    private serialize;
    private deserialize;
}
