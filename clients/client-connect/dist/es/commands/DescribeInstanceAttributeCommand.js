import { __extends } from "tslib";
import { DescribeInstanceAttributeRequest, DescribeInstanceAttributeResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeInstanceAttributeCommand, serializeAws_restJson1DescribeInstanceAttributeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Describes the specified instance attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeInstanceAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeInstanceAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstanceAttributeCommand = /** @class */ (function (_super) {
    __extends(DescribeInstanceAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstanceAttributeCommand(input) {
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
    DescribeInstanceAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DescribeInstanceAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstanceAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstanceAttributeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstanceAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeInstanceAttributeCommand(input, context);
    };
    DescribeInstanceAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeInstanceAttributeCommand(output, context);
    };
    return DescribeInstanceAttributeCommand;
}($Command));
export { DescribeInstanceAttributeCommand };
//# sourceMappingURL=DescribeInstanceAttributeCommand.js.map