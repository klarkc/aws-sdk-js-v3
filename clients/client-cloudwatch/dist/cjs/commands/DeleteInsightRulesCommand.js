"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInsightRulesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Permanently deletes the specified Contributor Insights rules.</p>
 * 		       <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time
 * 			the rule was created might
 * 			not be available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DeleteInsightRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInsightRulesCommandInput} for command's `input` shape.
 * @see {@link DeleteInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteInsightRulesCommand extends smithy_client_1.Command {
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
        const clientName = "CloudWatchClient";
        const commandName = "DeleteInsightRulesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteInsightRulesInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteInsightRulesOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDeleteInsightRulesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDeleteInsightRulesCommand(output, context);
    }
}
exports.DeleteInsightRulesCommand = DeleteInsightRulesCommand;
//# sourceMappingURL=DeleteInsightRulesCommand.js.map