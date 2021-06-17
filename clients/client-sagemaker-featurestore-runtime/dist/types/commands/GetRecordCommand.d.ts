import { SageMakerFeatureStoreRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerFeatureStoreRuntimeClient";
import { GetRecordRequest, GetRecordResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRecordCommandInput extends GetRecordRequest {
}
export interface GetRecordCommandOutput extends GetRecordResponse, __MetadataBearer {
}
/**
 * <p>Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the
 *          latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with
 *             <code>RecordIdentifierValue</code> is found, then an empty result is returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, GetRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, GetRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const command = new GetRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecordCommandInput} for command's `input` shape.
 * @see {@link GetRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRecordCommand extends $Command<GetRecordCommandInput, GetRecordCommandOutput, SageMakerFeatureStoreRuntimeClientResolvedConfig> {
    readonly input: GetRecordCommandInput;
    constructor(input: GetRecordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerFeatureStoreRuntimeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRecordCommandInput, GetRecordCommandOutput>;
    private serialize;
    private deserialize;
}
