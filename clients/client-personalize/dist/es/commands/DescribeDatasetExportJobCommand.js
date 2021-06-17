import { __extends } from "tslib";
import { DescribeDatasetExportJobRequest, DescribeDatasetExportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDatasetExportJobCommand, serializeAws_json1_1DescribeDatasetExportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the dataset export job created by <a>CreateDatasetExportJob</a>,
 *       including the export job status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeDatasetExportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeDatasetExportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeDatasetExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatasetExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetExportJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDatasetExportJobCommand = /** @class */ (function (_super) {
    __extends(DescribeDatasetExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDatasetExportJobCommand(input) {
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
    DescribeDatasetExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DescribeDatasetExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDatasetExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDatasetExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDatasetExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDatasetExportJobCommand(input, context);
    };
    DescribeDatasetExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDatasetExportJobCommand(output, context);
    };
    return DescribeDatasetExportJobCommand;
}($Command));
export { DescribeDatasetExportJobCommand };
//# sourceMappingURL=DescribeDatasetExportJobCommand.js.map