import { __extends } from "tslib";
import { DescribeClassificationJobRequest, DescribeClassificationJobResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeClassificationJobCommand, serializeAws_restJson1DescribeClassificationJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the status and settings for a classification job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DescribeClassificationJobCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DescribeClassificationJobCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DescribeClassificationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClassificationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeClassificationJobCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClassificationJobCommand = /** @class */ (function (_super) {
    __extends(DescribeClassificationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClassificationJobCommand(input) {
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
    DescribeClassificationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "DescribeClassificationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClassificationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeClassificationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClassificationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeClassificationJobCommand(input, context);
    };
    DescribeClassificationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeClassificationJobCommand(output, context);
    };
    return DescribeClassificationJobCommand;
}($Command));
export { DescribeClassificationJobCommand };
//# sourceMappingURL=DescribeClassificationJobCommand.js.map