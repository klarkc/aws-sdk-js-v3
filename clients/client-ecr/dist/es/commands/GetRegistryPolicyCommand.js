import { __extends } from "tslib";
import { GetRegistryPolicyRequest, GetRegistryPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetRegistryPolicyCommand, serializeAws_json1_1GetRegistryPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the permissions policy for a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRegistryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRegistryPolicyCommand = /** @class */ (function (_super) {
    __extends(GetRegistryPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRegistryPolicyCommand(input) {
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
    GetRegistryPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "GetRegistryPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRegistryPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRegistryPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRegistryPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRegistryPolicyCommand(input, context);
    };
    GetRegistryPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRegistryPolicyCommand(output, context);
    };
    return GetRegistryPolicyCommand;
}($Command));
export { GetRegistryPolicyCommand };
//# sourceMappingURL=GetRegistryPolicyCommand.js.map