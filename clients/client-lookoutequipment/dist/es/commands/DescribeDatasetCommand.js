import { __extends } from "tslib";
import { DescribeDatasetRequest, DescribeDatasetResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeDatasetCommand, serializeAws_json1_0DescribeDatasetCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information on a specified dataset such as the schema location, status, and so
 *          on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeDatasetCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeDatasetCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new DescribeDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatasetCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDatasetCommand = /** @class */ (function (_super) {
    __extends(DescribeDatasetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDatasetCommand(input) {
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
    DescribeDatasetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "DescribeDatasetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDatasetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDatasetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDatasetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeDatasetCommand(input, context);
    };
    DescribeDatasetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeDatasetCommand(output, context);
    };
    return DescribeDatasetCommand;
}($Command));
export { DescribeDatasetCommand };
//# sourceMappingURL=DescribeDatasetCommand.js.map