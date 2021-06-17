import { __extends } from "tslib";
import { ListBonusPaymentsRequest, ListBonusPaymentsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListBonusPaymentsCommand, serializeAws_json1_1ListBonusPaymentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>ListBonusPayments</code>
 *             operation retrieves the amounts of bonuses you have paid to Workers
 *             for a given HIT or assignment.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListBonusPaymentsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListBonusPaymentsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListBonusPaymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBonusPaymentsCommandInput} for command's `input` shape.
 * @see {@link ListBonusPaymentsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBonusPaymentsCommand = /** @class */ (function (_super) {
    __extends(ListBonusPaymentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBonusPaymentsCommand(input) {
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
    ListBonusPaymentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "ListBonusPaymentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBonusPaymentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBonusPaymentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBonusPaymentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListBonusPaymentsCommand(input, context);
    };
    ListBonusPaymentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListBonusPaymentsCommand(output, context);
    };
    return ListBonusPaymentsCommand;
}($Command));
export { ListBonusPaymentsCommand };
//# sourceMappingURL=ListBonusPaymentsCommand.js.map