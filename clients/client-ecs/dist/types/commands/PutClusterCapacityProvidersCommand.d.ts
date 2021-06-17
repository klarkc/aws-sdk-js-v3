import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { PutClusterCapacityProvidersRequest, PutClusterCapacityProvidersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutClusterCapacityProvidersCommandInput extends PutClusterCapacityProvidersRequest {
}
export interface PutClusterCapacityProvidersCommandOutput extends PutClusterCapacityProvidersResponse, __MetadataBearer {
}
/**
 * <p>Modifies the available capacity providers and the default capacity provider strategy
 * 			for a cluster.</p>
 * 		       <p>You must specify both the available capacity providers and a default capacity provider
 * 			strategy for the cluster. If the specified cluster has existing capacity providers
 * 			associated with it, you must specify all existing capacity providers in addition to any
 * 			new ones you want to add. Any existing capacity providers associated with a cluster that
 * 			are omitted from a <a>PutClusterCapacityProviders</a> API call will be
 * 			disassociated with the cluster. You can only disassociate an existing capacity provider
 * 			from a cluster if it's not being used by any existing tasks.</p>
 * 		       <p>When creating a service or running a task on a cluster, if no capacity provider or
 * 			launch type is specified, then the cluster's default capacity provider strategy is used.
 * 			It is recommended to define a default capacity provider strategy for your cluster,
 * 			however you may specify an empty array (<code>[]</code>) to bypass defining a default
 * 			strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutClusterCapacityProvidersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutClusterCapacityProvidersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new PutClusterCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutClusterCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link PutClusterCapacityProvidersCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutClusterCapacityProvidersCommand extends $Command<PutClusterCapacityProvidersCommandInput, PutClusterCapacityProvidersCommandOutput, ECSClientResolvedConfig> {
    readonly input: PutClusterCapacityProvidersCommandInput;
    constructor(input: PutClusterCapacityProvidersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutClusterCapacityProvidersCommandInput, PutClusterCapacityProvidersCommandOutput>;
    private serialize;
    private deserialize;
}
