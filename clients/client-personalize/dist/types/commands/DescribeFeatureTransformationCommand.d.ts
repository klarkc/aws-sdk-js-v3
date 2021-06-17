import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeFeatureTransformationRequest, DescribeFeatureTransformationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFeatureTransformationCommandInput extends DescribeFeatureTransformationRequest {
}
export interface DescribeFeatureTransformationCommandOutput extends DescribeFeatureTransformationResponse, __MetadataBearer {
}
/**
 * <p>Describes the given feature transformation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeFeatureTransformationCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeFeatureTransformationCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeFeatureTransformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFeatureTransformationCommandInput} for command's `input` shape.
 * @see {@link DescribeFeatureTransformationCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFeatureTransformationCommand extends $Command<DescribeFeatureTransformationCommandInput, DescribeFeatureTransformationCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeFeatureTransformationCommandInput;
    constructor(input: DescribeFeatureTransformationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFeatureTransformationCommandInput, DescribeFeatureTransformationCommandOutput>;
    private serialize;
    private deserialize;
}
