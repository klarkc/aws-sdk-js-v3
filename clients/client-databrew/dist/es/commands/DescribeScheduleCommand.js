import { __extends } from "tslib";
import { DescribeScheduleRequest, DescribeScheduleResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeScheduleCommand, serializeAws_restJson1DescribeScheduleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the definition of a specific DataBrew schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeScheduleCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeScheduleCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DescribeScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduleCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScheduleCommand = /** @class */ (function (_super) {
    __extends(DescribeScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeScheduleCommand(input) {
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
    DescribeScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "DescribeScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeScheduleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeScheduleCommand(input, context);
    };
    DescribeScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeScheduleCommand(output, context);
    };
    return DescribeScheduleCommand;
}($Command));
export { DescribeScheduleCommand };
//# sourceMappingURL=DescribeScheduleCommand.js.map