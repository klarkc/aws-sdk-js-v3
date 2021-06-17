import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeFeatureGroupRequest, DescribeFeatureGroupResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFeatureGroupCommandInput extends DescribeFeatureGroupRequest {
}
export interface DescribeFeatureGroupCommandOutput extends DescribeFeatureGroupResponse, __MetadataBearer {
}
/**
 * <p>Use this operation to describe a <code>FeatureGroup</code>. The response includes
 *          information on the creation time, <code>FeatureGroup</code> name, the unique identifier for
 *          each <code>FeatureGroup</code>, and more.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeFeatureGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFeatureGroupCommand extends $Command<DescribeFeatureGroupCommandInput, DescribeFeatureGroupCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeFeatureGroupCommandInput;
    constructor(input: DescribeFeatureGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFeatureGroupCommandInput, DescribeFeatureGroupCommandOutput>;
    private serialize;
    private deserialize;
}
