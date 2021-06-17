"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDashboardEmbedUrlCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Generates a session URL and authorization code that you can use to embed an Amazon
 *             QuickSight read-only dashboard in your web server code. Before you use this command,
 *             make sure that you have configured the dashboards and permissions. </p>
 *         <p>Currently, you can use <code>GetDashboardEmbedURL</code> only from the server, not
 *             from the user's browser. The following rules apply to the combination of URL and
 *             authorization code:</p>
 *         <ul>
 *             <li>
 *                 <p>They must be used together.</p>
 *             </li>
 *             <li>
 *                 <p>They can be used one time only.</p>
 *             </li>
 *             <li>
 *                 <p>They are valid for 5 minutes after you run this command.</p>
 *             </li>
 *             <li>
 *                 <p>The resulting user session is valid for 10 hours.</p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html">Embedded Analytics</a> in the <i>Amazon QuickSight User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GetDashboardEmbedUrlCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GetDashboardEmbedUrlCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new GetDashboardEmbedUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDashboardEmbedUrlCommandInput} for command's `input` shape.
 * @see {@link GetDashboardEmbedUrlCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetDashboardEmbedUrlCommand extends smithy_client_1.Command {
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
        const clientName = "QuickSightClient";
        const commandName = "GetDashboardEmbedUrlCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetDashboardEmbedUrlRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetDashboardEmbedUrlResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetDashboardEmbedUrlCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetDashboardEmbedUrlCommand(output, context);
    }
}
exports.GetDashboardEmbedUrlCommand = GetDashboardEmbedUrlCommand;
//# sourceMappingURL=GetDashboardEmbedUrlCommand.js.map