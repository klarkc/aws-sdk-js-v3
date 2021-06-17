"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeRecipeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DescribeRecipeCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PersonalizeClient";
        const commandName = "DescribeRecipeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeRecipeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeRecipeResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeRecipeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeRecipeCommand(output, context);
    }
}
exports.DescribeRecipeCommand = DescribeRecipeCommand;
//# sourceMappingURL=DescribeRecipeCommand.js.map