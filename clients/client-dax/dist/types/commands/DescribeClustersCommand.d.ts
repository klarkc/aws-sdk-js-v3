import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DescribeClustersRequest, DescribeClustersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClustersCommandInput extends DescribeClustersRequest {
}
export interface DescribeClustersCommandOutput extends DescribeClustersResponse, __MetadataBearer {
}
/**
 * <p>Returns information about all provisioned DAX clusters if no cluster identifier
 *             is specified, or about a specific DAX cluster if a cluster identifier is
 *             supplied.</p>
 *         <p>If the cluster is in the CREATING state, only cluster level information will be
 *             displayed until all of the nodes are successfully provisioned.</p>
 *         <p>If the cluster is in the DELETING state, only cluster level information will be
 *             displayed.</p>
 *         <p>If nodes are currently being added to the DAX cluster, node endpoint information
 *             and creation time for the additional nodes will not be displayed until they are
 *             completely provisioned. When the DAX cluster state is <i>available</i>,
 *             the cluster is ready for use.</p>
 *         <p>If nodes are currently being removed from the DAX cluster, no endpoint
 *             information for the removed nodes is displayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeClustersCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeClustersCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeClustersCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClustersCommand extends $Command<DescribeClustersCommandInput, DescribeClustersCommandOutput, DAXClientResolvedConfig> {
    readonly input: DescribeClustersCommandInput;
    constructor(input: DescribeClustersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClustersCommandInput, DescribeClustersCommandOutput>;
    private serialize;
    private deserialize;
}
