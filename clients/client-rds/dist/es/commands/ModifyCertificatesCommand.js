import { __extends } from "tslib";
import { ModifyCertificatesMessage, ModifyCertificatesResult } from "../models/models_1";
import { deserializeAws_queryModifyCertificatesCommand, serializeAws_queryModifyCertificatesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS)
 *           certificate for Amazon RDS for new DB instances temporarily, or remove the override.</p>
 *          <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB
 *             instances that is different from the default certificate provided by RDS. You can also
 *             use this operation to remove the override, so that new DB instances use the default
 *             certificate provided by RDS.</p>
 *          <p>You might need to override the default certificate in the following situations:</p>
 *          <ul>
 *             <li>
 *               <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet
 *                   the RDS default CA certificate for the specified AWS Region.</p>
 *             </li>
 *             <li>
 *               <p>RDS has already moved to a new default CA certificate for the specified AWS
 *                     Region, but you are still in the process of supporting the new CA certificate.
 *                     In this case, you temporarily need additional time to finish your application
 *                     changes.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html">
 *               Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p>
 *          <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html">
 *               Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyCertificatesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyCertificatesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCertificatesCommandInput} for command's `input` shape.
 * @see {@link ModifyCertificatesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyCertificatesCommand = /** @class */ (function (_super) {
    __extends(ModifyCertificatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyCertificatesCommand(input) {
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
    ModifyCertificatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "ModifyCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyCertificatesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyCertificatesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyCertificatesCommand(input, context);
    };
    ModifyCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyCertificatesCommand(output, context);
    };
    return ModifyCertificatesCommand;
}($Command));
export { ModifyCertificatesCommand };
//# sourceMappingURL=ModifyCertificatesCommand.js.map