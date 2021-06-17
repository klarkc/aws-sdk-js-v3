import { __extends } from "tslib";
import { PutRegistryPolicyRequest, PutRegistryPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1PutRegistryPolicyCommand, serializeAws_json1_1PutRegistryPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates the permissions policy for your registry.</p>
 *         <p>A registry policy is used to specify permissions for another AWS account and is used
 *             when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRegistryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRegistryPolicyCommand = /** @class */ (function (_super) {
    __extends(PutRegistryPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutRegistryPolicyCommand(input) {
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
    PutRegistryPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "PutRegistryPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutRegistryPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutRegistryPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutRegistryPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutRegistryPolicyCommand(input, context);
    };
    PutRegistryPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutRegistryPolicyCommand(output, context);
    };
    return PutRegistryPolicyCommand;
}($Command));
export { PutRegistryPolicyCommand };
//# sourceMappingURL=PutRegistryPolicyCommand.js.map