import { __extends } from "tslib";
import { ListLaunchProfileMembersRequest, ListLaunchProfileMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListLaunchProfileMembersCommand, serializeAws_restJson1ListLaunchProfileMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get all users in a given launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListLaunchProfileMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListLaunchProfileMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListLaunchProfileMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLaunchProfileMembersCommandInput} for command's `input` shape.
 * @see {@link ListLaunchProfileMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLaunchProfileMembersCommand = /** @class */ (function (_super) {
    __extends(ListLaunchProfileMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLaunchProfileMembersCommand(input) {
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
    ListLaunchProfileMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "ListLaunchProfileMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLaunchProfileMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLaunchProfileMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLaunchProfileMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListLaunchProfileMembersCommand(input, context);
    };
    ListLaunchProfileMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListLaunchProfileMembersCommand(output, context);
    };
    return ListLaunchProfileMembersCommand;
}($Command));
export { ListLaunchProfileMembersCommand };
//# sourceMappingURL=ListLaunchProfileMembersCommand.js.map