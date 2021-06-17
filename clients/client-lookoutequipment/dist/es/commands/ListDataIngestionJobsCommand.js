import { __extends } from "tslib";
import { ListDataIngestionJobsRequest, ListDataIngestionJobsResponse } from "../models/models_0";
import { deserializeAws_json1_0ListDataIngestionJobsCommand, serializeAws_json1_0ListDataIngestionJobsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location
 *          of the input data, status, and so on. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListDataIngestionJobsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListDataIngestionJobsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new ListDataIngestionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataIngestionJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataIngestionJobsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDataIngestionJobsCommand = /** @class */ (function (_super) {
    __extends(ListDataIngestionJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDataIngestionJobsCommand(input) {
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
    ListDataIngestionJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "ListDataIngestionJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDataIngestionJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDataIngestionJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDataIngestionJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListDataIngestionJobsCommand(input, context);
    };
    ListDataIngestionJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListDataIngestionJobsCommand(output, context);
    };
    return ListDataIngestionJobsCommand;
}($Command));
export { ListDataIngestionJobsCommand };
//# sourceMappingURL=ListDataIngestionJobsCommand.js.map