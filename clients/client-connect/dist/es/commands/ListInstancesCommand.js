import { __extends } from "tslib";
import { ListInstancesRequest, ListInstancesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListInstancesCommand, serializeAws_restJson1ListInstancesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Return a list of instances which are in active state, creation-in-progress state, and failed
 *    state. Instances that aren't successfully created (they are in a failed state) are returned only
 *    for 24 hours after the CreateInstance API was invoked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListInstancesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListInstancesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstancesCommandInput} for command's `input` shape.
 * @see {@link ListInstancesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInstancesCommand = /** @class */ (function (_super) {
    __extends(ListInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInstancesCommand(input) {
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
    ListInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInstancesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListInstancesCommand(input, context);
    };
    ListInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListInstancesCommand(output, context);
    };
    return ListInstancesCommand;
}($Command));
export { ListInstancesCommand };
//# sourceMappingURL=ListInstancesCommand.js.map