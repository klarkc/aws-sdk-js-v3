import { __extends } from "tslib";
import { DeleteDBSecurityGroupMessage } from "../models/models_0";
import { deserializeAws_queryDeleteDBSecurityGroupCommand, serializeAws_queryDeleteDBSecurityGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a DB security group.</p>
 *          <note>
 *             <p>The specified DB security group must not be associated with any DB instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBSecurityGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBSecurityGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDBSecurityGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteDBSecurityGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDBSecurityGroupCommand(input) {
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
    DeleteDBSecurityGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DeleteDBSecurityGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDBSecurityGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDBSecurityGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDBSecurityGroupCommand(input, context);
    };
    DeleteDBSecurityGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDBSecurityGroupCommand(output, context);
    };
    return DeleteDBSecurityGroupCommand;
}($Command));
export { DeleteDBSecurityGroupCommand };
//# sourceMappingURL=DeleteDBSecurityGroupCommand.js.map