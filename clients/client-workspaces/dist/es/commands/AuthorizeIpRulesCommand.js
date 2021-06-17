import { __extends } from "tslib";
import { AuthorizeIpRulesRequest, AuthorizeIpRulesResult } from "../models/models_0";
import { deserializeAws_json1_1AuthorizeIpRulesCommand, serializeAws_json1_1AuthorizeIpRulesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds one or more rules to the specified IP access control group.</p>
 *          <p>This action gives users permission to access their WorkSpaces from the CIDR address
 *          ranges specified in the rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AuthorizeIpRulesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AuthorizeIpRulesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new AuthorizeIpRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeIpRulesCommandInput} for command's `input` shape.
 * @see {@link AuthorizeIpRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AuthorizeIpRulesCommand = /** @class */ (function (_super) {
    __extends(AuthorizeIpRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AuthorizeIpRulesCommand(input) {
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
    AuthorizeIpRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "AuthorizeIpRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AuthorizeIpRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AuthorizeIpRulesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AuthorizeIpRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AuthorizeIpRulesCommand(input, context);
    };
    AuthorizeIpRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AuthorizeIpRulesCommand(output, context);
    };
    return AuthorizeIpRulesCommand;
}($Command));
export { AuthorizeIpRulesCommand };
//# sourceMappingURL=AuthorizeIpRulesCommand.js.map