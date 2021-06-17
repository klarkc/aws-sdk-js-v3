"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutDashboardCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard,
 * 		the entire contents are replaced with what you specify here.</p>
 * 		       <p>All dashboards in your account are global, not region-specific.</p>
 * 		       <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an
 * 			existing dashboard. To copy an existing dashboard using the console, you can load the dashboard
 * 			and then use the View/edit source command in the Actions menu to display the JSON  block
 * 			for that dashboard. Another way to copy a dashboard is to
 * 			use <code>GetDashboard</code>, and then use the data returned
 * 			within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p>
 * 		       <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to
 * 			add a text widget at the top of the dashboard with a message that the dashboard was created by script and should
 * 		not be changed in the console. This message could also point console users to the location
 * 		of the <code>DashboardBody</code> script or the CloudFormation template used to create the
 * 		dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutDashboardCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutDashboardCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDashboardCommandInput} for command's `input` shape.
 * @see {@link PutDashboardCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutDashboardCommand extends smithy_client_1.Command {
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
        const commandName = "PutDashboardCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutDashboardInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutDashboardOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryPutDashboardCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryPutDashboardCommand(output, context);
    }
}
exports.PutDashboardCommand = PutDashboardCommand;
//# sourceMappingURL=PutDashboardCommand.js.map