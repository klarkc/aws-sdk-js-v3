import { __extends } from "tslib";
import { RemoveRoleFromDBInstanceMessage } from "../models/models_1";
import { deserializeAws_queryRemoveRoleFromDBInstanceCommand, serializeAws_queryRemoveRoleFromDBInstanceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates an AWS Identity and Access Management (IAM) role from a DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveRoleFromDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveRoleFromDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RemoveRoleFromDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveRoleFromDBInstanceCommandInput} for command's `input` shape.
 * @see {@link RemoveRoleFromDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveRoleFromDBInstanceCommand = /** @class */ (function (_super) {
    __extends(RemoveRoleFromDBInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveRoleFromDBInstanceCommand(input) {
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
    RemoveRoleFromDBInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "RemoveRoleFromDBInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveRoleFromDBInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveRoleFromDBInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRemoveRoleFromDBInstanceCommand(input, context);
    };
    RemoveRoleFromDBInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRemoveRoleFromDBInstanceCommand(output, context);
    };
    return RemoveRoleFromDBInstanceCommand;
}($Command));
export { RemoveRoleFromDBInstanceCommand };
//# sourceMappingURL=RemoveRoleFromDBInstanceCommand.js.map