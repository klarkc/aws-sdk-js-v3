import { __extends } from "tslib";
import { DescribeProtectionRequest, DescribeProtectionResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeProtectionCommand, serializeAws_json1_1DescribeProtectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the details of a <a>Protection</a> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeProtectionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeProtectionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DescribeProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProtectionCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProtectionCommand = /** @class */ (function (_super) {
    __extends(DescribeProtectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProtectionCommand(input) {
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
    DescribeProtectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "DescribeProtectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProtectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProtectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProtectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeProtectionCommand(input, context);
    };
    DescribeProtectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeProtectionCommand(output, context);
    };
    return DescribeProtectionCommand;
}($Command));
export { DescribeProtectionCommand };
//# sourceMappingURL=DescribeProtectionCommand.js.map