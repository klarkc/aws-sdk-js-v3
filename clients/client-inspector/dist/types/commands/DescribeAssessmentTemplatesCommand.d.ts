import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeAssessmentTemplatesRequest, DescribeAssessmentTemplatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAssessmentTemplatesCommandInput extends DescribeAssessmentTemplatesRequest {
}
export interface DescribeAssessmentTemplatesCommandOutput extends DescribeAssessmentTemplatesResponse, __MetadataBearer {
}
/**
 * <p>Describes the assessment templates that are specified by the ARNs of the assessment
 *          templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentTemplatesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentTemplatesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeAssessmentTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssessmentTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentTemplatesCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAssessmentTemplatesCommand extends $Command<DescribeAssessmentTemplatesCommandInput, DescribeAssessmentTemplatesCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DescribeAssessmentTemplatesCommandInput;
    constructor(input: DescribeAssessmentTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAssessmentTemplatesCommandInput, DescribeAssessmentTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
