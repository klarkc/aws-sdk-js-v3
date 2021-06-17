"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEventSelectorsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the settings for the event selectors that you configured for your trail.
 *          The information returned for your event selectors includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>If your event selector includes read-only events, write-only events, or
 *             all events. This applies to both management events and data events.</p>
 *             </li>
 *             <li>
 *                <p>If your event selector includes management events.</p>
 *             </li>
 *             <li>
 *                <p>If your event selector includes data events, the Amazon S3 objects or AWS Lambda functions
 *             that you are logging for data events.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails
 *       </a> in the <i>AWS CloudTrail User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetEventSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetEventSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new GetEventSelectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventSelectorsCommandInput} for command's `input` shape.
 * @see {@link GetEventSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetEventSelectorsCommand extends smithy_client_1.Command {
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
        const commandName = "GetEventSelectorsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetEventSelectorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetEventSelectorsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetEventSelectorsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetEventSelectorsCommand(output, context);
    }
}
exports.GetEventSelectorsCommand = GetEventSelectorsCommand;
//# sourceMappingURL=GetEventSelectorsCommand.js.map