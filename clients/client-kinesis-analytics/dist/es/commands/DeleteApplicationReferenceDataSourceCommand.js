import { __extends } from "tslib";
import { DeleteApplicationReferenceDataSourceRequest, DeleteApplicationReferenceDataSourceResponse, } from "../models/models_0";
import { deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand, serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Deletes a reference data source configuration from the specified application configuration.</p>
 *         <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table
 *             that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation.  </p>
 *
 *         <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code>
 *         action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, DeleteApplicationReferenceDataSourceCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, DeleteApplicationReferenceDataSourceCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new DeleteApplicationReferenceDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationReferenceDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationReferenceDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApplicationReferenceDataSourceCommand = /** @class */ (function (_super) {
    __extends(DeleteApplicationReferenceDataSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApplicationReferenceDataSourceCommand(input) {
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
    DeleteApplicationReferenceDataSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsClient";
        var commandName = "DeleteApplicationReferenceDataSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApplicationReferenceDataSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteApplicationReferenceDataSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApplicationReferenceDataSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand(input, context);
    };
    DeleteApplicationReferenceDataSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand(output, context);
    };
    return DeleteApplicationReferenceDataSourceCommand;
}($Command));
export { DeleteApplicationReferenceDataSourceCommand };
//# sourceMappingURL=DeleteApplicationReferenceDataSourceCommand.js.map