import { __extends } from "tslib";
import { DescribeInstanceStorageConfigRequest, DescribeInstanceStorageConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeInstanceStorageConfigCommand, serializeAws_restJson1DescribeInstanceStorageConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Retrieves the current storage configurations for the specified resource type, association
 *    ID, and instance ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceStorageConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstanceStorageConfigCommand = /** @class */ (function (_super) {
    __extends(DescribeInstanceStorageConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstanceStorageConfigCommand(input) {
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
    DescribeInstanceStorageConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DescribeInstanceStorageConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstanceStorageConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstanceStorageConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstanceStorageConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeInstanceStorageConfigCommand(input, context);
    };
    DescribeInstanceStorageConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeInstanceStorageConfigCommand(output, context);
    };
    return DescribeInstanceStorageConfigCommand;
}($Command));
export { DescribeInstanceStorageConfigCommand };
//# sourceMappingURL=DescribeInstanceStorageConfigCommand.js.map