import { __extends } from "tslib";
import { NotifyMigrationTaskStateRequest, NotifyMigrationTaskStateResult } from "../models/models_0";
import { deserializeAws_json1_1NotifyMigrationTaskStateCommand, serializeAws_json1_1NotifyMigrationTaskStateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Notifies Migration Hub of the current status, progress, or other detail regarding a
 *          migration task. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share
 *                the latest progress and status.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MigrationTaskName</code> is used for addressing updates to the correct
 *                target.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ProgressUpdateStream</code> is used for access control and to provide a
 *                namespace for each migration tool.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, NotifyMigrationTaskStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, NotifyMigrationTaskStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new NotifyMigrationTaskStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyMigrationTaskStateCommandInput} for command's `input` shape.
 * @see {@link NotifyMigrationTaskStateCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var NotifyMigrationTaskStateCommand = /** @class */ (function (_super) {
    __extends(NotifyMigrationTaskStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function NotifyMigrationTaskStateCommand(input) {
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
    NotifyMigrationTaskStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubClient";
        var commandName = "NotifyMigrationTaskStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: NotifyMigrationTaskStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: NotifyMigrationTaskStateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    NotifyMigrationTaskStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1NotifyMigrationTaskStateCommand(input, context);
    };
    NotifyMigrationTaskStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1NotifyMigrationTaskStateCommand(output, context);
    };
    return NotifyMigrationTaskStateCommand;
}($Command));
export { NotifyMigrationTaskStateCommand };
//# sourceMappingURL=NotifyMigrationTaskStateCommand.js.map