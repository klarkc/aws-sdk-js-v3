import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { AddAssociationRequest, AddAssociationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddAssociationCommandInput extends AddAssociationRequest {
}
export interface AddAssociationCommandOutput extends AddAssociationResponse, __MetadataBearer {
}
/**
 * <p>Creates an <i>association</i> between the source and the destination. A
 *         source can be associated with multiple destinations, and a destination can be associated
 *         with multiple sources. An association is a lineage tracking entity. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AddAssociationCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AddAssociationCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new AddAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddAssociationCommandInput} for command's `input` shape.
 * @see {@link AddAssociationCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddAssociationCommand extends $Command<AddAssociationCommandInput, AddAssociationCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: AddAssociationCommandInput;
    constructor(input: AddAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddAssociationCommandInput, AddAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
