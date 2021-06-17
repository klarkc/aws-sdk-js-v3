"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecordsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class GetRecordsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBStreamsClient";
        const commandName = "GetRecordsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetRecordsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetRecordsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0GetRecordsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0GetRecordsCommand(output, context);
    }
}
exports.GetRecordsCommand = GetRecordsCommand;
//# sourceMappingURL=GetRecordsCommand.js.map