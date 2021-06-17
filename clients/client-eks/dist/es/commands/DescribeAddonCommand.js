import { __extends } from "tslib";
import { DescribeAddonRequest, DescribeAddonResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAddonCommand, serializeAws_restJson1DescribeAddonCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an Amazon EKS add-on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeAddonCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeAddonCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeAddonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAddonCommandInput} for command's `input` shape.
 * @see {@link DescribeAddonCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAddonCommand = /** @class */ (function (_super) {
    __extends(DescribeAddonCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAddonCommand(input) {
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
    DescribeAddonCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "DescribeAddonCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAddonRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAddonResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAddonCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAddonCommand(input, context);
    };
    DescribeAddonCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAddonCommand(output, context);
    };
    return DescribeAddonCommand;
}($Command));
export { DescribeAddonCommand };
//# sourceMappingURL=DescribeAddonCommand.js.map