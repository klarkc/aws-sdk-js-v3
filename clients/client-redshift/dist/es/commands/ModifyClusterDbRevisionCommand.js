import { __extends } from "tslib";
import { ModifyClusterDbRevisionMessage, ModifyClusterDbRevisionResult } from "../models/models_1";
import { deserializeAws_queryModifyClusterDbRevisionCommand, serializeAws_queryModifyClusterDbRevisionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the database revision of a cluster. The database revision is a unique
 *             revision of the database running in a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterDbRevisionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterDbRevisionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterDbRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterDbRevisionCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterDbRevisionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyClusterDbRevisionCommand = /** @class */ (function (_super) {
    __extends(ModifyClusterDbRevisionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyClusterDbRevisionCommand(input) {
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
    ModifyClusterDbRevisionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifyClusterDbRevisionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyClusterDbRevisionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyClusterDbRevisionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyClusterDbRevisionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyClusterDbRevisionCommand(input, context);
    };
    ModifyClusterDbRevisionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyClusterDbRevisionCommand(output, context);
    };
    return ModifyClusterDbRevisionCommand;
}($Command));
export { ModifyClusterDbRevisionCommand };
//# sourceMappingURL=ModifyClusterDbRevisionCommand.js.map