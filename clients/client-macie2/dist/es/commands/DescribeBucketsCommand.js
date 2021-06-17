import { __extends } from "tslib";
import { DescribeBucketsRequest, DescribeBucketsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeBucketsCommand, serializeAws_restJson1DescribeBucketsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DescribeBucketsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DescribeBucketsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DescribeBucketsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBucketsCommandInput} for command's `input` shape.
 * @see {@link DescribeBucketsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBucketsCommand = /** @class */ (function (_super) {
    __extends(DescribeBucketsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBucketsCommand(input) {
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
    DescribeBucketsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "DescribeBucketsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBucketsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBucketsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBucketsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeBucketsCommand(input, context);
    };
    DescribeBucketsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeBucketsCommand(output, context);
    };
    return DescribeBucketsCommand;
}($Command));
export { DescribeBucketsCommand };
//# sourceMappingURL=DescribeBucketsCommand.js.map