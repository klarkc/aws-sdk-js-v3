import { __extends } from "tslib";
import { DescribeProtectionGroupRequest, DescribeProtectionGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeProtectionGroupCommand, serializeAws_json1_1DescribeProtectionGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the specification for the specified protection group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DescribeProtectionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProtectionGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeProtectionGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProtectionGroupCommand(input) {
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
    DescribeProtectionGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "DescribeProtectionGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProtectionGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProtectionGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProtectionGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeProtectionGroupCommand(input, context);
    };
    DescribeProtectionGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeProtectionGroupCommand(output, context);
    };
    return DescribeProtectionGroupCommand;
}($Command));
export { DescribeProtectionGroupCommand };
//# sourceMappingURL=DescribeProtectionGroupCommand.js.map