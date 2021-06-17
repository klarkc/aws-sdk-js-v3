import { __extends } from "tslib";
import { DescribeCertificateRequest, DescribeCertificateResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeCertificateCommand, serializeAws_json1_1DescribeCertificateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays information about the certificate registered for secure LDAP or client certificate authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeCertificateCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeCertificateCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCertificateCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCertificateCommand = /** @class */ (function (_super) {
    __extends(DescribeCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCertificateCommand(input) {
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
    DescribeCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DescribeCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCertificateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCertificateCommand(input, context);
    };
    DescribeCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCertificateCommand(output, context);
    };
    return DescribeCertificateCommand;
}($Command));
export { DescribeCertificateCommand };
//# sourceMappingURL=DescribeCertificateCommand.js.map