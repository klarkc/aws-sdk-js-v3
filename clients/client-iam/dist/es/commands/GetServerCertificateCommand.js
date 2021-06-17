import { __extends } from "tslib";
import { GetServerCertificateRequest, GetServerCertificateResponse } from "../models/models_0";
import { deserializeAws_queryGetServerCertificateCommand, serializeAws_queryGetServerCertificateCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the specified server certificate stored in IAM.</p>
 *         <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
 *                 with server certificates</a> in the <i>IAM User Guide</i>. This
 *             topic includes a list of AWS services that can use the server certificates that you
 *             manage with IAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServerCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServerCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetServerCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServerCertificateCommandInput} for command's `input` shape.
 * @see {@link GetServerCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetServerCertificateCommand = /** @class */ (function (_super) {
    __extends(GetServerCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetServerCertificateCommand(input) {
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
    GetServerCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetServerCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetServerCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetServerCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetServerCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetServerCertificateCommand(input, context);
    };
    GetServerCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetServerCertificateCommand(output, context);
    };
    return GetServerCertificateCommand;
}($Command));
export { GetServerCertificateCommand };
//# sourceMappingURL=GetServerCertificateCommand.js.map