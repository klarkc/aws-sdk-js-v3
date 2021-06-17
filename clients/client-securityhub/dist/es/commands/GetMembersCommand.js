import { __extends } from "tslib";
import { GetMembersRequest, GetMembersResponse } from "../models/models_1";
import { deserializeAws_restJson1GetMembersCommand, serializeAws_restJson1GetMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the details for the Security Hub member accounts for the specified account IDs.</p>
 *          <p>An administrator account can be either the delegated Security Hub administrator account for an
 *          organization or an administrator account that enabled Security Hub manually.</p>
 *          <p>The results include both member accounts that are managed using Organizations and accounts that
 *          were invited manually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetMembersCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetMembersCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMembersCommandInput} for command's `input` shape.
 * @see {@link GetMembersCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMembersCommand = /** @class */ (function (_super) {
    __extends(GetMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMembersCommand(input) {
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
    GetMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "GetMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMembersCommand(input, context);
    };
    GetMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMembersCommand(output, context);
    };
    return GetMembersCommand;
}($Command));
export { GetMembersCommand };
//# sourceMappingURL=GetMembersCommand.js.map