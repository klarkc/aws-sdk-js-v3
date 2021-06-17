import { __extends } from "tslib";
import { AssociateWebsiteCertificateAuthorityRequest, AssociateWebsiteCertificateAuthorityResponse, } from "../models/models_0";
import { deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand, serializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Imports the root certificate of a certificate authority (CA) used to obtain TLS
 *             certificates used by associated websites within the company network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, AssociateWebsiteCertificateAuthorityCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, AssociateWebsiteCertificateAuthorityCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new AssociateWebsiteCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWebsiteCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link AssociateWebsiteCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateWebsiteCertificateAuthorityCommand = /** @class */ (function (_super) {
    __extends(AssociateWebsiteCertificateAuthorityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateWebsiteCertificateAuthorityCommand(input) {
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
    AssociateWebsiteCertificateAuthorityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "AssociateWebsiteCertificateAuthorityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateWebsiteCertificateAuthorityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateWebsiteCertificateAuthorityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateWebsiteCertificateAuthorityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand(input, context);
    };
    AssociateWebsiteCertificateAuthorityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand(output, context);
    };
    return AssociateWebsiteCertificateAuthorityCommand;
}($Command));
export { AssociateWebsiteCertificateAuthorityCommand };
//# sourceMappingURL=AssociateWebsiteCertificateAuthorityCommand.js.map