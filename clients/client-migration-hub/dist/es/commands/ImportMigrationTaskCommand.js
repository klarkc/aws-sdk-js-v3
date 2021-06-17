import { __extends } from "tslib";
import { ImportMigrationTaskRequest, ImportMigrationTaskResult } from "../models/models_0";
import { deserializeAws_json1_1ImportMigrationTaskCommand, serializeAws_json1_1ImportMigrationTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers a new migration task which represents a server, database, etc., being migrated
 *          to AWS by a migration tool.</p>
 *          <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as
 *          the migration tool must first register the migration task with Migration Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ImportMigrationTaskCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ImportMigrationTaskCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ImportMigrationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportMigrationTaskCommandInput} for command's `input` shape.
 * @see {@link ImportMigrationTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportMigrationTaskCommand = /** @class */ (function (_super) {
    __extends(ImportMigrationTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportMigrationTaskCommand(input) {
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
    ImportMigrationTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubClient";
        var commandName = "ImportMigrationTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportMigrationTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportMigrationTaskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportMigrationTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ImportMigrationTaskCommand(input, context);
    };
    ImportMigrationTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ImportMigrationTaskCommand(output, context);
    };
    return ImportMigrationTaskCommand;
}($Command));
export { ImportMigrationTaskCommand };
//# sourceMappingURL=ImportMigrationTaskCommand.js.map