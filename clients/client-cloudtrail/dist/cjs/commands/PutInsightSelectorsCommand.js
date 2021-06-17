"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutInsightSelectorsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lets you enable Insights event logging by specifying the Insights
 *          selectors that you want to enable on an existing trail. You also use
 *          <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types.
 *          In this release, only <code>ApiCallRateInsight</code> is supported as an Insights selector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, PutInsightSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, PutInsightSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new PutInsightSelectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInsightSelectorsCommandInput} for command's `input` shape.
 * @see {@link PutInsightSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutInsightSelectorsCommand extends smithy_client_1.Command {
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
        const clientName = "CloudTrailClient";
        const commandName = "PutInsightSelectorsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutInsightSelectorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutInsightSelectorsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutInsightSelectorsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutInsightSelectorsCommand(output, context);
    }
}
exports.PutInsightSelectorsCommand = PutInsightSelectorsCommand;
//# sourceMappingURL=PutInsightSelectorsCommand.js.map