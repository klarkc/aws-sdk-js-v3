"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTrialCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an SageMaker <i>trial</i>. A trial is a set of steps called
 *         <i>trial components</i> that produce a machine learning model. A trial is part
 *       of a single SageMaker <i>experiment</i>.</p>
 *          <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial
 *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
 *       must use the logging APIs provided by the SDK.</p>
 *          <p>You can add tags to a trial and then use the <a>Search</a> API to search for
 *       the tags.</p>
 *          <p>To get a list of all your trials, call the <a>ListTrials</a> API. To view a
 *       trial's properties, call the <a>DescribeTrial</a> API. To create a trial component,
 *       call the <a>CreateTrialComponent</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTrialCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateTrialCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateTrialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrialCommandInput} for command's `input` shape.
 * @see {@link CreateTrialCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateTrialCommand extends smithy_client_1.Command {
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
        const commandName = "CreateTrialCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateTrialRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateTrialResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateTrialCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateTrialCommand(output, context);
    }
}
exports.CreateTrialCommand = CreateTrialCommand;
//# sourceMappingURL=CreateTrialCommand.js.map