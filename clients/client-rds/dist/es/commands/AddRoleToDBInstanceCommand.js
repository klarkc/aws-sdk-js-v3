import { __extends } from "tslib";
import { AddRoleToDBInstanceMessage } from "../models/models_0";
import { deserializeAws_queryAddRoleToDBInstanceCommand, serializeAws_queryAddRoleToDBInstanceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates an AWS Identity and Access Management (IAM) role with a DB instance.</p>
 *         <note>
 *             <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AddRoleToDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AddRoleToDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new AddRoleToDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddRoleToDBInstanceCommandInput} for command's `input` shape.
 * @see {@link AddRoleToDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddRoleToDBInstanceCommand = /** @class */ (function (_super) {
    __extends(AddRoleToDBInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddRoleToDBInstanceCommand(input) {
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
    AddRoleToDBInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "AddRoleToDBInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddRoleToDBInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddRoleToDBInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAddRoleToDBInstanceCommand(input, context);
    };
    AddRoleToDBInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAddRoleToDBInstanceCommand(output, context);
    };
    return AddRoleToDBInstanceCommand;
}($Command));
export { AddRoleToDBInstanceCommand };
//# sourceMappingURL=AddRoleToDBInstanceCommand.js.map