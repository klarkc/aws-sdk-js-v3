import { __extends } from "tslib";
import { DescribeChapCredentialsInput, DescribeChapCredentialsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeChapCredentialsCommand, serializeAws_json1_1DescribeChapCredentialsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials
 *          information for a specified iSCSI target, one for each target-initiator pair. This
 *          operation is supported in the volume and tape gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeChapCredentialsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeChapCredentialsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeChapCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChapCredentialsCommandInput} for command's `input` shape.
 * @see {@link DescribeChapCredentialsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeChapCredentialsCommand = /** @class */ (function (_super) {
    __extends(DescribeChapCredentialsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeChapCredentialsCommand(input) {
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
    DescribeChapCredentialsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeChapCredentialsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeChapCredentialsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeChapCredentialsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeChapCredentialsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeChapCredentialsCommand(input, context);
    };
    DescribeChapCredentialsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeChapCredentialsCommand(output, context);
    };
    return DescribeChapCredentialsCommand;
}($Command));
export { DescribeChapCredentialsCommand };
//# sourceMappingURL=DescribeChapCredentialsCommand.js.map