import { __extends } from "tslib";
import { ListWorkloadSharesInput, ListWorkloadSharesOutput } from "../models/models_0";
import { deserializeAws_restJson1ListWorkloadSharesCommand, serializeAws_restJson1ListWorkloadSharesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the workload shares associated with the workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListWorkloadSharesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListWorkloadSharesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListWorkloadSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkloadSharesCommandInput} for command's `input` shape.
 * @see {@link ListWorkloadSharesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWorkloadSharesCommand = /** @class */ (function (_super) {
    __extends(ListWorkloadSharesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWorkloadSharesCommand(input) {
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
    ListWorkloadSharesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "ListWorkloadSharesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWorkloadSharesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListWorkloadSharesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWorkloadSharesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListWorkloadSharesCommand(input, context);
    };
    ListWorkloadSharesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListWorkloadSharesCommand(output, context);
    };
    return ListWorkloadSharesCommand;
}($Command));
export { ListWorkloadSharesCommand };
//# sourceMappingURL=ListWorkloadSharesCommand.js.map