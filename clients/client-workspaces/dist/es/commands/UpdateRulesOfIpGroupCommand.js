import { __extends } from "tslib";
import { UpdateRulesOfIpGroupRequest, UpdateRulesOfIpGroupResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateRulesOfIpGroupCommand, serializeAws_json1_1UpdateRulesOfIpGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces the current rules of the specified IP access control group with the specified
 *          rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateRulesOfIpGroupCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateRulesOfIpGroupCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new UpdateRulesOfIpGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRulesOfIpGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateRulesOfIpGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRulesOfIpGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateRulesOfIpGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRulesOfIpGroupCommand(input) {
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
    UpdateRulesOfIpGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "UpdateRulesOfIpGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRulesOfIpGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRulesOfIpGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRulesOfIpGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateRulesOfIpGroupCommand(input, context);
    };
    UpdateRulesOfIpGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateRulesOfIpGroupCommand(output, context);
    };
    return UpdateRulesOfIpGroupCommand;
}($Command));
export { UpdateRulesOfIpGroupCommand };
//# sourceMappingURL=UpdateRulesOfIpGroupCommand.js.map