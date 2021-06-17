import { __extends } from "tslib";
import { PutMetricPolicyInput, PutMetricPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1PutMetricPolicyCommand, serializeAws_json1_1PutMetricPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, PutMetricPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, PutMetricPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new PutMetricPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMetricPolicyCommandInput} for command's `input` shape.
 * @see {@link PutMetricPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutMetricPolicyCommand = /** @class */ (function (_super) {
    __extends(PutMetricPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutMetricPolicyCommand(input) {
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
    PutMetricPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "PutMetricPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutMetricPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutMetricPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutMetricPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutMetricPolicyCommand(input, context);
    };
    PutMetricPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutMetricPolicyCommand(output, context);
    };
    return PutMetricPolicyCommand;
}($Command));
export { PutMetricPolicyCommand };
//# sourceMappingURL=PutMetricPolicyCommand.js.map