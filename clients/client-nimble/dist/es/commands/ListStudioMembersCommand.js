import { __extends } from "tslib";
import { ListStudioMembersRequest, ListStudioMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListStudioMembersCommand, serializeAws_restJson1ListStudioMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get all users in a given studio membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStudioMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStudioMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListStudioMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudioMembersCommandInput} for command's `input` shape.
 * @see {@link ListStudioMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStudioMembersCommand = /** @class */ (function (_super) {
    __extends(ListStudioMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStudioMembersCommand(input) {
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
    ListStudioMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "ListStudioMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStudioMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListStudioMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStudioMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListStudioMembersCommand(input, context);
    };
    ListStudioMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListStudioMembersCommand(output, context);
    };
    return ListStudioMembersCommand;
}($Command));
export { ListStudioMembersCommand };
//# sourceMappingURL=ListStudioMembersCommand.js.map