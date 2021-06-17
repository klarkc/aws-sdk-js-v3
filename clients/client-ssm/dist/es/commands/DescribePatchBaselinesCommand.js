import { __extends } from "tslib";
import { DescribePatchBaselinesRequest, DescribePatchBaselinesResult } from "../models/models_1";
import { deserializeAws_json1_1DescribePatchBaselinesCommand, serializeAws_json1_1DescribePatchBaselinesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the patch baselines in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchBaselinesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchBaselinesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribePatchBaselinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePatchBaselinesCommandInput} for command's `input` shape.
 * @see {@link DescribePatchBaselinesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePatchBaselinesCommand = /** @class */ (function (_super) {
    __extends(DescribePatchBaselinesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePatchBaselinesCommand(input) {
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
    DescribePatchBaselinesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribePatchBaselinesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePatchBaselinesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePatchBaselinesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePatchBaselinesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePatchBaselinesCommand(input, context);
    };
    DescribePatchBaselinesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePatchBaselinesCommand(output, context);
    };
    return DescribePatchBaselinesCommand;
}($Command));
export { DescribePatchBaselinesCommand };
//# sourceMappingURL=DescribePatchBaselinesCommand.js.map