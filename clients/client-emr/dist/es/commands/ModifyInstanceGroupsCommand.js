import { __extends } from "tslib";
import { ModifyInstanceGroupsInput } from "../models/models_0";
import { deserializeAws_json1_1ModifyInstanceGroupsCommand, serializeAws_json1_1ModifyInstanceGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>ModifyInstanceGroups modifies the number of nodes and configuration settings of an
 *          instance group. The input parameters include the new target instance count for the group
 *          and the instance group ID. The call will either succeed or fail atomically.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ModifyInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ModifyInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ModifyInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyInstanceGroupsCommand = /** @class */ (function (_super) {
    __extends(ModifyInstanceGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyInstanceGroupsCommand(input) {
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
    ModifyInstanceGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "ModifyInstanceGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyInstanceGroupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyInstanceGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyInstanceGroupsCommand(input, context);
    };
    ModifyInstanceGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyInstanceGroupsCommand(output, context);
    };
    return ModifyInstanceGroupsCommand;
}($Command));
export { ModifyInstanceGroupsCommand };
//# sourceMappingURL=ModifyInstanceGroupsCommand.js.map