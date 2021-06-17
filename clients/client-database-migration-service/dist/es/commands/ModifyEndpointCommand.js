import { __extends } from "tslib";
import { ModifyEndpointMessage, ModifyEndpointResponse } from "../models/models_0";
import { deserializeAws_json1_1ModifyEndpointCommand, serializeAws_json1_1ModifyEndpointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyEndpointCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyEndpointCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new ModifyEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyEndpointCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyEndpointCommand = /** @class */ (function (_super) {
    __extends(ModifyEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyEndpointCommand(input) {
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
    ModifyEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "ModifyEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyEndpointMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyEndpointCommand(input, context);
    };
    ModifyEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyEndpointCommand(output, context);
    };
    return ModifyEndpointCommand;
}($Command));
export { ModifyEndpointCommand };
//# sourceMappingURL=ModifyEndpointCommand.js.map