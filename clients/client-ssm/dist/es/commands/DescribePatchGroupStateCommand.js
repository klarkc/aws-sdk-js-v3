import { __extends } from "tslib";
import { DescribePatchGroupStateRequest, DescribePatchGroupStateResult } from "../models/models_1";
import { deserializeAws_json1_1DescribePatchGroupStateCommand, serializeAws_json1_1DescribePatchGroupStateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns high-level aggregated patch compliance state for a patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchGroupStateCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchGroupStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribePatchGroupStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePatchGroupStateCommandInput} for command's `input` shape.
 * @see {@link DescribePatchGroupStateCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePatchGroupStateCommand = /** @class */ (function (_super) {
    __extends(DescribePatchGroupStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePatchGroupStateCommand(input) {
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
    DescribePatchGroupStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribePatchGroupStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePatchGroupStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePatchGroupStateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePatchGroupStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePatchGroupStateCommand(input, context);
    };
    DescribePatchGroupStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePatchGroupStateCommand(output, context);
    };
    return DescribePatchGroupStateCommand;
}($Command));
export { DescribePatchGroupStateCommand };
//# sourceMappingURL=DescribePatchGroupStateCommand.js.map