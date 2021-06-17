import { __extends } from "tslib";
import { NotifyApplicationStateRequest, NotifyApplicationStateResult } from "../models/models_0";
import { deserializeAws_json1_1NotifyApplicationStateCommand, serializeAws_json1_1NotifyApplicationStateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the migration state of an application. For a given application identified by the
 *          value passed to <code>ApplicationId</code>, its status is set or updated by passing one of
 *          three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS |
 *          COMPLETED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, NotifyApplicationStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, NotifyApplicationStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new NotifyApplicationStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyApplicationStateCommandInput} for command's `input` shape.
 * @see {@link NotifyApplicationStateCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var NotifyApplicationStateCommand = /** @class */ (function (_super) {
    __extends(NotifyApplicationStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function NotifyApplicationStateCommand(input) {
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
    NotifyApplicationStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubClient";
        var commandName = "NotifyApplicationStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: NotifyApplicationStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: NotifyApplicationStateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    NotifyApplicationStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1NotifyApplicationStateCommand(input, context);
    };
    NotifyApplicationStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1NotifyApplicationStateCommand(output, context);
    };
    return NotifyApplicationStateCommand;
}($Command));
export { NotifyApplicationStateCommand };
//# sourceMappingURL=NotifyApplicationStateCommand.js.map