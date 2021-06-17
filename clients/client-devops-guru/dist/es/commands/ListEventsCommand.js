import { __extends } from "tslib";
import { ListEventsRequest, ListEventsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListEventsCommand, serializeAws_restJson1ListEventsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    		Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListEventsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListEventsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new ListEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventsCommandInput} for command's `input` shape.
 * @see {@link ListEventsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEventsCommand = /** @class */ (function (_super) {
    __extends(ListEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEventsCommand(input) {
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
    ListEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "ListEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEventsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListEventsCommand(input, context);
    };
    ListEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListEventsCommand(output, context);
    };
    return ListEventsCommand;
}($Command));
export { ListEventsCommand };
//# sourceMappingURL=ListEventsCommand.js.map