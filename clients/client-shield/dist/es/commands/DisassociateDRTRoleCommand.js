import { __extends } from "tslib";
import { DisassociateDRTRoleRequest, DisassociateDRTRoleResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateDRTRoleCommand, serializeAws_json1_1DisassociateDRTRoleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the DDoS Response Team's (DRT) access to your AWS account.</p>
 * 	        <p>To make a <code>DisassociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTRole</code> request to remove this access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisassociateDRTRoleCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisassociateDRTRoleCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DisassociateDRTRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDRTRoleCommandInput} for command's `input` shape.
 * @see {@link DisassociateDRTRoleCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateDRTRoleCommand = /** @class */ (function (_super) {
    __extends(DisassociateDRTRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateDRTRoleCommand(input) {
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
    DisassociateDRTRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "DisassociateDRTRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateDRTRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateDRTRoleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateDRTRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateDRTRoleCommand(input, context);
    };
    DisassociateDRTRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateDRTRoleCommand(output, context);
    };
    return DisassociateDRTRoleCommand;
}($Command));
export { DisassociateDRTRoleCommand };
//# sourceMappingURL=DisassociateDRTRoleCommand.js.map