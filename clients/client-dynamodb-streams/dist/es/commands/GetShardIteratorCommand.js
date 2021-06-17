import { __extends } from "tslib";
import { GetShardIteratorInput, GetShardIteratorOutput } from "../models/models_0";
import { deserializeAws_json1_0GetShardIteratorCommand, serializeAws_json1_0GetShardIteratorCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a shard iterator. A shard iterator provides information
 *       about how to retrieve the stream records from within a shard.  Use
 *       the shard iterator in a subsequent
 *       <code>GetRecords</code> request to read the stream records
 *       from the shard.</p>
 *          <note>
 *             <p>A shard iterator expires 15 minutes after it is returned to the requester.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBStreamsClient, GetShardIteratorCommand } from "@aws-sdk/client-dynamodb-streams"; // ES Modules import
 * // const { DynamoDBStreamsClient, GetShardIteratorCommand } = require("@aws-sdk/client-dynamodb-streams"); // CommonJS import
 * const client = new DynamoDBStreamsClient(config);
 * const command = new GetShardIteratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetShardIteratorCommandInput} for command's `input` shape.
 * @see {@link GetShardIteratorCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBStreamsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetShardIteratorCommand = /** @class */ (function (_super) {
    __extends(GetShardIteratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetShardIteratorCommand(input) {
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
    GetShardIteratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBStreamsClient";
        var commandName = "GetShardIteratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetShardIteratorInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetShardIteratorOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetShardIteratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetShardIteratorCommand(input, context);
    };
    GetShardIteratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetShardIteratorCommand(output, context);
    };
    return GetShardIteratorCommand;
}($Command));
export { GetShardIteratorCommand };
//# sourceMappingURL=GetShardIteratorCommand.js.map