import { __extends } from "tslib";
import { ListServiceSpecificCredentialsRequest, ListServiceSpecificCredentialsResponse } from "../models/models_0";
import { deserializeAws_queryListServiceSpecificCredentialsCommand, serializeAws_queryListServiceSpecificCredentialsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the service-specific credentials associated with the
 *             specified IAM user. If none exists, the operation returns an empty list. The
 *             service-specific credentials returned by this operation are used only for authenticating
 *             the IAM user to a specific service. For more information about using service-specific
 *             credentials to authenticate to an AWS service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a>
 *             in the AWS CodeCommit User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListServiceSpecificCredentialsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListServiceSpecificCredentialsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListServiceSpecificCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceSpecificCredentialsCommandInput} for command's `input` shape.
 * @see {@link ListServiceSpecificCredentialsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListServiceSpecificCredentialsCommand = /** @class */ (function (_super) {
    __extends(ListServiceSpecificCredentialsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListServiceSpecificCredentialsCommand(input) {
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
    ListServiceSpecificCredentialsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListServiceSpecificCredentialsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListServiceSpecificCredentialsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListServiceSpecificCredentialsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListServiceSpecificCredentialsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListServiceSpecificCredentialsCommand(input, context);
    };
    ListServiceSpecificCredentialsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListServiceSpecificCredentialsCommand(output, context);
    };
    return ListServiceSpecificCredentialsCommand;
}($Command));
export { ListServiceSpecificCredentialsCommand };
//# sourceMappingURL=ListServiceSpecificCredentialsCommand.js.map