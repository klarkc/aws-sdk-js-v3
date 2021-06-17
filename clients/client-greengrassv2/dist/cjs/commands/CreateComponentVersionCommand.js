"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComponentVersionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a component. Components are software that run on AWS IoT Greengrass core devices. After you
 *       develop and test a component on your core device, you can use this operation to upload your
 *       component to AWS IoT Greengrass. Then, you can deploy the component to other core devices.</p>
 *          <p>You can use this operation to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Create components from recipes</b>
 *                </p>
 *                <p>Create a component from a recipe, which is a file that defines the component's
 *           metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For
 *           more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">AWS IoT Greengrass component recipe
 *             reference</a> in the <i>AWS IoT Greengrass V2 Developer Guide</i>.</p>
 *                <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call
 *           this operation.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Create components from Lambda functions</b>
 *                </p>
 *                <p>Create a component from an AWS Lambda function that runs on AWS IoT Greengrass. This creates a recipe
 *           and artifacts from the Lambda function's deployment package. You can use this operation to
 *           migrate Lambda functions from AWS IoT Greengrass V1 to AWS IoT Greengrass V2.</p>
 *                <p>This function only accepts Lambda functions that use the following runtimes:</p>
 *                <ul>
 *                   <li>
 *                      <p>Python 2.7 – <code>python2.7</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Python 3.7 – <code>python3.7</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Python 3.8 – <code>python3.8</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Java 8 – <code>java8</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Node.js 10 – <code>nodejs10.x</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Node.js 12 – <code>nodejs12.x</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *                <p>To create a component from a Lambda function, specify <code>lambdaFunction</code>
 *           when you call this operation.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, CreateComponentVersionCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, CreateComponentVersionCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new CreateComponentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateComponentVersionCommandInput} for command's `input` shape.
 * @see {@link CreateComponentVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateComponentVersionCommand extends smithy_client_1.Command {
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
        const clientName = "GreengrassV2Client";
        const commandName = "CreateComponentVersionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateComponentVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateComponentVersionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateComponentVersionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateComponentVersionCommand(output, context);
    }
}
exports.CreateComponentVersionCommand = CreateComponentVersionCommand;
//# sourceMappingURL=CreateComponentVersionCommand.js.map