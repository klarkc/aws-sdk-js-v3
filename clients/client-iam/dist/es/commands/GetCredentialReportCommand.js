import { __extends } from "tslib";
import { GetCredentialReportResponse } from "../models/models_0";
import { deserializeAws_queryGetCredentialReportCommand, serializeAws_queryGetCredentialReportCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Retrieves a credential report for the AWS account. For more information about the
 *             credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in
 *             the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetCredentialReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetCredentialReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetCredentialReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCredentialReportCommandInput} for command's `input` shape.
 * @see {@link GetCredentialReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCredentialReportCommand = /** @class */ (function (_super) {
    __extends(GetCredentialReportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCredentialReportCommand(input) {
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
    GetCredentialReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetCredentialReportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: GetCredentialReportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCredentialReportCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetCredentialReportCommand(input, context);
    };
    GetCredentialReportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetCredentialReportCommand(output, context);
    };
    return GetCredentialReportCommand;
}($Command));
export { GetCredentialReportCommand };
//# sourceMappingURL=GetCredentialReportCommand.js.map