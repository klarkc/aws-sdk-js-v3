import { __extends } from "tslib";
import { ResetUserPasswordRequest, ResetUserPasswordResult } from "../models/models_0";
import { deserializeAws_json1_1ResetUserPasswordCommand, serializeAws_json1_1ResetUserPasswordCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resets the password for any user in your AWS Managed Microsoft AD or Simple AD
 *       directory.</p>
 *          <p>You can reset the password for any user in your directory with the following
 *       exceptions:</p>
 *          <ul>
 *             <li>
 *                <p>For Simple AD, you cannot reset the password for any user that is a member of either
 *           the <b>Domain Admins</b> or <b>Enterprise
 *             Admins</b> group except for the administrator user.</p>
 *             </li>
 *             <li>
 *                <p>For AWS Managed Microsoft AD, you can only reset the password for a user that is in an
 *           OU based off of the NetBIOS name that you typed when you created your directory. For
 *           example, you cannot reset the password for a user in the <b>AWS
 *             Reserved</b> OU. For more information about the OU structure for an AWS Managed
 *           Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>AWS Directory Service Administration
 *             Guide</i>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ResetUserPasswordCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ResetUserPasswordCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ResetUserPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetUserPasswordCommandInput} for command's `input` shape.
 * @see {@link ResetUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetUserPasswordCommand = /** @class */ (function (_super) {
    __extends(ResetUserPasswordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetUserPasswordCommand(input) {
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
    ResetUserPasswordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "ResetUserPasswordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetUserPasswordRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResetUserPasswordResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetUserPasswordCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResetUserPasswordCommand(input, context);
    };
    ResetUserPasswordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResetUserPasswordCommand(output, context);
    };
    return ResetUserPasswordCommand;
}($Command));
export { ResetUserPasswordCommand };
//# sourceMappingURL=ResetUserPasswordCommand.js.map