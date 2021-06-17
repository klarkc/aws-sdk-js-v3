import { __extends } from "tslib";
import { DescribeServerRequest, DescribeServerResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeServerCommand, serializeAws_json1_1DescribeServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a file transfer protocol-enabled server that you specify by passing the
 *         <code>ServerId</code> parameter.</p>
 *
 *          <p>The response contains a description of a server's properties. When you set
 *         <code>EndpointType</code> to VPC, the response will contain the
 *       <code>EndpointDetails</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DescribeServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServerCommandInput} for command's `input` shape.
 * @see {@link DescribeServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeServerCommand = /** @class */ (function (_super) {
    __extends(DescribeServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeServerCommand(input) {
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
    DescribeServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "DescribeServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeServerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeServerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeServerCommand(input, context);
    };
    DescribeServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeServerCommand(output, context);
    };
    return DescribeServerCommand;
}($Command));
export { DescribeServerCommand };
//# sourceMappingURL=DescribeServerCommand.js.map