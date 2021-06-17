"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeAccountOverviewCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *    		For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights
 *    		that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeAccountOverviewCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeAccountOverviewCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeAccountOverviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountOverviewCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountOverviewCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeAccountOverviewCommand extends smithy_client_1.Command {
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
        const clientName = "DevOpsGuruClient";
        const commandName = "DescribeAccountOverviewCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeAccountOverviewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeAccountOverviewResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeAccountOverviewCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeAccountOverviewCommand(output, context);
    }
}
exports.DescribeAccountOverviewCommand = DescribeAccountOverviewCommand;
//# sourceMappingURL=DescribeAccountOverviewCommand.js.map