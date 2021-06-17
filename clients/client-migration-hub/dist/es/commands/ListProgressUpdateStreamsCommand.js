import { __extends } from "tslib";
import { ListProgressUpdateStreamsRequest, ListProgressUpdateStreamsResult } from "../models/models_0";
import { deserializeAws_json1_1ListProgressUpdateStreamsCommand, serializeAws_json1_1ListProgressUpdateStreamsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists progress update streams associated with the user account making this call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListProgressUpdateStreamsCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListProgressUpdateStreamsCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListProgressUpdateStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProgressUpdateStreamsCommandInput} for command's `input` shape.
 * @see {@link ListProgressUpdateStreamsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProgressUpdateStreamsCommand = /** @class */ (function (_super) {
    __extends(ListProgressUpdateStreamsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProgressUpdateStreamsCommand(input) {
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
    ListProgressUpdateStreamsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubClient";
        var commandName = "ListProgressUpdateStreamsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProgressUpdateStreamsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProgressUpdateStreamsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProgressUpdateStreamsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListProgressUpdateStreamsCommand(input, context);
    };
    ListProgressUpdateStreamsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListProgressUpdateStreamsCommand(output, context);
    };
    return ListProgressUpdateStreamsCommand;
}($Command));
export { ListProgressUpdateStreamsCommand };
//# sourceMappingURL=ListProgressUpdateStreamsCommand.js.map