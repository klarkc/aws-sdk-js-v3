import { __extends } from "tslib";
import { DescribeContactRequest, DescribeContactResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeContactCommand, serializeAws_restJson1DescribeContactCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DescribeContactCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DescribeContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new DescribeContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContactCommandInput} for command's `input` shape.
 * @see {@link DescribeContactCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeContactCommand = /** @class */ (function (_super) {
    __extends(DescribeContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeContactCommand(input) {
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
    DescribeContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "DescribeContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeContactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeContactCommand(input, context);
    };
    DescribeContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeContactCommand(output, context);
    };
    return DescribeContactCommand;
}($Command));
export { DescribeContactCommand };
//# sourceMappingURL=DescribeContactCommand.js.map