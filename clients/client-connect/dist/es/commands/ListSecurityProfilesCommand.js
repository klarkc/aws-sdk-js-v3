import { __extends } from "tslib";
import { ListSecurityProfilesRequest, ListSecurityProfilesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSecurityProfilesCommand, serializeAws_restJson1ListSecurityProfilesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides summary information about the security profiles for the specified Amazon Connect
 *    instance.</p>
 *          <p>For more information about security profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html">Security Profiles</a> in the
 *     <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListSecurityProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListSecurityProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfilesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSecurityProfilesCommand = /** @class */ (function (_super) {
    __extends(ListSecurityProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSecurityProfilesCommand(input) {
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
    ListSecurityProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListSecurityProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSecurityProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSecurityProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSecurityProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSecurityProfilesCommand(input, context);
    };
    ListSecurityProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSecurityProfilesCommand(output, context);
    };
    return ListSecurityProfilesCommand;
}($Command));
export { ListSecurityProfilesCommand };
//# sourceMappingURL=ListSecurityProfilesCommand.js.map