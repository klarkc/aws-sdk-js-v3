import { __extends } from "tslib";
import { ListApplicationStatesRequest, ListApplicationStatesResult } from "../models/models_0";
import { deserializeAws_json1_1ListApplicationStatesCommand, serializeAws_json1_1ListApplicationStatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the migration statuses for your applications. If you use the optional
 *             <code>ApplicationIds</code> parameter, only the migration statuses for those
 *          applications will be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListApplicationStatesCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListApplicationStatesCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListApplicationStatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationStatesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationStatesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApplicationStatesCommand = /** @class */ (function (_super) {
    __extends(ListApplicationStatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListApplicationStatesCommand(input) {
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
    ListApplicationStatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubClient";
        var commandName = "ListApplicationStatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListApplicationStatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListApplicationStatesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListApplicationStatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListApplicationStatesCommand(input, context);
    };
    ListApplicationStatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListApplicationStatesCommand(output, context);
    };
    return ListApplicationStatesCommand;
}($Command));
export { ListApplicationStatesCommand };
//# sourceMappingURL=ListApplicationStatesCommand.js.map