import { __extends } from "tslib";
import { DeleteEventSubscriptionMessage, DeleteEventSubscriptionResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteEventSubscriptionCommand, serializeAws_json1_1DeleteEventSubscriptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes an AWS DMS event subscription. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteEventSubscriptionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteEventSubscriptionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEventSubscriptionCommand = /** @class */ (function (_super) {
    __extends(DeleteEventSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEventSubscriptionCommand(input) {
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
    DeleteEventSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DeleteEventSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEventSubscriptionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEventSubscriptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEventSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteEventSubscriptionCommand(input, context);
    };
    DeleteEventSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteEventSubscriptionCommand(output, context);
    };
    return DeleteEventSubscriptionCommand;
}($Command));
export { DeleteEventSubscriptionCommand };
//# sourceMappingURL=DeleteEventSubscriptionCommand.js.map