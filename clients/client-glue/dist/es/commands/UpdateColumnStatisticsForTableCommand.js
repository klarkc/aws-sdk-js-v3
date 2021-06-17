import { __extends } from "tslib";
import { UpdateColumnStatisticsForTableRequest, UpdateColumnStatisticsForTableResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateColumnStatisticsForTableCommand, serializeAws_json1_1UpdateColumnStatisticsForTableCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates table statistics of columns.</p>
 *
 * 	        <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateColumnStatisticsForTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateColumnStatisticsForTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateColumnStatisticsForTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateColumnStatisticsForTableCommandInput} for command's `input` shape.
 * @see {@link UpdateColumnStatisticsForTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateColumnStatisticsForTableCommand = /** @class */ (function (_super) {
    __extends(UpdateColumnStatisticsForTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateColumnStatisticsForTableCommand(input) {
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
    UpdateColumnStatisticsForTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateColumnStatisticsForTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateColumnStatisticsForTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateColumnStatisticsForTableResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateColumnStatisticsForTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateColumnStatisticsForTableCommand(input, context);
    };
    UpdateColumnStatisticsForTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateColumnStatisticsForTableCommand(output, context);
    };
    return UpdateColumnStatisticsForTableCommand;
}($Command));
export { UpdateColumnStatisticsForTableCommand };
//# sourceMappingURL=UpdateColumnStatisticsForTableCommand.js.map