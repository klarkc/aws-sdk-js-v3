import { __extends } from "tslib";
import { CreatePolicyVersionRequest, CreatePolicyVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreatePolicyVersionCommand, serializeAws_restJson1CreatePolicyVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new version of the specified AWS IoT policy. To update a policy, create a
 *          new policy version. A managed policy can have up to five versions. If the policy has five
 *          versions, you must use <a>DeletePolicyVersion</a> to delete an existing version
 *          before you create a new one.</p>
 *          <p>Optionally, you can set the new version as the policy's default version. The default
 *          version is the operative version (that is, the version that is in effect for the
 *          certificates to which the policy is attached).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreatePolicyVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreatePolicyVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreatePolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePolicyVersionCommand = /** @class */ (function (_super) {
    __extends(CreatePolicyVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePolicyVersionCommand(input) {
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
    CreatePolicyVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreatePolicyVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePolicyVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePolicyVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePolicyVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePolicyVersionCommand(input, context);
    };
    CreatePolicyVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePolicyVersionCommand(output, context);
    };
    return CreatePolicyVersionCommand;
}($Command));
export { CreatePolicyVersionCommand };
//# sourceMappingURL=CreatePolicyVersionCommand.js.map