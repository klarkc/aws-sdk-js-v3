import { __extends } from "tslib";
import { RefreshSchemasMessage, RefreshSchemasResponse } from "../models/models_0";
import { deserializeAws_json1_1RefreshSchemasCommand, serializeAws_json1_1RefreshSchemasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Populates the schema for the specified endpoint. This is an asynchronous operation and
 *          can take several minutes. You can check the status of this operation by calling the
 *          DescribeRefreshSchemasStatus operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, RefreshSchemasCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, RefreshSchemasCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new RefreshSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RefreshSchemasCommandInput} for command's `input` shape.
 * @see {@link RefreshSchemasCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RefreshSchemasCommand = /** @class */ (function (_super) {
    __extends(RefreshSchemasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RefreshSchemasCommand(input) {
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
    RefreshSchemasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "RefreshSchemasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RefreshSchemasMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RefreshSchemasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RefreshSchemasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RefreshSchemasCommand(input, context);
    };
    RefreshSchemasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RefreshSchemasCommand(output, context);
    };
    return RefreshSchemasCommand;
}($Command));
export { RefreshSchemasCommand };
//# sourceMappingURL=RefreshSchemasCommand.js.map