import { __extends } from "tslib";
import { ListTaskExecutionsRequest, ListTaskExecutionsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTaskExecutionsCommand, serializeAws_json1_1ListTaskExecutionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of executed tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListTaskExecutionsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListTaskExecutionsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new ListTaskExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTaskExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListTaskExecutionsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTaskExecutionsCommand = /** @class */ (function (_super) {
    __extends(ListTaskExecutionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTaskExecutionsCommand(input) {
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
    ListTaskExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "ListTaskExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTaskExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTaskExecutionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTaskExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTaskExecutionsCommand(input, context);
    };
    ListTaskExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTaskExecutionsCommand(output, context);
    };
    return ListTaskExecutionsCommand;
}($Command));
export { ListTaskExecutionsCommand };
//# sourceMappingURL=ListTaskExecutionsCommand.js.map