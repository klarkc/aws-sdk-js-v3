import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { DeleteManagedEndpointRequest, DeleteManagedEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteManagedEndpointCommandInput extends DeleteManagedEndpointRequest {
}
export interface DeleteManagedEndpointCommandOutput extends DeleteManagedEndpointResponse, __MetadataBearer {
}
/**
 * <p>Deletes a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DeleteManagedEndpointCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DeleteManagedEndpointCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new DeleteManagedEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteManagedEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteManagedEndpointCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteManagedEndpointCommand extends $Command<DeleteManagedEndpointCommandInput, DeleteManagedEndpointCommandOutput, EMRContainersClientResolvedConfig> {
    readonly input: DeleteManagedEndpointCommandInput;
    constructor(input: DeleteManagedEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRContainersClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteManagedEndpointCommandInput, DeleteManagedEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
