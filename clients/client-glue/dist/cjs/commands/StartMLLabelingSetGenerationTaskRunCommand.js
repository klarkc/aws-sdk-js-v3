"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartMLLabelingSetGenerationTaskRunCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts the active learning workflow for your machine learning transform to improve the
 *       transform's quality by generating label sets and adding labels.</p>
 *
 * 	        <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, AWS Glue will have
 *       generated a "labeling set" or a set of questions for humans to answer.</p>
 *
 *          <p>In the case of the <code>FindMatches</code> transform, these questions are of the form,
 *       “What is the correct way to group these rows together into groups composed entirely of
 *       matching records?” </p>
 *
 *          <p>After the labeling process is finished, you can upload your labels with a call to
 *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
 *       all future runs of the machine learning transform will use the new and improved labels and
 *       perform a higher-quality transformation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartMLLabelingSetGenerationTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartMLLabelingSetGenerationTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartMLLabelingSetGenerationTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMLLabelingSetGenerationTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartMLLabelingSetGenerationTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartMLLabelingSetGenerationTaskRunCommand extends smithy_client_1.Command {
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
        const commandName = "StartMLLabelingSetGenerationTaskRunCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.StartMLLabelingSetGenerationTaskRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.StartMLLabelingSetGenerationTaskRunResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand(output, context);
    }
}
exports.StartMLLabelingSetGenerationTaskRunCommand = StartMLLabelingSetGenerationTaskRunCommand;
//# sourceMappingURL=StartMLLabelingSetGenerationTaskRunCommand.js.map