import { __extends } from "tslib";
import { ModifyClusterInput, ModifyClusterOutput } from "../models/models_0";
import { deserializeAws_json1_1ModifyClusterCommand, serializeAws_json1_1ModifyClusterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the number of steps that can be executed concurrently for the cluster specified
 *          using ClusterID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ModifyClusterCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ModifyClusterCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ModifyClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyClusterCommand = /** @class */ (function (_super) {
    __extends(ModifyClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyClusterCommand(input) {
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
    ModifyClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "ModifyClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyClusterInput.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyClusterOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyClusterCommand(input, context);
    };
    ModifyClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyClusterCommand(output, context);
    };
    return ModifyClusterCommand;
}($Command));
export { ModifyClusterCommand };
//# sourceMappingURL=ModifyClusterCommand.js.map