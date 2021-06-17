import { __extends } from "tslib";
import { GetBucketStatisticsRequest, GetBucketStatisticsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBucketStatisticsCommand, serializeAws_restJson1GetBucketStatisticsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves (queries) aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetBucketStatisticsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetBucketStatisticsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetBucketStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetBucketStatisticsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBucketStatisticsCommand = /** @class */ (function (_super) {
    __extends(GetBucketStatisticsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBucketStatisticsCommand(input) {
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
    GetBucketStatisticsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "GetBucketStatisticsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBucketStatisticsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBucketStatisticsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBucketStatisticsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBucketStatisticsCommand(input, context);
    };
    GetBucketStatisticsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBucketStatisticsCommand(output, context);
    };
    return GetBucketStatisticsCommand;
}($Command));
export { GetBucketStatisticsCommand };
//# sourceMappingURL=GetBucketStatisticsCommand.js.map