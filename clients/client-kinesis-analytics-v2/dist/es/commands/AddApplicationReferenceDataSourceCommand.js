import { __extends } from "tslib";
import { AddApplicationReferenceDataSourceRequest, AddApplicationReferenceDataSourceResponse, } from "../models/models_0";
import { deserializeAws_json1_1AddApplicationReferenceDataSourceCommand, serializeAws_json1_1AddApplicationReferenceDataSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p>
 *          <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an
 *       in-application table within your application. In the request, you provide the source (S3
 *       bucket name and object key name), name of the in-application table to create, and the
 *       necessary mapping information that describes how data in an Amazon S3 object maps to columns
 *       in the resulting in-application table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationReferenceDataSourceCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationReferenceDataSourceCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new AddApplicationReferenceDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationReferenceDataSourceCommandInput} for command's `input` shape.
 * @see {@link AddApplicationReferenceDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddApplicationReferenceDataSourceCommand = /** @class */ (function (_super) {
    __extends(AddApplicationReferenceDataSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddApplicationReferenceDataSourceCommand(input) {
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
    AddApplicationReferenceDataSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "AddApplicationReferenceDataSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddApplicationReferenceDataSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddApplicationReferenceDataSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddApplicationReferenceDataSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddApplicationReferenceDataSourceCommand(input, context);
    };
    AddApplicationReferenceDataSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddApplicationReferenceDataSourceCommand(output, context);
    };
    return AddApplicationReferenceDataSourceCommand;
}($Command));
export { AddApplicationReferenceDataSourceCommand };
//# sourceMappingURL=AddApplicationReferenceDataSourceCommand.js.map