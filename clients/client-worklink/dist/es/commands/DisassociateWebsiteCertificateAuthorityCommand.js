import { __extends } from "tslib";
import { DisassociateWebsiteCertificateAuthorityRequest, DisassociateWebsiteCertificateAuthorityResponse, } from "../models/models_0";
import { deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand, serializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a certificate authority (CA).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DisassociateWebsiteCertificateAuthorityCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DisassociateWebsiteCertificateAuthorityCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DisassociateWebsiteCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWebsiteCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link DisassociateWebsiteCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateWebsiteCertificateAuthorityCommand = /** @class */ (function (_super) {
    __extends(DisassociateWebsiteCertificateAuthorityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateWebsiteCertificateAuthorityCommand(input) {
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
    DisassociateWebsiteCertificateAuthorityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "DisassociateWebsiteCertificateAuthorityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateWebsiteCertificateAuthorityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateWebsiteCertificateAuthorityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateWebsiteCertificateAuthorityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand(input, context);
    };
    DisassociateWebsiteCertificateAuthorityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand(output, context);
    };
    return DisassociateWebsiteCertificateAuthorityCommand;
}($Command));
export { DisassociateWebsiteCertificateAuthorityCommand };
//# sourceMappingURL=DisassociateWebsiteCertificateAuthorityCommand.js.map