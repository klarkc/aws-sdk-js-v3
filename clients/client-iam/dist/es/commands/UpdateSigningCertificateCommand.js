import { __extends } from "tslib";
import { UpdateSigningCertificateRequest } from "../models/models_1";
import { deserializeAws_queryUpdateSigningCertificateCommand, serializeAws_queryUpdateSigningCertificateCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the status of the specified user signing certificate from active to disabled,
 *             or vice versa. This operation can be used to disable an IAM user's signing certificate
 *             as part of a certificate rotation work flow.</p>
 *         <p>If the <code>UserName</code> field is not specified, the user name is determined
 *             implicitly based on the AWS access key ID used to sign the request. This operation
 *             works for access keys under the AWS account. Consequently, you can use this operation
 *             to manage AWS account root user credentials even if the AWS account has no
 *             associated users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateSigningCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateSigningCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateSigningCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSigningCertificateCommand = /** @class */ (function (_super) {
    __extends(UpdateSigningCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSigningCertificateCommand(input) {
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
    UpdateSigningCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UpdateSigningCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSigningCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSigningCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateSigningCertificateCommand(input, context);
    };
    UpdateSigningCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateSigningCertificateCommand(output, context);
    };
    return UpdateSigningCertificateCommand;
}($Command));
export { UpdateSigningCertificateCommand };
//# sourceMappingURL=UpdateSigningCertificateCommand.js.map