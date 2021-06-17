import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteFeatureGroupRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFeatureGroupCommandInput extends DeleteFeatureGroupRequest {
}
export interface DeleteFeatureGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Delete the <code>FeatureGroup</code> and any data that was written to the
 *             <code>OnlineStore</code> of the <code>FeatureGroup</code>. Data cannot be accessed from
 *          the <code>OnlineStore</code> immediately after <code>DeleteFeatureGroup</code> is called. </p>
 *          <p>Data written into the <code>OfflineStore</code> will not be deleted. The AWS Glue
 *          database and tables that are automatically created for your <code>OfflineStore</code> are
 *          not deleted. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteFeatureGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFeatureGroupCommand extends $Command<DeleteFeatureGroupCommandInput, DeleteFeatureGroupCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteFeatureGroupCommandInput;
    constructor(input: DeleteFeatureGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFeatureGroupCommandInput, DeleteFeatureGroupCommandOutput>;
    private serialize;
    private deserialize;
}
