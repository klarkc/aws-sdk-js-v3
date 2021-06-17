import { __extends } from "tslib";
import { StartSupportDataExportRequest, StartSupportDataExportResult } from "../models/models_0";
import { deserializeAws_json1_1StartSupportDataExportCommand, serializeAws_json1_1StartSupportDataExportCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Given a data set type and a from date, asynchronously publishes the requested customer support data
 *         to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request
 *         identifier that can be used to correlate requests with notifications from the SNS topic.
 *         Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv.
 *         If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will
 *         be overwritten by the new file.
 *         Requires a Role with an attached permissions policy providing Allow permissions for the following actions:
 *         s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCommerceAnalyticsClient, StartSupportDataExportCommand } from "@aws-sdk/client-marketplace-commerce-analytics"; // ES Modules import
 * // const { MarketplaceCommerceAnalyticsClient, StartSupportDataExportCommand } = require("@aws-sdk/client-marketplace-commerce-analytics"); // CommonJS import
 * const client = new MarketplaceCommerceAnalyticsClient(config);
 * const command = new StartSupportDataExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSupportDataExportCommandInput} for command's `input` shape.
 * @see {@link StartSupportDataExportCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCommerceAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartSupportDataExportCommand = /** @class */ (function (_super) {
    __extends(StartSupportDataExportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartSupportDataExportCommand(input) {
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
    StartSupportDataExportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MarketplaceCommerceAnalyticsClient";
        var commandName = "StartSupportDataExportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartSupportDataExportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartSupportDataExportResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartSupportDataExportCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartSupportDataExportCommand(input, context);
    };
    StartSupportDataExportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartSupportDataExportCommand(output, context);
    };
    return StartSupportDataExportCommand;
}($Command));
export { StartSupportDataExportCommand };
//# sourceMappingURL=StartSupportDataExportCommand.js.map