"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMetricWidgetImageCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of
 * 			one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this
 * 			image into your services and products, such as wiki pages, reports, and documents.
 * 			You could also retrieve images regularly, such as every minute, and create your own
 * 			custom live dashboard.</p>
 *
 * 		       <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math
 * 		and horizontal and vertical annotations.</p>
 *
 * 		       <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>As many as 100 metrics in the graph.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Up to 100 KB uncompressed payload.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricWidgetImageCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricWidgetImageCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new GetMetricWidgetImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMetricWidgetImageCommandInput} for command's `input` shape.
 * @see {@link GetMetricWidgetImageCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetMetricWidgetImageCommand extends smithy_client_1.Command {
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
        const clientName = "CloudWatchClient";
        const commandName = "GetMetricWidgetImageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetMetricWidgetImageInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetMetricWidgetImageOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryGetMetricWidgetImageCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryGetMetricWidgetImageCommand(output, context);
    }
}
exports.GetMetricWidgetImageCommand = GetMetricWidgetImageCommand;
//# sourceMappingURL=GetMetricWidgetImageCommand.js.map