import { __extends } from "tslib";
import { PutResourcePolicyInput, PutResourcePolicyOutput } from "../models/models_0";
import { deserializeAws_restJson1PutResourcePolicyCommand, serializeAws_restJson1PutResourcePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a resource policy to the specified response plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, PutResourcePolicyCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, PutResourcePolicyCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutResourcePolicyCommand = /** @class */ (function (_super) {
    __extends(PutResourcePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutResourcePolicyCommand(input) {
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
    PutResourcePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "PutResourcePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutResourcePolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutResourcePolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutResourcePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutResourcePolicyCommand(input, context);
    };
    PutResourcePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutResourcePolicyCommand(output, context);
    };
    return PutResourcePolicyCommand;
}($Command));
export { PutResourcePolicyCommand };
//# sourceMappingURL=PutResourcePolicyCommand.js.map