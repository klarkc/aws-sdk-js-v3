import { __extends } from "tslib";
import { ListRoutingProfilesRequest, ListRoutingProfilesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListRoutingProfilesCommand, serializeAws_restJson1ListRoutingProfilesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides summary information about the routing profiles for the specified Amazon Connect
 *    instance.</p>
 *          <p>For more information about routing profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing.html">Routing Profiles</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html">Create a Routing
 *     Profile</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListRoutingProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListRoutingProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListRoutingProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoutingProfilesCommandInput} for command's `input` shape.
 * @see {@link ListRoutingProfilesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRoutingProfilesCommand = /** @class */ (function (_super) {
    __extends(ListRoutingProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRoutingProfilesCommand(input) {
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
    ListRoutingProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListRoutingProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRoutingProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRoutingProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRoutingProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRoutingProfilesCommand(input, context);
    };
    ListRoutingProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRoutingProfilesCommand(output, context);
    };
    return ListRoutingProfilesCommand;
}($Command));
export { ListRoutingProfilesCommand };
//# sourceMappingURL=ListRoutingProfilesCommand.js.map