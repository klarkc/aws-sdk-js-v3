import { __extends } from "tslib";
import { StopDataSourceSyncJobRequest } from "../models/models_0";
import { deserializeAws_json1_1StopDataSourceSyncJobCommand, serializeAws_json1_1StopDataSourceSyncJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a running synchronization job. You can't stop a scheduled
 *       synchronization job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, StopDataSourceSyncJobCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, StopDataSourceSyncJobCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new StopDataSourceSyncJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDataSourceSyncJobCommandInput} for command's `input` shape.
 * @see {@link StopDataSourceSyncJobCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopDataSourceSyncJobCommand = /** @class */ (function (_super) {
    __extends(StopDataSourceSyncJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopDataSourceSyncJobCommand(input) {
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
    StopDataSourceSyncJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "StopDataSourceSyncJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopDataSourceSyncJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopDataSourceSyncJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopDataSourceSyncJobCommand(input, context);
    };
    StopDataSourceSyncJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopDataSourceSyncJobCommand(output, context);
    };
    return StopDataSourceSyncJobCommand;
}($Command));
export { StopDataSourceSyncJobCommand };
//# sourceMappingURL=StopDataSourceSyncJobCommand.js.map