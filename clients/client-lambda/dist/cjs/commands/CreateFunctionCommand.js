"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFunctionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The
 *       deployment package is a .zip file  archive or container image that contains your function code. The execution role grants the function permission to use AWS
 *       services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.</p>
 *
 *          <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If
 *       your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or
 *       modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in
 *       the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For
 *       more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Function
 *         States</a>.</p>
 *
 *          <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version
 *       changes when you update your function's code and configuration. A published version is a snapshot of your function
 *       code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be
 *       changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of
 *       your function from its initial configuration.</p>
 *
 *          <p>The other parameters let you configure version-specific and function-level settings. You can modify
 *       version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply
 *       to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>)
 *       and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p>
 *
 *          <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function,
 *       specify the ARN of a code-signing configuration. When a user
 *       attempts to deploy a code package with <a>UpdateFunctionCode</a>, Lambda checks that the code
 *       package has a valid signature from a trusted publisher. The code-signing configuration
 *       includes set set of signing profiles, which define the trusted publishers for this function.</p>
 *
 *          <p>If another account or an AWS service invokes your function, use <a>AddPermission</a> to grant
 *       permission by creating a resource-based IAM policy. You can grant permissions at the function level, on a version,
 *       or on an alias.</p>
 *
 *          <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events
 *       in other AWS services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a
 *       function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Functions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new CreateFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateFunctionCommand extends smithy_client_1.Command {
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
        const clientName = "LambdaClient";
        const commandName = "CreateFunctionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateFunctionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.FunctionConfiguration.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateFunctionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateFunctionCommand(output, context);
    }
}
exports.CreateFunctionCommand = CreateFunctionCommand;
//# sourceMappingURL=CreateFunctionCommand.js.map