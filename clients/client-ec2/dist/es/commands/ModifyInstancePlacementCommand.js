import { __extends } from "tslib";
import { ModifyInstancePlacementRequest, ModifyInstancePlacementResult } from "../models/models_4";
import { deserializeAws_ec2ModifyInstancePlacementCommand, serializeAws_ec2ModifyInstancePlacementCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the placement attributes for a specified instance. You can do the
 *             following:</p>
 *         <ul>
 *             <li>
 *                 <p>Modify the affinity between an instance and a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated
 *                         Host</a>. When affinity is set to <code>host</code> and the instance is
 *                     not associated with a specific Dedicated Host, the next time the instance is
 *                     launched, it is automatically associated with the host on which it lands. If the
 *                     instance is restarted or rebooted, this relationship persists.</p>
 *             </li>
 *             <li>
 *                 <p>Change the Dedicated Host with which an instance is associated.</p>
 *             </li>
 *             <li>
 *                 <p>Change the instance tenancy of an instance from <code>host</code> to
 *                         <code>dedicated</code>, or from <code>dedicated</code> to
 *                     <code>host</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Move an instance to or from a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">placement
 *                     group</a>.</p>
 *             </li>
 *          </ul>
 *         <p>At least one attribute for affinity, host ID, tenancy, or placement group name must
 *             be specified in the request. Affinity and tenancy can be modified in the same
 *             request.</p>
 *         <p>To modify the host ID, tenancy, placement group, or partition for an instance, the
 *             instance must be in the <code>stopped</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstancePlacementCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstancePlacementCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstancePlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstancePlacementCommandInput} for command's `input` shape.
 * @see {@link ModifyInstancePlacementCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyInstancePlacementCommand = /** @class */ (function (_super) {
    __extends(ModifyInstancePlacementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyInstancePlacementCommand(input) {
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
    ModifyInstancePlacementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyInstancePlacementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyInstancePlacementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyInstancePlacementResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyInstancePlacementCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyInstancePlacementCommand(input, context);
    };
    ModifyInstancePlacementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyInstancePlacementCommand(output, context);
    };
    return ModifyInstancePlacementCommand;
}($Command));
export { ModifyInstancePlacementCommand };
//# sourceMappingURL=ModifyInstancePlacementCommand.js.map