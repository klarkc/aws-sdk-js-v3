import { __extends } from "tslib";
import { DescribeHoursOfOperationRequest, DescribeHoursOfOperationResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeHoursOfOperationCommand, serializeAws_restJson1DescribeHoursOfOperationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Describes the hours of operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeHoursOfOperationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeHoursOfOperationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeHoursOfOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHoursOfOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeHoursOfOperationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHoursOfOperationCommand = /** @class */ (function (_super) {
    __extends(DescribeHoursOfOperationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHoursOfOperationCommand(input) {
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
    DescribeHoursOfOperationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DescribeHoursOfOperationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHoursOfOperationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeHoursOfOperationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHoursOfOperationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeHoursOfOperationCommand(input, context);
    };
    DescribeHoursOfOperationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeHoursOfOperationCommand(output, context);
    };
    return DescribeHoursOfOperationCommand;
}($Command));
export { DescribeHoursOfOperationCommand };
//# sourceMappingURL=DescribeHoursOfOperationCommand.js.map