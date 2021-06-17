import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListClustersInput, ListClustersOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListClustersCommandInput extends ListClustersInput {
}
export interface ListClustersCommandOutput extends ListClustersOutput, __MetadataBearer {
}
/**
 * <p>Provides the status of all clusters visible to this AWS account. Allows you to filter
 *          the list of clusters based on certain criteria; for example, filtering by cluster creation
 *          date and time or by status. This call returns a maximum of 50 clusters per call, but
 *          returns a marker to track the paging of the cluster list across multiple ListClusters
 *          calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListClustersCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListClustersCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListClustersCommand extends $Command<ListClustersCommandInput, ListClustersCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListClustersCommandInput;
    constructor(input: ListClustersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListClustersCommandInput, ListClustersCommandOutput>;
    private serialize;
    private deserialize;
}
