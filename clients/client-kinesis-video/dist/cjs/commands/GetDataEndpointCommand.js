"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDataEndpointCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets an endpoint for a specified stream for either reading or writing. Use this
 *             endpoint in your application to read from the specified stream (using the
 *                 <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write
 *             to it (using the <code>PutMedia</code> operation).
 *             </p>
 *         <note>
 *             <p>The returned endpoint does not have the API name appended. The client needs to
 *                 add the API name to the returned endpoint.</p>
 *         </note>
 *
 *         <p>In the request, specify the stream either by <code>StreamName</code> or
 *                 <code>StreamARN</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, GetDataEndpointCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, GetDataEndpointCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new GetDataEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataEndpointCommandInput} for command's `input` shape.
 * @see {@link GetDataEndpointCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetDataEndpointCommand extends smithy_client_1.Command {
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
        const clientName = "KinesisVideoClient";
        const commandName = "GetDataEndpointCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetDataEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetDataEndpointOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetDataEndpointCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetDataEndpointCommand(output, context);
    }
}
exports.GetDataEndpointCommand = GetDataEndpointCommand;
//# sourceMappingURL=GetDataEndpointCommand.js.map