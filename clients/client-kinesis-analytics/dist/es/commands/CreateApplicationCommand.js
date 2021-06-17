import { __extends } from "tslib";
import { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateApplicationCommand, serializeAws_json1_1CreateApplicationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *
 *         <p>
 *             Creates an Amazon Kinesis Analytics application.
 *             You can configure each application with one streaming source as input,
 *             application code to process the input, and up to
 *             three destinations where
 *             you want Amazon Kinesis Analytics to write the output data from your application.
 *             For an overview, see
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>.
 *         </p>
 *         <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a
 *             data element in the streaming source.</p>
 *
 *         <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p>
 *         <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p>
 *         <p>
 *             To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics
 *             needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the
 *             <code>kinesisanalytics:CreateApplication</code> action.
 *         </p>
 *         <p>
 *             For introductory exercises to create an Amazon Kinesis Analytics application, see
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, CreateApplicationCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, CreateApplicationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateApplicationCommand = /** @class */ (function (_super) {
    __extends(CreateApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateApplicationCommand(input) {
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
    CreateApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsClient";
        var commandName = "CreateApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateApplicationCommand(input, context);
    };
    CreateApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateApplicationCommand(output, context);
    };
    return CreateApplicationCommand;
}($Command));
export { CreateApplicationCommand };
//# sourceMappingURL=CreateApplicationCommand.js.map