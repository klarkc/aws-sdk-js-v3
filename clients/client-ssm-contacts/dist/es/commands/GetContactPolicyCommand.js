import { __extends } from "tslib";
import { GetContactPolicyRequest, GetContactPolicyResult } from "../models/models_0";
import { deserializeAws_json1_1GetContactPolicyCommand, serializeAws_json1_1GetContactPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the resource policies attached to the specified contact or escalation
 *          plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, GetContactPolicyCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, GetContactPolicyCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new GetContactPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContactPolicyCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContactPolicyCommand = /** @class */ (function (_super) {
    __extends(GetContactPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContactPolicyCommand(input) {
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
    GetContactPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "GetContactPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContactPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContactPolicyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContactPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetContactPolicyCommand(input, context);
    };
    GetContactPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetContactPolicyCommand(output, context);
    };
    return GetContactPolicyCommand;
}($Command));
export { GetContactPolicyCommand };
//# sourceMappingURL=GetContactPolicyCommand.js.map