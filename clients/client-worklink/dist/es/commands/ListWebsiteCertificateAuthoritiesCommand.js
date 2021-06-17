import { __extends } from "tslib";
import { ListWebsiteCertificateAuthoritiesRequest, ListWebsiteCertificateAuthoritiesResponse, } from "../models/models_0";
import { deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand, serializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of certificate authorities added for the current account and
 *             Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, ListWebsiteCertificateAuthoritiesCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, ListWebsiteCertificateAuthoritiesCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new ListWebsiteCertificateAuthoritiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWebsiteCertificateAuthoritiesCommandInput} for command's `input` shape.
 * @see {@link ListWebsiteCertificateAuthoritiesCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWebsiteCertificateAuthoritiesCommand = /** @class */ (function (_super) {
    __extends(ListWebsiteCertificateAuthoritiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWebsiteCertificateAuthoritiesCommand(input) {
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
    ListWebsiteCertificateAuthoritiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "ListWebsiteCertificateAuthoritiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWebsiteCertificateAuthoritiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListWebsiteCertificateAuthoritiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWebsiteCertificateAuthoritiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand(input, context);
    };
    ListWebsiteCertificateAuthoritiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand(output, context);
    };
    return ListWebsiteCertificateAuthoritiesCommand;
}($Command));
export { ListWebsiteCertificateAuthoritiesCommand };
//# sourceMappingURL=ListWebsiteCertificateAuthoritiesCommand.js.map