"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeEndpointsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>DescribeEndpoints returns a list of available endpoints to make Timestream API calls against.
 *             This API is available through both Write and Query.</p>
 *         <p>Because Timestream’s SDKs are designed to transparently work with the service’s architecture,
 *             including the management and mapping of the service endpoints,
 *             <i>it is not recommended that you use this API unless</i>:</p>
 *         <ul>
 *             <li>
 *                <p>Your application uses a programming language that does not yet have SDK support</p>
 *             </li>
 *             <li>
 *                <p>You require better control over the client-side implementation</p>
 *             </li>
 *          </ul>
 *         <p>For detailed information on how to use DescribeEndpoints,
 *             see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using-API.endpoint-discovery.html">The Endpoint Discovery Pattern and REST APIs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, DescribeEndpointsCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, DescribeEndpointsCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const command = new DescribeEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointsCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeEndpointsCommand extends smithy_client_1.Command {
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
        const clientName = "TimestreamQueryClient";
        const commandName = "DescribeEndpointsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeEndpointsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0DescribeEndpointsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0DescribeEndpointsCommand(output, context);
    }
}
exports.DescribeEndpointsCommand = DescribeEndpointsCommand;
//# sourceMappingURL=DescribeEndpointsCommand.js.map