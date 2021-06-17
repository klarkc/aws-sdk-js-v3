import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeEvaluationsInput, DescribeEvaluationsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEvaluationsCommandInput extends DescribeEvaluationsInput {
}
export interface DescribeEvaluationsCommandOutput extends DescribeEvaluationsOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeEvaluationsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeEvaluationsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DescribeEvaluationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEvaluationsCommandInput} for command's `input` shape.
 * @see {@link DescribeEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEvaluationsCommand extends $Command<DescribeEvaluationsCommandInput, DescribeEvaluationsCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DescribeEvaluationsCommandInput;
    constructor(input: DescribeEvaluationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEvaluationsCommandInput, DescribeEvaluationsCommandOutput>;
    private serialize;
    private deserialize;
}
