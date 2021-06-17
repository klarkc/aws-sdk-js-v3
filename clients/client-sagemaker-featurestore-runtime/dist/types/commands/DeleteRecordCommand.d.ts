import { SageMakerFeatureStoreRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerFeatureStoreRuntimeClient";
import { DeleteRecordRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRecordCommandInput extends DeleteRecordRequest {
}
export interface DeleteRecordCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a <code>Record</code> from a <code>FeatureGroup</code>. A new record will show
 *          up in the <code>OfflineStore</code> when the <code>DeleteRecord</code> API is called. This
 *          record will have a value of <code>True</code> in the <code>is_deleted</code> column.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, DeleteRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, DeleteRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const command = new DeleteRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRecordCommandInput} for command's `input` shape.
 * @see {@link DeleteRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRecordCommand extends $Command<DeleteRecordCommandInput, DeleteRecordCommandOutput, SageMakerFeatureStoreRuntimeClientResolvedConfig> {
    readonly input: DeleteRecordCommandInput;
    constructor(input: DeleteRecordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerFeatureStoreRuntimeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRecordCommandInput, DeleteRecordCommandOutput>;
    private serialize;
    private deserialize;
}
