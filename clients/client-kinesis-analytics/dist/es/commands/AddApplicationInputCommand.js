import { __extends } from "tslib";
import { AddApplicationInputRequest, AddApplicationInputResponse } from "../models/models_0";
import { deserializeAws_json1_1AddApplicationInputCommand, serializeAws_json1_1AddApplicationInputCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>
 *             Adds a streaming source to your Amazon Kinesis application.
 *             For conceptual information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *         </p>
 *         <p>You can add a streaming source either when you create an application or you can use
 *             this operation to add a streaming source after you create an application. For more information, see
 *            <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p>
 *         <p>Any configuration update, including adding a streaming source using this operation,
 *             results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation
 *             to find the current application version.
 *         </p>
 *         <p>This operation requires permissions to perform the
 *             <code>kinesisanalytics:AddApplicationInput</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, AddApplicationInputCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, AddApplicationInputCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new AddApplicationInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationInputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationInputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddApplicationInputCommand = /** @class */ (function (_super) {
    __extends(AddApplicationInputCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddApplicationInputCommand(input) {
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
    AddApplicationInputCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsClient";
        var commandName = "AddApplicationInputCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddApplicationInputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddApplicationInputResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddApplicationInputCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddApplicationInputCommand(input, context);
    };
    AddApplicationInputCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddApplicationInputCommand(output, context);
    };
    return AddApplicationInputCommand;
}($Command));
export { AddApplicationInputCommand };
//# sourceMappingURL=AddApplicationInputCommand.js.map