"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecommendationSummariesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the optimization findings for an account.</p>
 *         <p>It returns the number of:</p>
 *         <ul>
 *             <li>
 *                 <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>,
 *                         <code>Overprovisioned</code>, or <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Lambda functions in an account that are <code>NotOptimized</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetRecommendationSummariesCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetRecommendationSummariesCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetRecommendationSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecommendationSummariesCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationSummariesCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetRecommendationSummariesCommand extends smithy_client_1.Command {
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
        const clientName = "ComputeOptimizerClient";
        const commandName = "GetRecommendationSummariesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetRecommendationSummariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetRecommendationSummariesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0GetRecommendationSummariesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0GetRecommendationSummariesCommand(output, context);
    }
}
exports.GetRecommendationSummariesCommand = GetRecommendationSummariesCommand;
//# sourceMappingURL=GetRecommendationSummariesCommand.js.map