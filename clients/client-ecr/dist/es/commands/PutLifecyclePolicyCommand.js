import { __extends } from "tslib";
import { PutLifecyclePolicyRequest, PutLifecyclePolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1PutLifecyclePolicyCommand, serializeAws_json1_1PutLifecyclePolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates the lifecycle policy for the specified repository. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle Policy
 *                 Template</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutLifecyclePolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutLifecyclePolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link PutLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutLifecyclePolicyCommand = /** @class */ (function (_super) {
    __extends(PutLifecyclePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutLifecyclePolicyCommand(input) {
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
    PutLifecyclePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "PutLifecyclePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutLifecyclePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutLifecyclePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutLifecyclePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutLifecyclePolicyCommand(input, context);
    };
    PutLifecyclePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutLifecyclePolicyCommand(output, context);
    };
    return PutLifecyclePolicyCommand;
}($Command));
export { PutLifecyclePolicyCommand };
//# sourceMappingURL=PutLifecyclePolicyCommand.js.map