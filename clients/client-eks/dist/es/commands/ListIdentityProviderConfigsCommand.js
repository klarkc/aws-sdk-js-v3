import { __extends } from "tslib";
import { ListIdentityProviderConfigsRequest, ListIdentityProviderConfigsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListIdentityProviderConfigsCommand, serializeAws_restJson1ListIdentityProviderConfigsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A list of identity provider configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListIdentityProviderConfigsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListIdentityProviderConfigsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListIdentityProviderConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentityProviderConfigsCommandInput} for command's `input` shape.
 * @see {@link ListIdentityProviderConfigsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIdentityProviderConfigsCommand = /** @class */ (function (_super) {
    __extends(ListIdentityProviderConfigsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIdentityProviderConfigsCommand(input) {
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
    ListIdentityProviderConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "ListIdentityProviderConfigsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIdentityProviderConfigsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListIdentityProviderConfigsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIdentityProviderConfigsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListIdentityProviderConfigsCommand(input, context);
    };
    ListIdentityProviderConfigsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListIdentityProviderConfigsCommand(output, context);
    };
    return ListIdentityProviderConfigsCommand;
}($Command));
export { ListIdentityProviderConfigsCommand };
//# sourceMappingURL=ListIdentityProviderConfigsCommand.js.map