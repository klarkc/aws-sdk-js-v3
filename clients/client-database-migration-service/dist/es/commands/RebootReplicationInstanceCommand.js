import { __extends } from "tslib";
import { RebootReplicationInstanceMessage, RebootReplicationInstanceResponse } from "../models/models_0";
import { deserializeAws_json1_1RebootReplicationInstanceCommand, serializeAws_json1_1RebootReplicationInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Reboots a replication instance. Rebooting results in a momentary outage, until the
 *          replication instance becomes available again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, RebootReplicationInstanceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, RebootReplicationInstanceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new RebootReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootReplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link RebootReplicationInstanceCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebootReplicationInstanceCommand = /** @class */ (function (_super) {
    __extends(RebootReplicationInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebootReplicationInstanceCommand(input) {
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
    RebootReplicationInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "RebootReplicationInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebootReplicationInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RebootReplicationInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebootReplicationInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RebootReplicationInstanceCommand(input, context);
    };
    RebootReplicationInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RebootReplicationInstanceCommand(output, context);
    };
    return RebootReplicationInstanceCommand;
}($Command));
export { RebootReplicationInstanceCommand };
//# sourceMappingURL=RebootReplicationInstanceCommand.js.map