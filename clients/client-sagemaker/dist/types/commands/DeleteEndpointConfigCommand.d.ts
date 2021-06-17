import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteEndpointConfigInput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteEndpointConfigCommandInput extends DeleteEndpointConfigInput {
}
export interface DeleteEndpointConfigCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API
 *             deletes only the specified configuration. It does not delete endpoints created using the
 *             configuration. </p>
 *         <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is
 *             live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations
 *             are being performed on the endpoint. If you delete the <code>EndpointConfig</code> of an
 *             endpoint that is active or being created or updated you may lose visibility into the
 *             instance type the endpoint is using. The endpoint must be deleted in order to stop
 *             incurring charges.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteEndpointConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteEndpointConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteEndpointConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEndpointConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteEndpointConfigCommand extends $Command<DeleteEndpointConfigCommandInput, DeleteEndpointConfigCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteEndpointConfigCommandInput;
    constructor(input: DeleteEndpointConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEndpointConfigCommandInput, DeleteEndpointConfigCommandOutput>;
    private serialize;
    private deserialize;
}
