import { __extends } from "tslib";
import { DeleteClusterSubnetGroupMessage } from "../models/models_0";
import { deserializeAws_queryDeleteClusterSubnetGroupCommand, serializeAws_queryDeleteClusterSubnetGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified cluster subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterSubnetGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteClusterSubnetGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteClusterSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteClusterSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteClusterSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteClusterSubnetGroupCommand(input) {
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
    DeleteClusterSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DeleteClusterSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteClusterSubnetGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteClusterSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteClusterSubnetGroupCommand(input, context);
    };
    DeleteClusterSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteClusterSubnetGroupCommand(output, context);
    };
    return DeleteClusterSubnetGroupCommand;
}($Command));
export { DeleteClusterSubnetGroupCommand };
//# sourceMappingURL=DeleteClusterSubnetGroupCommand.js.map