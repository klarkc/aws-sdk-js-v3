import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { ListManagedEndpointsRequest, ListManagedEndpointsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListManagedEndpointsCommandInput extends ListManagedEndpointsRequest {
}
export interface ListManagedEndpointsCommandOutput extends ListManagedEndpointsResponse, __MetadataBearer {
}
/**
 * <p>Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListManagedEndpointsCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListManagedEndpointsCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new ListManagedEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListManagedEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListManagedEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListManagedEndpointsCommand extends $Command<ListManagedEndpointsCommandInput, ListManagedEndpointsCommandOutput, EMRContainersClientResolvedConfig> {
    readonly input: ListManagedEndpointsCommandInput;
    constructor(input: ListManagedEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRContainersClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListManagedEndpointsCommandInput, ListManagedEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
