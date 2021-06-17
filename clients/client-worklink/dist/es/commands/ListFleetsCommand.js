import { __extends } from "tslib";
import { ListFleetsRequest, ListFleetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListFleetsCommand, serializeAws_restJson1ListFleetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of fleets for the current account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, ListFleetsCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, ListFleetsCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new ListFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFleetsCommandInput} for command's `input` shape.
 * @see {@link ListFleetsCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFleetsCommand = /** @class */ (function (_super) {
    __extends(ListFleetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFleetsCommand(input) {
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
    ListFleetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "ListFleetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFleetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFleetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFleetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFleetsCommand(input, context);
    };
    ListFleetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFleetsCommand(output, context);
    };
    return ListFleetsCommand;
}($Command));
export { ListFleetsCommand };
//# sourceMappingURL=ListFleetsCommand.js.map