import { __extends } from "tslib";
import { GenerateCredentialReportResponse } from "../models/models_0";
import { deserializeAws_queryGenerateCredentialReportCommand, serializeAws_queryGenerateCredentialReportCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Generates a credential report for the AWS account. For more information about the
 *             credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in
 *             the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GenerateCredentialReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GenerateCredentialReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GenerateCredentialReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateCredentialReportCommandInput} for command's `input` shape.
 * @see {@link GenerateCredentialReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GenerateCredentialReportCommand = /** @class */ (function (_super) {
    __extends(GenerateCredentialReportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GenerateCredentialReportCommand(input) {
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
    GenerateCredentialReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GenerateCredentialReportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: GenerateCredentialReportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GenerateCredentialReportCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGenerateCredentialReportCommand(input, context);
    };
    GenerateCredentialReportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGenerateCredentialReportCommand(output, context);
    };
    return GenerateCredentialReportCommand;
}($Command));
export { GenerateCredentialReportCommand };
//# sourceMappingURL=GenerateCredentialReportCommand.js.map