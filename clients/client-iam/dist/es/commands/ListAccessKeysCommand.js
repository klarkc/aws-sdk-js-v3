import { __extends } from "tslib";
import { ListAccessKeysRequest, ListAccessKeysResponse } from "../models/models_0";
import { deserializeAws_queryListAccessKeysCommand, serializeAws_queryListAccessKeysCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the access key IDs associated with the specified IAM user.
 *             If there is none, the operation returns an empty list.</p>
 *         <p>Although each user is limited to a small number of keys, you can still paginate the
 *             results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 *         <p>If the <code>UserName</code> field is not specified, the user name is determined
 *             implicitly based on the AWS access key ID used to sign the request. This operation
 *             works for access keys under the AWS account. Consequently, you can use this operation
 *             to manage AWS account root user credentials even if the AWS account has no
 *             associated users.</p>
 *         <note>
 *             <p>To ensure the security of your AWS account, the secret access key is accessible
 *                 only during key and user creation.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAccessKeysCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAccessKeysCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListAccessKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessKeysCommandInput} for command's `input` shape.
 * @see {@link ListAccessKeysCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccessKeysCommand = /** @class */ (function (_super) {
    __extends(ListAccessKeysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAccessKeysCommand(input) {
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
    ListAccessKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListAccessKeysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAccessKeysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAccessKeysResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAccessKeysCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListAccessKeysCommand(input, context);
    };
    ListAccessKeysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListAccessKeysCommand(output, context);
    };
    return ListAccessKeysCommand;
}($Command));
export { ListAccessKeysCommand };
//# sourceMappingURL=ListAccessKeysCommand.js.map