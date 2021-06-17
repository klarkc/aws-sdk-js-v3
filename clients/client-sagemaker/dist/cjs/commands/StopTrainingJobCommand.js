"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopTrainingJobCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the
 *                 <code>SIGTERM</code> signal, which delays job termination for 120 seconds.
 *             Algorithms might use this 120-second window to save the model artifacts, so the results
 *             of the training is not lost. </p>
 *         <p>When it receives a <code>StopTrainingJob</code> request, Amazon SageMaker changes the status of
 *             the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the status to
 *                 <code>Stopped</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopTrainingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTrainingJobCommandInput} for command's `input` shape.
 * @see {@link StopTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StopTrainingJobCommand extends smithy_client_1.Command {
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
        const clientName = "SageMakerClient";
        const commandName = "StopTrainingJobCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.StopTrainingJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1StopTrainingJobCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1StopTrainingJobCommand(output, context);
    }
}
exports.StopTrainingJobCommand = StopTrainingJobCommand;
//# sourceMappingURL=StopTrainingJobCommand.js.map