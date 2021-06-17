import { __extends } from "tslib";
import { UpdateProtectionGroupRequest, UpdateProtectionGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateProtectionGroupCommand, serializeAws_json1_1UpdateProtectionGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, UpdateProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, UpdateProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new UpdateProtectionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateProtectionGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateProtectionGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateProtectionGroupCommand(input) {
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
    UpdateProtectionGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "UpdateProtectionGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateProtectionGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateProtectionGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateProtectionGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateProtectionGroupCommand(input, context);
    };
    UpdateProtectionGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateProtectionGroupCommand(output, context);
    };
    return UpdateProtectionGroupCommand;
}($Command));
export { UpdateProtectionGroupCommand };
//# sourceMappingURL=UpdateProtectionGroupCommand.js.map