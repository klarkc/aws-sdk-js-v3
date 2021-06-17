import { __extends } from "tslib";
import { ListTaskDefinitionsRequest, ListTaskDefinitionsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTaskDefinitionsCommand, serializeAws_json1_1ListTaskDefinitionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of task definitions that are registered to your account. You can filter
 * 			the results by family name with the <code>familyPrefix</code> parameter or by status
 * 			with the <code>status</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTaskDefinitionsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTaskDefinitionsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListTaskDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTaskDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListTaskDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTaskDefinitionsCommand(input) {
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
    ListTaskDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "ListTaskDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTaskDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTaskDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTaskDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTaskDefinitionsCommand(input, context);
    };
    ListTaskDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTaskDefinitionsCommand(output, context);
    };
    return ListTaskDefinitionsCommand;
}($Command));
export { ListTaskDefinitionsCommand };
//# sourceMappingURL=ListTaskDefinitionsCommand.js.map