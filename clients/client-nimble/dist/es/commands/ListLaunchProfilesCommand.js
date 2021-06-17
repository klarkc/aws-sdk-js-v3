import { __extends } from "tslib";
import { ListLaunchProfilesRequest, ListLaunchProfilesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListLaunchProfilesCommand, serializeAws_restJson1ListLaunchProfilesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all the launch profiles a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListLaunchProfilesCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListLaunchProfilesCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListLaunchProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLaunchProfilesCommandInput} for command's `input` shape.
 * @see {@link ListLaunchProfilesCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLaunchProfilesCommand = /** @class */ (function (_super) {
    __extends(ListLaunchProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLaunchProfilesCommand(input) {
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
    ListLaunchProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "ListLaunchProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLaunchProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLaunchProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLaunchProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListLaunchProfilesCommand(input, context);
    };
    ListLaunchProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListLaunchProfilesCommand(output, context);
    };
    return ListLaunchProfilesCommand;
}($Command));
export { ListLaunchProfilesCommand };
//# sourceMappingURL=ListLaunchProfilesCommand.js.map