import { __extends } from "tslib";
import { DescribeAcceleratorAttributesRequest, DescribeAcceleratorAttributesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeAcceleratorAttributesCommand, serializeAws_json1_1DescribeAcceleratorAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe the attributes of an accelerator.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorAttributesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAcceleratorAttributesCommand = /** @class */ (function (_super) {
    __extends(DescribeAcceleratorAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAcceleratorAttributesCommand(input) {
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
    DescribeAcceleratorAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "DescribeAcceleratorAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAcceleratorAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAcceleratorAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAcceleratorAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAcceleratorAttributesCommand(input, context);
    };
    DescribeAcceleratorAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAcceleratorAttributesCommand(output, context);
    };
    return DescribeAcceleratorAttributesCommand;
}($Command));
export { DescribeAcceleratorAttributesCommand };
//# sourceMappingURL=DescribeAcceleratorAttributesCommand.js.map