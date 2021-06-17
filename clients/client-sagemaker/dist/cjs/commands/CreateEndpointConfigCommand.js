"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEndpointConfigCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models. In
 *             the configuration, you identify one or more models, created using the
 *                 <code>CreateModel</code> API, to deploy and the resources that you want Amazon SageMaker to
 *             provision. Then you call the <a>CreateEndpoint</a> API.</p>
 *         <note>
 *             <p> Use this API if you want to use Amazon SageMaker hosting services to deploy models into
 *                 production. </p>
 *         </note>
 *         <p>In the request, you define a <code>ProductionVariant</code>, for each model that you
 *             want to deploy. Each <code>ProductionVariant</code> parameter also describes the
 *             resources that you want Amazon SageMaker to provision. This includes the number and type of ML
 *             compute instances to deploy. </p>
 *         <p>If you are hosting multiple models, you also assign a <code>VariantWeight</code> to
 *             specify how much traffic you want to allocate to each model. For example, suppose that
 *             you want to host two models, A and B, and you assign traffic weight 2 for model A and 1
 *             for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to
 *             model B. </p>
 *         <p>For an example that calls this method when deploying a model to Amazon SageMaker hosting services,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1-deploy-model.html#ex1-deploy-model-boto">Deploy the
 *                 Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto
 *             3)).</a>
 *          </p>
 *         <note>
 *             <p>When you call <a>CreateEndpoint</a>, a load call is made to DynamoDB to
 *                 verify that your endpoint configuration exists. When you read data from a DynamoDB
 *                 table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html">
 *                   <code>Eventually Consistent Reads</code>
 *                </a>, the response might not
 *                 reflect the results of a recently completed write operation. The response might
 *                 include some stale data. If the dependent entities are not yet in DynamoDB, this
 *                 causes a validation error. If you repeat your read request after a short time, the
 *                 response should return the latest data. So retry logic is recommended to handle
 *                 these possible issues. We also recommend that customers call <a>DescribeEndpointConfig</a> before calling <a>CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateEndpointConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateEndpointConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateEndpointConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEndpointConfigCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateEndpointConfigCommand extends smithy_client_1.Command {
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
        const commandName = "CreateEndpointConfigCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateEndpointConfigInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateEndpointConfigOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateEndpointConfigCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateEndpointConfigCommand(output, context);
    }
}
exports.CreateEndpointConfigCommand = CreateEndpointConfigCommand;
//# sourceMappingURL=CreateEndpointConfigCommand.js.map