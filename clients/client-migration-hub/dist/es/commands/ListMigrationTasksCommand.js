import { __extends } from "tslib";
import { ListMigrationTasksRequest, ListMigrationTasksResult } from "../models/models_0";
import { deserializeAws_json1_1ListMigrationTasksCommand, serializeAws_json1_1ListMigrationTasksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all, or filtered by resource name, migration tasks associated with the user
 *          account making this call. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Can show a summary list of the most recent migration tasks.</p>
 *             </li>
 *             <li>
 *                <p>Can show a summary list of migration tasks associated with a given discovered
 *                resource.</p>
 *             </li>
 *             <li>
 *                <p>Lists migration tasks in a paginated interface.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListMigrationTasksCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListMigrationTasksCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListMigrationTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMigrationTasksCommandInput} for command's `input` shape.
 * @see {@link ListMigrationTasksCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMigrationTasksCommand = /** @class */ (function (_super) {
    __extends(ListMigrationTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMigrationTasksCommand(input) {
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
    ListMigrationTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubClient";
        var commandName = "ListMigrationTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMigrationTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMigrationTasksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMigrationTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListMigrationTasksCommand(input, context);
    };
    ListMigrationTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListMigrationTasksCommand(output, context);
    };
    return ListMigrationTasksCommand;
}($Command));
export { ListMigrationTasksCommand };
//# sourceMappingURL=ListMigrationTasksCommand.js.map