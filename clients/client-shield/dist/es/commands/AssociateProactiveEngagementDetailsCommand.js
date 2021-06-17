import { __extends } from "tslib";
import { AssociateProactiveEngagementDetailsRequest, AssociateProactiveEngagementDetailsResponse, } from "../models/models_0";
import { deserializeAws_json1_1AssociateProactiveEngagementDetailsCommand, serializeAws_json1_1AssociateProactiveEngagementDetailsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initializes proactive engagement and sets the list of contacts for the DDoS Response Team (DRT) to use. You must provide at least one phone number in the emergency contact list. </p>
 *          <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>.  </p>
 *          <note>
 *             <p>This call defines the list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you for escalations to the DRT and to initiate proactive customer support.</p>
 *             <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call.  </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, AssociateProactiveEngagementDetailsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, AssociateProactiveEngagementDetailsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new AssociateProactiveEngagementDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateProactiveEngagementDetailsCommandInput} for command's `input` shape.
 * @see {@link AssociateProactiveEngagementDetailsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateProactiveEngagementDetailsCommand = /** @class */ (function (_super) {
    __extends(AssociateProactiveEngagementDetailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateProactiveEngagementDetailsCommand(input) {
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
    AssociateProactiveEngagementDetailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "AssociateProactiveEngagementDetailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateProactiveEngagementDetailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateProactiveEngagementDetailsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateProactiveEngagementDetailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateProactiveEngagementDetailsCommand(input, context);
    };
    AssociateProactiveEngagementDetailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateProactiveEngagementDetailsCommand(output, context);
    };
    return AssociateProactiveEngagementDetailsCommand;
}($Command));
export { AssociateProactiveEngagementDetailsCommand };
//# sourceMappingURL=AssociateProactiveEngagementDetailsCommand.js.map