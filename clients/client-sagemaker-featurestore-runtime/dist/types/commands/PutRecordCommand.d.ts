import { SageMakerFeatureStoreRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerFeatureStoreRuntimeClient";
import { PutRecordRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutRecordCommandInput extends PutRecordRequest {
}
export interface PutRecordCommandOutput extends __MetadataBearer {
}
/**
 * <p>Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code>
 *          API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the
 *          record is the latest record for the <code>recordIdentifier</code>, the record is written to
 *          both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a
 *          historic record, it is written only to the <code>OfflineStore</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, PutRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, PutRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const command = new PutRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRecordCommandInput} for command's `input` shape.
 * @see {@link PutRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRecordCommand extends $Command<PutRecordCommandInput, PutRecordCommandOutput, SageMakerFeatureStoreRuntimeClientResolvedConfig> {
    readonly input: PutRecordCommandInput;
    constructor(input: PutRecordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerFeatureStoreRuntimeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRecordCommandInput, PutRecordCommandOutput>;
    private serialize;
    private deserialize;
}
