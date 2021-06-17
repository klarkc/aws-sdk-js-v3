import { __extends } from "tslib";
import { StartDataSourceSyncJobRequest, StartDataSourceSyncJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StartDataSourceSyncJobCommand, serializeAws_json1_1StartDataSourceSyncJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a synchronization job for a data source. If a synchronization
 *       job is already in progress, Amazon Kendra returns a
 *         <code>ResourceInUseException</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, StartDataSourceSyncJobCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, StartDataSourceSyncJobCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new StartDataSourceSyncJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDataSourceSyncJobCommandInput} for command's `input` shape.
 * @see {@link StartDataSourceSyncJobCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartDataSourceSyncJobCommand = /** @class */ (function (_super) {
    __extends(StartDataSourceSyncJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartDataSourceSyncJobCommand(input) {
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
    StartDataSourceSyncJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "StartDataSourceSyncJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartDataSourceSyncJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartDataSourceSyncJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartDataSourceSyncJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartDataSourceSyncJobCommand(input, context);
    };
    StartDataSourceSyncJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartDataSourceSyncJobCommand(output, context);
    };
    return StartDataSourceSyncJobCommand;
}($Command));
export { StartDataSourceSyncJobCommand };
//# sourceMappingURL=StartDataSourceSyncJobCommand.js.map