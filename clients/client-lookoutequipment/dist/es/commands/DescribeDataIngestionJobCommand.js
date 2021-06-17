import { __extends } from "tslib";
import { DescribeDataIngestionJobRequest, DescribeDataIngestionJobResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeDataIngestionJobCommand, serializeAws_json1_0DescribeDataIngestionJobCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information on a specific data ingestion job such as creation time, dataset
 *          ARN, status, and so on. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeDataIngestionJobCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeDataIngestionJobCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new DescribeDataIngestionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataIngestionJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDataIngestionJobCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDataIngestionJobCommand = /** @class */ (function (_super) {
    __extends(DescribeDataIngestionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDataIngestionJobCommand(input) {
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
    DescribeDataIngestionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "DescribeDataIngestionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDataIngestionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDataIngestionJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDataIngestionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeDataIngestionJobCommand(input, context);
    };
    DescribeDataIngestionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeDataIngestionJobCommand(output, context);
    };
    return DescribeDataIngestionJobCommand;
}($Command));
export { DescribeDataIngestionJobCommand };
//# sourceMappingURL=DescribeDataIngestionJobCommand.js.map