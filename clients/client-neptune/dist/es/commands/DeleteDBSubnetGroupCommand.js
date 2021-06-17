import { __extends } from "tslib";
import { DeleteDBSubnetGroupMessage } from "../models/models_0";
import { deserializeAws_queryDeleteDBSubnetGroupCommand, serializeAws_queryDeleteDBSubnetGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a DB subnet group.</p>
 *          <note>
 *             <p>The specified database subnet group must not be associated with any DB instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBSubnetGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBSubnetGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DeleteDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDBSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteDBSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDBSubnetGroupCommand(input) {
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
    DeleteDBSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "DeleteDBSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDBSubnetGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDBSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDBSubnetGroupCommand(input, context);
    };
    DeleteDBSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDBSubnetGroupCommand(output, context);
    };
    return DeleteDBSubnetGroupCommand;
}($Command));
export { DeleteDBSubnetGroupCommand };
//# sourceMappingURL=DeleteDBSubnetGroupCommand.js.map