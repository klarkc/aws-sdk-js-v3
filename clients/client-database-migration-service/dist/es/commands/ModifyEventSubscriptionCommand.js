import { __extends } from "tslib";
import { ModifyEventSubscriptionMessage, ModifyEventSubscriptionResponse } from "../models/models_0";
import { deserializeAws_json1_1ModifyEventSubscriptionCommand, serializeAws_json1_1ModifyEventSubscriptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies an existing AWS DMS event notification subscription. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyEventSubscriptionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyEventSubscriptionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new ModifyEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ModifyEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyEventSubscriptionCommand = /** @class */ (function (_super) {
    __extends(ModifyEventSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyEventSubscriptionCommand(input) {
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
    ModifyEventSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "ModifyEventSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyEventSubscriptionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyEventSubscriptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyEventSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyEventSubscriptionCommand(input, context);
    };
    ModifyEventSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyEventSubscriptionCommand(output, context);
    };
    return ModifyEventSubscriptionCommand;
}($Command));
export { ModifyEventSubscriptionCommand };
//# sourceMappingURL=ModifyEventSubscriptionCommand.js.map