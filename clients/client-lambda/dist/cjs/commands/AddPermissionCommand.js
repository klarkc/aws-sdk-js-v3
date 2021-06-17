"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPermissionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Grants an AWS service or another account permission to use a function. You can apply the policy at the
 *       function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier,
 *       the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.</p>
 *
 *          <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. For AWS
 *       services, the principal is a domain-style identifier defined by the service, like <code>s3.amazonaws.com</code> or
 *         <code>sns.amazonaws.com</code>. For AWS services, you can also specify the ARN of the associated resource as the
 *         <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other
 *       accounts could potentially configure resources in their account to invoke your Lambda function.</p>
 *
 *          <p>This action adds a statement to a resource-based permissions policy for the function. For more information
 *       about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Lambda Function Policies</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, AddPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, AddPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new AddPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddPermissionCommandInput} for command's `input` shape.
 * @see {@link AddPermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AddPermissionCommand extends smithy_client_1.Command {
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
        const commandName = "AddPermissionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AddPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AddPermissionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1AddPermissionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1AddPermissionCommand(output, context);
    }
}
exports.AddPermissionCommand = AddPermissionCommand;
//# sourceMappingURL=AddPermissionCommand.js.map