import { __extends } from "tslib";
import { ModifyInstanceFleetInput } from "../models/models_0";
import { deserializeAws_json1_1ModifyInstanceFleetCommand, serializeAws_json1_1ModifyInstanceFleetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the
 *          specified InstanceFleetID within the cluster specified using ClusterID. The call either
 *          succeeds or fails atomically.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ModifyInstanceFleetCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ModifyInstanceFleetCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ModifyInstanceFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceFleetCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceFleetCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyInstanceFleetCommand = /** @class */ (function (_super) {
    __extends(ModifyInstanceFleetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyInstanceFleetCommand(input) {
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
    ModifyInstanceFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "ModifyInstanceFleetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyInstanceFleetInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyInstanceFleetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyInstanceFleetCommand(input, context);
    };
    ModifyInstanceFleetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyInstanceFleetCommand(output, context);
    };
    return ModifyInstanceFleetCommand;
}($Command));
export { ModifyInstanceFleetCommand };
//# sourceMappingURL=ModifyInstanceFleetCommand.js.map