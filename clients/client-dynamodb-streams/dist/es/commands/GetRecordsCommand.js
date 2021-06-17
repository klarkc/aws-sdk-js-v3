import { __extends } from "tslib";
import { GetRecordsInput, GetRecordsOutput } from "../models/models_0";
import { deserializeAws_json1_0GetRecordsCommand, serializeAws_json1_0GetRecordsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the stream records from a given shard.</p>
 *          <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator
 *       specifies the position in the shard from which you want to start reading stream records
 *       sequentially. If there are no stream records available in the portion of the shard that the
 *       iterator points to, <code>GetRecords</code> returns an empty list. Note that it might take
 *       multiple calls to get to a portion of the shard that contains stream records.</p>
 *          <note>
 *             <p>
 *                <code>GetRecords</code> can retrieve a maximum of 1 MB of data or 1000 stream records,
 *         whichever comes first.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBStreamsClient, GetRecordsCommand } from "@aws-sdk/client-dynamodb-streams"; // ES Modules import
 * // const { DynamoDBStreamsClient, GetRecordsCommand } = require("@aws-sdk/client-dynamodb-streams"); // CommonJS import
 * const client = new DynamoDBStreamsClient(config);
 * const command = new GetRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecordsCommandInput} for command's `input` shape.
 * @see {@link GetRecordsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBStreamsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRecordsCommand = /** @class */ (function (_super) {
    __extends(GetRecordsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRecordsCommand(input) {
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
    GetRecordsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBStreamsClient";
        var commandName = "GetRecordsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRecordsInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetRecordsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRecordsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetRecordsCommand(input, context);
    };
    GetRecordsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetRecordsCommand(output, context);
    };
    return GetRecordsCommand;
}($Command));
export { GetRecordsCommand };
//# sourceMappingURL=GetRecordsCommand.js.map