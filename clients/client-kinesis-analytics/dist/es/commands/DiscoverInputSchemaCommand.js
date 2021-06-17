import { __extends } from "tslib";
import { DiscoverInputSchemaRequest, DiscoverInputSchemaResponse } from "../models/models_0";
import { deserializeAws_json1_1DiscoverInputSchemaCommand, serializeAws_json1_1DiscoverInputSchemaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p>
 *         <p>
 *             You can use the inferred schema when configuring a streaming source
 *             for your application. For conceptual information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *             Note that when you create an application using the Amazon Kinesis Analytics console,
 *             the console uses this operation to infer a schema and show it in the console user interface.
 *         </p>
 *         <p>
 *             This operation requires permissions to perform the
 *             <code>kinesisanalytics:DiscoverInputSchema</code> action.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, DiscoverInputSchemaCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, DiscoverInputSchemaCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new DiscoverInputSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DiscoverInputSchemaCommandInput} for command's `input` shape.
 * @see {@link DiscoverInputSchemaCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DiscoverInputSchemaCommand = /** @class */ (function (_super) {
    __extends(DiscoverInputSchemaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DiscoverInputSchemaCommand(input) {
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
    DiscoverInputSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsClient";
        var commandName = "DiscoverInputSchemaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DiscoverInputSchemaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DiscoverInputSchemaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DiscoverInputSchemaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DiscoverInputSchemaCommand(input, context);
    };
    DiscoverInputSchemaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DiscoverInputSchemaCommand(output, context);
    };
    return DiscoverInputSchemaCommand;
}($Command));
export { DiscoverInputSchemaCommand };
//# sourceMappingURL=DiscoverInputSchemaCommand.js.map