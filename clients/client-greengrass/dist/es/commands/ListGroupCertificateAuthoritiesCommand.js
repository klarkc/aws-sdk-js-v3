import { __extends } from "tslib";
import { ListGroupCertificateAuthoritiesRequest, ListGroupCertificateAuthoritiesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand, serializeAws_restJson1ListGroupCertificateAuthoritiesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves the current CAs for a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListGroupCertificateAuthoritiesCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListGroupCertificateAuthoritiesCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListGroupCertificateAuthoritiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupCertificateAuthoritiesCommandInput} for command's `input` shape.
 * @see {@link ListGroupCertificateAuthoritiesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGroupCertificateAuthoritiesCommand = /** @class */ (function (_super) {
    __extends(ListGroupCertificateAuthoritiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGroupCertificateAuthoritiesCommand(input) {
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
    ListGroupCertificateAuthoritiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListGroupCertificateAuthoritiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGroupCertificateAuthoritiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGroupCertificateAuthoritiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGroupCertificateAuthoritiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListGroupCertificateAuthoritiesCommand(input, context);
    };
    ListGroupCertificateAuthoritiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand(output, context);
    };
    return ListGroupCertificateAuthoritiesCommand;
}($Command));
export { ListGroupCertificateAuthoritiesCommand };
//# sourceMappingURL=ListGroupCertificateAuthoritiesCommand.js.map