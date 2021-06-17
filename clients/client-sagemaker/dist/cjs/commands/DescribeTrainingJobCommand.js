"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeTrainingJobCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns information about a training job. </p>
 *         <p>Some of the attributes below only appear if the training job successfully starts.
 *             If the training job fails, <code>TrainingJobStatus</code> is <code>Failed</code> and,
 *             depending on the <code>FailureReason</code>, attributes like
 *                 <code>TrainingStartTime</code>, <code>TrainingTimeInSeconds</code>,
 *                 <code>TrainingEndTime</code>, and <code>BillableTimeInSeconds</code> may not be
 *             present in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeTrainingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrainingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeTrainingJobCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeTrainingJobCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.DescribeTrainingJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.DescribeTrainingJobResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeTrainingJobCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeTrainingJobCommand(output, context);
    }
}
exports.DescribeTrainingJobCommand = DescribeTrainingJobCommand;
//# sourceMappingURL=DescribeTrainingJobCommand.js.map