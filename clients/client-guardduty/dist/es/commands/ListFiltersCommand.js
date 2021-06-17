import { __extends } from "tslib";
import { ListFiltersRequest, ListFiltersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListFiltersCommand, serializeAws_restJson1ListFiltersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a paginated list of the current filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListFiltersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListFiltersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFiltersCommandInput} for command's `input` shape.
 * @see {@link ListFiltersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFiltersCommand = /** @class */ (function (_super) {
    __extends(ListFiltersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFiltersCommand(input) {
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
    ListFiltersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "ListFiltersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFiltersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFiltersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFiltersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFiltersCommand(input, context);
    };
    ListFiltersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFiltersCommand(output, context);
    };
    return ListFiltersCommand;
}($Command));
export { ListFiltersCommand };
//# sourceMappingURL=ListFiltersCommand.js.map