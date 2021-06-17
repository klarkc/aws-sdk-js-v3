import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { CreateManagedEndpointRequest, CreateManagedEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateManagedEndpointCommandInput extends CreateManagedEndpointRequest {
}
export interface CreateManagedEndpointCommandOutput extends CreateManagedEndpointResponse, __MetadataBearer {
}
/**
 * <p>Creates a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, CreateManagedEndpointCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, CreateManagedEndpointCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new CreateManagedEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateManagedEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateManagedEndpointCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateManagedEndpointCommand extends $Command<CreateManagedEndpointCommandInput, CreateManagedEndpointCommandOutput, EMRContainersClientResolvedConfig> {
    readonly input: CreateManagedEndpointCommandInput;
    constructor(input: CreateManagedEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRContainersClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateManagedEndpointCommandInput, CreateManagedEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
