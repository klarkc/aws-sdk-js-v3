import { __extends } from "tslib";
import { AuthorizeEndpointAccessMessage, EndpointAuthorization } from "../models/models_0";
import { deserializeAws_queryAuthorizeEndpointAccessCommand, serializeAws_queryAuthorizeEndpointAccessCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Grants access to a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AuthorizeEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link AuthorizeEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AuthorizeEndpointAccessCommand = /** @class */ (function (_super) {
    __extends(AuthorizeEndpointAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AuthorizeEndpointAccessCommand(input) {
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
    AuthorizeEndpointAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "AuthorizeEndpointAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AuthorizeEndpointAccessMessage.filterSensitiveLog,
            outputFilterSensitiveLog: EndpointAuthorization.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AuthorizeEndpointAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAuthorizeEndpointAccessCommand(input, context);
    };
    AuthorizeEndpointAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAuthorizeEndpointAccessCommand(output, context);
    };
    return AuthorizeEndpointAccessCommand;
}($Command));
export { AuthorizeEndpointAccessCommand };
//# sourceMappingURL=AuthorizeEndpointAccessCommand.js.map