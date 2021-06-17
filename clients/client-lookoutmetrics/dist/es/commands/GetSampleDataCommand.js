import { __extends } from "tslib";
import { GetSampleDataRequest, GetSampleDataResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSampleDataCommand, serializeAws_restJson1GetSampleDataCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a selection of sample records from an Amazon S3 datasource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetSampleDataCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetSampleDataCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new GetSampleDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSampleDataCommandInput} for command's `input` shape.
 * @see {@link GetSampleDataCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSampleDataCommand = /** @class */ (function (_super) {
    __extends(GetSampleDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSampleDataCommand(input) {
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
    GetSampleDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "GetSampleDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSampleDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSampleDataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSampleDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSampleDataCommand(input, context);
    };
    GetSampleDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSampleDataCommand(output, context);
    };
    return GetSampleDataCommand;
}($Command));
export { GetSampleDataCommand };
//# sourceMappingURL=GetSampleDataCommand.js.map