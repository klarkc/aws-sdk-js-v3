import { __extends } from "tslib";
import { DescribeRefreshSchemasStatusMessage, DescribeRefreshSchemasStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeRefreshSchemasStatusCommand, serializeAws_json1_1DescribeRefreshSchemasStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the status of the RefreshSchemas operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeRefreshSchemasStatusCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeRefreshSchemasStatusCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeRefreshSchemasStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRefreshSchemasStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeRefreshSchemasStatusCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRefreshSchemasStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeRefreshSchemasStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRefreshSchemasStatusCommand(input) {
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
    DescribeRefreshSchemasStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeRefreshSchemasStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRefreshSchemasStatusMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRefreshSchemasStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRefreshSchemasStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRefreshSchemasStatusCommand(input, context);
    };
    DescribeRefreshSchemasStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRefreshSchemasStatusCommand(output, context);
    };
    return DescribeRefreshSchemasStatusCommand;
}($Command));
export { DescribeRefreshSchemasStatusCommand };
//# sourceMappingURL=DescribeRefreshSchemasStatusCommand.js.map