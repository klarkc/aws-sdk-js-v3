import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeAssessmentTargetsRequest, DescribeAssessmentTargetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAssessmentTargetsCommandInput extends DescribeAssessmentTargetsRequest {
}
export interface DescribeAssessmentTargetsCommandOutput extends DescribeAssessmentTargetsResponse, __MetadataBearer {
}
/**
 * <p>Describes the assessment targets that are specified by the ARNs of the assessment
 *          targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentTargetsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentTargetsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeAssessmentTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssessmentTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentTargetsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAssessmentTargetsCommand extends $Command<DescribeAssessmentTargetsCommandInput, DescribeAssessmentTargetsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DescribeAssessmentTargetsCommandInput;
    constructor(input: DescribeAssessmentTargetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAssessmentTargetsCommandInput, DescribeAssessmentTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
