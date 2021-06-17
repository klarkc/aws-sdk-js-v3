import { __extends } from "tslib";
import { GetColumnStatisticsForPartitionRequest, GetColumnStatisticsForPartitionResponse } from "../models/models_0";
import { deserializeAws_json1_1GetColumnStatisticsForPartitionCommand, serializeAws_json1_1GetColumnStatisticsForPartitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves partition statistics of columns.</p>
 *
 * 	        <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsForPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsForPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetColumnStatisticsForPartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetColumnStatisticsForPartitionCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsForPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetColumnStatisticsForPartitionCommand = /** @class */ (function (_super) {
    __extends(GetColumnStatisticsForPartitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetColumnStatisticsForPartitionCommand(input) {
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
    GetColumnStatisticsForPartitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetColumnStatisticsForPartitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetColumnStatisticsForPartitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetColumnStatisticsForPartitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetColumnStatisticsForPartitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetColumnStatisticsForPartitionCommand(input, context);
    };
    GetColumnStatisticsForPartitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetColumnStatisticsForPartitionCommand(output, context);
    };
    return GetColumnStatisticsForPartitionCommand;
}($Command));
export { GetColumnStatisticsForPartitionCommand };
//# sourceMappingURL=GetColumnStatisticsForPartitionCommand.js.map