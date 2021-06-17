import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateEndpointInput, UpdateEndpointOutput } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateEndpointCommandInput extends UpdateEndpointInput {
}
export interface UpdateEndpointCommandOutput extends UpdateEndpointOutput, __MetadataBearer {
}
/**
 * <p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to
 *             using newly created endpoint, and then deletes resources provisioned for the endpoint
 *             using the previous <code>EndpointConfig</code> (there is no availability loss). </p>
 *         <p>When Amazon SageMaker receives the request, it sets the endpoint status to
 *                 <code>Updating</code>. After updating the endpoint, it sets the status to
 *                 <code>InService</code>. To check the status of an endpoint, use the <a>DescribeEndpoint</a> API.
 *
 *         </p>
 *         <note>
 *             <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is
 *                 live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code>
 *                 operations are being performed on the endpoint. To update an endpoint, you must
 *                 create a new <code>EndpointConfig</code>.</p>
 *             <p>If you delete the <code>EndpointConfig</code> of an endpoint that is active or
 *                 being created or updated you may lose visibility into the instance type the endpoint
 *                 is using. The endpoint must be deleted in order to stop incurring charges.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateEndpointCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateEndpointCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateEndpointCommand extends $Command<UpdateEndpointCommandInput, UpdateEndpointCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateEndpointCommandInput;
    constructor(input: UpdateEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEndpointCommandInput, UpdateEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
