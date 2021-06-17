import { __extends } from "tslib";
import { ListPolicyVersionsRequest, ListPolicyVersionsResponse } from "../models/models_0";
import { deserializeAws_queryListPolicyVersionsCommand, serializeAws_queryListPolicyVersionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists information about the versions of the specified managed policy, including the
 *             version that is currently set as the policy's default version.</p>
 *         <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListPolicyVersionsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListPolicyVersionsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListPolicyVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPolicyVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyVersionsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPolicyVersionsCommand = /** @class */ (function (_super) {
    __extends(ListPolicyVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPolicyVersionsCommand(input) {
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
    ListPolicyVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListPolicyVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPolicyVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPolicyVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPolicyVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListPolicyVersionsCommand(input, context);
    };
    ListPolicyVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListPolicyVersionsCommand(output, context);
    };
    return ListPolicyVersionsCommand;
}($Command));
export { ListPolicyVersionsCommand };
//# sourceMappingURL=ListPolicyVersionsCommand.js.map