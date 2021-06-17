import { __extends } from "tslib";
import { ClusterParameterGroupNameMessage } from "../models/models_0";
import { ResetClusterParameterGroupMessage } from "../models/models_1";
import { deserializeAws_queryResetClusterParameterGroupCommand, serializeAws_queryResetClusterParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets one or more parameters of the specified parameter group to their default
 *             values and sets the source values of the parameters to "engine-default". To reset the
 *             entire parameter group specify the <i>ResetAllParameters</i> parameter.
 *             For parameter changes to take effect you must reboot any associated clusters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ResetClusterParameterGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ResetClusterParameterGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ResetClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetClusterParameterGroupCommand = /** @class */ (function (_super) {
    __extends(ResetClusterParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetClusterParameterGroupCommand(input) {
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
    ResetClusterParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ResetClusterParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ClusterParameterGroupNameMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetClusterParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryResetClusterParameterGroupCommand(input, context);
    };
    ResetClusterParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryResetClusterParameterGroupCommand(output, context);
    };
    return ResetClusterParameterGroupCommand;
}($Command));
export { ResetClusterParameterGroupCommand };
//# sourceMappingURL=ResetClusterParameterGroupCommand.js.map