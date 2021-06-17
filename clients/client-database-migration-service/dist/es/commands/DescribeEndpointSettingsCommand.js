import { __extends } from "tslib";
import { DescribeEndpointSettingsMessage, DescribeEndpointSettingsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEndpointSettingsCommand, serializeAws_json1_1DescribeEndpointSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the possible endpoint settings available
 *          when you create an endpoint for a specific database engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEndpointSettingsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEndpointSettingsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeEndpointSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointSettingsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEndpointSettingsCommand = /** @class */ (function (_super) {
    __extends(DescribeEndpointSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEndpointSettingsCommand(input) {
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
    DescribeEndpointSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeEndpointSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEndpointSettingsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEndpointSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEndpointSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEndpointSettingsCommand(input, context);
    };
    DescribeEndpointSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEndpointSettingsCommand(output, context);
    };
    return DescribeEndpointSettingsCommand;
}($Command));
export { DescribeEndpointSettingsCommand };
//# sourceMappingURL=DescribeEndpointSettingsCommand.js.map