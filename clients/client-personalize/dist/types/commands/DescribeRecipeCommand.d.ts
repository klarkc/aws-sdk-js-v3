import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeRecipeRequest, DescribeRecipeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRecipeCommandInput extends DescribeRecipeRequest {
}
export interface DescribeRecipeCommandOutput extends DescribeRecipeResponse, __MetadataBearer {
}
/**
 * <p>Describes a recipe.</p>
 *          <p>A recipe contains three items:</p>
 *          <ul>
 *             <li>
 *                <p>An algorithm that trains a model.</p>
 *             </li>
 *             <li>
 *                <p>Hyperparameters that govern the training.</p>
 *             </li>
 *             <li>
 *                <p>Feature transformation information for modifying the input data before training.</p>
 *             </li>
 *          </ul>
 *          <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a
 *       solution with the <a>CreateSolution</a> API.
 *       <code>CreateSolution</code> trains a model by using the algorithm
 *       in the specified recipe and a training dataset. The solution, when deployed as a campaign,
 *       can provide recommendations using the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeRecipeCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeRecipeCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecipeCommandInput} for command's `input` shape.
 * @see {@link DescribeRecipeCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRecipeCommand extends $Command<DescribeRecipeCommandInput, DescribeRecipeCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeRecipeCommandInput;
    constructor(input: DescribeRecipeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRecipeCommandInput, DescribeRecipeCommandOutput>;
    private serialize;
    private deserialize;
}
