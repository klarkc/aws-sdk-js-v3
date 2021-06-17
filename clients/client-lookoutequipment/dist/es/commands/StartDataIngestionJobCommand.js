import { __extends } from "tslib";
import { StartDataIngestionJobRequest, StartDataIngestionJobResponse } from "../models/models_0";
import { deserializeAws_json1_0StartDataIngestionJobCommand, serializeAws_json1_0StartDataIngestionJobCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, StartDataIngestionJobCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, StartDataIngestionJobCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new StartDataIngestionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDataIngestionJobCommandInput} for command's `input` shape.
 * @see {@link StartDataIngestionJobCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartDataIngestionJobCommand = /** @class */ (function (_super) {
    __extends(StartDataIngestionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartDataIngestionJobCommand(input) {
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
    StartDataIngestionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "StartDataIngestionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartDataIngestionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartDataIngestionJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartDataIngestionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0StartDataIngestionJobCommand(input, context);
    };
    StartDataIngestionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0StartDataIngestionJobCommand(output, context);
    };
    return StartDataIngestionJobCommand;
}($Command));
export { StartDataIngestionJobCommand };
//# sourceMappingURL=StartDataIngestionJobCommand.js.map