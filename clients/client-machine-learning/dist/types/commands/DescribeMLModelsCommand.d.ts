import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeMLModelsInput, DescribeMLModelsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMLModelsCommandInput extends DescribeMLModelsInput {
}
export interface DescribeMLModelsCommandOutput extends DescribeMLModelsOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of <code>MLModel</code> that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeMLModelsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeMLModelsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DescribeMLModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMLModelsCommandInput} for command's `input` shape.
 * @see {@link DescribeMLModelsCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMLModelsCommand extends $Command<DescribeMLModelsCommandInput, DescribeMLModelsCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DescribeMLModelsCommandInput;
    constructor(input: DescribeMLModelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMLModelsCommandInput, DescribeMLModelsCommandOutput>;
    private serialize;
    private deserialize;
}
