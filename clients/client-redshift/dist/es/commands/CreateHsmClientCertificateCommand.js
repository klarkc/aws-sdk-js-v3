import { __extends } from "tslib";
import { CreateHsmClientCertificateMessage, CreateHsmClientCertificateResult } from "../models/models_0";
import { deserializeAws_queryCreateHsmClientCertificateCommand, serializeAws_queryCreateHsmClientCertificateCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to
 *             the client's HSM in order to store and retrieve the keys used to encrypt the cluster
 *             databases.</p>
 *         <p>The command returns a public key, which you must store in the HSM. In addition to
 *             creating the HSM certificate, you must create an Amazon Redshift HSM configuration that
 *             provides a cluster the information needed to store and use encryption keys in the HSM.
 *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM">Hardware Security Modules</a>
 *             in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateHsmClientCertificateCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateHsmClientCertificateCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateHsmClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHsmClientCertificateCommandInput} for command's `input` shape.
 * @see {@link CreateHsmClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHsmClientCertificateCommand = /** @class */ (function (_super) {
    __extends(CreateHsmClientCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHsmClientCertificateCommand(input) {
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
    CreateHsmClientCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateHsmClientCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHsmClientCertificateMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHsmClientCertificateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHsmClientCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateHsmClientCertificateCommand(input, context);
    };
    CreateHsmClientCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateHsmClientCertificateCommand(output, context);
    };
    return CreateHsmClientCertificateCommand;
}($Command));
export { CreateHsmClientCertificateCommand };
//# sourceMappingURL=CreateHsmClientCertificateCommand.js.map