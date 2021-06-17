import { __extends } from "tslib";
import { UpdateColumnStatisticsForPartitionRequest, UpdateColumnStatisticsForPartitionResponse, } from "../models/models_1";
import { deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommand, serializeAws_json1_1UpdateColumnStatisticsForPartitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates partition statistics of columns.</p>
 *
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdatePartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateColumnStatisticsForPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateColumnStatisticsForPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateColumnStatisticsForPartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateColumnStatisticsForPartitionCommandInput} for command's `input` shape.
 * @see {@link UpdateColumnStatisticsForPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateColumnStatisticsForPartitionCommand = /** @class */ (function (_super) {
    __extends(UpdateColumnStatisticsForPartitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateColumnStatisticsForPartitionCommand(input) {
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
    UpdateColumnStatisticsForPartitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateColumnStatisticsForPartitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateColumnStatisticsForPartitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateColumnStatisticsForPartitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateColumnStatisticsForPartitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateColumnStatisticsForPartitionCommand(input, context);
    };
    UpdateColumnStatisticsForPartitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommand(output, context);
    };
    return UpdateColumnStatisticsForPartitionCommand;
}($Command));
export { UpdateColumnStatisticsForPartitionCommand };
//# sourceMappingURL=UpdateColumnStatisticsForPartitionCommand.js.map