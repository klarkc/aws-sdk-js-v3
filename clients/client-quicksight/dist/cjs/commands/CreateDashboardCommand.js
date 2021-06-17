"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDashboardCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a dashboard from a template. To first create a template, see the <code>
 *                <a>CreateTemplate</a>
 *             </code> API operation.</p>
 *         <p>A dashboard is an entity in QuickSight that identifies QuickSight reports, created
 *             from analyses. You can share QuickSight dashboards. With the right permissions, you can
 *             create scheduled email reports from them. If you have the correct permissions, you can
 *             create a dashboard from a template that exists in a different AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateDashboardCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateDashboardCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDashboardCommandInput} for command's `input` shape.
 * @see {@link CreateDashboardCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateDashboardCommand extends smithy_client_1.Command {
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
        const commandName = "CreateDashboardCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDashboardRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDashboardResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateDashboardCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateDashboardCommand(output, context);
    }
}
exports.CreateDashboardCommand = CreateDashboardCommand;
//# sourceMappingURL=CreateDashboardCommand.js.map