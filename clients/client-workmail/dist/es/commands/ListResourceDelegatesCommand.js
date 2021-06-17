import { __extends } from "tslib";
import { ListResourceDelegatesRequest, ListResourceDelegatesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResourceDelegatesCommand, serializeAws_json1_1ListResourceDelegatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the delegates associated with a resource. Users and groups can be resource
 *          delegates and answer requests on behalf of the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListResourceDelegatesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListResourceDelegatesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListResourceDelegatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceDelegatesCommandInput} for command's `input` shape.
 * @see {@link ListResourceDelegatesCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourceDelegatesCommand = /** @class */ (function (_super) {
    __extends(ListResourceDelegatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourceDelegatesCommand(input) {
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
    ListResourceDelegatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "ListResourceDelegatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourceDelegatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourceDelegatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourceDelegatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResourceDelegatesCommand(input, context);
    };
    ListResourceDelegatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResourceDelegatesCommand(output, context);
    };
    return ListResourceDelegatesCommand;
}($Command));
export { ListResourceDelegatesCommand };
//# sourceMappingURL=ListResourceDelegatesCommand.js.map