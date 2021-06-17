import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateEndpointWeightsAndCapacitiesInput, UpdateEndpointWeightsAndCapacitiesOutput } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateEndpointWeightsAndCapacitiesCommandInput extends UpdateEndpointWeightsAndCapacitiesInput {
}
export interface UpdateEndpointWeightsAndCapacitiesCommandOutput extends UpdateEndpointWeightsAndCapacitiesOutput, __MetadataBearer {
}
/**
 * <p>Updates variant weight of one or more variants associated with an existing
 *             endpoint, or capacity of one variant associated with an existing endpoint. When it
 *             receives the request, Amazon SageMaker sets the endpoint status to <code>Updating</code>. After
 *             updating the endpoint, it sets the status to <code>InService</code>. To check the status
 *             of an endpoint, use the <a>DescribeEndpoint</a> API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateEndpointWeightsAndCapacitiesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateEndpointWeightsAndCapacitiesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateEndpointWeightsAndCapacitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEndpointWeightsAndCapacitiesCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointWeightsAndCapacitiesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateEndpointWeightsAndCapacitiesCommand extends $Command<UpdateEndpointWeightsAndCapacitiesCommandInput, UpdateEndpointWeightsAndCapacitiesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateEndpointWeightsAndCapacitiesCommandInput;
    constructor(input: UpdateEndpointWeightsAndCapacitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEndpointWeightsAndCapacitiesCommandInput, UpdateEndpointWeightsAndCapacitiesCommandOutput>;
    private serialize;
    private deserialize;
}
