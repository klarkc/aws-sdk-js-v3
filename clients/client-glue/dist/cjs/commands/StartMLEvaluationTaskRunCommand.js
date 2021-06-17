"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartMLEvaluationTaskRunCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts a task to estimate the quality of the transform. </p>
 *
 * 	        <p>When you provide label sets as examples of truth, AWS Glue machine learning uses some of
 *       those examples to learn from them. The rest of the labels are used as a test to estimate
 *       quality.</p>
 *
 * 	        <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more
 *       information about the stats of the <code>EvaluationTaskRun</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartMLEvaluationTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartMLEvaluationTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartMLEvaluationTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMLEvaluationTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartMLEvaluationTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartMLEvaluationTaskRunCommand extends smithy_client_1.Command {
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
        const clientName = "GlueClient";
        const commandName = "StartMLEvaluationTaskRunCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.StartMLEvaluationTaskRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.StartMLEvaluationTaskRunResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1StartMLEvaluationTaskRunCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1StartMLEvaluationTaskRunCommand(output, context);
    }
}
exports.StartMLEvaluationTaskRunCommand = StartMLEvaluationTaskRunCommand;
//# sourceMappingURL=StartMLEvaluationTaskRunCommand.js.map