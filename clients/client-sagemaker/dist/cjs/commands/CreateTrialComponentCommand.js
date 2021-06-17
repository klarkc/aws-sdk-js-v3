"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTrialComponentCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a <i>trial component</i>, which is a stage of a machine learning
 *         <i>trial</i>. A trial is composed of one or more trial components. A trial
 *       component can be used in multiple trials.</p>
 *          <p>Trial components include pre-processing jobs, training jobs, and batch transform
 *       jobs.</p>
 *          <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial
 *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
 *       must use the logging APIs provided by the SDK.</p>
 *          <p>You can add tags to a trial component and then use the <a>Search</a> API to
 *       search for the tags.</p>
 *          <note>
 *             <p>
 *                <code>CreateTrialComponent</code> can only be invoked from within an SageMaker managed
 *         environment. This includes SageMaker training jobs, processing jobs, transform jobs, and SageMaker
 *         notebooks. A call to <code>CreateTrialComponent</code> from outside one of these
 *         environments results in an error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrialComponentCommandInput} for command's `input` shape.
 * @see {@link CreateTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateTrialComponentCommand extends smithy_client_1.Command {
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
        const commandName = "CreateTrialComponentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateTrialComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateTrialComponentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateTrialComponentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateTrialComponentCommand(output, context);
    }
}
exports.CreateTrialComponentCommand = CreateTrialComponentCommand;
//# sourceMappingURL=CreateTrialComponentCommand.js.map