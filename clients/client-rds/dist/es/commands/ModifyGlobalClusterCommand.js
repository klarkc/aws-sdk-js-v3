import { __extends } from "tslib";
import { ModifyGlobalClusterMessage, ModifyGlobalClusterResult } from "../models/models_1";
import { deserializeAws_queryModifyGlobalClusterCommand, serializeAws_queryModifyGlobalClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration
 *         parameters by specifying these parameters and the new values in the request. For more information on
 *         Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the
 *         <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyGlobalClusterCommand = /** @class */ (function (_super) {
    __extends(ModifyGlobalClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyGlobalClusterCommand(input) {
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
    ModifyGlobalClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "ModifyGlobalClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyGlobalClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyGlobalClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyGlobalClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyGlobalClusterCommand(input, context);
    };
    ModifyGlobalClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyGlobalClusterCommand(output, context);
    };
    return ModifyGlobalClusterCommand;
}($Command));
export { ModifyGlobalClusterCommand };
//# sourceMappingURL=ModifyGlobalClusterCommand.js.map