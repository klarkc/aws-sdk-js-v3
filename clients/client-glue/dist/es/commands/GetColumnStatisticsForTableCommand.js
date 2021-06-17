import { __extends } from "tslib";
import { GetColumnStatisticsForTableRequest, GetColumnStatisticsForTableResponse } from "../models/models_0";
import { deserializeAws_json1_1GetColumnStatisticsForTableCommand, serializeAws_json1_1GetColumnStatisticsForTableCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves table statistics of columns.</p>
 *
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsForTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsForTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetColumnStatisticsForTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetColumnStatisticsForTableCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsForTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetColumnStatisticsForTableCommand = /** @class */ (function (_super) {
    __extends(GetColumnStatisticsForTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetColumnStatisticsForTableCommand(input) {
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
    GetColumnStatisticsForTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetColumnStatisticsForTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetColumnStatisticsForTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetColumnStatisticsForTableResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetColumnStatisticsForTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetColumnStatisticsForTableCommand(input, context);
    };
    GetColumnStatisticsForTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetColumnStatisticsForTableCommand(output, context);
    };
    return GetColumnStatisticsForTableCommand;
}($Command));
export { GetColumnStatisticsForTableCommand };
//# sourceMappingURL=GetColumnStatisticsForTableCommand.js.map