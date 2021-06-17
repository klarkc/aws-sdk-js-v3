import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateFeatureGroupRequest, CreateFeatureGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFeatureGroupCommandInput extends CreateFeatureGroupRequest {
}
export interface CreateFeatureGroupCommandOutput extends CreateFeatureGroupResponse, __MetadataBearer {
}
/**
 * <p>Create a new <code>FeatureGroup</code>. A <code>FeatureGroup</code> is a group of
 *             <code>Features</code> defined in the <code>FeatureStore</code> to describe a
 *             <code>Record</code>. </p>
 *          <p>The <code>FeatureGroup</code> defines the schema and features contained in the
 *          FeatureGroup. A <code>FeatureGroup</code> definition is composed of a list of
 *             <code>Features</code>, a <code>RecordIdentifierFeatureName</code>, an
 *             <code>EventTimeFeatureName</code> and configurations for its <code>OnlineStore</code>
 *             and <code>OfflineStore</code>. Check <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS service quotas</a> to see
 *          the <code>FeatureGroup</code>s quota for your AWS account.</p>
 *          <important>
 *             <p>You must include at least one of <code>OnlineStoreConfig</code> and
 *                <code>OfflineStoreConfig</code> to create a <code>FeatureGroup</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateFeatureGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link CreateFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFeatureGroupCommand extends $Command<CreateFeatureGroupCommandInput, CreateFeatureGroupCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateFeatureGroupCommandInput;
    constructor(input: CreateFeatureGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFeatureGroupCommandInput, CreateFeatureGroupCommandOutput>;
    private serialize;
    private deserialize;
}
