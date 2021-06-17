import { __extends } from "tslib";
import { DeleteDBInstanceMessage, DeleteDBInstanceResult } from "../models/models_0";
import { deserializeAws_queryDeleteDBInstanceCommand, serializeAws_queryDeleteDBInstanceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a previously provisioned instance.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DeleteDBInstanceCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DeleteDBInstanceCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DeleteDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDBInstanceCommand = /** @class */ (function (_super) {
    __extends(DeleteDBInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDBInstanceCommand(input) {
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
    DeleteDBInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "DeleteDBInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDBInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDBInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDBInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDBInstanceCommand(input, context);
    };
    DeleteDBInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDBInstanceCommand(output, context);
    };
    return DeleteDBInstanceCommand;
}($Command));
export { DeleteDBInstanceCommand };
//# sourceMappingURL=DeleteDBInstanceCommand.js.map