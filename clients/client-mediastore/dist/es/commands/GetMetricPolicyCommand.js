import { __extends } from "tslib";
import { GetMetricPolicyInput, GetMetricPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1GetMetricPolicyCommand, serializeAws_json1_1GetMetricPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the metric policy for the specified container. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, GetMetricPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, GetMetricPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new GetMetricPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMetricPolicyCommandInput} for command's `input` shape.
 * @see {@link GetMetricPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMetricPolicyCommand = /** @class */ (function (_super) {
    __extends(GetMetricPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMetricPolicyCommand(input) {
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
    GetMetricPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "GetMetricPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMetricPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetMetricPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMetricPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMetricPolicyCommand(input, context);
    };
    GetMetricPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMetricPolicyCommand(output, context);
    };
    return GetMetricPolicyCommand;
}($Command));
export { GetMetricPolicyCommand };
//# sourceMappingURL=GetMetricPolicyCommand.js.map