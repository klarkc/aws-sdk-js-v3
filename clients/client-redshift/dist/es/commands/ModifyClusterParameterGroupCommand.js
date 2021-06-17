import { __extends } from "tslib";
import { ClusterParameterGroupNameMessage } from "../models/models_0";
import { ModifyClusterParameterGroupMessage } from "../models/models_1";
import { deserializeAws_queryModifyClusterParameterGroupCommand, serializeAws_queryModifyClusterParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the parameters of a parameter group.</p>
 *         <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterParameterGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterParameterGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyClusterParameterGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyClusterParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyClusterParameterGroupCommand(input) {
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
    ModifyClusterParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifyClusterParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ClusterParameterGroupNameMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyClusterParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyClusterParameterGroupCommand(input, context);
    };
    ModifyClusterParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyClusterParameterGroupCommand(output, context);
    };
    return ModifyClusterParameterGroupCommand;
}($Command));
export { ModifyClusterParameterGroupCommand };
//# sourceMappingURL=ModifyClusterParameterGroupCommand.js.map