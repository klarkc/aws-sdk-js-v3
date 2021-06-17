import { __extends } from "tslib";
import { AddPermissionRequest, AddPermissionResponse } from "../models/models_0";
import { deserializeAws_restJson1AddPermissionCommand, serializeAws_restJson1AddPermissionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var AddPermissionCommand = /** @class */ (function (_super) {
    __extends(AddPermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddPermissionCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    AddPermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "AddPermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddPermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddPermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddPermissionCommand(input, context);
    };
    AddPermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddPermissionCommand(output, context);
    };
    return AddPermissionCommand;
}($Command));
export { AddPermissionCommand };
//# sourceMappingURL=AddPermissionCommand.js.map